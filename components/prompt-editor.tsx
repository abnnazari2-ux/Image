'use client';

import { useState, useCallback } from 'react';
import { Strength, EXAMPLE_PROMPTS } from '@/lib/types';

interface Props {
  prompt: string;
  setPrompt: (value: string) => void;
  strength: Strength;
  setStrength: (value: Strength) => void;
  disabled?: boolean;
}

const strengthConfig: { value: Strength; label: string; description: string }[] = [
  { value: 'subtle', label: 'Subtle', description: 'Light touch' },
  { value: 'balanced', label: 'Balanced', description: 'Default' },
  { value: 'strong', label: 'Strong', description: 'Maximum' },
];

export function PromptEditor({ prompt, setPrompt, strength, setStrength, disabled }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const insertPrompt = useCallback((text: string) => {
    setPrompt(text);
    setShowSuggestions(false);
  }, [setPrompt]);

  return (
    <section className="card space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor="prompt" className="text-sm font-medium text-slate-200">Edit Prompt</label>
        <button
          type="button"
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="button-ghost text-xs"
          disabled={disabled}
        >
          {showSuggestions ? 'Hide examples' : 'Show examples'}
        </button>
      </div>

      {showSuggestions && (
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => insertPrompt(example)}
              className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300
                         hover:border-brand/50 hover:text-white transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      )}

      <textarea
        id="prompt"
        className="input min-h-[100px] resize-y"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your edit... e.g., 'Change the outfit to a sleek black suit' or 'Make the background a sunset beach'"
        disabled={disabled}
        maxLength={1000}
        aria-describedby="prompt-hint"
      />
      <div className="flex items-center justify-between">
        <p id="prompt-hint" className="text-xs text-slate-500">
          {prompt.length}/1000 characters
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-slate-300">Edit Intensity</p>
        <div className="grid grid-cols-3 gap-2">
          {strengthConfig.map((item) => (
            <button
              key={item.value}
              type="button"
              disabled={disabled}
              className={`
                rounded-lg px-3 py-2.5 text-center transition-all duration-150
                ${strength === item.value
                  ? 'bg-brand text-white ring-2 ring-brand/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }
              `}
              onClick={() => setStrength(item.value)}
              aria-pressed={strength === item.value}
            >
              <span className="block text-sm font-medium">{item.label}</span>
              <span className="block text-xs opacity-70">{item.description}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
