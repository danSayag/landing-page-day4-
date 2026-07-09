import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { localizedHref, getLogicalPath } from '../i18n/routing'

const currentLogical = getLogicalPath(
  typeof window !== 'undefined' ? window.location.pathname : '/',
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  // Nav targets are language-independent ("logical") paths, localized per language.
  const navLinks = [
    { label: t.nav.home, target: '/' },
    { label: t.nav.features, target: '/features' },
    { label: t.nav.testimonials, target: '/#testimonials' },
    { label: t.nav.pricing, target: '/pricing' },
    { label: t.nav.faq, target: '/#faq' },
  ].map((link) => ({
    label: link.label,
    href: localizedHref(link.target, lang),
    isActive: !link.target.includes('#') && currentLogical === link.target,
  }))

  return (
    <header role="banner" className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm shadow-blue-500/5 backdrop-blur-md">
      {/* Skip to main content — required by IS 5568 / WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-md focus:outline-none"
      >
        {t.nav.skipToMain}
      </a>

      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 relative">
        <a href={localizedHref('/', lang)} aria-label="Nova – home" className="text-xl font-bold text-gray-900">
          Nova
        </a>

        {/* Desktop links */}
        <ul role="list" className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2 list-none m-0 p-0">
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.isActive ? 'page' : undefined}
                  className={`text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded ${
                    link.isActive
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
            aria-label={t.nav.toggleLang}
            title={t.nav.toggleLang}
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-gray-400" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM4.332 8.027a6.012 6.012 0 0 1 1.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 0 1 9 7.5V8a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.197A5.973 5.973 0 0 1 10 16v-2a2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-.668-1.973ZM14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            {lang === 'en' ? 'HE' : 'EN'}
          </button>

          <a
            href={localizedHref('/#cta', lang)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {t.nav.getStarted}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" role="navigation" aria-label="Mobile navigation" className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <ul role="list" className="flex flex-col gap-1 list-none m-0 p-0">
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={link.isActive ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg border px-3 py-2.5 text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                      link.isActive
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-transparent text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            {/* Language toggle in mobile menu */}
            <li>
              <button
                type="button"
                onClick={() => { setLang(lang === 'en' ? 'he' : 'en'); setMenuOpen(false) }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-400" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM4.332 8.027a6.012 6.012 0 0 1 1.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 0 1 9 7.5V8a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.197A5.973 5.973 0 0 1 10 16v-2a2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-.668-1.973ZM14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                </svg>
                {t.nav.toggleLang}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar

