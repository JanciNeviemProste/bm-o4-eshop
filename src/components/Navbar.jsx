import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Produkty', href: '#produkty' },
  { label: 'Prečo my', href: '#preco-my' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#domov" className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
            <span className="text-2xl">🍓</span>
            <span className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Babkine Marmelády
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#produkty"
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Objednať teraz
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
            aria-label="Prepnúť menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-2 bg-gray-950/95 backdrop-blur-md border-t border-gray-800/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#produkty"
            onClick={() => setIsOpen(false)}
            className="block bg-blue-500 hover:bg-blue-400 text-white text-center px-4 py-3 rounded-lg text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Objednať teraz
          </a>
        </div>
      </div>
    </nav>
  )
}
