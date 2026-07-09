import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { localizedHref } from '../i18n/routing'

const Pricing = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()
  const { t, lang } = useLanguage()

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            {t.pricing.sectionLabel}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {t.pricing.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.pricing.sectionDescription}
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid gap-6 transition-all duration-700 ease-out lg:grid-cols-3 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {t.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-blue-500 bg-blue-50/50 shadow-xl shadow-blue-500/15'
                  : 'border-gray-200 bg-white shadow-sm shadow-blue-500/5'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-blue-500/25">
                  {t.pricing.mostPopular}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={localizedHref('/#cta', lang)}
                className={`mt-8 rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 hover:bg-blue-500'
                    : 'border border-gray-200 bg-white text-gray-700 shadow-sm shadow-blue-500/5 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
