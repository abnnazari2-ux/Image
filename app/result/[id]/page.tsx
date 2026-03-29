'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ImageCompare } from '@/components/image-compare';
import { ProgressIndicator } from '@/components/progress-indicator';
import { JobWithAssets } from '@/lib/types';

export default function ResultPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [job, setJob] = useState<JobWithAssets | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchJob = useCallback(async () => {
    try {
      const res = await fetch(`/api/job/${params.id}`);
      if (!res.ok) {
        setError('Job not found.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      setJob(data);
      setLoading(false);
    } catch {
      setError('Failed to load job details.');
      setLoading(false);
    }
  }, [params.id]);

  // Initial fetch + polling for incomplete jobs
  useEffect(() => {
    fetchJob();
    const interval = setInterval(() => {
      if (job && (job.status === 'SUCCEEDED' || job.status === 'FAILED' || job.status === 'CANCELED')) {
        clearInterval(interval);
        return;
      }
      fetchJob();
    }, 2000);
    return () => clearInterval(interval);
  }, [fetchJob, job?.status]);

  async function handleRegenerate() {
    if (!job) return;
    try {
      const res = await fetch('/api/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceAssetId: job.sourceAssetId,
          prompt: job.prompt.text,
          strength: job.prompt.strength,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push(`/result/${data.jobId}`);
      }
    } catch {
      setError('Regeneration failed.');
    }
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="card animate-pulse space-y-4 py-12 text-center">
          <div className="h-6 w-6 mx-auto rounded-full border-2 border-brand border-t-transparent animate-spin" />
          <p className="text-sm text-slate-400">Loading result...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="mx-auto max-w-4xl">
        <div className="card text-center py-12">
          <p className="text-sm text-rose-400">{error || 'Job not found.'}</p>
          <Link href="/" className="button mt-4 inline-block">Back to editor</Link>
        </div>
      </div>
    );
  }

  const isComplete = job.status === 'SUCCEEDED';
  const isFailed = job.status === 'FAILED';
  const isProcessing = job.status === 'RUNNING' || job.status === 'QUEUED';

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold">Edit Result</h1>
            <p className="mt-1 text-sm text-slate-400 line-clamp-2">
              &ldquo;{job.prompt.text}&rdquo;
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <span>Intensity: {job.prompt.strength}</span>
              <span>&middot;</span>
              <span>{new Date(job.createdAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress for incomplete jobs */}
      {isProcessing && (
        <ProgressIndicator progress={job.progress} status={job.status} />
      )}

      {isFailed && (
        <div className="card border-rose-800/30">
          <ProgressIndicator progress={100} status="FAILED" message={job.errorMessage ?? 'The edit failed. Please try again.'} />
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        <Link href="/" className="button-secondary">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Edit
        </Link>
        <button onClick={handleRegenerate} className="button-secondary" disabled={isProcessing}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
          </svg>
          Regenerate
        </button>
        {isComplete && job.resultAsset && (
          <a
            href={job.resultAsset.url}
            download={`edited-${job.id}.png`}
            className="button"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download
          </a>
        )}
      </div>

      {/* Before/After comparison */}
      {isComplete && job.resultAsset ? (
        <ImageCompare
          beforeUrl={job.sourceAsset.url}
          afterUrl={job.resultAsset.url}
        />
      ) : !isProcessing && !isFailed ? (
        <p className="card text-sm text-slate-400 text-center py-8">No output image available.</p>
      ) : null}

      {/* Metrics */}
      {isComplete && job.result?.metrics && (
        <div className="card">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Generation Info</h3>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            {Object.entries(job.result.metrics).map(([key, value]) => (
              <div key={key}>
                <span className="text-slate-500">{key}: </span>
                <span className="text-slate-300">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
