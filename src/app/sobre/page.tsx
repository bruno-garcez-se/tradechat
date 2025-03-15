import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <Header />
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sobre o Kanzap
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transformando o atendimento via WhatsApp em uma experiência profissional e eficiente.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600">
                O Kanzap nasceu da necessidade de profissionalizar o atendimento via WhatsApp para empresas.
                Percebemos que muitas empresas utilizavam o WhatsApp de forma desorganizada, perdendo oportunidades
                de vendas e frustrando clientes. Nossa missão é transformar o WhatsApp em uma ferramenta profissional
                de atendimento multicanal.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600">
                Capacitar empresas a oferecerem um atendimento excepcional via WhatsApp, aumentando vendas
                e a satisfação dos clientes através de uma plataforma intuitiva e profissional.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossos Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Inovação</h3>
                  <p className="text-gray-600">
                    Buscamos constantemente novas formas de melhorar a experiência de atendimento.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Excelência</h3>
                  <p className="text-gray-600">
                    Comprometidos com a qualidade em cada interação e funcionalidade.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cliente Primeiro</h3>
                  <p className="text-gray-600">
                    O sucesso dos nossos clientes é nossa principal prioridade.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="https://app.kanzap.com.br/#/signup"
                className="bg-[#213365] text-white px-8 py-3 rounded-full hover:bg-[#1a2951] inline-block"
              >
                Comece Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <Footer />
        </div>
      </footer>
    </main>
  )
} 