'use client';

interface Props {
  progress: number;
  status: string;
  message?: string;
}

export function ProgressIndicator({ progress, status, message }: Props) {
  const isActive = status === 'RUNNING' || status === 'QUEUED';
  const isFailed = status === 'FAILED';
  const isSuccess = status === 'SUCCEEDED';

  return (
    <div className="card space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isActive && (
            <div className="h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
          )}
          {isSuccess && (
            <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {isFailed && (
            <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          )}
          <span className="text-sm font-medium">
            {isActive && 'Processing your edit...'}
            {isSuccess && 'Edit complete!'}
            {isFailed && 'Edit failed'}
            {status === 'CANCELED' && 'Edit canceled'}
          </span>
        </div>
        <span className="text-xs text-slate-400">{progress}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out
            ${isFailed ? 'bg-rose-500' : isSuccess ? 'bg-emerald-500' : 'bg-brand progress-bar-animated'}
          `}
          style={{ width: `${progress}%` }}
        />
      </div>

      {message && (
        <p className={`text-xs ${isFailed ? 'text-rose-400' : 'text-slate-400'}`}>{message}</p>
      )}

      {isActive && (
        <p className="text-xs text-slate-500 animate-pulse-slow">
          {progress < 30 ? 'Preparing image...' : progress < 70 ? 'Applying transformations...' : 'Finalizing result...'}
        </p>
      )}
    </div>
  );
}
