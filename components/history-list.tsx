'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { JobWithAssets } from '@/lib/types';

interface Props {
  jobs: JobWithAssets[];
}

export function HistoryList({ jobs: initialJobs }: Props) {
  const [jobs, setJobs] = useState(initialJobs);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    setDeletingId(id);
    const res = await fetch(`/api/history/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
    setDeletingId(null);
  }

  if (jobs.length === 0) {
    return (
      <div className="card text-center py-12">
        <svg className="mx-auto h-12 w-12 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z" />
        </svg>
        <p className="mt-4 text-sm text-slate-400">No edit history yet.</p>
        <Link href="/" className="button mt-4 inline-block">Create your first edit</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <article key={job.id} className="card group relative overflow-hidden">
          <div className="mb-3 flex gap-2">
            {job.sourceAsset?.url && (
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-800">
                <Image
                  src={job.sourceAsset.url}
                  alt="Source"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {job.resultAsset?.url && (
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-800">
                <Image
                  src={job.resultAsset.url}
                  alt="Result"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <p className="text-sm font-medium text-slate-200 line-clamp-2">{job.prompt.text}</p>

          <div className="mt-2 flex items-center gap-2">
            <span className={`
              inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium
              ${job.status === 'SUCCEEDED' ? 'bg-emerald-900/50 text-emerald-300' : ''}
              ${job.status === 'FAILED' ? 'bg-rose-900/50 text-rose-300' : ''}
              ${job.status === 'RUNNING' ? 'bg-brand/20 text-brand-light' : ''}
              ${job.status === 'QUEUED' ? 'bg-slate-800 text-slate-400' : ''}
              ${job.status === 'CANCELED' ? 'bg-slate-800 text-slate-500' : ''}
            `}>
              {job.status.toLowerCase()}
            </span>
            <span className="text-xs text-slate-500">
              {new Date(job.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Link href={`/result/${job.id}`} className="button text-xs py-1.5 px-3">
              View
            </Link>
            <button
              onClick={() => handleDelete(job.id)}
              disabled={deletingId === job.id}
              className="button-ghost text-xs text-rose-400 hover:text-rose-300"
              aria-label={`Delete edit: ${job.prompt.text}`}
            >
              {deletingId === job.id ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
