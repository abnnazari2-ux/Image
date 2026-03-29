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

export interface EditRequest {
  sourceAssetId: string;
  prompt: string;
  strength: Strength;
}

export interface UploadResponse {
  assetId: string;
  url: string;
}

export interface EditResponse {
  jobId: string;
}

export interface HistoryResponse {
  jobs: JobWithAssets[];
}

export const EXAMPLE_PROMPTS = [
  'Change the outfit to a black leather jacket',
  'Swap the background to a tropical beach at sunset',
  'Make the image look cinematic with golden-hour lighting',
  'Add stylish sunglasses',
  'Remove the background clutter',
  'Change lighting to dramatic studio lighting',
  'Turn this into an oil painting style',
  'Make the colors more vibrant and saturated',
  'Change the season to winter with snow',
  'Add a soft bokeh background blur',
  'Make it look like a vintage 1970s photograph',
  'Change the hair color to platinum blonde',
];
