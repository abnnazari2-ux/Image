import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FP&A Newsletter | Inside FP&A',
  description: 'Join 30,000+ finance professionals. Get weekly FP&A insights, templates, and career tips from Christian Wattig.',
};

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-main section-py relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-5xl block mb-6">📧</span>
            <div className="badge-blue mb-4 mx-auto">30,000+ Subscribers</div>
            <h1 className="heading-xl text-white mb-6">
              The Weekly <span className="gradient-text">FP&amp;A</span> Newsletter
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Every week, 30,000+ finance professionals get practical FP&amp;A insights, templates, and career tips from Christian Wattig — completely free.
            </p>
            <div className="card max-w-md mx-auto">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your first name" className="input" />
                <input type="email" placeholder="your@email.com" className="input" />
                <button type="submit" className="btn-primary w-full py-3 text-base">
                  Subscribe Free →
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-3 text-center">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white">What You&apos;ll Get Every Week</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '💡', title: 'FP&A Insights', desc: 'Practical tips and frameworks from the front lines of FP&A at world-class companies.' },
              { icon: '📁', title: 'Free Templates', desc: 'Downloadable Excel and PowerPoint templates you can use immediately in your role.' },
              { icon: '🚀', title: 'Career Advice', desc: 'How to get promoted, land a better role, and build a long-term career in strategic finance.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
