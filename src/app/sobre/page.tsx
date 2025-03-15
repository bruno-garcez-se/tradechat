import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Sobre o Kanzap
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Transformando o atendimento via WhatsApp em uma experiência profissional e eficiente.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Nossa História
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                O Kanzap nasceu da necessidade de profissionalizar o atendimento via WhatsApp para empresas.
                Percebemos que muitas empresas utilizavam o WhatsApp de forma desorganizada, perdendo oportunidades
                de vendas e frustrando clientes. Nossa missão é transformar o WhatsApp em uma ferramenta profissional
                de atendimento multicanal.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Nossa Missão
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Capacitar empresas a oferecerem um atendimento excepcional via WhatsApp, aumentando vendas
                e a satisfação dos clientes através de uma plataforma intuitiva e profissional.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Nossos Valores
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">Inovação</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Buscamos constantemente novas formas de melhorar a experiência de atendimento.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">Excelência</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Comprometidos com a qualidade em cada interação e funcionalidade.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">Cliente Primeiro</h3>
                  <p className="mt-2 text-base text-gray-500">
                    O sucesso dos nossos clientes é nossa principal prioridade.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="https://app.kanzap.com.br/#/signup"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#213365] hover:bg-[#1a2951] md:py-4 md:text-lg md:px-10"
              >
                Comece Agora
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 