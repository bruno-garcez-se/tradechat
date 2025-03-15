import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Entre em Contato
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>
            </div>

            <div className="mt-16 max-w-lg mx-auto">
              <ContactForm />
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    Email
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    kanzapinc@gmail.com
                  </p>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    Horário de Atendimento
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 