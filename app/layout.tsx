import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ErrorBoundary } from '@/components/error-boundary';

export const metadata: Metadata = {
  title: 'Image Edit Studio',
  description: 'AI-powered prompt-based image editing. Upload an image and describe your edits.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
          <nav className="container-main flex items-center justify-between py-3 sm:py-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM5 17l3.5-4.5 2.5 3L14.5 11l4.5 6H5z"/>
              </svg>
              <span>Image Edit Studio</span>
            </Link>
            <div className="flex gap-1">
              <Link href="/" className="button-ghost text-sm">
                Create
              </Link>
              <Link href="/history" className="button-ghost text-sm">
                History
              </Link>
            </div>
          </nav>
        </header>
        <main className="container-main min-h-[calc(100vh-64px)]">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <footer className="border-t border-slate-800/50 py-6 text-center text-xs text-slate-600">
          Image Edit Studio &middot; AI-powered image editing
        </footer>
      </body>
    </html>
  );
}
