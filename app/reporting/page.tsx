import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reporting & Financial Storytelling | Inside FP&A',
  description: 'Transform financial data into compelling narratives that drive decisions. Master financial storytelling, executive reporting, and data visualization.',
};

const modules = [
  { num: 1, title: 'Reporting Fundamentals', desc: 'Understand what great financial reporting looks like and why most reports fail to drive action.' },
  { num: 2, title: 'The Financial Storytelling Framework', desc: 'Apply the SCR (Situation, Complication, Resolution) framework to financial narratives.' },
  { num: 3, title: 'Executive Dashboard Design', desc: 'Design KPI dashboards that give leaders the information they need at a glance.' },
  { num: 4, title: 'Data Visualization Best Practices', desc: 'Choose the right charts, use color effectively, and eliminate chart junk that obscures insights.' },
  { num: 5, title: 'Monthly & Quarterly Reporting', desc: 'Build a repeatable monthly reporting package that business partners look forward to receiving.' },
  { num: 6, title: 'Board & Executive Presentations', desc: 'Craft and deliver financial presentations to the C-suite and board of directors with confidence.' },
];

export default function ReportingPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl" />
        </div>
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400 text-sm">Reporting & Storytelling</span>
            </div>
            <span className="text-4xl block mb-4">📋</span>
            <div className="badge-green mb-4">6 Modules · Certificate Included · New</div>
            <h1 className="heading-xl text-white mb-6">
              Reporting &amp;{' '}
              <span className="gradient-text-green">Financial Storytelling</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Turn numbers into stories that move people to act. Learn to design executive dashboards, build compelling monthly reports, and present financial insights with confidence.
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
              <h2 className="heading-lg text-white mb-6">Reporting That Actually Drives Decisions</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Most financial reports are ignored because they present data without telling a story. This course teaches you how to craft reports and presentations that make leaders stop, pay attention, and act.
              </p>
              <ul className="space-y-4">
                {[
                  'Apply the SCR storytelling framework to financial reports',
                  'Design KPI dashboards that communicate at a glance',
                  'Choose the right chart types for every data situation',
                  'Build a monthly reporting package business partners love',
                  'Create board-level presentations with confidence',
                  'Use AI to automate report generation and commentary',
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
                  { label: 'Templates', value: 'Dashboard template + report pack' },
                  { label: 'Case Studies', value: '2 real-world reporting scenarios' },
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">{m.num}</div>
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
          <h2 className="heading-md text-white mb-4">Ready to Master Financial Reporting?</h2>
          <p className="text-slate-400 mb-8">Get this course inside the Inside FP&amp;A Academy — all 6 core courses, templates, and certificates included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy" className="btn-primary">Enroll in the Academy</Link>
            <Link href="/" className="btn-secondary">View All Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
