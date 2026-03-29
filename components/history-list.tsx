import Link from 'next/link';
import { JobWithAssets } from '@/lib/types';

export function HistoryList({ jobs }: { jobs: JobWithAssets[] }) {
  return (
    <div className="space-y-3">
      {jobs.map((job) => (
        <article key={job.id} className="card flex items-center justify-between">
          <div>
            <p className="font-medium">{job.prompt.text}</p>
            <p className="text-xs text-slate-400">{new Date(job.createdAt).toLocaleString()} · {job.status}</p>
          </div>
          <Link href={`/result/${job.id}`} className="button">Open</Link>
        </article>
      ))}
    </div>
  );
}
