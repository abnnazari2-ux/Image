import { ImageEditorProvider, GenerateEditInput, GenerateEditResult } from './image-editor-provider';
import { storageProvider } from '@/lib/storage';

/**
 * Mock image editor that returns the source image with visible modifications.
 * When sharp is available, applies real image transformations based on the prompt.
 * Falls back to returning the source image with metadata appended.
 */
export class MockImageEditorProvider implements ImageEditorProvider {
  async generateEdit(input: GenerateEditInput): Promise<GenerateEditResult> {
    const src = await storageProvider.read(input.sourceKey);
    const startTime = Date.now();

    // Simulate processing time based on strength
    const delays: Record<string, number> = { subtle: 800, balanced: 1500, strong: 2200 };
    const delay = delays[input.strength] ?? 1500;
    await new Promise((r) => setTimeout(r, delay));

    let outputBuffer: Buffer;
    let mimeType = 'image/png';

    try {
      const sharp = require('sharp');
      const image = sharp(src);
      const metadata = await image.metadata();
      const width = metadata.width ?? 800;
      const height = metadata.height ?? 600;

      // Apply different visual transformations based on prompt keywords
      const promptLower = input.prompt.toLowerCase();
      let pipeline = sharp(src);

      if (promptLower.includes('cinematic') || promptLower.includes('golden') || promptLower.includes('warm')) {
        pipeline = pipeline.modulate({ brightness: 1.1, saturation: 1.3 }).tint({ r: 255, g: 200, b: 120 });
      } else if (promptLower.includes('vintage') || promptLower.includes('retro') || promptLower.includes('1970')) {
        pipeline = pipeline.modulate({ saturation: 0.7, brightness: 1.05 }).tint({ r: 230, g: 210, b: 170 });
      } else if (promptLower.includes('dramatic') || promptLower.includes('contrast') || promptLower.includes('dark')) {
        pipeline = pipeline.modulate({ brightness: 0.9 }).sharpen(2).normalize();
      } else if (promptLower.includes('bright') || promptLower.includes('vibrant') || promptLower.includes('saturated')) {
        pipeline = pipeline.modulate({ brightness: 1.15, saturation: 1.6 });
      } else if (promptLower.includes('blur') || promptLower.includes('bokeh') || promptLower.includes('soft')) {
        pipeline = pipeline.blur(3);
      } else if (promptLower.includes('grayscale') || promptLower.includes('black and white') || promptLower.includes('b&w')) {
        pipeline = pipeline.grayscale();
      } else if (promptLower.includes('painting') || promptLower.includes('art') || promptLower.includes('artistic')) {
        pipeline = pipeline.modulate({ saturation: 1.4 }).sharpen(3).blur(1.5);
      } else if (promptLower.includes('winter') || promptLower.includes('snow') || promptLower.includes('cold')) {
        pipeline = pipeline.modulate({ brightness: 1.1, saturation: 0.8 }).tint({ r: 180, g: 200, b: 255 });
      } else if (promptLower.includes('summer') || promptLower.includes('tropical') || promptLower.includes('beach')) {
        pipeline = pipeline.modulate({ brightness: 1.15, saturation: 1.3 }).tint({ r: 255, g: 220, b: 150 });
      } else {
        // Default: apply a subtle artistic modification
        pipeline = pipeline.modulate({ saturation: 1.2, brightness: 1.05 }).sharpen(1);
      }

      // Add a "MOCK EDIT" watermark overlay to indicate this is a demo
      const svgOverlay = Buffer.from(`
        <svg width="${width}" height="${height}">
          <rect x="${width - 200}" y="${height - 50}" width="190" height="40" rx="8" fill="rgba(124,58,237,0.85)" />
          <text x="${width - 105}" y="${height - 24}" font-family="Arial, sans-serif" font-size="14" font-weight="bold"
                fill="white" text-anchor="middle">MOCK EDIT</text>
        </svg>
      `);

      outputBuffer = await pipeline
        .composite([{ input: svgOverlay, top: 0, left: 0 }])
        .png()
        .toBuffer();
    } catch {
      // sharp not available — return original with metadata appended
      const footer = Buffer.from(`\n[MOCK EDIT] prompt="${input.prompt}" strength=${input.strength}`);
      outputBuffer = Buffer.concat([src, footer]);
    }

    const latencyMs = Date.now() - startTime;
    return {
      outputBuffer,
      mimeType,
      metrics: { provider: 'mock', latencyMs, strength: input.strength },
    };
  }

  async getStatus(_jobId: string): Promise<{ status: string; progress: number }> {
    return { status: 'RUNNING', progress: 60 };
  }

  async cancelJob(_jobId: string): Promise<void> {
    return;
  }
}
