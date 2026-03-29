import { ModerationEvent } from '@/lib/types';

const blockedTerms = ['non-consensual', 'deepfake', 'exploit', 'abuse'];

export function moderatePrompt(prompt: string): ModerationEvent[] {
  const hits = blockedTerms.filter((term) => prompt.toLowerCase().includes(term));
  if (hits.length === 0) return [];

  return [{
    id: crypto.randomUUID(),
    reason: `Blocked keywords detected: ${hits.join(', ')}`,
    blocked: true,
    severity: 'HIGH',
    createdAt: new Date().toISOString(),
  }];
}
