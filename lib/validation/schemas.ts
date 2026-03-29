import { z } from 'zod';

export const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const;
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const uploadSchema = z.object({
  fileName: z.string().min(1, 'File name is required'),
  mimeType: z.enum(ALLOWED_MIME_TYPES, {
    errorMap: () => ({ message: 'Only JPEG, PNG, and WebP images are supported' }),
  }),
  size: z.number().int().positive().max(MAX_FILE_SIZE, 'File size must be under 10MB'),
});

export const editSchema = z.object({
  sourceAssetId: z.string().min(1, 'Source asset ID is required'),
  prompt: z.string().min(3, 'Prompt must be at least 3 characters').max(1000, 'Prompt must be under 1000 characters'),
  strength: z.enum(['subtle', 'balanced', 'strong']).default('balanced'),
});

export type UploadInput = z.infer<typeof uploadSchema>;
export type EditInput = z.infer<typeof editSchema>;
