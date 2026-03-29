'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UploadDropzone } from '@/components/upload-dropzone';
import { PromptEditor } from '@/components/prompt-editor';
import { ProgressIndicator } from '@/components/progress-indicator';
import { Strength } from '@/lib/types';

export default function HomePage() {
  const router = useRouter();
  const [preview, setPreview] = useState('');
  const [sourceAssetId, setSourceAssetId] = useState('');
  const [prompt, setPrompt] = useState('');
  const [strength, setStrength] = useState<Strength>('balanced');
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  async function uploadFile(file: File) {
    setError('');
    setPreview(URL.createObjectURL(file));
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Upload failed.');
        setPreview('');
        return;
      }
      setSourceAssetId(data.assetId);
    } catch {
      setError('Upload failed. Please try again.');
      setPreview('');
    } finally {
      setIsUploading(false);
    }
  }

  async function submitEdit() {
    if (!sourceAssetId || !prompt.trim()) return;
    setIsGenerating(true);
    setProgress(15);
    setError('');

    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 15, 90));
    }, 600);

    try {
      const res = await fetch('/api/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sourceAssetId, prompt: prompt.trim(), strength }),
      });
      const data = await res.json();

      clearInterval(progressInterval);

      if (!res.ok) {
        setError(data.error ?? 'Generation failed.');
        setProgress(0);
        return;
      }
      setProgress(100);
      // Brief delay to show 100% before navigating
      setTimeout(() => router.push(`/result/${data.jobId}`), 300);
    } catch {
      clearInterval(progressInterval);
      setError('Generation failed. Please try again.');
      setProgress(0);
    } finally {
      if (!error) {
        // isGenerating will be cleared on navigation
      }
      setIsGenerating(false);
    }
  }

  const canGenerate = !!sourceAssetId && prompt.trim().length >= 3 && !isUploading && !isGenerating;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header card */}
      <div className="card">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Prompt-Based Image Editing</h1>
        <p className="mt-2 text-sm text-slate-400">
          Upload a photo, describe your transformation, and get an AI-edited version in seconds.
        </p>
        <p className="mt-3 rounded-lg bg-amber-900/20 border border-amber-800/30 px-3 py-2 text-xs text-amber-300">
          Please only upload images you have rights and permission to edit.
        </p>
      </div>

      {/* Step 1: Upload */}
      <div>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Step 1</h2>
        <UploadDropzone onFile={uploadFile} isUploading={isUploading} currentPreview={preview} />
      </div>

      {/* Step 2: Prompt */}
      <div>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Step 2</h2>
        <PromptEditor
          prompt={prompt}
          setPrompt={setPrompt}
          strength={strength}
          setStrength={setStrength}
          disabled={isGenerating}
        />
      </div>

      {/* Generate button */}
      <button
        className="button w-full py-3 text-base"
        onClick={submitEdit}
        disabled={!canGenerate}
      >
        {isGenerating ? (
          <>
            <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            Generate Edit
          </>
        )}
      </button>

      {/* Progress */}
      {isGenerating && (
        <ProgressIndicator progress={progress} status="RUNNING" />
      )}

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-rose-800/50 bg-rose-900/20 px-4 py-3 text-sm text-rose-300" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
