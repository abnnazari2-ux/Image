import { Strength } from '@/lib/types';

export interface GenerateEditInput {
  sourceKey: string;
  prompt: string;
  strength: Strength;
}

export interface GenerateEditResult {
  outputBuffer: Buffer;
  mimeType: string;
  metrics?: Record<string, unknown>;
}

export interface ImageEditorProvider {
  generateEdit(input: GenerateEditInput): Promise<GenerateEditResult>;
  getStatus(jobId: string): Promise<{ status: string; progress: number }>;
  cancelJob(jobId: string): Promise<void>;
}
