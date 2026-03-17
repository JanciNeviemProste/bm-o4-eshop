import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Hero() {
  const ref = useScrollAnimation()

  return (
    <section
      id="domov"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="animate-on-scroll text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Domáca výroba s láskou od roku 2018
            </p>
            <h1
              className="animate-on-scroll text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chuť domácich marmelád priamo k Vám
            </h1>
            <p className="animate-on-scroll text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
              Každý pohár našich marmelád a džemov je ručne vyrobený z čerstvého slovenského ovocia.
              Bez konzervantov, bez umelých farbív — len pravá ovocná chuť, ako od babičky.
            </p>
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#produkty"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Objednať teraz
              </a>
              <a
                href="#preco-my"
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                Zistiť viac
              </a>
            </div>
            <div className="animate-on-scroll mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Doprava zadarmo od 30 €
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100 % prírodné
              </span>
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
              <img
                src="https://loremflickr.com/800/800/jam,marmalade,fruit?random=1"
                alt="Domáce marmelády a džemy v sklených pohároch"
                loading="lazy"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-amber-600', 'to-orange-700')
                  e.target.parentElement.innerHTML = '<span class="text-6xl flex items-center justify-center w-full h-full">🍓</span>'
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-sm">
              Akcia – ušetrite ešte dnes
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
