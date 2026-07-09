import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../i18n/translations'

// Native short code + full name for each language. Names stay native so a
// screen reader announces each option in its own language.
const LANGS: { code: Language; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'fr', short: 'FR', name: 'Français' },
  { code: 'he', short: 'עב', name: 'עברית' },
]

interface Props {
  className?: string
}

// Segmented language control: a rounded pill where the active language is
// filled with the site's blue accent and the rest are quiet, tappable text.
const LanguageSwitcher = ({ className = '' }: Props) => {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex h-10 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-100 px-1.5 ${className}`}
    >
      {/* Lucide "languages" icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="me-1 h-4 w-4 shrink-0 text-gray-400"
        aria-hidden="true"
      >
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
      {LANGS.map(({ code, short, name }) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={name}
            title={name}
            className={`rounded-md px-2.5 py-1.5 text-sm font-semibold leading-none transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-100 ${
              active
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {short}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
