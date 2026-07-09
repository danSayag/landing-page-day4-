import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

const HowItWorks = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()
  const { t } = useLanguage()
  const h = t.howItWorks

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            {h.sectionLabel}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {h.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {h.sectionDescription}
          </p>
        </div>

        <div
          ref={ref}
          className={`relative mx-auto mt-16 grid max-w-5xl gap-12 transition-all duration-700 ease-out md:grid-cols-3 md:gap-8 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* connector line (desktop) */}
          <div
            className="absolute inset-x-0 top-7 hidden h-px bg-linear-to-r from-transparent via-blue-200 to-transparent md:block"
            aria-hidden="true"
          />

          {h.steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
