import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { NavDropdown } from '@/components/nav-dropdown';

export const metadata: Metadata = {
  title: 'Inside FP&A | Master Financial Planning & Analysis',
  description: 'Master every part of FP&A with expert-led courses on forecasting, budgeting, financial modeling, reporting, and business partnering. Trusted by professionals at Google, Merck, Lowe\'s, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* ── Announcement Bar ── */}
        <div className="bg-brand text-white text-sm py-2 text-center font-medium">
          🎓 Next Academy cohort starts <strong>February 9, 2026</strong> — Earn your Wharton FP&amp;A Certificate&nbsp;
          <Link href="/academy" className="underline underline-offset-2 hover:opacity-80">Learn more →</Link>
        </div>

        {/* ── Header / Nav ── */}
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-navy-900/95 backdrop-blur-md">
          <nav className="container-main flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Inside <span className="text-blue-400">FP&amp;A</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/academy" className="btn-ghost font-medium">Academy</Link>

              <NavDropdown
                label="Courses"
                items={[
                  { label: 'Forecasting', href: '/forecasting', icon: '📈' },
                  { label: 'Budgeting', href: '/budgeting', icon: '💰' },
                  { label: 'Financial Modeling', href: '/modeling', icon: '📊' },
                  { label: 'Reporting & Storytelling', href: '/reporting', icon: '📋' },
                  { label: 'Business Partnering', href: '/partnering', icon: '🤝' },
                  { label: 'AI for FP&A', href: '/ai', icon: '🤖' },
                ]}
              />

              <Link href="/interview" className="btn-ghost font-medium">Interview Playbook</Link>
              <Link href="/onsite-training" className="btn-ghost font-medium">On-site Training</Link>

              <NavDropdown
                label="Free Resources"
                items={[
                  { label: 'FP&A Newsletter', href: '/newsletter', icon: '📧' },
                  { label: 'Templates Library', href: '/templates', icon: '📁' },
                  { label: 'YouTube Channel', href: '/youtube', icon: '▶️' },
                ]}
              />
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/academy" className="btn-primary">
                Start Learning
              </Link>
            </div>

            {/* Mobile menu button */}
            <MobileMenuButton />
          </nav>
        </header>

        <main>{children}</main>

        {/* ── Footer ── */}
        <footer className="border-t border-slate-800 bg-navy-800 pt-16 pb-8">
          <div className="container-main">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-white">Inside <span className="text-blue-400">FP&amp;A</span></span>
                </Link>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  The #1 platform for mastering Financial Planning &amp; Analysis. Trusted by 1,000+ professionals at world-class companies.
                </p>
                <div className="flex gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-400 transition-colors" aria-label="YouTube">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>

              {/* Courses */}
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Courses</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'FP&A Academy', href: '/academy' },
                    { label: 'Forecasting', href: '/forecasting' },
                    { label: 'Budgeting', href: '/budgeting' },
                    { label: 'Financial Modeling', href: '/modeling' },
                    { label: 'Reporting & Storytelling', href: '/reporting' },
                    { label: 'Business Partnering', href: '/partnering' },
                    { label: 'AI for FP&A', href: '/ai' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Interview Playbook', href: '/interview' },
                    { label: 'On-site Training', href: '/onsite-training' },
                    { label: 'Free Newsletter', href: '/newsletter' },
                    { label: 'Templates Library', href: '/templates' },
                    { label: 'YouTube Channel', href: '/youtube' },
                    { label: 'LinkedIn (100K+ Followers)', href: 'https://linkedin.com' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter signup */}
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Weekly Newsletter</h4>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  Join 30,000+ finance professionals. Get weekly FP&amp;A insights, templates, and career tips.
                </p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="input text-sm py-2.5"
                  />
                  <button type="submit" className="btn-primary text-sm py-2.5 w-full">
                    Subscribe Free
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <p>© 2026 Inside FP&amp;A. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Mobile menu button — client-side toggle handled via CSS only trick
function MobileMenuButton() {
  return (
    <button
      className="lg:hidden btn-ghost p-2"
      aria-label="Open menu"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}
