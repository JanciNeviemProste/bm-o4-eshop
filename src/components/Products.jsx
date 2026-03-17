import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const PRODUCTS = [
  {
    id: 1,
    name: 'Jahodová marmeláda',
    description: 'Sladké jahody z podunajských sadov, jemne dochutené vanilkou. Ideálna na raňajkové pečivo.',
    price: 4.90,
    oldPrice: 5.90,
    badge: 'Zľava 20 %',
    image: 'https://loremflickr.com/600/600/strawberry,jam?random=2',
    alt: 'Pohár domácej jahodovej marmelády',
  },
  {
    id: 2,
    name: 'Marhuľový džem',
    description: 'Slnkom vyhrievané marhule z južného Slovenska. Hustá konzistencia plná ovocných kúskov.',
    price: 4.50,
    oldPrice: null,
    badge: null,
    image: 'https://loremflickr.com/600/600/apricot,jam,preserve?random=3',
    alt: 'Pohár domáceho marhuľového džemu',
  },
  {
    id: 3,
    name: 'Čučoriedková marmeláda',
    description: 'Lesné čučoriedky zbierané ručne v Malých Karpatoch. Výrazná chuť s jemnou kyslosťou.',
    price: 5.90,
    oldPrice: null,
    badge: 'Obľúbená',
    image: 'https://loremflickr.com/600/600/blueberry,jam?random=4',
    alt: 'Pohár domácej čučoriedkovej marmelády',
  },
  {
    id: 4,
    name: 'Slivkový lekvár',
    description: 'Tradičný recept podľa starej mamy. Varený v medenom kotlíku celých osem hodín bez pridaného cukru.',
    price: 5.50,
    oldPrice: 6.90,
    badge: 'Zľava 20 %',
    image: 'https://loremflickr.com/600/600/plum,preserve?random=5',
    alt: 'Pohár domáceho slivkového lekváru',
  },
  {
    id: 5,
    name: 'Malinový džem',
    description: 'Voňavé maliny z ekologického pestovania. Minimálne tepelné spracovanie zachováva čerstvú chuť.',
    price: 5.20,
    oldPrice: null,
    badge: 'Novinka',
    image: 'https://loremflickr.com/600/600/raspberry,jam?random=6',
    alt: 'Pohár domáceho malinového džemu',
  },
  {
    id: 6,
    name: 'Ríbezľová marmeláda',
    description: 'Červené ríbezle dodávajú pikantne kyslú chuť. Výborná k syrám alebo ako základ na omáčky.',
    price: 4.70,
    oldPrice: null,
    badge: null,
    image: 'https://loremflickr.com/600/600/currant,jam,berry?random=7',
    alt: 'Pohár domácej ríbezľovej marmelády',
  },
]

function ProductCard({ product }) {
  return (
    <div className="animate-on-scroll group bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-amber-600', 'to-orange-700')
            e.target.parentElement.innerHTML = '<span class="text-4xl flex items-center justify-center w-full h-full">🍯</span>'
          }}
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-semibold shadow-md ${
            product.badge.includes('Zľava')
              ? 'bg-red-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">{product.price.toFixed(2).replace('.', ',')} €</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">{product.oldPrice.toFixed(2).replace('.', ',')} €</span>
            )}
          </div>
        </div>
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm"
          aria-label={`Pridať ${product.name} do košíka`}
        >
          Pridať do košíka
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  const ref = useScrollAnimation()
  const [filter, setFilter] = useState('all')

  const filters = [
    { key: 'all', label: 'Všetky produkty' },
    { key: 'sale', label: 'V akcii' },
    { key: 'new', label: 'Novinky' },
  ]

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'sale') return p.oldPrice !== null
    if (filter === 'new') return p.badge === 'Novinka'
    return true
  })

  return (
    <section id="produkty" ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Naše domáce marmelády a džemy
          </h2>
          <p className="animate-on-scroll text-gray-400 text-lg max-w-2xl mx-auto">
            Vyberte si z ponuky ručne vyrábaných pochúťok. Každý pohár obsahuje kúsok slovenskej prírody a starostlivosti.
          </p>
        </div>

        <div className="animate-on-scroll flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                filter === f.key
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-gray-400 text-sm">
            Doprava zadarmo pri objednávke nad 30 € · Doručenie do 2–3 pracovných dní
          </p>
        </div>
      </div>
    </section>
  )
}
