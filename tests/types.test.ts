import { describe, expect, it } from 'vitest';
import { EXAMPLE_PROMPTS } from '@/lib/types';

describe('types', () => {
  it('EXAMPLE_PROMPTS contains entries', () => {
    expect(EXAMPLE_PROMPTS.length).toBeGreaterThan(0);
  });

  it('EXAMPLE_PROMPTS entries are non-empty strings', () => {
    for (const prompt of EXAMPLE_PROMPTS) {
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(0);
    }
  });
});
