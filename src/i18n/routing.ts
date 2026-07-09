import type { Language } from './translations'

/**
 * URL-based locale routing.
 *   /features      → English
 *   /he/features   → Hebrew
 *   /fr/features   → French
 * English is the default (no prefix); other languages live under their code prefix.
 */

// All supported languages. English is the default and carries no URL prefix.
export const LANGUAGES: Language[] = ['en', 'he', 'fr']

// Languages that live behind a URL prefix (everything except the default).
const PREFIXED = LANGUAGES.filter((l): l is Exclude<Language, 'en'> => l !== 'en')

// Which language does this pathname represent?
export function getLangFromPath(pathname: string): Language {
  const clean = pathname.replace(/\/+$/, '')
  for (const lng of PREFIXED) {
    if (clean === `/${lng}` || clean.startsWith(`/${lng}/`)) return lng
  }
  return 'en'
}

// Strip the locale prefix to get the language-independent route ('/', '/features', …)
export function getLogicalPath(pathname: string): string {
  let clean = pathname.replace(/\/+$/, '')
  for (const lng of PREFIXED) {
    if (clean === `/${lng}`) return '/'
    if (clean.startsWith(`/${lng}/`)) {
      clean = clean.slice(lng.length + 1) // drop leading '/<lng>'
      break
    }
  }
  return clean === '' ? '/' : clean
}

// Turn a logical path ('/features', '/#cta', '/') into a URL for the given language.
// Same-page anchors and other non-root links are returned untouched.
export function localizedHref(path: string, lang: Language): string {
  if (lang === 'en') return path
  if (!path.startsWith('/')) return path
  if (path === '/') return `/${lang}`
  return `/${lang}` + path
}

// URL for the current page in the target language (used by the language switcher).
export function switchLangUrl(target: Language): string {
  const logical = getLogicalPath(window.location.pathname)
  return localizedHref(logical, target) + window.location.search + window.location.hash
}
