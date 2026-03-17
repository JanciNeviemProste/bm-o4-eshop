import useScrollAnimation from '../hooks/useScrollAnimation'

const FEATURES = [
  {
    icon: '🍎',
    title: 'Čerstvé slovenské ovocie',
    description:
      'Ovocie pre naše marmelády pochádza výlučne od lokálnych pestovateľov z okolia Trnavy a Nitry. Zbierame ho v plnej zrelosti, aby sme zachovali maximum chuti a vitamínov. Kvalitu každej dodávky prísne kontrolujeme.',
  },
  {
    icon: '📜',
    title: 'Tradičné rodinné recepty',
    description:
      'Naše recepty prechádzajú z generácie na generáciu už viac ako 60 rokov. Varíme podľa osvedčených postupov starej mamy, ktoré zaručujú autentickú domácu chuť. Každý recept sme jemne prispôsobili modernému vkusu.',
  },
  {
    icon: '🌿',
    title: 'Bez umelých prísad',
    description:
      'V našich marmeládach nenájdete žiadne konzervačné látky, umelé farbivá ani zahusťovadlá. Používame len ovocie, trstinový cukor a prírodný pektín z jabĺk. Čistá chuť bez kompromisov.',
  },
  {
    icon: '🫙',
    title: 'Ručná malovýroba',
    description:
      'Každý pohár naplníme a uzavrieme ručne. Varíme v malých dávkach po maximálne 10 kilogramov, vďaka čomu dokážeme kontrolovať kvalitu každého jedného kusu. Nie sme fabrika — sme rodina.',
  },
  {
    icon: '🚚',
    title: 'Rýchle a bezpečné doručenie',
    description:
      'Objednávky expedujeme do 24 hodín. Každý pohár starostlivo zabalíme do ochranného materiálu, aby prišiel v perfektnom stave. Pri objednávke nad 30 € je doprava po celom Slovensku zadarmo.',
  },
  {
    icon: '🎁',
    title: 'Darčekové balenia',
    description:
      'Hľadáte originálny darček? Pripravíme Vám krásne darčekové balenie s výberom troch alebo šiestich marmelád podľa Vášho výberu. Každé balenie doplníme drevenou lyžičkou a osobným venovaním.',
  },
]

export default function Features() {
  const ref = useScrollAnimation()

  return (
    <section id="preco-my" ref={ref} className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prečo si vybrať naše marmelády
          </h2>
          <p className="animate-on-scroll text-gray-400 text-lg max-w-2xl mx-auto">
            Za každým pohárom stojí poctivá práca, kvalitné suroviny a láska k tradičným receptom. Tu je šesť dôvodov, prečo si nás obľúbili stovky zákazníkov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30"
            >
              <span className="text-4xl block mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
