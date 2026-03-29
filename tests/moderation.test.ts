import { describe, expect, it } from 'vitest';
import { moderatePrompt } from '@/lib/moderation';

describe('moderation', () => {
  it('blocks disallowed keywords', () => {
    const events = moderatePrompt('create a non-consensual deepfake');
    expect(events[0]?.blocked).toBe(true);
  });

  it('allows normal editing prompts', () => {
    const events = moderatePrompt('change background to mountain sunset');
    expect(events.length).toBe(0);
  });
});
