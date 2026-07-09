import Pricing from '../components/Pricing'
import PricingTable from '../components/PricingTable'
import { useLanguage } from '../context/LanguageContext'

const PricingPage = () => {
  const { t } = useLanguage()

  return (
    <div id="top" className="pt-16">
      <Pricing />
      <PricingTable />

      {/* Bottom CTA — sends the visitor back up to the plans at the top of the page. */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{t.cta.description}</p>
          <div className="mt-8">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.cta.primary}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
