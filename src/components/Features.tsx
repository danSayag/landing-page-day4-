import { features } from '../data/features'
import { useInView } from '../hooks/useInView'

const sizeClasses: Record<string, string> = {
  large: 'lg:row-span-3',
  small: '',
  wide: 'sm:col-span-2',
}

const Features = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <section id="features" className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Features
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Everything your operation needs
          </h2>
          <p className="mt-3 text-base text-gray-500">
            One platform for your entire shipping operation — from mailroom to doorstep.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-8 grid grid-cols-1 gap-3 transition-all duration-700 ease-out sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {features.map((feature) => (
            <a
              key={feature.slug}
              href={`/features#${feature.slug}`}
              className={`flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 ${sizeClasses[feature.size]}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 [&>svg]:h-4 [&>svg]:w-4">
                  {feature.icon}
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="mt-1.5 text-xs leading-5 text-gray-500">{feature.description}</p>
              <div
                className={`relative mt-2.5 overflow-hidden rounded-lg border border-blue-50 bg-linear-to-br from-blue-50 to-slate-100 ${
                  feature.size === 'large' ? 'flex-1 min-h-40' : 'h-24'
                }`}
              >
                {feature.visual}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
