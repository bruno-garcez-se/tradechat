import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContatoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <Header />
        </div>
      </nav>

      <section className="flex-grow pt-32 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Email
                </h3>
                <p className="text-gray-600 text-center">
                  kanzapinc@gmail.com
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Horário de Atendimento
                </h3>
                <p className="text-gray-600 text-center">
                  Segunda a Sexta: 9h às 18h
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Endereço
                </h3>
                <p className="text-gray-600 text-center">
                  Aracaju, Sergipe<br />
                  Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 