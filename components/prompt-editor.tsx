'use client';

import { Strength } from '@/lib/types';

interface Props {
  prompt: string;
  setPrompt: (value: string) => void;
  strength: Strength;
  setStrength: (value: Strength) => void;
}

export function PromptEditor({ prompt, setPrompt, strength, setStrength }: Props) {
  return (
    <section className="card space-y-3">
      <label htmlFor="prompt" className="text-sm font-medium">Edit prompt</label>
      <textarea
        id="prompt"
        className="input min-h-28"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Examples: change the outfit to a black leather jacket, make this cinematic golden-hour lighting, remove the lamp in the background"
      />
      <div>
        <p className="mb-2 text-sm">Intensity</p>
        <div className="flex gap-2">
          {(['subtle', 'balanced', 'strong'] as Strength[]).map((item) => (
            <button key={item} type="button" className={`rounded-md px-3 py-1 text-sm ${strength === item ? 'bg-brand' : 'bg-slate-800'}`} onClick={() => setStrength(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
