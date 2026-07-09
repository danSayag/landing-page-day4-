import { useLanguage } from '../context/LanguageContext'
import { localizedHref } from '../i18n/routing'

const Footer = () => {
  const { t, lang } = useLanguage()
  return (
    <footer className="border-t border-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href={localizedHref('/', lang)} className="text-xl font-bold text-gray-900">
              Nova
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              {t.footer.description}
            </p>
          </div>
          {t.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-900">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 transition hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-sm text-gray-400">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
