import { describe, expect, it } from 'vitest';
import { editSchema, uploadSchema } from '@/lib/validation/schemas';

describe('uploadSchema', () => {
  it('accepts valid JPEG upload', () => {
    const result = uploadSchema.safeParse({ fileName: 'photo.jpg', mimeType: 'image/jpeg', size: 5 * 1024 * 1024 });
    expect(result.success).toBe(true);
  });

  it('accepts valid PNG upload', () => {
    const result = uploadSchema.safeParse({ fileName: 'photo.png', mimeType: 'image/png', size: 1024 });
    expect(result.success).toBe(true);
  });

  it('accepts valid WebP upload', () => {
    const result = uploadSchema.safeParse({ fileName: 'photo.webp', mimeType: 'image/webp', size: 2048 });
    expect(result.success).toBe(true);
  });

  it('rejects files exceeding 10MB', () => {
    const result = uploadSchema.safeParse({ fileName: 'a.png', mimeType: 'image/png', size: 20 * 1024 * 1024 });
    expect(result.success).toBe(false);
  });

  it('rejects unsupported MIME types', () => {
    const result = uploadSchema.safeParse({ fileName: 'a.gif', mimeType: 'image/gif', size: 1024 });
    expect(result.success).toBe(false);
  });

  it('rejects zero-size files', () => {
    const result = uploadSchema.safeParse({ fileName: 'a.png', mimeType: 'image/png', size: 0 });
    expect(result.success).toBe(false);
  });

  it('rejects empty file names', () => {
    const result = uploadSchema.safeParse({ fileName: '', mimeType: 'image/png', size: 1024 });
    expect(result.success).toBe(false);
  });

  it('accepts exactly 10MB', () => {
    const result = uploadSchema.safeParse({ fileName: 'big.png', mimeType: 'image/png', size: 10 * 1024 * 1024 });
    expect(result.success).toBe(true);
  });
});

describe('editSchema', () => {
  it('accepts a valid edit payload', () => {
    const result = editSchema.safeParse({ sourceAssetId: 'abc-123', prompt: 'make this cinematic', strength: 'balanced' });
    expect(result.success).toBe(true);
  });

  it('defaults strength to balanced', () => {
    const result = editSchema.safeParse({ sourceAssetId: 'abc', prompt: 'test prompt' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.strength).toBe('balanced');
    }
  });

  it('rejects prompts shorter than 3 characters', () => {
    const result = editSchema.safeParse({ sourceAssetId: 'abc', prompt: 'ab' });
    expect(result.success).toBe(false);
  });

  it('rejects prompts longer than 1000 characters', () => {
    const result = editSchema.safeParse({ sourceAssetId: 'abc', prompt: 'x'.repeat(1001) });
    expect(result.success).toBe(false);
  });

  it('rejects empty sourceAssetId', () => {
    const result = editSchema.safeParse({ sourceAssetId: '', prompt: 'valid prompt' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid strength values', () => {
    const result = editSchema.safeParse({ sourceAssetId: 'abc', prompt: 'valid prompt', strength: 'maximum' });
    expect(result.success).toBe(false);
  });

  it('accepts all valid strength values', () => {
    for (const strength of ['subtle', 'balanced', 'strong']) {
      const result = editSchema.safeParse({ sourceAssetId: 'abc', prompt: 'valid prompt', strength });
      expect(result.success).toBe(true);
    }
  });
});
