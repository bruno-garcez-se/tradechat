import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex-grow pt-24 pb-20 bg-gradient-to-br from-[#000000]/5 via-white to-[#00FF00]/5 relative">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              Termos de <span className="text-[#3A6604]">Uso</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leia atentamente os termos e condições de uso da nossa plataforma
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Aceitação dos Termos
              </h2>
              <p className="text-gray-600">
                Ao acessar e usar o TradeChat, você concorda em cumprir estes termos de uso. 
                Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Uso do Serviço
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Você deve ter pelo menos 18 anos para usar o serviço
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Você é responsável por manter a confidencialidade de sua conta
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  O uso do serviço deve estar em conformidade com todas as leis aplicáveis
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Assinatura e Pagamentos
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Os preços e planos estão sujeitos a alterações
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cobranças são feitas mensalmente ou anualmente, conforme o plano escolhido
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Reembolsos seguem nossa política específica
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Propriedade Intelectual
              </h2>
              <p className="text-gray-600 mb-4">
                Todo o conteúdo do TradeChat, incluindo mas não limitado a:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Logotipos, marcas e designs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Software e código-fonte
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Textos e materiais visuais
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                São de propriedade exclusiva do TradeChat e protegidos por leis de propriedade intelectual.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Limitação de Responsabilidade
              </h2>
              <p className="text-gray-600 mb-4">
                O TradeChat não se responsabiliza por:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Interrupções ou erros no serviço
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Perda de dados ou danos indiretos
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Ações de terceiros
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Modificações dos Termos
              </h2>
              <p className="text-gray-600">
                O TradeChat reserva-se o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão notificadas através de nosso site ou por e-mail. 
                O uso continuado do serviço após as alterações constitui aceitação dos novos termos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Contato
              </h2>
              <p className="text-gray-600">
                Para questões relacionadas aos termos de uso, entre em contato através do e-mail: 
                <a href="mailto:tradechat@gmail.com" className="text-[#00FF00] hover:underline ml-1">
                  tradechat@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 