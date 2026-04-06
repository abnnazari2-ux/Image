import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budgeting Process A-Z | Inside FP&A',
  description: 'Master the full annual planning and budgeting cycle from goal-setting to final budget approval.',
};

const modules = [
  { num: 1, title: 'Budgeting Fundamentals', desc: 'Understand the purpose of budgeting, key terminology, and how budgeting fits into the overall FP&A calendar.' },
  { num: 2, title: 'Goal-Setting & Target Alignment', desc: 'Translate company strategy into financial targets and align budget owners to organizational goals.' },
  { num: 3, title: 'Building the Budget Model', desc: 'Construct a comprehensive P&L, balance sheet, and cash flow budget model from scratch.' },
  { num: 4, title: 'Stakeholder Management', desc: 'Navigate budget negotiations, manage pushback, and get cross-functional alignment.' },
  { num: 5, title: 'Budget Consolidation & Review', desc: 'Consolidate submissions, identify gaps, and prepare executive review packages.' },
  { num: 6, title: 'In-Year Budget Management', desc: 'Track performance against budget, manage reforecasts, and communicate in-year variances.' },
];

export default function BudgetingPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />
        </div>
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400 text-sm">Budgeting</span>
            </div>
            <span className="text-4xl block mb-4">💰</span>
            <div className="badge-blue mb-4">6 Modules · Certificate Included</div>
            <h1 className="heading-xl text-white mb-6">
              Budgeting Process{' '}
              <span className="gradient-text">A–Z</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Your complete guide to navigating the full annual planning cycle — from translating strategy into targets, to building the model, aligning stakeholders, and presenting the final budget to leadership.
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
              <h2 className="heading-lg text-white mb-6">Own the Entire Budgeting Process</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                The annual budget process is one of the most high-stakes activities in FP&amp;A. This course gives you a complete playbook — from kicking off the process to presenting the final budget to leadership.
              </p>
              <ul className="space-y-4">
                {[
                  'Structure and manage the full annual planning timeline',
                  'Translate strategic goals into financial targets',
                  'Build a comprehensive budget model (P&L, BS, CF)',
                  'Navigate difficult budget negotiations with business partners',
                  'Consolidate submissions and prepare executive packages',
                  'Manage in-year budget vs. actuals tracking',
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
                  { label: 'Modules', value: '6 modules' },
                  { label: 'Duration', value: '~5 hours' },
                  { label: 'Skill Level', value: 'All levels' },
                  { label: 'Certificate', value: 'Yes, upon completion' },
                  { label: 'Templates', value: 'Budget model + timeline tracker' },
                  { label: 'Case Studies', value: '2 real-world scenarios' },
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
            <h2 className="heading-lg text-white">6 Modules</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {modules.map((m) => (
              <div key={m.num} className="card flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-blue-500/40 bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                  {m.num}
                </div>
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
          <h2 className="heading-md text-white mb-4">Ready to Master Budgeting?</h2>
          <p className="text-slate-400 mb-8">Get this course as part of the Inside FP&amp;A Academy — along with 5 other core courses, templates, and certificates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy" className="btn-primary">Enroll in the Academy</Link>
            <Link href="/" className="btn-secondary">View All Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
