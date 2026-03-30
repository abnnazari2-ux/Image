'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageCompare({ beforeUrl, afterUrl, beforeLabel = 'Before', afterLabel = 'After' }: Props) {
  const [mode, setMode] = useState<'slider' | 'side'>('slider');
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  }, [updateSlider]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  }, [updateSlider]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Keyboard accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 2));
    if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 2));
  }, []);

  if (mode === 'side') {
    return (
      <div>
        <div className="mb-3 flex gap-2">
          <button onClick={() => setMode('slider')} className="button-ghost text-xs">Slider view</button>
          <button onClick={() => setMode('side')} className="button-ghost text-xs font-bold underline">Side by side</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <p className="mb-2 text-sm font-medium text-slate-400">{beforeLabel}</p>
            <Image src={beforeUrl} alt="Before edit" width={640} height={640} className="h-auto w-full rounded-lg" />
          </div>
          <div className="card">
            <p className="mb-2 text-sm font-medium text-slate-400">{afterLabel}</p>
            <Image src={afterUrl} alt="After edit" width={640} height={640} className="h-auto w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex gap-2">
        <button onClick={() => setMode('slider')} className="button-ghost text-xs font-bold underline">Slider view</button>
        <button onClick={() => setMode('side')} className="button-ghost text-xs">Side by side</button>
      </div>
      <div
        ref={containerRef}
        className="comparison-container rounded-xl overflow-hidden card p-0"
        role="slider"
        aria-label="Image comparison slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        {/* After image (full) */}
        <div className="relative w-full">
          <Image src={afterUrl} alt="After edit" width={1280} height={1280} className="block h-auto w-full" />
          <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">{afterLabel}</span>
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <Image
            src={beforeUrl}
            alt="Before edit"
            width={1280}
            height={1280}
            className="block h-auto min-w-full"
            style={{ width: containerRef.current?.offsetWidth ?? '100%' }}
          />
          <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">{beforeLabel}</span>
        </div>

        {/* Slider divider line */}
        <div className="comparison-divider" style={{ left: `${sliderPos}%` }}>
          <div className="comparison-handle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3L2 8L5 13" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M11 3L14 8L11 13" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
