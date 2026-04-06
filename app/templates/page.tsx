import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FP&A Templates Library | Inside FP&A',
  description: 'Free FP&A templates for forecasting, budgeting, financial modeling, and reporting. Download and use immediately.',
};

const templates = [
  { icon: '📈', title: 'Rolling Forecast Model', type: 'Excel', category: 'Forecasting', free: true },
  { icon: '📊', title: 'Variance Analysis Dashboard', type: 'Excel', category: 'Reporting', free: true },
  { icon: '💰', title: 'Annual Budget Template', type: 'Excel', category: 'Budgeting', free: false },
  { icon: '📋', title: 'Monthly Board Pack', type: 'PowerPoint', category: 'Reporting', free: false },
  { icon: '🔢', title: 'Driver-Based Model', type: 'Excel', category: 'Modeling', free: false },
  { icon: '📉', title: 'Scenario Analysis Tool', type: 'Excel', category: 'Forecasting', free: false },
];

export default function TemplatesPage() {
  return (
    <>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-main section-py relative">
          <div className="max-w-2xl">
            <span className="text-4xl block mb-4">📁</span>
            <h1 className="heading-xl text-white mb-6">
              FP&amp;A <span className="gradient-text">Templates Library</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Professional-grade Excel and PowerPoint templates built by FP&amp;A experts. Download and use in your role immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-navy-900">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div key={t.title} className="card-hover flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{t.icon}</span>
                  <span className={t.free ? 'badge-green' : 'badge-blue'}>{t.free ? 'Free' : 'Academy'}</span>
                </div>
                <h3 className="font-bold text-white mb-1">{t.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-slate-500">{t.type}</span>
                  <span className="text-slate-700">·</span>
                  <span className="text-xs text-slate-500">{t.category}</span>
                </div>
                {t.free ? (
                  <button className="btn-secondary text-sm mt-auto">Download Free</button>
                ) : (
                  <Link href="/academy" className="btn-primary text-sm mt-auto text-center">
                    Get with Academy
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">Get all templates plus full courses and certificates</p>
            <Link href="/academy" className="btn-primary">Explore the Academy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
