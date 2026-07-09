import { useLanguage } from '../context/LanguageContext'

/**
 * Accessibility Statement (הצהרת נגישות)
 * Required by Israeli law: Equal Rights for Persons with Disabilities
 * Regulations (Service Accessibility Adjustments), 2013.
 * Standard: Israeli Standard IS 5568, based on WCAG 2.0 Level AA.
 */
const AccessibilityPage = () => {
  const { t } = useLanguage()
  const a = t.accessibilityPage

  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-32 sm:px-6" tabIndex={-1}>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">{a.title}</h1>

      <section aria-labelledby="commitment-heading" className="mb-8">
        <h2 id="commitment-heading" className="mb-3 text-xl font-semibold text-gray-800">{a.commitment.heading}</h2>
        <p className="text-gray-600 leading-relaxed">{a.commitment.body}</p>
      </section>

      <section aria-labelledby="compliance-heading" className="mb-8">
        <h2 id="compliance-heading" className="mb-3 text-xl font-semibold text-gray-800">{a.compliance.heading}</h2>
        <p className="text-gray-600 leading-relaxed mb-3">{a.compliance.body}</p>
        <ul className="list-disc ps-6 space-y-1 text-gray-600">
          {a.compliance.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="known-issues-heading" className="mb-8">
        <h2 id="known-issues-heading" className="mb-3 text-xl font-semibold text-gray-800">{a.known.heading}</h2>
        <p className="text-gray-600 leading-relaxed">{a.known.body}</p>
      </section>

      <section aria-labelledby="contact-heading" className="mb-8">
        <h2 id="contact-heading" className="mb-3 text-xl font-semibold text-gray-800">{a.contact.heading}</h2>
        <p className="text-gray-600 leading-relaxed mb-2">{a.contact.body}</p>
        <address className="not-italic text-gray-600 space-y-1">
          <p><strong>{a.contact.nameLabel}</strong> {a.contact.nameValue}</p>
          <p>
            <strong>{a.contact.emailLabel}</strong>{' '}
            <a href="mailto:accessibility@nova.com" className="text-blue-600 underline hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded">
              accessibility@nova.com
            </a>
          </p>
          <p><strong>{a.contact.phoneLabel}</strong> <a href="tel:+97200000000" className="text-blue-600 underline hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded">+972-00-000-0000</a></p>
        </address>
        <p className="mt-3 text-sm text-gray-500">{a.contact.responseNote}</p>
      </section>

      <section aria-labelledby="date-heading">
        <h2 id="date-heading" className="mb-3 text-xl font-semibold text-gray-800">{a.date.heading}</h2>
        <p className="text-gray-600">
          {a.date.reviewedOn} <time dateTime="2026-07-08">{a.date.value}</time>.
        </p>
      </section>
    </main>
  )
}

export default AccessibilityPage
