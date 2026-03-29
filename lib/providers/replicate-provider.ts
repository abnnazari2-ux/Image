import { ImageEditorProvider, GenerateEditInput, GenerateEditResult } from './image-editor-provider';
import { storageProvider } from '@/lib/storage';

/**
 * Replicate.com image editing provider.
 * Uses the Replicate API to run image editing models.
 *
 * Required env vars:
 *   REPLICATE_API_TOKEN - Your Replicate API token
 *   REPLICATE_MODEL - Model identifier (e.g., "stability-ai/sdxl")
 *
 * This is a reference implementation showing how to integrate a real
 * image editing service. Swap the model and parameters as needed.
 */
export class ReplicateImageEditorProvider implements ImageEditorProvider {
  private apiToken: string;
  private model: string;
  private activeJobs = new Map<string, { cancel: () => void }>();

  constructor() {
    this.apiToken = process.env.REPLICATE_API_TOKEN ?? '';
    this.model = process.env.REPLICATE_MODEL ?? 'stability-ai/sdxl:latest';

    if (!this.apiToken) {
      throw new Error('REPLICATE_API_TOKEN environment variable is required for Replicate provider');
    }
  }

  async generateEdit(input: GenerateEditInput): Promise<GenerateEditResult> {
    const startTime = Date.now();
    const sourceBuffer = await storageProvider.read(input.sourceKey);
    const sourceBase64 = `data:image/png;base64,${sourceBuffer.toString('base64')}`;

    const strengthMap: Record<string, number> = { subtle: 0.3, balanced: 0.6, strong: 0.9 };
    const strength = strengthMap[input.strength] ?? 0.6;

    // Create prediction
    const createResponse = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.model,
        input: {
          image: sourceBase64,
          prompt: input.prompt,
          strength,
          guidance_scale: 7.5,
          num_inference_steps: 30,
        },
      }),
    });

    if (!createResponse.ok) {
      const error = await createResponse.text();
      throw new Error(`Replicate API error: ${error}`);
    }

    const prediction = await createResponse.json();
    const predictionId = prediction.id;

    // Poll for completion
    let result = prediction;
    while (result.status !== 'succeeded' && result.status !== 'failed' && result.status !== 'canceled') {
      await new Promise((r) => setTimeout(r, 1000));
      const pollResponse = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
        headers: { 'Authorization': `Bearer ${this.apiToken}` },
      });
      result = await pollResponse.json();
    }

    if (result.status === 'failed') {
      throw new Error(`Replicate prediction failed: ${result.error ?? 'Unknown error'}`);
    }

    if (result.status === 'canceled') {
      throw new Error('Replicate prediction was canceled');
    }

    // Download the output image
    const outputUrl = Array.isArray(result.output) ? result.output[0] : result.output;
    const imageResponse = await fetch(outputUrl);
    const outputBuffer = Buffer.from(await imageResponse.arrayBuffer());

    return {
      outputBuffer,
      mimeType: 'image/png',
      metrics: {
        provider: 'replicate',
        model: this.model,
        predictionId,
        latencyMs: Date.now() - startTime,
      },
    };
  }

  async getStatus(jobId: string): Promise<{ status: string; progress: number }> {
    const response = await fetch(`https://api.replicate.com/v1/predictions/${jobId}`, {
      headers: { 'Authorization': `Bearer ${this.apiToken}` },
    });
    const data = await response.json();

    const progressMap: Record<string, number> = {
      starting: 10,
      processing: 50,
      succeeded: 100,
      failed: 100,
      canceled: 100,
    };

    return {
      status: data.status,
      progress: progressMap[data.status] ?? 30,
    };
  }

  async cancelJob(jobId: string): Promise<void> {
    await fetch(`https://api.replicate.com/v1/predictions/${jobId}/cancel`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${this.apiToken}` },
    });
    this.activeJobs.delete(jobId);
  }
}
