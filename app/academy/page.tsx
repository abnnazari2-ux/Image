import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FP&A Academy | Inside FP&A',
  description: 'The complete FP&A mastery system. 35+ hours of expert-led curriculum covering all 6 core pillars of Financial Planning & Analysis.',
};

const pillars = [
  { icon: '📈', title: 'Forecasting', modules: 7, href: '/forecasting', description: 'Master the T.A.C.T. framework and financial analysis for identifying risks and opportunities.' },
  { icon: '💰', title: 'Budgeting', modules: 6, href: '/budgeting', description: 'Navigate the full annual planning cycle from goal-setting to final budget approval.' },
  { icon: '📊', title: 'Financial Modeling', modules: 5, href: '/modeling', description: 'Build error-free models that help leaders evaluate investment decisions.' },
  { icon: '📋', title: 'Reporting & Storytelling', modules: 6, href: '/reporting', description: 'Transform numbers into narratives that drive action across the business.' },
  { icon: '🤝', title: 'Business Partnering', modules: 6, href: '/partnering', description: 'Build influence and become a trusted strategic advisor to leadership.' },
  { icon: '🔍', title: 'Financial Analysis', modules: 5, href: '/forecasting', description: 'Identify business trends and translate data into decision-ready insights.' },
];

const weeklyPlan = [
  { week: 'Week 1–2', topic: 'Forecasting Fundamentals', description: 'Build rolling forecasts, variance analysis, and the T.A.C.T. framework.' },
  { week: 'Week 3–4', topic: 'Budgeting & Annual Planning', description: 'Master the full budgeting cycle, stakeholder alignment, and goal-setting.' },
  { week: 'Week 5–6', topic: 'Financial Modeling & Analysis', description: 'Build robust models, run scenario analysis, and present findings.' },
  { week: 'Week 7–8', topic: 'Reporting & Business Partnering', description: 'Tell financial stories that influence decisions and build strategic relationships.' },
];

const faqs = [
  {
    q: 'How long does the Academy take?',
    a: 'The self-paced Academy is designed to be completed in 4 weeks at 8–10 hours/week. You can go faster or slower based on your schedule.',
  },
  {
    q: 'What is the Wharton Cohort Program?',
    a: 'The Wharton Cohort is an 8-week live program that earns you a Wharton Online certificate. It runs with a cohort of peers and includes live office hours. Tuition is $4,800.',
  },
  {
    q: 'Do I get certificates?',
    a: 'Yes. You earn a certificate for each of the 6 core pillars of FP&A you complete. The Wharton Cohort also includes a globally recognized Wharton Online certificate.',
  },
  {
    q: 'Is this for beginners or experienced professionals?',
    a: 'Both. The Academy starts with the fundamentals and progressively builds to advanced concepts. Whether you\'re transitioning into FP&A or leveling up, it\'s designed for you.',
  },
  {
    q: 'What if I only want to learn one topic?',
    a: 'You can purchase individual courses for Forecasting, Budgeting, Modeling, Reporting, or Business Partnering separately. The Academy gives you all of them bundled together.',
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan-600/10 blur-3xl" />
        </div>
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="badge-blue mb-6">🎓 Inside FP&A Academy</div>
            <h1 className="heading-xl text-white mb-6">
              The Complete{' '}
              <span className="gradient-text">FP&amp;A Mastery</span>{' '}
              System
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A fully guided, end-to-end curriculum covering all 6 core pillars of FP&A. Close every career gap — from technical skills like modeling and forecasting to interpersonal skills like business partnering.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="badge-green">✓ 35+ Hour Curriculum</div>
              <div className="badge-blue">✓ 6 Pillar Certificates</div>
              <div className="badge-teal">✓ Expert Q&A Access</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#pricing" className="btn-primary-lg">
                Enroll in the Academy
              </Link>
              <Link href="#curriculum" className="btn-secondary text-lg px-8 py-4">
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-800 bg-navy-800/50 py-10">
        <div className="container-main grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '35h+', label: 'Total Curriculum' },
            { value: '1,000+', label: 'Students Trained' },
            { value: '6', label: 'Core Pillars' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What&apos;s Included</p>
            <h2 className="heading-lg text-white">Everything You Need to Master FP&amp;A</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎥', title: 'Bite-Sized Video Lessons', desc: 'Professionally recorded, self-paced lessons you can complete in 8–10 hours/week.' },
              { icon: '📁', title: 'Plug-and-Play Templates', desc: 'Download and immediately use in your job — forecasting models, budgeting tools, report templates.' },
              { icon: '📚', title: 'Real-World Case Studies', desc: 'Practice with realistic scenarios and review detailed solution walkthroughs.' },
              { icon: '💬', title: 'Expert Q&A Access', desc: 'Ask Christian Wattig or the TA team anything and get prompt, detailed replies.' },
              { icon: '🏆', title: '6 Pillar Certificates', desc: 'Earn a certificate for each of the 6 core FP&A pillars to showcase on your resume and LinkedIn.' },
              { icon: '🔄', title: 'Lifetime Updates', desc: 'The curriculum evolves with the profession — including new AI modules and best practices.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Curriculum</p>
            <h2 className="heading-lg text-white mb-4">6 Core Pillars of FP&amp;A</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Each pillar has its own course with dedicated modules, templates, and a completion certificate.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pillars.map((p) => (
              <Link key={p.href + p.title} href={p.href} className="card-hover flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="text-xs text-slate-500 flex items-center justify-between pt-3 border-t border-slate-800">
                  <span>{p.modules} modules</span>
                  <span className="text-blue-400">View course →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Weekly plan */}
          <div className="rounded-2xl border border-slate-800 bg-navy-800 p-8">
            <h3 className="heading-md text-white mb-6">Sample 8-Week Learning Path</h3>
            <div className="space-y-4">
              {weeklyPlan.map((item) => (
                <div key={item.week} className="flex items-start gap-4 p-4 rounded-xl border border-slate-700 hover:border-blue-500/40 transition-colors">
                  <div className="flex-shrink-0 w-24 text-xs font-semibold text-blue-400 pt-0.5">{item.week}</div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.topic}</div>
                    <div className="text-slate-400 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Pricing</p>
            <h2 className="heading-lg text-white">Choose Your Path</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Self-paced */}
            <div className="card flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Self-Paced Academy</h3>
                <p className="text-slate-400 text-sm">Complete the curriculum on your own schedule</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$997</span>
                <span className="text-slate-500 text-sm ml-2">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  '35+ hours of curriculum',
                  '6 pillar courses included',
                  'All templates & frameworks',
                  'Real-world case studies',
                  '6 completion certificates',
                  'Lifetime access & updates',
                  'Community forum access',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-secondary w-full text-center">
                Enroll Now
              </Link>
            </div>

            {/* Wharton Cohort */}
            <div className="relative rounded-2xl border-2 border-blue-500/50 bg-gradient-to-br from-navy-800 to-navy-700 p-6 sm:p-8 flex flex-col">
              <div className="absolute -top-3 left-6">
                <span className="badge-blue">⭐ Most Popular</span>
              </div>
              <div className="mb-6 pt-2">
                <h3 className="text-xl font-bold text-white mb-1">Wharton Cohort Program</h3>
                <p className="text-slate-400 text-sm">8-week live cohort with Wharton credential</p>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-white">$4,800</span>
                <span className="text-slate-500 text-sm ml-2">or 5 × $960/mo</span>
              </div>
              <p className="text-slate-500 text-xs mb-6">Next cohort: February 9, 2026</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Everything in Self-Paced, plus:',
                  'Wharton Online certificate',
                  'Live group office hours',
                  '1-on-1 faculty sessions',
                  'Cohort peer community',
                  'Lifetime alumni network access',
                  'In-person meetup invitations',
                ].map((item) => (
                  <li key={item} className={`flex items-center gap-3 text-sm ${item.endsWith(':') ? 'text-slate-400 font-semibold' : 'text-slate-300'}`}>
                    {!item.endsWith(':') && (
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-primary w-full text-center">
                Apply for the Cohort
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-navy-800/40">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="heading-lg text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-white">
                  {faq.q}
                  <svg className="w-5 h-5 text-slate-500 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container-main">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 sm:p-16 text-center">
            <h2 className="heading-lg text-white mb-4">Start Your FP&amp;A Journey Today</h2>
            <p className="text-blue-100 max-w-lg mx-auto mb-10 text-lg">
              Join 1,000+ finance professionals who have leveled up their careers with Inside FP&amp;A.
            </p>
            <Link href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white text-blue-700 font-bold px-8 py-4 text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
