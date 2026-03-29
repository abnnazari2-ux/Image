import { HistoryList } from '@/components/history-list';
import { dbApi } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function HistoryPage() {
  const jobs = await dbApi.listJobs(30);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Edit History</h1>
          <p className="mt-1 text-sm text-slate-400">
            {jobs.length > 0 ? `${jobs.length} recent edit${jobs.length === 1 ? '' : 's'}` : 'No edits yet'}
          </p>
        </div>
      </div>
      <HistoryList jobs={jobs} />
    </div>
  );
}
