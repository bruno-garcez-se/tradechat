import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg prose prose-lg">
            <h2>1. Introdução</h2>
            <p>
              Sua privacidade é importante para nós. Esta política de privacidade explica como o Kanzap coleta, usa,
              protege e compartilha suas informações pessoais.
            </p>

            <h2>2. Informações que Coletamos</h2>
            <p>
              Coletamos as seguintes informações:
            </p>
            <ul>
              <li>Informações de conta (nome, email, telefone)</li>
              <li>Dados de uso do serviço</li>
              <li>Informações de pagamento</li>
              <li>Comunicações com o suporte</li>
            </ul>

            <h2>3. Como Usamos suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Processar pagamentos</li>
              <li>Enviar atualizações importantes</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais. Compartilhamos informações apenas:
            </p>
            <ul>
              <li>Com provedores de serviço que nos ajudam a operar o Kanzap</li>
              <li>Quando exigido por lei</li>
              <li>Com seu consentimento explícito</li>
            </ul>

            <h2>5. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2>6. Seus Direitos</h2>
            <p>
              Você tem direito a:
            </p>
            <ul>
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento</li>
              <li>Receber seus dados em formato portável</li>
            </ul>

            <h2>7. Cookies e Tecnologias Similares</h2>
            <p>
              Usamos cookies e tecnologias similares para melhorar sua experiência, entender como nossos serviços
              são usados e personalizar nosso conteúdo.
            </p>

            <h2>8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas
              através de nosso site ou por email.
            </p>

            <h2>9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco em kanzapinc@gmail.com.
            </p>
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