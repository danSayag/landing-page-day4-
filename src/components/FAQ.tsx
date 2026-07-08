import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    question: 'How does the free trial work?',
    answer:
      'You get full access to all Pro features for 14 days — no credit card required. At the end of the trial you can pick a plan or continue on the free Starter tier.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel at any time from your billing settings. Changes take effect immediately and we prorate any differences.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer:
      'Yes! Early-stage startups and registered nonprofits get 50% off Pro for the first year. Reach out to our sales team to apply.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We are SOC 2 Type II certified, encrypt all data in transit and at rest, and offer SSO and audit logs on Enterprise plans.',
  },
  {
    question: 'Which carriers do you support?',
    answer:
      'Nova connects with 100+ carriers worldwide including FedEx, UPS, DHL, and USPS. You can also plug in your own carrier contracts or build custom integrations with our REST API.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start rounded-2xl  px-6 py-8 ">
           
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div
            ref={ref}
            className={`space-y-3 transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {faqs.map((faq, index) => {
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
