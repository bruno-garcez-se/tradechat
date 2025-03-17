import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex-grow pt-24 pb-20 bg-gradient-to-br from-[#213365]/5 via-white to-[#eb594c]/5 relative">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#213365] mb-6">
              Sobre o <span className="text-[#eb594c]">Kanzap</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformando o atendimento ao cliente através da tecnologia e inovação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                  Nossa História
                </h2>
                <p className="text-gray-600">
                  O Kanzap nasceu da necessidade de simplificar e otimizar o atendimento ao cliente. 
                  Desenvolvemos uma plataforma que integra múltiplos canais de comunicação, permitindo 
                  que empresas gerenciem todas as suas conversas em um único lugar.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                  Nossa Missão
                </h2>
                <p className="text-gray-600">
                  Capacitar empresas com ferramentas inteligentes de comunicação, tornando o 
                  atendimento ao cliente mais eficiente, personalizado e humano. Buscamos 
                  revolucionar a forma como as empresas se conectam com seus clientes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                  Nossos Valores
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#eb594c] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Inovação constante
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#eb594c] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Excelência no atendimento
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#eb594c] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Compromisso com resultados
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#eb594c] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Transparência e confiança
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                  Por que escolher o Kanzap?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#213365]/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#213365]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#213365]">Tecnologia de Ponta</h3>
                      <p className="text-gray-600">Plataforma moderna e intuitiva, constantemente atualizada com as últimas inovações.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#213365]/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#213365]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#213365]">Segurança Garantida</h3>
                      <p className="text-gray-600">Proteção de dados e criptografia de ponta a ponta em todas as conversas.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#213365]/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#213365]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#213365]">Suporte Especializado</h3>
                      <p className="text-gray-600">Equipe dedicada para ajudar você a aproveitar ao máximo nossa plataforma.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                  Nossa Equipe
                </h2>
                <p className="text-gray-600 mb-6">
                  Somos uma equipe apaixonada por tecnologia e inovação, comprometida em 
                  oferecer as melhores soluções para nossos clientes. Nossa diversidade 
                  de experiências e habilidades nos permite criar soluções únicas e eficientes.
                </p>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/team.jpg"
                    alt="Equipe Kanzap"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 