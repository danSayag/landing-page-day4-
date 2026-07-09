import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language } from '../i18n/translations'
import { getLangFromPath, switchLangUrl } from '../i18n/routing'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Language is derived from the URL (/he/... = Hebrew), so it is shareable and bookmarkable.
  const [lang] = useState<Language>(() =>
    typeof window !== 'undefined' ? getLangFromPath(window.location.pathname) : 'en',
  )

  // Keep <html lang/dir> in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = translations[lang].dir
  }, [lang])

  // Switching language navigates to the same page under the other locale prefix.
  const setLang = (next: Language) => {
    if (next === lang) return
    window.location.href = switchLangUrl(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
