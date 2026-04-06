import Link from 'next/link';

const courses = [
  {
    icon: '📈',
    title: 'Art & Science of Forecasting',
    href: '/forecasting',
    description: 'Master the T.A.C.T. framework and financial analysis to identify risks and opportunities with confidence.',
    modules: 7,
    badge: 'Most Popular',
    badgeColor: 'badge-blue',
  },
  {
    icon: '💰',
    title: 'Budgeting Process A–Z',
    href: '/budgeting',
    description: 'Navigate the full annual planning cycle from goal-setting to final budget approval.',
    modules: 6,
    badge: null,
    badgeColor: '',
  },
  {
    icon: '📊',
    title: 'Financial Modeling',
    href: '/modeling',
    description: 'Build error-free models that help leaders evaluate investment decisions confidently.',
    modules: 5,
    badge: null,
    badgeColor: '',
  },
  {
    icon: '📋',
    title: 'Reporting & Financial Storytelling',
    href: '/reporting',
    description: 'Transform numbers into compelling narratives that drive action across the business.',
    modules: 6,
    badge: 'New',
    badgeColor: 'badge-green',
  },
  {
    icon: '🤝',
    title: 'Finance Business Partnering',
    href: '/partnering',
    description: 'Build influence, develop business acumen, and become a trusted strategic advisor.',
    modules: 6,
    badge: null,
    badgeColor: '',
  },
  {
    icon: '🤖',
    title: 'AI for FP&A',
    href: '/ai',
    description: 'Automate grunt work, accelerate analysis, and focus on high-value strategic decisions.',
    modules: 5,
    badge: 'New',
    badgeColor: 'badge-teal',
  },
];

const testimonials = [
  {
    quote: "Christian is such a great teacher — passionate both for finance and teaching. He has a very clear way of explaining things and making them easy to understand.",
    name: 'Sarah M.',
    title: 'FP&A Manager, Fortune 500',
    company: 'Google',
  },
  {
    quote: "This program gave me everything I needed to move from accounting into FP&A. I got my dream job within 3 months of completing the Academy.",
    name: 'James K.',
    title: 'Senior Financial Analyst',
    company: 'Merck',
  },
  {
    quote: "Christian does a great job going over high-level concepts while also highlighting granular details that will help our planning process going forward.",
    name: 'Priya L.',
    title: 'Director of FP&A',
    company: 'Lowe\'s',
  },
];

const companies = ['Google', 'Merck', "Lowe's", 'Discover', 'Unilever', 'Liberty Bank', 'JPMorgan', 'Meta'];

const pillars = [
  { icon: '📈', label: 'Forecasting' },
  { icon: '💰', label: 'Budgeting' },
  { icon: '📊', label: 'Financial Modeling' },
  { icon: '📋', label: 'Reporting' },
  { icon: '🤝', label: 'Business Partnering' },
  { icon: '🔍', label: 'Financial Analysis' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero-gradient">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl" />
        </div>

        <div className="container-main section-py relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Trusted by 1,000+ FP&amp;A professionals worldwide
            </div>

            <h1 className="heading-xl text-white mb-6">
              Master Every Part of{' '}
              <span className="gradient-text">FP&amp;A</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              From modeling and forecasting to reporting and business partnering — get the skills, frameworks, and workflows you need to succeed in strategic finance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/academy" className="btn-primary-lg w-full sm:w-auto">
                Explore the Academy
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/forecasting" className="btn-secondary w-full sm:w-auto">
                Browse Courses
              </Link>
            </div>

            {/* Social proof stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: '1,000+', label: 'Students Trained' },
                { value: '35h', label: 'Curriculum' },
                { value: '100K+', label: 'LinkedIn Followers' },
                { value: '30K+', label: 'Newsletter Readers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ──────────────────────────────── */}
      <section className="border-y border-slate-800 bg-navy-800/50 py-10">
        <div className="container-main">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8">
            Trusted by finance professionals at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((company) => (
              <span key={company} className="text-slate-500 font-semibold text-sm hover:text-slate-300 transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS INSIDE FP&A ─────────────────────── */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">The Platform</p>
              <h2 className="heading-lg text-white mb-6">
                Everything you need to become an{' '}
                <span className="gradient-text">elite FP&amp;A professional</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                Inside FP&amp;A is the most comprehensive FP&amp;A training platform in the world. Built on 7 successful courses taught to 1,000+ finance professionals, it delivers a complete curriculum with clear learning paths, downloadable templates, and real-world case studies.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Bite-sized lessons you can complete in 8–10 hours/week',
                  'Plug-and-play templates you can use immediately',
                  'Real-life case studies with detailed solution walkthroughs',
                  'Ask an expert anything — get prompt replies on demand',
                  'Certificates for each of the 6 core FP&A pillars',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/academy" className="btn-primary">
                View the Full Academy
              </Link>
            </div>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.label} className="card-hover flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="font-semibold text-white text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ──────────────────────────────────── */}
      <section className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Individual Courses</p>
            <h2 className="heading-lg text-white mb-4">
              Master Each Part of FP&amp;A
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Take individual courses to sharpen specific skills, or get them all in the Academy bundle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link key={course.href} href={course.href} className="card-hover group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{course.icon}</span>
                  {course.badge && (
                    <span className={course.badgeColor}>{course.badge}</span>
                  )}
                </div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
                  <span>{course.modules} modules</span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMY HIGHLIGHT ────────────────────────── */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left content */}
              <div className="p-10 lg:p-14">
                <div className="badge-blue mb-6">🎓 FP&A Academy — All-Inclusive</div>
                <h2 className="heading-md text-white mb-4">
                  The Complete FP&amp;A Mastery System
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  A fully guided, end-to-end curriculum covering all 6 core pillars of FP&amp;A. Built on 7 successful courses, trusted by professionals at Google, Merck, and Unilever.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    '35-hour comprehensive curriculum',
                    '6 pillar certificates included',
                    'Plug-and-play templates & frameworks',
                    'Real-world case studies with solutions',
                    'Direct expert Q&A access',
                    'Ongoing curriculum updates',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/academy" className="btn-primary">
                  Explore the Academy
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Right — Wharton cohort */}
              <div className="p-10 lg:p-14 bg-navy-900/60 border-l border-slate-800 flex flex-col">
                <div className="badge-teal mb-6">🏛️ Cohort Program — Wharton Credential</div>
                <h2 className="heading-md text-white mb-4">
                  Earn Your Wharton FP&amp;A Certificate
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  An 8-week online cohort program co-directed with the Wharton School of the University of Pennsylvania. Earn a globally recognized credential.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Duration', value: '8 Weeks' },
                    { label: 'Effort', value: '10–12 hrs/week' },
                    { label: 'Format', value: 'Online Cohort' },
                    { label: 'Tuition', value: '$4,800' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-slate-700 bg-navy-800 p-3">
                      <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                      <div className="font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-8">
                  <p className="text-amber-300 text-sm font-semibold">📅 Next cohort starts February 9, 2026</p>
                  <p className="text-slate-400 text-xs mt-1">Limited seats available — apply early</p>
                </div>

                <Link href="/academy" className="btn-secondary mt-auto">
                  Apply for the Cohort
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT CHRISTIAN ──────────────────────────── */}
      <section className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-navy-700 to-navy-800 border border-slate-700 aspect-square max-w-md mx-auto flex items-center justify-center overflow-hidden glow-blue">
                <div className="text-center p-10">
                  <div className="w-24 h-24 rounded-full bg-blue-600/30 border-2 border-blue-500/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <div className="text-white font-bold text-xl mb-1">Christian Wattig</div>
                  <div className="text-blue-400 text-sm">FP&A Expert & Corporate Trainer</div>
                  <div className="mt-4 text-slate-400 text-xs">Director, FP&A Program</div>
                  <div className="text-slate-300 text-sm font-semibold">Wharton School, UPenn</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-slate-700 bg-navy-800 px-4 py-3 shadow-xl">
                <div className="text-2xl font-extrabold text-white">100K+</div>
                <div className="text-xs text-slate-400">LinkedIn Followers</div>
              </div>
              <div className="absolute -top-4 -left-4 rounded-xl border border-slate-700 bg-navy-800 px-4 py-3 shadow-xl">
                <div className="text-2xl font-extrabold text-white">30K+</div>
                <div className="text-xs text-slate-400">Newsletter Readers</div>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Your Instructor</p>
              <h2 className="heading-lg text-white mb-6">
                Learn from the{' '}
                <span className="gradient-text">FP&amp;A Expert</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                Christian Wattig is one of the most recognized FP&amp;A experts in the US. He directs the FP&amp;A program at the Wharton School of the University of Pennsylvania and has trained finance teams at Google, Merck, Lowe&apos;s, Discover, and many more.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                With over 100,000 followers on LinkedIn and 30,000+ weekly newsletter subscribers, Christian shares practical, no-fluff FP&amp;A insights that help finance professionals drive real business impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🏛️', label: 'Wharton School', sub: 'Program Director' },
                  { icon: '🏢', label: 'Fortune 500', sub: 'Corporate Trainer' },
                  { icon: '📧', label: '30K+ Readers', sub: 'Weekly Newsletter' },
                  { icon: '💼', label: '1,000+ Students', sub: 'Trained Globally' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-800 bg-navy-800 p-4 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.label}</div>
                      <div className="text-slate-500 text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/academy" className="btn-primary">
                Start Learning with Christian
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Student Reviews</p>
            <h2 className="heading-lg text-white mb-4">
              What Our Students Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="stars">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span className="text-white font-bold">4.9</span>
              <span className="text-slate-500 text-sm">/ 5.0 average rating</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card flex flex-col">
                <div className="stars mb-4">
                  {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 flex-1 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.title} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERVIEW PLAYBOOK CTA ───────────────────── */}
      <section className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-hover flex flex-col">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Interview Playbook</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                Everything you need to land your dream FP&amp;A role. Resume templates, case study practice, and 100+ interview questions with detailed answers.
              </p>
              <Link href="/interview" className="btn-secondary text-sm">
                Get the Playbook →
              </Link>
            </div>
            <div className="card-hover flex flex-col">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-white mb-3">On-site Team Training</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                Bring world-class FP&amp;A training directly to your finance team. Customized workshops delivered at your office by Christian Wattig.
              </p>
              <Link href="/onsite-training" className="btn-secondary text-sm">
                Learn About On-site Training →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="section-py">
        <div className="container-main">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="heading-lg text-white mb-4">
                Ready to Level Up Your FP&amp;A Career?
              </h2>
              <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg">
                Join 1,000+ finance professionals who have transformed their careers with Inside FP&amp;A.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/academy" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-blue-700 font-bold px-8 py-4 text-lg hover:bg-blue-50 transition-colors shadow-xl">
                  Start with the Academy
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/forecasting" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 text-white font-semibold px-8 py-4 text-lg hover:border-white/70 hover:bg-white/10 transition-colors">
                  Browse Free Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
