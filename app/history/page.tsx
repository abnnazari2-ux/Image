import { HistoryList } from '@/components/history-list';
import { dbApi } from '@/lib/db';

export default async function HistoryPage() {
  const jobs = await dbApi.listJobs(30);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Recent edits</h1>
      {jobs.length === 0 ? <p className="text-sm text-slate-400">No edit history yet.</p> : <HistoryList jobs={jobs} />}
    </div>
  );
}
