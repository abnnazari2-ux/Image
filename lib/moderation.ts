import { ModerationEvent } from '@/lib/types';

const blockedTerms = ['non-consensual', 'deepfake'];

export function moderatePrompt(prompt: string): ModerationEvent[] {
  const lower = prompt.toLowerCase();
  const hits = blockedTerms.filter((term) => lower.includes(term));
  if (hits.length === 0) return [];

  return [{
    id: crypto.randomUUID(),
    reason: `Blocked: ${hits.join(', ')}`,
    blocked: true,
    severity: 'HIGH',
    createdAt: new Date().toISOString(),
  }];
}
