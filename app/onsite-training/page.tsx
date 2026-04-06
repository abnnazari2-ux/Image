import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On-site FP&A Training | Inside FP&A',
  description: 'Bring world-class FP&A training directly to your finance team. Customized workshops delivered at your office by expert FP&A trainer Christian Wattig.',
};

const companies = [
  { name: 'Google', industry: 'Technology' },
  { name: 'Merck', industry: 'Pharmaceuticals' },
  { name: "Lowe's", industry: 'Retail' },
  { name: 'Discover', industry: 'Financial Services' },
  { name: 'Liberty Bank', industry: 'Banking' },
  { name: 'Unilever', industry: 'Consumer Goods' },
];

const workshops = [
  {
    title: 'Forecasting & Planning',
    duration: '1–2 days',
    desc: 'Teach your team the T.A.C.T. forecasting framework, rolling forecasts, and variance analysis best practices.',
  },
  {
    title: 'Financial Storytelling',
    duration: '1 day',
    desc: 'Transform how your team communicates financial insights to business partners and leadership.',
  },
  {
    title: 'Finance Business Partnering',
    duration: '1–2 days',
    desc: 'Develop the strategic and interpersonal skills that turn your team into trusted advisors.',
  },
  {
    title: 'Financial Modeling',
    duration: '1–2 days',
    desc: 'Build modeling best practices into your team\'s DNA with hands-on workshop exercises.',
  },
  {
    title: 'AI for FP&A',
    duration: '1 day',
    desc: 'Get your whole finance team up to speed on AI tools and workflows for FP&A.',
  },
  {
    title: 'Custom Program',
    duration: 'Flexible',
    desc: 'Build a fully customized training program tailored to your team\'s specific gaps and goals.',
  },
];

const process = [
  { step: '1', title: 'Discovery Call', desc: 'We learn about your team, their current skill gaps, and your training objectives.' },
  { step: '2', title: 'Custom Proposal', desc: 'We design a tailored program with the right topics, format, and timeline for your team.' },
  { step: '3', title: 'On-site Delivery', desc: 'Christian Wattig (or a certified trainer) delivers the workshop at your location.' },
  { step: '4', title: 'Follow-up Resources', desc: 'Your team receives templates, frameworks, and ongoing access to course materials.' },
];

export default function OnsiteTrainingPage() {
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
              <span className="text-slate-400 text-sm">On-site Training</span>
            </div>
            <span className="text-4xl block mb-4">🏢</span>
            <div className="badge-blue mb-4">Corporate FP&A Training</div>
            <h1 className="heading-xl text-white mb-6">
              On-site{' '}
              <span className="gradient-text">FP&amp;A Training</span>{' '}
              for Your Team
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Bring world-class FP&amp;A training directly to your finance team. Customized workshops delivered at your location — practical, high-impact, and tailored to your team&apos;s specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary-lg">Request a Proposal</Link>
              <Link href="#workshops" className="btn-secondary text-lg px-8 py-4">View Workshops</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-slate-800 bg-navy-800/50 py-10">
        <div className="container-main">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8">
            Trusted by finance teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((c) => (
              <div key={c.name} className="text-center">
                <div className="text-slate-400 font-semibold text-sm">{c.name}</div>
                <div className="text-slate-600 text-xs">{c.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why on-site */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Why On-site Training</p>
              <h2 className="heading-lg text-white mb-6">Transform Your Whole Finance Team at Once</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Online courses are great for individual learning. But when you need to uplift an entire finance team — establish common frameworks, shared language, and consistent best practices — on-site training is unmatched.
              </p>
              <ul className="space-y-4">
                {[
                  'Shared frameworks and language across your entire team',
                  'Immediate application to your company\'s real data and scenarios',
                  'Customized to your industry, business model, and team level',
                  'Hands-on practice with your actual tools and systems',
                  'Live Q&A and direct access to a world-class FP&A expert',
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
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', label: 'Customized Content', sub: 'Tailored to your team' },
                { icon: '🏢', label: 'At Your Location', sub: 'We come to you' },
                { icon: '👥', label: 'Team of 5–50', sub: 'Flexible group sizes' },
                { icon: '📁', label: 'Materials Included', sub: 'Templates & frameworks' },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-bold text-white text-sm mb-1">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="section-py bg-navy-800/40">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Workshop Topics</p>
            <h2 className="heading-lg text-white">Available Training Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w) => (
              <div key={w.title} className="card-hover flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white">{w.title}</h3>
                  <span className="badge-blue text-xs">{w.duration}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="heading-lg text-white">From Request to Training in 4 Steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-blue-500/40 bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xl mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="section-py bg-navy-800/40">
        <div className="container-main max-w-2xl">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Get Started</p>
            <h2 className="heading-lg text-white">Request a Training Proposal</h2>
            <p className="text-slate-400 mt-3">Tell us about your team and we&apos;ll get back to you within 24 hours.</p>
          </div>
          <div className="card">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">First Name</label>
                  <input type="text" placeholder="Jane" className="input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Smith" className="input" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Work Email</label>
                <input type="email" placeholder="jane@company.com" className="input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Company</label>
                <input type="text" placeholder="Acme Corp" className="input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Team Size</label>
                <select className="input">
                  <option value="">Select team size</option>
                  <option>5–10 people</option>
                  <option>10–25 people</option>
                  <option>25–50 people</option>
                  <option>50+ people</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">What topics are you interested in?</label>
                <textarea rows={4} placeholder="Tell us about your team's learning goals and any specific topics you'd like to cover..." className="input resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full text-center py-3 text-base">
                Request a Proposal
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
