import { useState, useEffect, useMemo, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const FONT_STEPS = 4
const FONT_STEP_PX = 2 // each step adds 2px to the base font size

const STORAGE_KEY = 'nova-a11y'

type A11ySettings = {
  fontSize: number
  highContrast: boolean
  underlineLinks: boolean
  stopAnimations: boolean
}

// System (OS/browser) accessibility preferences we can mirror.
const REDUCE_MOTION = '(prefers-reduced-motion: reduce)'
const MORE_CONTRAST = '(prefers-contrast: more)'

const matchesMedia = (query: string) =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia(query).matches

// When the visitor hasn't chosen anything on the site yet, follow the system setup.
function systemDefaults(): A11ySettings {
  return {
    fontSize: 0,
    highContrast: matchesMedia(MORE_CONTRAST),
    underlineLinks: false,
    stopAnimations: matchesMedia(REDUCE_MOTION),
  }
}

function hasStoredSettings(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null
  } catch {
    return false
  }
}

// Stored (user-chosen) settings win; otherwise fall back to the system settings.
function loadSettings(): A11ySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return systemDefaults()
    const parsed = JSON.parse(raw)
    return {
      fontSize:
        typeof parsed.fontSize === 'number'
          ? Math.min(FONT_STEPS, Math.max(0, parsed.fontSize))
          : 0,
      highContrast: !!parsed.highContrast,
      underlineLinks: !!parsed.underlineLinks,
      stopAnimations: !!parsed.stopAnimations,
    }
  } catch {
    return systemDefaults()
  }
}

const AccessibilityWidget = () => {
  const { t } = useLanguage()
  const w = t.accessibility.widget
  const isRtl = t.dir === 'rtl'

  const initial = useMemo(loadSettings, [])
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(initial.fontSize)       // 0..FONT_STEPS
  const [highContrast, setHighContrast] = useState(initial.highContrast)
  const [underlineLinks, setUnderlineLinks] = useState(initial.underlineLinks)
  const [stopAnimations, setStopAnimations] = useState(initial.stopAnimations)

  // Has the visitor overridden the system setup on this site? If not, we keep
  // following the OS/browser accessibility settings live.
  const userTouched = useRef(hasStoredSettings())
  const touch = () => {
    userTouched.current = true
  }

  // Apply settings to <html>
  useEffect(() => {
    const root = document.documentElement
    root.style.fontSize = fontSize > 0 ? `${16 + fontSize * FONT_STEP_PX}px` : ''
    root.classList.toggle('a11y-high-contrast', highContrast)
    root.classList.toggle('a11y-underline-links', underlineLinks)
    root.classList.toggle('a11y-stop-animations', stopAnimations)
  }, [fontSize, highContrast, underlineLinks, stopAnimations])

  // Persist settings across pages — only once the visitor has overridden the
  // system defaults, so an untouched widget keeps following the system setup.
  useEffect(() => {
    if (!userTouched.current) return
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ fontSize, highContrast, underlineLinks, stopAnimations }),
      )
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
  }, [fontSize, highContrast, underlineLinks, stopAnimations])

  // Mirror live changes to the system accessibility settings until the visitor
  // makes their own choice on the site.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    const motion = window.matchMedia(REDUCE_MOTION)
    const contrast = window.matchMedia(MORE_CONTRAST)
    const onMotion = () => {
      if (!userTouched.current) setStopAnimations(motion.matches)
    }
    const onContrast = () => {
      if (!userTouched.current) setHighContrast(contrast.matches)
    }
    motion.addEventListener('change', onMotion)
    contrast.addEventListener('change', onContrast)
    return () => {
      motion.removeEventListener('change', onMotion)
      contrast.removeEventListener('change', onContrast)
    }
  }, [])

  // CSS animation-play-state can't stop SVG/SMIL animations (the hero paths,
  // feature-card dashboards, etc.). Pause them via the SVG animation API, and
  // keep pausing any SVGs that mount later while the setting stays on.
  useEffect(() => {
    if (!stopAnimations) return

    const pauseAll = () => {
      document.querySelectorAll('svg').forEach((svg) => {
        const s = svg as SVGSVGElement
        if (typeof s.pauseAnimations === 'function') {
          try {
            s.pauseAnimations()
          } catch {
            /* svg without an active timeline */
          }
        }
      })
    }

    pauseAll()
    const observer = new MutationObserver(pauseAll)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      document.querySelectorAll('svg').forEach((svg) => {
        const s = svg as SVGSVGElement
        if (typeof s.unpauseAnimations === 'function') {
          try {
            s.unpauseAnimations()
          } catch {
            /* svg without an active timeline */
          }
        }
      })
    }
  }, [stopAnimations])

  // Reset clears the site override and goes back to following the system setup.
  const reset = () => {
    userTouched.current = false
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore storage errors */
    }
    const sys = systemDefaults()
    setFontSize(sys.fontSize)
    setHighContrast(sys.highContrast)
    setUnderlineLinks(sys.underlineLinks)
    setStopAnimations(sys.stopAnimations)
  }

  return (
    <>
      {/* Global accessibility CSS */}
      <style>{`
        /* High contrast: force strong dark-on-light text and solid borders.
           A plain contrast() filter only pushes the site's many light-gray
           elements toward white (invisible), so we override colors directly. */
        html.a11y-high-contrast body { background-color: #fff; color: #000; }
        html.a11y-high-contrast .text-gray-300,
        html.a11y-high-contrast .text-gray-400,
        html.a11y-high-contrast .text-gray-500,
        html.a11y-high-contrast .text-gray-600,
        html.a11y-high-contrast .text-gray-700,
        html.a11y-high-contrast .text-gray-800,
        html.a11y-high-contrast .text-gray-900 { color: #000 !important; }
        /* Brand blue that still passes AA on white. */
        html.a11y-high-contrast .text-blue-400,
        html.a11y-high-contrast .text-blue-500,
        html.a11y-high-contrast .text-blue-600 { color: #1d4ed8 !important; }
        /* Thin gray/blue hairline borders → solid black so cards are visible. */
        html.a11y-high-contrast [class*="border-gray-"],
        html.a11y-high-contrast [class*="border-blue-1"],
        html.a11y-high-contrast [class*="border-blue-2"] { border-color: #000 !important; }
        /* Decorative SVG connector/grid strokes (light gray & light blue) → black. */
        html.a11y-high-contrast .hero-flow-line,
        html.a11y-high-contrast svg [stroke="#e5e7eb"],
        html.a11y-high-contrast svg [stroke="#cbd5e1"],
        html.a11y-high-contrast svg [stroke="#e2e8f0"],
        html.a11y-high-contrast svg [stroke="#bfdbfe"] { stroke: #000 !important; }
        /* Connector / track lines drawn as elements (gradients, bg bars) → black. */
        html.a11y-high-contrast .hc-line { background: #000 !important; }
        html.a11y-underline-links a { text-decoration: underline !important; }
        html.a11y-stop-animations *, html.a11y-stop-animations *::before, html.a11y-stop-animations *::after {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      `}</style>

      {/* Fixed trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={w.open}
        title={w.title}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true" focusable="false">
          <circle cx="12" cy="3.5" r="1.75" />
          <path d="M17.5 8.5a.75.75 0 0 0-.75-.75H7.25a.75.75 0 0 0 0 1.5h3.5v3.25L8.1 18.6a.75.75 0 1 0 1.3.75L12 14.5l2.6 4.85a.75.75 0 1 0 1.3-.75l-2.65-4.85V9.25h3.5a.75.75 0 0 0 .75-.75Z" />
        </svg>
      </button>

      {/* Panel overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={w.title}
          dir={t.dir}
          className="fixed bottom-0 left-0 z-50 w-full max-w-[22rem] rounded-t-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-500/10 sm:bottom-24 sm:left-6 sm:rounded-3xl"
        >
          {/* Header */}
          <div className="mb-6 flex items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-gray-900">{w.title}</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={w.close}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Font size */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{w.fontSize}</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label={w.decrease}
                onClick={() => {
                  touch()
                  setFontSize((v) => Math.max(0, v - 1))
                }}
                disabled={fontSize === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-gray-500 text-lg font-bold hover:bg-blue-50 disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                −
              </button>
              <span className="min-w-[2.5rem] text-center text-sm font-semibold text-gray-700">
                {fontSize}/{FONT_STEPS}
              </span>
              <button
                type="button"
                aria-label={w.increase}
                onClick={() => {
                  touch()
                  setFontSize((v) => Math.min(FONT_STEPS, v + 1))
                }}
                disabled={fontSize === FONT_STEPS}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-gray-500 text-lg font-bold hover:bg-blue-50 disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                +
              </button>
            </div>
          </div>

          {/* Toggles */}
          {[
            {
              id: 'high-contrast',
              label: w.highContrast,
              value: highContrast,
              set: setHighContrast,
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm0 2v12a6 6 0 0 0 0-12Z" clipRule="evenodd" />
                </svg>
              ),
            },
            {
              id: 'underline-links',
              label: w.underlineLinks,
              value: underlineLinks,
              set: setUnderlineLinks,
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M7 3a1 1 0 0 0-1 1v5a4 4 0 0 0 8 0V4a1 1 0 1 0-2 0v5a2 2 0 1 1-4 0V4a1 1 0 0 0-1-1ZM4 15a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H4Z" />
                </svg>
              ),
            },
            {
              id: 'stop-animations',
              label: w.stopAnimations,
              value: stopAnimations,
              set: setStopAnimations,
              icon: (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm4 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z" clipRule="evenodd" />
                </svg>
              ),
            },
          ].map(({ id, label, value, set, icon }) => (
            <div key={id} className="mb-4 flex items-center justify-between">
              <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer select-none">
                <span className="text-gray-400">{icon}</span>
                {label}
              </label>
              <button
                id={id}
                type="button"
                role="switch"
                aria-checked={value}
                onClick={() => {
                  touch()
                  set((v: boolean) => !v)
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                  value ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform ${
                    value ? (isRtl ? '-translate-x-5' : 'translate-x-5') : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}

          {/* Reset */}
          <button
            type="button"
            onClick={reset}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-white py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-500" aria-hidden="true">
              <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L6.053 5h2.947a6 6 0 1 1-3.734 10.646.75.75 0 1 1 .934-1.175A4.5 4.5 0 1 0 9 6.5H6.053l1.715 1.708a.75.75 0 0 1-1.036 1.085l-3-2.987a.75.75 0 0 1 0-1.085l3-2.987a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
            </svg>
            {w.reset}
          </button>
        </div>
      )}
    </>
  )
}

export default AccessibilityWidget
