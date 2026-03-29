'use client';

import { useRef } from 'react';

interface Props {
  onFile: (file: File) => void;
}

export function UploadDropzone({ onFile }: Props) {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <section className="card">
      <p className="mb-2 text-sm text-slate-300">Upload an image (PNG, JPG, WEBP up to 10MB)</p>
      <div
        role="button"
        tabIndex={0}
        onClick={() => ref.current?.click()}
        onKeyDown={(e) => e.key === 'Enter' && ref.current?.click()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          if (file) onFile(file);
        }}
        onDragOver={(e) => e.preventDefault()}
        className="rounded-lg border border-dashed border-slate-700 p-8 text-center text-sm text-slate-400"
      >
        Drag & drop image here, or click to browse
      </div>
      <input
        ref={ref}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFile(file);
        }}
      />
    </section>
  );
}
