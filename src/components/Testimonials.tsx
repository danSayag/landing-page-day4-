import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote:
      'Nova cut our shipping prep from two days to two hours. The bulk label builder alone paid for itself in the first month.',
    name: 'Sarah Chen',
    role: 'Head of Logistics, Linear Labs',
    avatar: 'bg-rose-400',
  },
  {
    quote:
      'The best operations decision we made this year. We ship twice as many packages with the same team, and nothing gets lost anymore.',
    name: 'Marcus Reid',
    role: 'VP of Operations, Brightflow',
    avatar: 'bg-sky-400',
  },
  {
    quote:
      'We replaced three separate carrier portals with Nova in a single afternoon. Every package, every update — one dashboard.',
    name: 'Elena Novak',
    role: 'Mailroom Manager, Framewise',
    avatar: 'bg-emerald-400',
  },
]

const Testimonials = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Loved by operations teams everywhere
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid gap-6 transition-all duration-700 ease-out md:grid-cols-3 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-md shadow-blue-500/5"
            >
              <div>
                <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {'★★★★★'}
                </div>
                <blockquote className="mt-4 leading-relaxed text-gray-600">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`h-10 w-10 rounded-full ${t.avatar}`} />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
