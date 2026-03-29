import { ImageEditorProvider, GenerateEditInput, GenerateEditResult } from './image-editor-provider';
import { storageProvider } from '@/lib/storage';

export class MockImageEditorProvider implements ImageEditorProvider {
  async generateEdit(input: GenerateEditInput): Promise<GenerateEditResult> {
    const src = await storageProvider.read(input.sourceKey);
    const footer = `\n\nEdited with prompt: ${input.prompt} | intensity=${input.strength}`;
    const merged = Buffer.concat([src, Buffer.from(footer)]);
    await new Promise((r) => setTimeout(r, 1200));
    return { outputBuffer: merged, mimeType: 'image/png', metrics: { provider: 'mock', latencyMs: 1200 } };
  }

  async getStatus(): Promise<{ status: string; progress: number }> {
    return { status: 'RUNNING', progress: 60 };
  }

  async cancelJob(): Promise<void> {
    return;
  }
}
