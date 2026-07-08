import { useInView } from '../hooks/useInView'

const CTA = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center transition-all duration-700 ease-out sm:px-16 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to ship faster?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Join 12,000+ companies already shipping with Nova. Start your free 14-day
            trial today — no credit card required.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-600 transition hover:bg-blue-50 sm:w-auto"
            >
              Start free trial
            </a>
            <a
              href="#"
              className="w-full rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
