import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImageCompare } from '@/components/image-compare';
import { dbApi } from '@/lib/db';

export default async function ResultPage({ params }: { params: { id: string } }) {
  const job = await dbApi.getJob(params.id);
  if (!job) return notFound();

  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-xl font-semibold">Result details</h1>
        <p className="text-sm text-slate-300">Prompt: {job.prompt.text}</p>
        <p className="text-sm text-slate-300">Status: {job.status} ({job.progress}%)</p>
        <div className="mt-3 flex gap-2">
          <Link href="/" className="button">Edit again</Link>
          {job.resultAsset && (
            <a href={job.resultAsset.url} download className="rounded-lg border border-slate-600 px-4 py-2 text-sm">Download</a>
          )}
        </div>
      </div>

      {job.resultAsset ? (
        <ImageCompare beforeUrl={job.sourceAsset.url} afterUrl={job.resultAsset.url} />
      ) : (
        <p className="text-sm text-slate-400">No output image yet.</p>
      )}
    </div>
  );
}
