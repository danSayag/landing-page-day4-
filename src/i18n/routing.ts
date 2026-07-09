import type { Language } from './translations'

/**
 * URL-based locale routing.
 *   /features      → English
 *   /he/features   → Hebrew
 * English is the default (no prefix); Hebrew lives under the `/he` prefix.
 */

// Which language does this pathname represent?
export function getLangFromPath(pathname: string): Language {
  const clean = pathname.replace(/\/+$/, '')
  return clean === '/he' || clean.startsWith('/he/') ? 'he' : 'en'
}

// Strip the locale prefix to get the language-independent route ('/', '/features', …)
export function getLogicalPath(pathname: string): string {
  let clean = pathname.replace(/\/+$/, '')
  if (clean === '/he') return '/'
  if (clean.startsWith('/he/')) clean = clean.slice(3) // drop leading '/he'
  return clean === '' ? '/' : clean
}

// Turn a logical path ('/features', '/#cta', '/') into a URL for the given language.
// Same-page anchors and other non-root links are returned untouched.
export function localizedHref(path: string, lang: Language): string {
  if (lang !== 'he') return path
  if (!path.startsWith('/')) return path
  if (path === '/') return '/he'
  return '/he' + path
}

// URL for the current page in the other language (used by the language toggle).
export function switchLangUrl(target: Language): string {
  const logical = getLogicalPath(window.location.pathname)
  return localizedHref(logical, target) + window.location.search + window.location.hash
}
