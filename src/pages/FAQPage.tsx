import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { localizedHref } from '../i18n/routing'

/**
 * Dedicated FAQ page — a longer, standalone list (12 questions).
 * The home page keeps its own shorter FAQ section; this page is the full one.
 */
const FAQPage = () => {
  const { t, lang } = useLanguage()
  const f = t.faqPage
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{f.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">{f.subtitle}</p>
      </header>

      <div className="space-y-3">
        {f.items.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm shadow-blue-500/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-start focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`h-4 w-4 shrink-0 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <p className="px-6 pb-5 leading-relaxed text-gray-500">{faq.answer}</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Still stuck? Nudge to the CTA on the home page. */}
      <div className="mt-12 text-center">
        <a
          href={localizedHref('/#cta', lang)}
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {t.cta.secondary}
        </a>
      </div>
    </section>
  )
}

export default FAQPage
