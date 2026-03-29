'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UploadDropzone } from '@/components/upload-dropzone';
import { PromptEditor } from '@/components/prompt-editor';
import { Strength } from '@/lib/types';

export default function HomePage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [sourceAssetId, setSourceAssetId] = useState<string>('');
  const [prompt, setPrompt] = useState('');
  const [strength, setStrength] = useState<Strength>('balanced');
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');

  async function uploadFile(nextFile: File) {
    setMessage('');
    if (nextFile.size > 10 * 1024 * 1024) {
      setMessage('Image is too large (10MB max).');
      return;
    }
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', nextFile);
    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await res.json();
    setIsUploading(false);

    if (!res.ok) {
      setMessage(data.error ?? 'Upload failed.');
      return;
    }
    setSourceAssetId(data.assetId);
  }

  async function submitEdit() {
    if (!sourceAssetId || !prompt) return;
    setIsGenerating(true);
    setMessage('');
    const res = await fetch('/api/edit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sourceAssetId, prompt, strength }),
    });
    const data = await res.json();
    setIsGenerating(false);
    if (!res.ok) {
      setMessage(data.error ?? 'Generation failed.');
      return;
    }
    router.push(`/result/${data.jobId}`);
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <h1 className="text-2xl font-semibold">Prompt-based Image Editing</h1>
        <p className="mt-2 text-sm text-slate-300">Upload a photo, type your transformation request, and generate an edited version.</p>
        <p className="mt-2 text-xs text-amber-300">Only upload images you have rights and permission to edit.</p>
      </div>

      <UploadDropzone onFile={uploadFile} />

      {preview && (
        <section className="card">
          <p className="mb-2 text-sm">Image preview</p>
          <Image src={preview} alt="Upload preview" width={640} height={640} className="h-auto w-full rounded-lg" />
        </section>
      )}

      <PromptEditor prompt={prompt} setPrompt={setPrompt} strength={strength} setStrength={setStrength} />

      <button className="button" onClick={submitEdit} disabled={!sourceAssetId || !prompt || isUploading || isGenerating}>
        {isGenerating ? 'Generating...' : isUploading ? 'Uploading...' : 'Generate'}
      </button>

      {message && <p className="text-sm text-rose-300">{message}</p>}
      {isGenerating && <p className="text-sm text-slate-300">Processing edit… this usually takes a few seconds.</p>}
      {file && <p className="text-xs text-slate-500">Selected file: {file.name}</p>}
    </div>
  );
}
