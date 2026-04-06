import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FP&A Interview Playbook | Inside FP&A',
  description: 'Everything you need to land your dream FP&A role. Resume templates, case study practice, and 100+ interview questions with detailed answers.',
};

const sections = [
  { icon: '📄', title: 'Resume & LinkedIn', desc: 'FP&A-specific resume templates and LinkedIn optimization to get more calls from recruiters and hiring managers.' },
  { icon: '📊', title: 'Case Study Practice', desc: 'Realistic FP&A case studies that mirror real interview exercises, complete with detailed solution walkthroughs.' },
  { icon: '💬', title: '100+ Interview Questions', desc: 'Technical and behavioral questions with expert-written answers covering every topic you\'ll face in an FP&A interview.' },
  { icon: '🎯', title: 'Interview Strategy', desc: 'How to research companies, frame your answers using STAR, and stand out from other candidates.' },
  { icon: '💰', title: 'Salary Negotiation', desc: 'Proven scripts and tactics for negotiating your compensation package confidently and effectively.' },
  { icon: '🤝', title: 'Offer Evaluation', desc: 'How to evaluate and compare job offers beyond base salary to make the right long-term career move.' },
];

const questionCategories = [
  { category: 'Technical FP&A', count: '35+', examples: ['Walk me through a budget process', 'How do you build a rolling forecast?', 'What is variance analysis?'] },
  { category: 'Financial Modeling', count: '20+', examples: ['Build a 3-statement model', 'Walk me through a DCF', 'Sensitivity analysis use cases'] },
  { category: 'Behavioral / Situational', count: '30+', examples: ['Tell me about a time you influenced without authority', 'Describe a complex analysis you presented'] },
  { category: 'Case Studies', count: '15+', examples: ['Revenue bridge analysis', 'Cost reduction opportunity', 'Investment decision model'] },
];

export default function InterviewPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400 text-sm">Interview Playbook</span>
            </div>
            <span className="text-4xl block mb-4">🎯</span>
            <div className="badge-blue mb-4">Complete Interview Preparation System</div>
            <h1 className="heading-xl text-white mb-6">
              FP&amp;A{' '}
              <span className="gradient-text">Interview Playbook</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The most comprehensive FP&amp;A interview preparation system available. Resume templates, 100+ interview questions, real case studies, and negotiation scripts — everything you need to land your dream role.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#pricing" className="btn-primary-lg">Get the Playbook</Link>
              <Link href="#whats-included" className="btn-secondary text-lg px-8 py-4">See What&apos;s Inside</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="whats-included" className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What&apos;s Included</p>
            <h2 className="heading-lg text-white">Everything You Need to Land Your Dream FP&amp;A Role</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="card">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question categories */}
      <section className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Interview Questions</p>
            <h2 className="heading-lg text-white">100+ Questions Across 4 Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {questionCategories.map((cat) => (
              <div key={cat.category} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white">{cat.category}</h3>
                  <span className="badge-blue">{cat.count} questions</span>
                </div>
                <ul className="space-y-2">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-blue-400 flex-shrink-0 mt-0.5">›</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Pricing</p>
            <h2 className="heading-lg text-white">Get the Playbook</h2>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-2">FP&A Interview Playbook</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$197</span>
                <span className="text-slate-500 text-sm ml-2">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  '100+ interview questions with answers',
                  'Technical FP&A question bank',
                  'Behavioral question library',
                  '15 real case study exercises',
                  'FP&A resume templates',
                  'LinkedIn optimization guide',
                  'Salary negotiation scripts',
                  'Lifetime access & updates',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-primary w-full text-center text-lg py-4">
                Get the Interview Playbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-navy-800/40">
        <div className="container-main max-w-2xl text-center">
          <h2 className="heading-md text-white mb-4">Want the Full FP&amp;A Skill Set?</h2>
          <p className="text-slate-400 mb-8">Pair the Interview Playbook with the Inside FP&amp;A Academy to not just land the job — but crush it once you&apos;re in the role.</p>
          <Link href="/academy" className="btn-primary">Explore the Academy</Link>
        </div>
      </section>
    </>
  );
}
