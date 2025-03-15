import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Kanzap Logo"
                width={180}
                height={54}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Plataforma profissional para atendimento multicanal via WhatsApp.
              Aumente suas vendas e a satisfação dos seus clientes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Produto
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/#recursos" className="text-gray-500 hover:text-[#eb594c]">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/#precos" className="text-gray-500 hover:text-[#eb594c]">
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.kanzap.com.br/#/signup"
                  className="text-gray-500 hover:text-[#eb594c]"
                >
                  Teste Grátis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Empresa
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/sobre" className="text-gray-500 hover:text-[#eb594c]">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-500 hover:text-[#eb594c]">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#eb594c]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacidade" className="text-gray-500 hover:text-[#eb594c]">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-500 hover:text-[#eb594c]">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kanzap. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 