import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Modeling | Inside FP&A',
  description: 'Build error-free financial models that help leaders evaluate investment decisions with confidence.',
};

const modules = [
  { num: 1, title: 'Financial Modeling Fundamentals', desc: 'Learn the core principles of financial modeling — structure, layout, best practices, and common pitfalls to avoid.' },
  { num: 2, title: 'Selecting the Right Model', desc: 'Choose the appropriate model type (DCF, LBO, scenario model, driver-based) for each business case.' },
  { num: 3, title: 'Gathering & Organizing Data', desc: 'Source, validate, and structure financial and operational data to feed your models reliably.' },
  { num: 4, title: 'Building & Stress-Testing Models', desc: 'Construct robust models with built-in checks, error flags, and sensitivity analysis capabilities.' },
  { num: 5, title: 'Presenting Your Model', desc: 'Translate model outputs into executive-ready summaries and compelling investment recommendations.' },
];

export default function ModelingPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400 text-sm">Financial Modeling</span>
            </div>
            <span className="text-4xl block mb-4">📊</span>
            <div className="badge-blue mb-4">5 Modules · Certificate Included</div>
            <h1 className="heading-xl text-white mb-6">
              Financial{' '}
              <span className="gradient-text">Modeling</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Build error-free financial models that give leaders confidence in their investment decisions. Learn to structure, stress-test, and present models that actually get used.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/academy" className="btn-primary-lg">Enroll Now</Link>
              <Link href="#modules" className="btn-secondary text-lg px-8 py-4">View Modules</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">What You&apos;ll Learn</p>
              <h2 className="heading-lg text-white mb-6">Build Models That Drive Real Decisions</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Financial models are only valuable if they&apos;re trusted. This course teaches you how to build models that are structurally sound, easy to audit, and communicate clearly to business leaders.
              </p>
              <ul className="space-y-4">
                {[
                  'Apply financial modeling best practices from day one',
                  'Select the right model type for every business case',
                  'Gather and validate data from multiple sources',
                  'Build error-free models with self-checking mechanisms',
                  'Run sensitivity and scenario analysis',
                  'Present model outputs to non-finance stakeholders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-white mb-4">Course Details</h3>
              <div className="space-y-3">
                {[
                  { label: 'Modules', value: '5 modules' },
                  { label: 'Duration', value: '~5 hours' },
                  { label: 'Skill Level', value: 'Beginner to Intermediate' },
                  { label: 'Certificate', value: 'Yes, upon completion' },
                  { label: 'Templates', value: 'Driver-based model + DCF template' },
                  { label: 'Case Studies', value: '2 real-world business cases' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-slate-800 last:border-0 text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/academy" className="btn-primary w-full text-center mt-6">Get This Course</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Curriculum</p>
            <h2 className="heading-lg text-white">5 Modules</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {modules.map((m) => (
              <div key={m.num} className="card flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-blue-500/40 bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">{m.num}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{m.title}</h3>
                  <p className="text-slate-400 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-navy-900">
        <div className="container-main max-w-2xl text-center">
          <h2 className="heading-md text-white mb-4">Ready to Master Financial Modeling?</h2>
          <p className="text-slate-400 mb-8">Get this course inside the Inside FP&amp;A Academy — bundled with all 6 core courses, templates, and certificates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy" className="btn-primary">Enroll in the Academy</Link>
            <Link href="/" className="btn-secondary">View All Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
