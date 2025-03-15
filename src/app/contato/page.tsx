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

      <section className="pt-32 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Email
                </h3>
                <p className="text-gray-600">
                  kanzapinc@gmail.com
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Horário de Atendimento
                </h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 9h às 18h
                </p>
              </div>
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