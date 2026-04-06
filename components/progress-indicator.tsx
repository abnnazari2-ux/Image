'use client';

interface ProgressIndicatorProps {
  progress: number;
  status: string;
  message?: string;
}

export function ProgressIndicator({ progress, status, message }: ProgressIndicatorProps) {
  const isFailed = status === 'FAILED';

  return (
    <div className={`rounded-lg border p-4 ${isFailed ? 'border-rose-800/50 bg-rose-900/20' : 'border-slate-700 bg-slate-900/70'}`}>
      {message && (
        <p className={`text-sm mb-3 ${isFailed ? 'text-rose-300' : 'text-slate-300'}`}>{message}</p>
      )}
      {!isFailed && (
        <>
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>{status === 'RUNNING' ? 'Processing...' : status}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-brand transition-all duration-300 progress-bar-animated"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
