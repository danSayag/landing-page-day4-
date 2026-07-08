import { useState } from 'react'

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/#faq' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm shadow-blue-500/5 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 relative">
        <a href="/" className="text-xl font-bold text-gray-900">
          Nova
        </a>
        <div className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 transition hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3">
          <a
            href="/#cta"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900 sm:hidden"
            >
             
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
