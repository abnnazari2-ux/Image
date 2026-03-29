import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <nav className="container-main flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-semibold">Image Edit Studio</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/">Create</Link>
              <Link href="/history">History</Link>
            </div>
          </nav>
        </header>
        <main className="container-main">{children}</main>
      </body>
    </html>
  );
}
