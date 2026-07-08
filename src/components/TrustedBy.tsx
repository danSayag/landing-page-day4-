const companies = [
  'Linear Labs',
  'Brightflow',
  'Framewise',
  'Northwind',
  'Atlas Retail',
  'Corex Group',
]

const TrustedBy = () => {
  return (
    <section id="customers" className="border-y border-gray-100 bg-gray-50/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          Who we work with
        </p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-base font-bold tracking-tight text-gray-400 transition hover:text-gray-600 sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
