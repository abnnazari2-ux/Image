'use client';

import { useRef, useState, useCallback } from 'react';
import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE } from '@/lib/validation/schemas';

interface Props {
  onFile: (file: File) => void;
  isUploading?: boolean;
  currentPreview?: string;
}

export function UploadDropzone({ onFile, isUploading, currentPreview }: Props) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');

  const validateAndEmit = useCallback((file: File) => {
    setError('');
    if (!ALLOWED_MIME_TYPES.includes(file.type as typeof ALLOWED_MIME_TYPES[number])) {
      setError('Please upload a JPEG, PNG, or WebP image.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError('Image must be under 10MB.');
      return;
    }
    onFile(file);
  }, [onFile]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) validateAndEmit(file);
  }, [validateAndEmit]);

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-medium text-slate-200">Upload Image</label>
        <span className="text-xs text-slate-500">PNG, JPG, WebP &middot; Max 10MB</span>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-label="Upload image. Drag and drop or click to browse."
        onClick={() => ref.current?.click()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ref.current?.click(); } }}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        className={`
          relative rounded-lg border-2 border-dashed p-8 text-center transition-all duration-200 cursor-pointer
          ${isDragging
            ? 'border-brand bg-brand/10 scale-[1.01]'
            : currentPreview
              ? 'border-slate-700 hover:border-slate-600'
              : 'border-slate-700 hover:border-brand/50 hover:bg-slate-900/50'
          }
          ${isUploading ? 'pointer-events-none opacity-60' : ''}
        `}
      >
        {isUploading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
            <p className="text-sm text-slate-300">Uploading...</p>
          </div>
        ) : currentPreview ? (
          <div className="flex flex-col items-center gap-3">
            <img
              src={currentPreview}
              alt="Selected image preview"
              className="max-h-64 rounded-lg object-contain"
            />
            <p className="text-xs text-slate-400">Click or drag to replace</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <svg className="h-10 w-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 3 3 0 013.066 4.588A4.5 4.5 0 0118.75 19.5H6.75z" />
            </svg>
            <div>
              <p className="text-sm text-slate-300">
                {isDragging ? 'Drop your image here' : 'Drag & drop an image here'}
              </p>
              <p className="mt-1 text-xs text-slate-500">or click to browse files</p>
            </div>
          </div>
        )}
      </div>

      <input
        ref={ref}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        hidden
        aria-hidden="true"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) validateAndEmit(file);
          e.target.value = '';
        }}
      />

      {error && (
        <p className="mt-2 text-sm text-rose-400" role="alert">{error}</p>
      )}
    </section>
  );
}
