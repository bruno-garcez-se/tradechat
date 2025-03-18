import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LGPDPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex-grow pt-24 pb-20 bg-gradient-to-br from-[#000000]/5 via-white to-[#00FF00]/5 relative">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
              Lei Geral de Proteção de <span className="text-[#3A6604]">Dados</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda como o TradeChat está em conformidade com a LGPD
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                O que é a LGPD?
              </h2>
              <p className="text-gray-600">
                A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é a legislação brasileira que 
                regula as atividades de tratamento de dados pessoais. Seu objetivo é proteger os 
                direitos fundamentais de liberdade e de privacidade dos usuários.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Como o TradeChat se adequa à LGPD?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Processamento transparente de dados
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Consentimento explícito dos usuários
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Medidas de segurança robustas
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Política de privacidade clara e acessível
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Direitos dos Usuários
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#000000] mb-3">Acesso aos Dados</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Consulta simplificada
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Relatório detalhado
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#000000] mb-3">Correção</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Atualização de dados
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#00FF00] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Correção de informações
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Segurança dos Dados
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#000000]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#000000]">Criptografia</h3>
                    <p className="text-gray-600">Utilizamos criptografia de ponta a ponta para proteger suas informações.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#000000]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#000000]">Monitoramento</h3>
                    <p className="text-gray-600">Sistema de monitoramento contínuo para prevenir incidentes de segurança.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#3A6604] mb-4">
                Contato DPO
              </h2>
              <p className="text-gray-600">
                Para questões relacionadas à LGPD e proteção de dados, entre em contato com nosso 
                Encarregado de Proteção de Dados (DPO) através do e-mail: 
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