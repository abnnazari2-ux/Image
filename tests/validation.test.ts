import { describe, expect, it } from 'vitest';
import { editSchema, uploadSchema } from '@/lib/validation/schemas';

describe('validation', () => {
  it('rejects huge files', () => {
    const result = uploadSchema.safeParse({ fileName: 'a.png', mimeType: 'image/png', size: 20 * 1024 * 1024 });
    expect(result.success).toBe(false);
  });

  it('accepts a valid edit payload', () => {
    const result = editSchema.safeParse({ sourceAssetId: 'abc', prompt: 'make this cinematic', strength: 'balanced' });
    expect(result.success).toBe(true);
  });
});
