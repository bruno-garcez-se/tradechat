'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PricingSection from './components/PricingSection'
import FeaturesSection from './components/FeaturesSection'
import MobileMenu from './components/MobileMenu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Kanzap"
                width={180}
                height={54}
                priority
                className="h-14 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#recursos" className="text-gray-600 hover:text-[#eb594c]">Recursos</Link>
              <Link href="#precos" className="text-gray-600 hover:text-[#eb594c]">Planos</Link>
              <Link href="/sobre" className="text-gray-600 hover:text-[#eb594c]">Sobre</Link>
              <Link href="/contato" className="text-gray-600 hover:text-[#eb594c]">Contato</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <Link href="https://app.kanzap.com.br/#/login" className="bg-[#213365] text-white px-6 py-2 rounded-full hover:bg-[#1a2951]">
                  Entrar
                </Link>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Revolucione seu atendimento com o Kanzap
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gerencie múltiplos atendimentos pelo WhatsApp de forma profissional e eficiente. Aumente suas vendas e satisfação dos clientes.
              </p>
              <div className="flex space-x-4">
                <Link href="https://app.kanzap.com.br/#/signup" className="bg-[#213365] text-white px-8 py-3 rounded-full hover:bg-[#1a2951]">
                  Teste Grátis por 7 dias
                </Link>
                <Link href="#precos" className="border-2 border-[#213365] text-[#213365] px-8 py-3 rounded-full hover:bg-[#213365]/5">
                  Ver Planos
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <Image
                src="/hero-image.webp"
                alt="Kanzap - Atendimento Multicanal"
                width={600}
                height={450}
                className="w-full h-auto max-w-[600px] mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="bg-[#213365] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Comece agora mesmo a transformar seu atendimento
          </h2>
          <Link href="https://app.kanzap.com.br/#/signup" className="bg-white text-[#213365] px-8 py-3 rounded-full hover:bg-gray-100 inline-block">
            Começar Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Kanzap</h3>
              <p className="text-gray-400">
                Sua solução completa para atendimento multicanal via WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><Link href="#recursos" className="text-gray-400 hover:text-[#eb594c]">Recursos</Link></li>
                <li><Link href="#precos" className="text-gray-400 hover:text-[#eb594c]">Planos</Link></li>
                <li><Link href="#demo" className="text-gray-400 hover:text-[#eb594c]">Demonstração</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><Link href="/sobre" className="text-gray-400 hover:text-[#eb594c]">Sobre nós</Link></li>
                <li><Link href="/contato" className="text-gray-400 hover:text-[#eb594c]">Contato</Link></li>
                <li><Link href="#blog" className="text-gray-400 hover:text-[#eb594c]">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacidade" className="text-gray-400 hover:text-[#eb594c]">Privacidade</Link></li>
                <li><Link href="/termos" className="text-gray-400 hover:text-[#eb594c]">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kanzap. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 