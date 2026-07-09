import { useLanguage } from '../context/LanguageContext'

const sourcesMeta = [
  { key: 'Carriers' as const, color: 'bg-rose-400', dot: '#fb7185' },
  { key: 'Stores' as const, color: 'bg-amber-400', dot: '#fbbf24' },
  { key: 'Warehouses' as const, color: 'bg-emerald-400', dot: '#34d399' },
  { key: 'Marketplaces' as const, color: 'bg-sky-400', dot: '#38bdf8' },
  { key: 'Returns' as const, color: 'bg-violet-400', dot: '#a78bfa' },
]

const Hero = () => {
  const { t } = useLanguage()
  const sources = sourcesMeta.map((s) => ({ ...s, label: t.hero.sources[s.key] }))

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
          {t.hero.badge}
        </span>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.headline1}{' '}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
            {t.hero.headline2}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#features"
            className="w-full rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mx-auto mt-16 w-full max-w-xl">
          <div className="grid grid-cols-5">
            {sources.map((source) => (
              <div key={source.label} className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:text-xs">
                  {source.label}
                </span>
                <span
                  className={`h-8 w-8 rounded-full border-2 border-white shadow-sm ${source.color}`}
                />
              </div>
            ))}
          </div>

          <svg
            viewBox="0 0 500 90"
            preserveAspectRatio="none"
            className="h-16 w-full sm:h-20"
            aria-hidden="true"
          >
            {sources.map((source, i) => {
              const x = 50 + i * 100
              const path = `M ${x} 4 C ${x} 58, 250 42, 250 88`
              return (
                <g key={source.label}>
                  <path className="hero-flow-line" d={path} fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
                  <circle r="3.5" fill={source.dot} className="motion-reduce:hidden">
                    <animateMotion
                      dur="2.4s"
                      begin={`${i * 0.35}s`}
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>
                </g>
              )
            })}
          </svg>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-6 py-3.5 shadow-lg shadow-blue-100/60">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                N
              </span>
              <div className="text-start">
                <p className="text-sm font-semibold text-gray-900">{t.hero.dashboardName}</p>
                <p className="text-xs text-gray-500">{t.hero.dashboardTagline}</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            {t.hero.trustedPrefix}{' '}
            <span className="font-semibold text-gray-800">{t.hero.trustedCount}</span>{' '}
            {t.hero.trustedSuffix}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
