export type Strength = 'subtle' | 'balanced' | 'strong';
export type JobStatus = 'QUEUED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED';

export interface ImageAsset {
  id: string;
  filename: string;
  mimeType: string;
  sizeBytes: number;
  url: string;
  storageKey: string;
  assetType: 'ORIGINAL' | 'EDITED' | 'THUMBNAIL';
  createdAt: string;
}

export interface EditPrompt {
  id: string;
  text: string;
  strength: Strength;
  createdAt: string;
}

export interface ModerationEvent {
  id: string;
  reason: string;
  blocked: boolean;
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: string;
}

export interface GenerationResult {
  id: string;
  assetId: string;
  createdAt: string;
  metrics?: Record<string, unknown>;
}

export interface ImageJob {
  id: string;
  status: JobStatus;
  progress: number;
  errorMessage?: string;
  createdAt: string;
  updatedAt: string;
  sourceAssetId: string;
  prompt: EditPrompt;
  moderationEvents: ModerationEvent[];
  result?: GenerationResult;
}

export interface JobWithAssets extends ImageJob {
  sourceAsset: ImageAsset;
  resultAsset?: ImageAsset;
}
