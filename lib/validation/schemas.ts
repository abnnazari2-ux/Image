import { z } from 'zod';

export const uploadSchema = z.object({
  fileName: z.string().min(1),
  mimeType: z.enum(['image/jpeg', 'image/png', 'image/webp']),
  size: z.number().int().positive().max(10 * 1024 * 1024),
});

export const editSchema = z.object({
  sourceAssetId: z.string().min(1),
  prompt: z.string().min(3).max(500),
  strength: z.enum(['subtle', 'balanced', 'strong']).default('balanced'),
});
