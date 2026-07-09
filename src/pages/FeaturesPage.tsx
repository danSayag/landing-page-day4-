import { useEffect, useRef, useState, type ReactNode } from 'react'
import { features } from '../data/features'
import { useLanguage } from '../context/LanguageContext'
import { localizedHref } from '../i18n/routing'

// ── Panel specs: what the dashboard mock shows at each scroll step ──────────
type PanelSpec =
  | { kind: 'map' }
  | { kind: 'sort' }
  | { kind: 'bars' }
  | { kind: 'stats'; items: { value: string; label: string }[] }
  | { kind: 'table'; rows: { main: string; sub: string; badge: string; tone: Tone }[] }
  | { kind: 'bubbles'; items: { title: string; sub: string; accent?: boolean }[] }
  | { kind: 'timeline'; done: number; labels: string[] }
  | { kind: 'roster'; rows: { name: string; role: string; pct: number }[] }

type Tone = 'blue' | 'green' | 'amber' | 'rose'

const TONE: Record<Tone, string> = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-100 text-green-700',
  amber: 'bg-amber-100 text-amber-700',
  rose: 'bg-rose-100 text-rose-700',
}

type Step = { title: string; text: string; panel: PanelSpec }

// Which sidebar tab (by index) lights up for each feature — language-independent
const navIndex: Record<string, number> = {
  'package-tracking': 1,
  'mail-sorting': 2,
  'customer-notifications': 3,
  'staff-management': 4,
  'delivery-status': 5,
  'reports-analytics': 6,
}

// ── Mock panels ──────────────────────────────────────────────────────────────
function StatsPanel({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg bg-blue-50 p-2 text-center">
          <p className="text-base font-bold text-blue-600">{item.value}</p>
          <p className="text-[11px] text-gray-500">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

function TablePanel({ rows }: { rows: { main: string; sub: string; badge: string; tone: Tone }[] }) {
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row) => (
        <div key={row.main + row.sub} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5">
          <div>
            <p className="text-xs font-semibold text-gray-800">{row.main}</p>
            <p className="text-[11px] text-gray-400">{row.sub}</p>
          </div>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${TONE[row.tone]}`}>{row.badge}</span>
        </div>
      ))}
    </div>
  )
}

function BubblesPanel({ items }: { items: { title: string; sub: string; accent?: boolean }[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div
          key={item.title}
          className={`rounded-xl px-3 py-1.5 ${item.accent ? 'bg-blue-600 text-white' : 'border border-gray-100 bg-white shadow-sm'}`}
        >
          <p className={`text-xs font-semibold ${item.accent ? 'text-white' : 'text-gray-800'}`}>{item.title}</p>
          <p className={`text-[11px] ${item.accent ? 'text-blue-100' : 'text-gray-400'}`}>{item.sub}</p>
        </div>
      ))}
    </div>
  )
}

function TimelinePanel({ done, labels }: { done: number; labels: string[] }) {
  return (
    <div className="px-2 py-4">
      <div className="relative flex items-center justify-between">
        <div className="hc-line absolute inset-x-2 top-1/2 h-1 -translate-y-1/2 rounded bg-gray-200" />
        <div
          className="absolute top-1/2 left-2 h-1 -translate-y-1/2 rounded bg-blue-600 transition-all duration-700"
          style={{ width: `${(Math.max(done - 1, 0) / (labels.length - 1)) * 100}%` }}
        />
        {labels.map((label, i) => (
          <div key={label} className="relative flex flex-col items-center gap-2">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-white ${
                i < done ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'
              }`}
            >
              {i < done && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className="absolute top-9 text-[10px] whitespace-nowrap text-gray-500">{label}</span>
          </div>
        ))}
      </div>
      <div className="h-6" />
    </div>
  )
}

function RosterPanel({ rows }: { rows: { name: string; role: string; pct: number }[] }) {
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row) => (
        <div key={row.name} className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-1.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-blue-600">
            {row.name.split(' ').map((w) => w[0]).join('')}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-gray-800">{row.name}</p>
            <p className="text-[11px] text-gray-400">{row.role}</p>
          </div>
          <div className="hc-line h-1.5 w-20 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full rounded-full bg-blue-600" style={{ width: `${row.pct}%` }} />
          </div>
          <span className="w-9 text-end text-[10px] font-semibold text-gray-500">{row.pct}%</span>
        </div>
      ))}
    </div>
  )
}

function MapPanel() {
  return (
    <svg viewBox="0 0 400 220" className="h-full min-h-24 w-full rounded-xl border border-blue-50 bg-linear-to-br from-blue-50 to-slate-100" aria-hidden="true">
      <rect x="185" y="115" width="60" height="42" rx="8" fill="#d1fae5" />
      <rect x="80" y="48" width="66" height="40" rx="8" fill="#e2e8f0" opacity="0.6" />
      <g stroke="#ffffff" strokeWidth="10" strokeLinecap="round">
        <path d="M-10 38 H410" />
        <path d="M-10 104 H410" />
        <path d="M-10 170 H410" />
        <path d="M70 -10 V230" />
        <path d="M165 -10 V230" />
        <path d="M262 -10 V230" />
        <path d="M348 -10 V230" />
      </g>
      <path d="M30 170 H165 V104 H262 V38 H348" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 9" />
      <circle cx="30" cy="170" r="6" fill="#ffffff" stroke="#2563eb" strokeWidth="3" />
      <path d="M348 20c-7 0-12 5-12 11.5C336 40 348 50 348 50s12-10 12-18.5C360 25 355 20 348 20Z" fill="#2563eb" />
      <circle cx="348" cy="32" r="4" fill="#ffffff" />
      <g>
        <circle r="5.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
        <animateMotion dur="8s" repeatCount="indefinite" path="M30 170 H165 V104 H262 V38 H348" />
      </g>
    </svg>
  )
}

function SortPanel() {
  const lanes = [
    'M14 55 H58 C82 55 84 22 108 22 H188',
    'M14 55 H188',
    'M14 55 H58 C82 55 84 88 108 88 H188',
  ]
  return (
    <svg viewBox="0 0 220 110" className="h-full min-h-24 w-full rounded-xl border border-blue-50 bg-linear-to-br from-blue-50 to-slate-100" aria-hidden="true">
      <g fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 7">
        {lanes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="#dbeafe" stroke="#bfdbfe" strokeWidth="1.5">
        <rect x="184" y="12" width="26" height="20" rx="5" />
        <rect x="184" y="45" width="26" height="20" rx="5" />
        <rect x="184" y="78" width="26" height="20" rx="5" />
      </g>
      {lanes.map((d, i) => (
        <g key={d}>
          <rect x="-6" y="-6" width="12" height="12" rx="2.5" fill="#2563eb" />
          <path d="M0 -6 V6" stroke="#ffffff" strokeWidth="2" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4.8s" begin={`${-i * 1.6}s`} repeatCount="indefinite" />
          <animateMotion dur="4.8s" begin={`${-i * 1.6}s`} repeatCount="indefinite" path={d} />
        </g>
      ))}
    </svg>
  )
}

function BarsPanel() {
  const { t } = useLanguage()
  const bars = [
    { x: 20, h: 28 },
    { x: 60, h: 45 },
    { x: 100, h: 38 },
    { x: 140, h: 60 },
    { x: 180, h: 50 },
    { x: 220, h: 72, highlight: true },
  ]
  return (
    <div className="relative h-full">
      <svg viewBox="0 0 280 110" className="h-full min-h-24 w-full rounded-xl border border-blue-50 bg-linear-to-br from-blue-50 to-slate-100" aria-hidden="true">
        <g stroke="#e2e8f0" strokeWidth="1">
          <path d="M14 20 H266" />
          <path d="M14 45 H266" />
          <path d="M14 70 H266" />
          <path d="M14 95 H266" />
        </g>
        {bars.map(({ x, h, highlight }) => (
          <rect key={x} x={x} y={95 - h} width="26" height={h} rx="4" fill={highlight ? '#2563eb' : '#bfdbfe'} />
        ))}
      </svg>
      <span className="absolute top-3 end-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-green-600 shadow-sm backdrop-blur">
        {t.featuresPage.barsBadge}
      </span>
    </div>
  )
}

function Panel({ spec }: { spec: PanelSpec }) {
  switch (spec.kind) {
    case 'map': return <MapPanel />
    case 'sort': return <SortPanel />
    case 'bars': return <BarsPanel />
    case 'stats': return <StatsPanel items={spec.items} />
    case 'table': return <TablePanel rows={spec.rows} />
    case 'bubbles': return <BubblesPanel items={spec.items} />
    case 'timeline': return <TimelinePanel done={spec.done} labels={spec.labels} />
    case 'roster': return <RosterPanel rows={spec.rows} />
  }
}

// ── Dashboard mock frame ─────────────────────────────────────────────────────
function DashboardFrame({
  activeIndex,
  popKey = 0,
  children,
}: {
  activeIndex: number
  popKey?: number
  children: ReactNode
}) {
  const { t } = useLanguage()
  const fp = t.featuresPage
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-blue-50">
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <span className="ms-3 text-xs font-medium text-gray-400">{fp.dashboardName}</span>
      </div>
      <div className="flex">
        <div className="hidden w-36 shrink-0 flex-col gap-1 border-e border-gray-100 bg-gray-50/60 p-3 sm:flex">
          {fp.sidebar.map((item, i) => {
            const isActive = i === activeIndex
            return (
              <span
                // Re-mount the active tab whenever popKey changes so the pop animation replays.
                key={isActive ? `${item}-${popKey}` : item}
                className={`origin-center rounded-md px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 animate-[sidebar-pop_0.5s_ease-out]'
                    : 'text-gray-400'
                }`}
              >
                {item}
              </span>
            )
          })}
        </div>
        {/* Fixed height so every mini dashboard renders the same size;
            short content is centred, flexible panels absorb the rest. */}
        <div className="h-112 min-w-0 flex-1 p-4">
          <div className="flex h-full flex-col justify-center">{children}</div>
        </div>
      </div>
    </div>
  )
}

// ── Scroll-spy: one IntersectionObserver reports the centred block ───────────
// Watches every tracked element and returns the index of the one inside the
// viewport's central band. State only changes when the active index changes, so
// scrolling stays cheap (no scroll listeners, no per-frame work).
function useScrollSpy(count: number, band = 0.4) {
  const [active, setActive] = useState(0)
  const els = useRef<(HTMLElement | null)[]>([])
  const collect = (i: number) => (el: HTMLElement | null) => {
    els.current[i] = el
  }

  useEffect(() => {
    const margin = `${Math.round(band * 100)}%`
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = els.current.indexOf(entry.target as HTMLElement)
            if (i !== -1) setActive((prev) => (prev === i ? prev : i))
          }
        }
      },
      // Negative top/bottom margins shrink the root to a central strip.
      { rootMargin: `-${margin} 0px -${margin} 0px`, threshold: 0 },
    )
    els.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [count, band])

  return { active, collect }
}

// ── One feature group: centred major header, then the two-column story ───────
function FeatureGroup({
  feature,
  steps,
  title,
  description,
}: {
  feature: (typeof features)[number]
  steps: Step[]
  title: string
  description: string
}) {
  const { t, lang } = useLanguage()
  const fp = t.featuresPage
  const { active, collect } = useScrollSpy(steps.length)
  const sidebarIndex = navIndex[feature.slug] ?? 0

  // Replay the sidebar tab's pop each time this feature scrolls into view.
  const [popKey, setPopKey] = useState(0)
  const sectionRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPopKey((k) => k + 1)
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id={feature.slug} className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* MAJOR HEADER — centred on the page, describes this dashboard page */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 [&>svg]:h-6 [&>svg]:w-6">
            {feature.icon}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg text-gray-600">{description}</p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* LEFT — subheaders, scrolling normally */}
          <div>
            {steps.map((step, i) => (
              <div
                key={step.title}
                ref={collect(i)}
                className="flex flex-col justify-center py-10 lg:min-h-[62vh] lg:py-0"
              >
                <h3
                  className={`text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-300 ${
                    active === i ? 'text-gray-900' : 'text-gray-900 lg:text-gray-400'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-3 text-lg leading-8 transition-colors duration-300 ${
                    active === i ? 'text-gray-600' : 'text-gray-600 lg:text-gray-400'
                  }`}
                >
                  {step.text}
                </p>
                {/* small CTA under the group's last text */}
                {i === steps.length - 1 && (
                  <div className="mt-6">
                    <a
                      href={localizedHref('/pricing', lang)}
                      className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {fp.startTrial}
                    </a>
                  </div>
                )}
                {/* MOBILE — each step carries its own dashboard (stacked layout) */}
                <div className="mt-8 lg:hidden">
                  <DashboardFrame activeIndex={sidebarIndex}>
                    <Panel spec={step.panel} />
                  </DashboardFrame>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — sticky dashboard showing this feature's whole "page";
              the active subheader's component pops, the rest recede */}
          <div className="hidden lg:block">
            <div className="sticky top-24 py-12">
              <DashboardFrame activeIndex={sidebarIndex} popKey={popKey}>
                <div className="flex h-full flex-col justify-between gap-2">
                  {steps.map((step, si) => (
                    <div
                      // Re-key the newly active card so its pop animation replays.
                      // Flexible SVG panels absorb the leftover height so every
                      // feature's "page" fills the frame identically.
                      key={si === active ? `on-${si}` : `off-${si}`}
                      className={`min-h-0 rounded-xl p-1 transition-all duration-300 ${
                        ['map', 'sort', 'bars'].includes(step.panel.kind) ? 'flex-1' : ''
                      } ${
                        si === active
                          ? 'bg-blue-50/40 ring-2 ring-blue-500 shadow-lg shadow-blue-500/10 animate-[sidebar-pop_0.5s_ease-out]'
                          : 'scale-[0.98] opacity-40'
                      }`}
                    >
                      <Panel spec={step.panel} />
                    </div>
                  ))}
                </div>
              </DashboardFrame>
              {/* one progress dot per subheader */}
              <div className="mt-6 flex justify-center gap-2">
                {steps.map((step, i) => (
                  <span
                    key={step.title}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === i ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── All feature groups, one after another ────────────────────────────────────
function FeatureShowcase() {
  const { t } = useLanguage()
  const stories = t.featuresPage.stories as unknown as Record<string, Step[]>
  const items = t.features.items as Record<string, { title: string; description: string }>

  return (
    <>
      {features.map((feature) => (
        <FeatureGroup
          key={feature.slug}
          feature={feature}
          steps={
            stories[feature.slug] ??
            ([{ title: feature.title, text: feature.detail, panel: { kind: 'map' } }] as Step[])
          }
          title={items[feature.slug]?.title ?? feature.title}
          description={items[feature.slug]?.description ?? feature.description}
        />
      ))}
    </>
  )
}

// ── Page: all features, one scroll story after another ──────────────────────
const FeaturesPage = () => {
  const { t, lang } = useLanguage()
  const fp = t.featuresPage

  // Deep links like /features#package-tracking must scroll to their section.
  // On a fresh SPA load the target isn't in the DOM when the browser first
  // tries to jump, so we scroll ourselves (retrying until the section renders).
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    let tries = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ block: 'start' })
      } else if (tries++ < 10) {
        setTimeout(tryScroll, 60)
      }
    }
    tryScroll()
  }, [])

  return (
    <div className="pt-16">
      <section className="bg-linear-to-b from-blue-50 via-white to-white">
        <div className="mx-auto max-w-3xl px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            {fp.badge}
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {fp.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {fp.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={localizedHref('/pricing', lang)}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
            >
              {fp.startTrial}
            </a>
            <a
              href={localizedHref('/pricing', lang)}
              className="w-full rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
            >
              {fp.seePricing}
            </a>
          </div>
          <p className="mt-8 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            {fp.scrollToExplore}
          </p>
        </div>
      </section>

      <FeatureShowcase />

      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {fp.closing.title}
          </h2>
          <p className="mt-3 text-gray-600">
            {fp.closing.text}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={localizedHref('/pricing', lang)}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
            >
              {fp.startTrial}
            </a>
            <a
              href={localizedHref('/pricing', lang)}
              className="w-full rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
            >
              {fp.seePricing}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
