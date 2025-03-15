import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Termos de Uso
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>

            <div className="mt-16 prose prose-blue mx-auto">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o Kanzap, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
                Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
              </p>

              <h2>2. Descrição do Serviço</h2>
              <p>
                O Kanzap é uma plataforma de atendimento multicanal via WhatsApp que permite às empresas gerenciar suas comunicações
                com clientes de forma profissional e eficiente.
              </p>

              <h2>3. Conta do Usuário</h2>
              <p>
                Para usar o Kanzap, você precisa criar uma conta. Você é responsável por manter a confidencialidade de sua conta
                e senha e por restringir o acesso ao seu computador.
              </p>

              <h2>4. Uso Aceitável</h2>
              <p>
                Você concorda em usar o Kanzap apenas para fins legais e de acordo com estes termos. Você não deve usar o serviço
                para enviar spam, conteúdo ilegal ou prejudicial.
              </p>

              <h2>5. Privacidade</h2>
              <p>
                Seu uso do Kanzap é também governado por nossa Política de Privacidade, que pode ser encontrada em
                /privacidade.
              </p>

              <h2>6. Limitação de Responsabilidade</h2>
              <p>
                O Kanzap não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes
                resultantes do uso ou da incapacidade de usar nossos serviços.
              </p>

              <h2>7. Modificações do Serviço</h2>
              <p>
                Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o serviço com ou sem aviso
                prévio.
              </p>

              <h2>8. Rescisão</h2>
              <p>
                Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer
                motivo, incluindo, sem limitação, se você violar os Termos.
              </p>

              <h2>9. Lei Aplicável</h2>
              <p>
                Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos
                de disposições legais.
              </p>

              <h2>10. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em kanzapinc@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 