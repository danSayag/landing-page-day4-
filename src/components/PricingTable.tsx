import { Fragment } from 'react'
import { useInView } from '../hooks/useInView'

type CellValue = string | boolean

interface Row {
  feature: string
  starter: CellValue
  pro: CellValue
  enterprise: CellValue
}

const sections: { title: string; rows: Row[] }[] = [
  {
    title: 'Shipping',
    rows: [
      { feature: 'Monthly shipments', starter: 'Up to 50', pro: 'Unlimited', enterprise: 'Unlimited' },
      { feature: 'Bulk label creation', starter: false, pro: true, enterprise: true },
      { feature: 'Scheduled pickups', starter: true, pro: true, enterprise: true },
      { feature: 'Automatic carrier selection', starter: false, pro: true, enterprise: true },
      { feature: 'Discounted carrier rates', starter: false, pro: true, enterprise: 'Custom rates' },
    ],
  },
  {
    title: 'Tracking & analytics',
    rows: [
      { feature: 'Real-time tracking', starter: true, pro: true, enterprise: true },
      { feature: 'Delivery alerts', starter: false, pro: true, enterprise: true },
      { feature: 'Advanced analytics', starter: false, pro: true, enterprise: true },
      { feature: 'Carrier performance reports', starter: false, pro: true, enterprise: true },
    ],
  },
  {
    title: 'Team & security',
    rows: [
      { feature: 'Team members', starter: '1', pro: 'Up to 20', enterprise: 'Unlimited' },
      { feature: 'Automation builder', starter: false, pro: true, enterprise: true },
      { feature: 'Role-based access control', starter: false, pro: true, enterprise: true },
      { feature: 'SSO & audit logs', starter: false, pro: false, enterprise: true },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: 'Support level', starter: 'Community', pro: 'Priority', enterprise: 'Dedicated manager' },
      { feature: 'SLA & custom contracts', starter: false, pro: false, enterprise: true },
    ],
  },
]

const Cell = ({ value }: { value: CellValue }) => {
  if (value === true) return <span className="font-semibold text-blue-600">✓</span>
  if (value === false) return <span className="text-gray-300">—</span>
  return <span className="text-gray-600">{value}</span>
}

const PricingTable = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare plans
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you get with each tier, side by side.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-12 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm shadow-blue-500/5 transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 font-semibold text-gray-900">Features</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Starter</th>
                <th className="bg-blue-50/60 px-6 py-4 text-center font-semibold text-blue-600">
                  Pro
                </th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
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
