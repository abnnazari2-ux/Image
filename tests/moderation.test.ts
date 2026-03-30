import { describe, expect, it } from 'vitest';
import { moderatePrompt } from '@/lib/moderation';

describe('moderation', () => {
  it('blocks "non-consensual" keyword', () => {
    const events = moderatePrompt('create a non-consensual image');
    expect(events.length).toBe(1);
    expect(events[0].blocked).toBe(true);
    expect(events[0].severity).toBe('HIGH');
  });

  it('blocks "deepfake" keyword', () => {
    const events = moderatePrompt('make a deepfake of someone');
    expect(events.length).toBe(1);
    expect(events[0].blocked).toBe(true);
  });

  it('blocks case-insensitive matches', () => {
    const events = moderatePrompt('Create a DEEPFAKE');
    expect(events.length).toBe(1);
    expect(events[0].blocked).toBe(true);
  });

  it('allows normal editing prompts', () => {
    expect(moderatePrompt('change background to mountain sunset')).toHaveLength(0);
    expect(moderatePrompt('make the outfit look more professional')).toHaveLength(0);
    expect(moderatePrompt('add cinematic lighting')).toHaveLength(0);
    expect(moderatePrompt('turn this into an oil painting')).toHaveLength(0);
  });

  it('allows creative editing prompts', () => {
    expect(moderatePrompt('make me look like a superhero')).toHaveLength(0);
    expect(moderatePrompt('change the style to anime')).toHaveLength(0);
    expect(moderatePrompt('remove the background and add a beach')).toHaveLength(0);
    expect(moderatePrompt('change hair color to blue')).toHaveLength(0);
  });

  it('returns event with proper structure', () => {
    const events = moderatePrompt('non-consensual content');
    expect(events[0]).toHaveProperty('id');
    expect(events[0]).toHaveProperty('reason');
    expect(events[0]).toHaveProperty('blocked');
    expect(events[0]).toHaveProperty('severity');
    expect(events[0]).toHaveProperty('createdAt');
  });
});
