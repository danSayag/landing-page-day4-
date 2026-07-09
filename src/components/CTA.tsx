import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { localizedHref } from '../i18n/routing'

const CTA = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()
  const { t, lang } = useLanguage()

  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center transition-all duration-700 ease-out sm:px-16 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-blue-100">
            {t.cta.description}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={localizedHref('/pricing', lang)}
              className="w-full rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-600 transition hover:bg-blue-50 sm:w-auto"
            >
              {t.cta.primary}
            </a>
            <a
              href="#"
              className="w-full rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {t.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
