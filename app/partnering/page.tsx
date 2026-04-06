import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Business Partnering | Inside FP&A',
  description: 'Build influence, develop business acumen, and become a trusted strategic advisor to your organization\'s leaders.',
};

const modules = [
  { num: 1, title: 'The Finance Business Partner Role', desc: 'Understand what business partnering means, how to define your value, and how to set yourself up for success.' },
  { num: 2, title: 'Building Relationships That Drive Impact', desc: 'Develop trust with business leaders, build your credibility, and create a network of internal advocates.' },
  { num: 3, title: 'Developing Business Acumen', desc: 'Go beyond the numbers — understand how the business works, what drives revenue, and how decisions are made.' },
  { num: 4, title: 'Adding Value Through Coaching', desc: 'Shift from reporting history to coaching business partners on the financial implications of their decisions.' },
  { num: 5, title: 'Raising Accountability', desc: 'Hold business partners accountable to financial commitments without damaging relationships.' },
  { num: 6, title: 'Influencing Cross-Functional Partners', desc: 'Drive alignment and influence decisions across sales, operations, marketing, and HR without direct authority.' },
];

export default function PartneringPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400 text-sm">Business Partnering</span>
            </div>
            <span className="text-4xl block mb-4">🤝</span>
            <div className="badge-blue mb-4">6 Modules · Certificate Included</div>
            <h1 className="heading-xl text-white mb-6">
              Finance{' '}
              <span className="gradient-text">Business Partnering</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Stop being an order-taker and become a strategic advisor. Learn to build relationships, develop business acumen, and influence decisions across your organization — without direct authority.
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
              <h2 className="heading-lg text-white mb-6">Become an Indispensable Business Partner</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Technical skills get you in the room. Partnering skills keep you there. This course teaches the interpersonal and strategic skills that separate good FP&amp;A professionals from great ones.
              </p>
              <ul className="space-y-4">
                {[
                  'Define and communicate your value as a finance business partner',
                  'Build trust with business leaders across functions',
                  'Develop genuine business acumen beyond the numbers',
                  'Coach business partners to make better financial decisions',
                  'Hold partners accountable without damaging relationships',
                  'Influence cross-functional alignment and drive decisions',
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
                  { label: 'Templates', value: 'Partnership framework + stakeholder map' },
                  { label: 'Case Studies', value: '2 real-world partnering scenarios' },
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
          <h2 className="heading-md text-white mb-4">Ready to Become a Strategic Business Partner?</h2>
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
