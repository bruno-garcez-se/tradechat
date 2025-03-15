import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacidadePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex-grow pt-24 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#213365] to-[#eb594c]">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none prose-headings:text-[#213365] prose-a:text-[#eb594c] prose-a:no-underline hover:prose-a:underline">
                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>1. Introdução</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Sua privacidade é importante para nós. Esta política de privacidade explica como o Kanzap coleta, usa,
                    protege e compartilha suas informações pessoais.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>2. Informações que Coletamos</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Coletamos as seguintes informações:
                  </p>
                  <ul className="space-y-2 mb-8 list-none pl-0">
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Informações de conta (nome, email, telefone)</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Dados de uso do serviço</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Informações de pagamento</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Comunicações com o suporte</span>
                    </li>
                  </ul>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>3. Como Usamos suas Informações</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Utilizamos suas informações para:
                  </p>
                  <ul className="space-y-2 mb-8 list-none pl-0">
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Fornecer e melhorar nossos serviços</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Processar pagamentos</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Enviar atualizações importantes</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Fornecer suporte ao cliente</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Cumprir obrigações legais</span>
                    </li>
                  </ul>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>4. Compartilhamento de Informações</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Não vendemos suas informações pessoais. Compartilhamos informações apenas:
                  </p>
                  <ul className="space-y-2 mb-8 list-none pl-0">
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Com provedores de serviço que nos ajudam a operar o Kanzap</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Quando exigido por lei</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Com seu consentimento explícito</span>
                    </li>
                  </ul>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>5. Segurança</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra
                    acesso não autorizado, alteração, divulgação ou destruição.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>6. Seus Direitos</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Você tem direito a:
                  </p>
                  <ul className="space-y-2 mb-8 list-none pl-0">
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Acessar suas informações pessoais</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Corrigir dados imprecisos</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Solicitar a exclusão de seus dados</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Retirar seu consentimento</span>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-600">
                      <span className="inline-block w-1.5 h-1.5 bg-[#eb594c] rounded-full"></span>
                      <span>Receber seus dados em formato portável</span>
                    </li>
                  </ul>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>7. Cookies e Tecnologias Similares</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Usamos cookies e tecnologias similares para melhorar sua experiência, entender como nossos serviços
                    são usados e personalizar nosso conteúdo.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>8. Alterações nesta Política</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas
                    através de nosso site ou por email.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>9. Contato</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco em{' '}
                    <a href="mailto:kanzapinc@gmail.com" className="text-[#eb594c] hover:underline">
                      kanzapinc@gmail.com
                    </a>
                  </p>
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