import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="flex-grow pt-24 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#213365] mb-4">
              Termos de Uso
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
                    <span>1. Aceitação dos Termos</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Ao acessar e usar o Kanzap, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
                    Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>2. Descrição do Serviço</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    O Kanzap é uma plataforma de atendimento multicanal via WhatsApp que permite às empresas gerenciar suas comunicações
                    com clientes de forma profissional e eficiente.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>3. Conta do Usuário</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Para usar o Kanzap, você precisa criar uma conta. Você é responsável por manter a confidencialidade de sua conta
                    e senha e por restringir o acesso ao seu computador.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>4. Uso Aceitável</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Você concorda em usar o Kanzap apenas para fins legais e de acordo com estes termos. Você não deve usar o serviço
                    para enviar spam, conteúdo ilegal ou prejudicial.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>5. Privacidade</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Seu uso do Kanzap é também governado por nossa Política de Privacidade, que pode ser encontrada em
                    /privacidade.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>6. Limitação de Responsabilidade</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    O Kanzap não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes
                    resultantes do uso ou da incapacidade de usar nossos serviços.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>7. Modificações do Serviço</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o serviço com ou sem aviso
                    prévio.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>8. Rescisão</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer
                    motivo, incluindo, sem limitação, se você violar os Termos.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>9. Lei Aplicável</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos
                    de disposições legais.
                  </p>

                  <h2 className="flex items-center space-x-2 text-2xl font-semibold text-[#213365] mb-6">
                    <span className="inline-block w-8 h-8 bg-[#213365] rounded-full opacity-10"></span>
                    <span>10. Contato</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em{' '}
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