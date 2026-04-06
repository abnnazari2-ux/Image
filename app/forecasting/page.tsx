import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Art & Science of Forecasting | Inside FP&A',
  description: 'Master the T.A.C.T. forecasting framework and financial analysis to identify risks and opportunities with confidence.',
};

const modules = [
  { num: 1, title: 'Forecasting Fundamentals', desc: 'Understand the purpose, types, and key principles of effective financial forecasting.' },
  { num: 2, title: 'The T.A.C.T. Framework', desc: 'Apply the Trend, Assumption, Context, and Triangulation framework to build reliable forecasts.' },
  { num: 3, title: 'Rolling Forecasts', desc: 'Build dynamic rolling forecasts that replace the traditional static annual budget update.' },
  { num: 4, title: 'Variance Analysis', desc: 'Identify and communicate forecast-to-actual variances in a way that drives business decisions.' },
  { num: 5, title: 'Scenario & Sensitivity Analysis', desc: 'Build best-case, base-case, and worst-case scenarios to help leaders plan for uncertainty.' },
  { num: 6, title: 'Forecast Communication', desc: 'Present forecasts to business partners and leadership with clarity and credibility.' },
  { num: 7, title: 'AI-Assisted Forecasting', desc: 'Leverage AI tools to automate data gathering, pattern recognition, and forecast generation.' },
];

export default function ForecastingPage() {
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
              <span className="text-slate-400 text-sm">Forecasting</span>
            </div>
            <span className="text-4xl block mb-4">📈</span>
            <div className="badge-blue mb-4">7 Modules · Certificate Included</div>
            <h1 className="heading-xl text-white mb-6">
              Art &amp; Science of{' '}
              <span className="gradient-text">Forecasting</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Master the T.A.C.T. framework and financial analysis techniques to build accurate forecasts, identify risks and opportunities, and communicate insights that drive business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/academy" className="btn-primary-lg">Enroll Now</Link>
              <Link href="#modules" className="btn-secondary text-lg px-8 py-4">View Modules</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">What You&apos;ll Learn</p>
              <h2 className="heading-lg text-white mb-6">Build Forecasts That Actually Drive Decisions</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                This course goes beyond the basics. You&apos;ll learn not just how to build a forecast, but how to make it credible, communicate it effectively, and use it as a strategic tool for your organization.
              </p>
              <ul className="space-y-4">
                {[
                  'Apply the T.A.C.T. framework to any forecasting situation',
                  'Build dynamic rolling forecasts that replace outdated static updates',
                  'Conduct variance analysis that leads to action',
                  'Create scenario models for best, base, and worst case',
                  'Present forecasts to leadership with confidence',
                  'Use AI tools to automate repetitive forecasting tasks',
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
                  { label: 'Modules', value: '7 modules' },
                  { label: 'Duration', value: '~6 hours' },
                  { label: 'Skill Level', value: 'All levels' },
                  { label: 'Certificate', value: 'Yes, upon completion' },
                  { label: 'Templates', value: 'Forecasting model + variance tracker' },
                  { label: 'Case Studies', value: '3 real-world scenarios' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-slate-800 last:border-0 text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <Link href="/academy" className="btn-primary w-full text-center mt-6">
                Get This Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Curriculum</p>
            <h2 className="heading-lg text-white">7 Modules</h2>
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

      {/* CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-main max-w-2xl text-center">
          <h2 className="heading-md text-white mb-4">Ready to Master Forecasting?</h2>
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
