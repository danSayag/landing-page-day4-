import { Fragment } from 'react'
import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

type CellValue = string | boolean

const Cell = ({ value }: { value: CellValue }) => {
  if (value === true) return <span className="font-semibold text-blue-600">✓</span>
  if (value === false) return <span className="text-gray-300">—</span>
  return <span className="text-gray-600">{value}</span>
}

const PricingTable = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()
  const { t } = useLanguage()
  const pt = t.pricingTable

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pt.title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {pt.subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-12 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm shadow-blue-500/5 transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <table className="w-full min-w-[640px] border-collapse text-start text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 font-semibold text-gray-900">{pt.columns.features}</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">{pt.columns.starter}</th>
                <th className="bg-blue-50/60 px-6 py-4 text-center font-semibold text-blue-600">
                  {pt.columns.pro}
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">{pt.columns.enterprise}</th>
              </tr>
            </thead>
            <tbody>
              {pt.sections.map((section) => (
                <Fragment key={section.title}>
                  <tr className="border-b border-gray-200 bg-gray-50/60">
                    <td
                      colSpan={4}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-gray-100">
                      <td className="px-6 py-4 text-gray-600">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <Cell value={row.starter} />
                      </td>
                      <td className="bg-blue-50/40 px-6 py-4 text-center">
                        <Cell value={row.pro} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PricingTable
