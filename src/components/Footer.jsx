const FOOTER_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Produkty', href: '#produkty' },
  { label: 'Prečo my', href: '#preco-my' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍓</span>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Babkine Marmelády
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Malý rodinný e-shop s domácimi marmeládami a džemami. Varíme s láskou od roku 2018 z čerstvého slovenského ovocia.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigácia</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Záhradná 8, 917 01 Trnava</li>
              <li>+421 903 456 789</li>
              <li>objednavky@babkinemarmelady.sk</li>
              <li>IČO: 52 345 678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2018 – 2026 Babkine Marmelády. Všetky práva vyhradené.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1">
              Obchodné podmienky
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1">
              Ochrana súkromia
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
