import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI for FP&A | Inside FP&A',
  description: 'Leverage AI to automate grunt work, accelerate analysis, and focus on high-value strategic FP&A work.',
};

const modules = [
  { num: 1, title: 'AI Fundamentals for Finance', desc: 'Understand how AI works, which tools matter for FP&A, and how to build an AI workflow in your role.' },
  { num: 2, title: 'AI-Powered Data Analysis', desc: 'Use AI to clean, explore, and analyze large financial datasets in minutes, not hours.' },
  { num: 3, title: 'Automating Forecasting with AI', desc: 'Apply machine learning concepts to improve forecast accuracy and automate repetitive model updates.' },
  { num: 4, title: 'AI for Report Writing & Commentary', desc: 'Generate first drafts of variance commentary, executive summaries, and board narratives using AI.' },
  { num: 5, title: 'Building Your AI Toolkit', desc: 'Assemble a practical AI workflow for FP&A that you can implement in your role immediately.' },
];

export default function AIPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="container-main section-py relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm">Home</Link>
              <span className="text-slate-700">/</span>
              <span className="text-slate-400 text-sm">AI for FP&A</span>
            </div>
            <span className="text-4xl block mb-4">🤖</span>
            <div className="badge-teal mb-4">5 Modules · Certificate Included · New</div>
            <h1 className="heading-xl text-white mb-6">
              AI for{' '}
              <span className="gradient-text">FP&amp;A</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Automate the grunt work and focus on high-value strategic analysis. Learn to use AI tools to accelerate forecasting, analysis, and reporting — and stay ahead of the curve in the profession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/academy" className="btn-primary-lg">Enroll Now</Link>
              <Link href="#modules" className="btn-secondary text-lg px-8 py-4">View Modules</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI now */}
      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Why This Course</p>
              <h2 className="heading-lg text-white mb-6">AI Won&apos;t Replace FP&amp;A — But FP&amp;A Professionals Who Use AI Will Replace Those Who Don&apos;t</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                The FP&amp;A profession is being transformed by AI. The professionals who thrive will be those who know how to combine financial expertise with AI capabilities to deliver 10x more value.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                This course gives you a practical, hands-on AI toolkit that you can start using in your role immediately — no coding or data science background required.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '⚡', label: '10× Faster Analysis' },
                  { icon: '🎯', label: 'More Accurate Forecasts' },
                  { icon: '📝', label: 'Automated Reporting' },
                  { icon: '🚀', label: 'Strategic Focus Time' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-800 bg-navy-800 p-4 flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-white mb-4">Course Details</h3>
              <div className="space-y-3">
                {[
                  { label: 'Modules', value: '5 modules' },
                  { label: 'Duration', value: '~4 hours' },
                  { label: 'Skill Level', value: 'No coding required' },
                  { label: 'Certificate', value: 'Yes, upon completion' },
                  { label: 'Tools Covered', value: 'ChatGPT, Copilot, Python basics' },
                  { label: 'Case Studies', value: '3 AI-powered FP&A scenarios' },
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm">{m.num}</div>
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
          <h2 className="heading-md text-white mb-4">Start Using AI in Your FP&amp;A Role Today</h2>
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
