import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

const avatarColors = ['bg-rose-400', 'bg-sky-400', 'bg-emerald-400']

const Testimonials = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {t.testimonials.sectionTitle}
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid gap-6 transition-all duration-700 ease-out md:grid-cols-3 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {t.testimonials.items.map((item, i) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-md shadow-blue-500/5"
            >
              <div>
                <div className="flex gap-1 text-amber-400" aria-label={t.testimonials.starsLabel}>
                  {'★★★★★'}
                </div>
                <blockquote className="mt-4 leading-relaxed text-gray-600">
                  "{item.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`h-10 w-10 rounded-full ${avatarColors[i]}`} />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
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