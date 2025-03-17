import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacidadePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex-grow pt-24 pb-20 bg-gradient-to-br from-[#213365]/5 via-white to-[#eb594c]/5 relative">
        {/* Efeito de fundo */}
        <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#213365] mb-6">
              Política de <span className="text-[#eb594c]">Privacidade</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seu direito à privacidade é uma prioridade para nós
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                Introdução
              </h2>
              <p className="text-gray-600 mb-4">
                O Kanzap está comprometido em proteger sua privacidade e seus dados pessoais. 
                Esta política de privacidade descreve como coletamos, usamos e protegemos suas 
                informações quando você utiliza nossa plataforma.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                Coleta de Dados
              </h2>
              <p className="text-gray-600 mb-4">
                Coletamos apenas as informações necessárias para fornecer nossos serviços:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Informações de conta (nome, e-mail, telefone)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Dados de uso da plataforma
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Informações de pagamento
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                Uso das Informações
              </h2>
              <p className="text-gray-600 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Fornecer e melhorar nossos serviços
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Processar pagamentos
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Enviar atualizações importantes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Fornecer suporte ao cliente
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                Proteção de Dados
              </h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Criptografia de ponta a ponta
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Monitoramento contínuo de segurança
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Backups regulares
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Controle de acesso rigoroso
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                Seus Direitos
              </h2>
              <p className="text-gray-600 mb-4">
                Você tem direito a:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Acessar seus dados pessoais
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Solicitar correções
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Solicitar exclusão de dados
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#eb594c] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Revogar consentimento
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-[#213365] mb-4">
                Contato
              </h2>
              <p className="text-gray-600">
                Para questões relacionadas à privacidade, entre em contato através do e-mail: 
                <a href="mailto:kanzapinc@gmail.com" className="text-[#eb594c] hover:underline ml-1">
                  kanzapinc@gmail.com
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