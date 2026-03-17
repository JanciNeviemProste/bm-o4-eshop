import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
  const ref = useScrollAnimation()

  return (
    <section id="kontakt" ref={ref} className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="animate-on-scroll text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Napíšte nám
          </h2>
          <p className="animate-on-scroll text-gray-400 text-lg max-w-2xl mx-auto">
            Máte otázku k objednávke alebo by ste chceli vedieť viac o našich produktoch? Neváhajte nás kontaktovať — radi Vám poradíme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Meno <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Vaše meno a priezvisko"
                  className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="vas@email.sk"
                  className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Predmet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Napr. otázka k objednávke"
                  className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Správa <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Napíšte nám Vašu správu..."
                  className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Odoslať správu
              </button>
            </form>
          </div>

          <div className="animate-on-scroll space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kontaktné údaje</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-gray-300 font-medium">Adresa</p>
                    <p className="text-gray-400">Záhradná 8, 917 01 Trnava</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-gray-300 font-medium">Telefón</p>
                    <p className="text-gray-400">+421 903 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="text-gray-300 font-medium">E-mail</p>
                    <p className="text-gray-400">objednavky@babkinemarmelady.sk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="text-gray-300 font-medium">Otváracie hodiny</p>
                    <p className="text-gray-400">Po – Pi: 8:00 – 16:00</p>
                    <p className="text-gray-400">So: 9:00 – 12:00</p>
                    <p className="text-gray-400">Ne: zatvorené</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Veľkoobchodné objednávky</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Prevádzkujete kaviareň, cukráreň alebo obchod so zdravou výživou? Ponúkame zvýhodnené ceny pri odbere väčšieho množstva. Kontaktujte nás pre individuálnu cenovú ponuku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
