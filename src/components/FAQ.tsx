import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, isVisible } = useInView<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start rounded-2xl  px-6 py-8 ">
           
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {t.faq.sectionTitle}
            </h2>
          </div>

          <div
            ref={ref}
            className={`space-y-3 transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {t.faq.items.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm shadow-blue-500/5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
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
        </div>
      </div>
    </section>
  )
}

export default FAQ
