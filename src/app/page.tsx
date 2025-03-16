'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PricingSection from './components/PricingSection'
import FeaturesSection from './components/FeaturesSection'
import Header from './components/Header'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-[#213365] mb-6">
                Revolucione seu atendimento com o Kanzap
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gerencie múltiplos atendimentos pelo WhatsApp de forma profissional e eficiente. Aumente suas vendas e satisfação dos clientes.
              </p>
              <div className="flex space-x-4">
                <Link href="https://app.kanzap.com.br/#/signup" className="bg-[#213365] text-white px-8 py-3 rounded-full hover:bg-[#eb594c] transition-colors duration-300">
                  Teste Grátis por 7 dias
                </Link>
                <Link href="#precos" className="border-2 border-[#213365] text-[#213365] px-8 py-3 rounded-full hover:bg-[#eb594c] hover:border-[#eb594c] hover:text-white transition-colors duration-300">
                  Ver Planos
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
              <Image
                src="/hero-nova.png"
                alt="Kanzap Hero"
                width={425}
                height={283}
                className="w-full h-auto max-w-[425px] hover:scale-105 transition-transform duration-300"
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
          <h2 className="text-3xl font-bold text-[#213365] text-center mb-16">Planos e Preços</h2>
          <h2 className="text-3xl font-bold text-white mb-8">
            Comece agora mesmo a transformar seu atendimento
          </h2>
          <Link href="https://app.kanzap.com.br/#/signup" className="bg-white text-[#213365] px-8 py-3 rounded-full hover:bg-[#eb594c] hover:text-white transition-colors duration-300">
            Começar Agora
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#eb594c] mb-4">Kanzap</h3>
              <p className="text-gray-400">
                Sua solução completa para atendimento multicanal via WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#eb594c] mb-4">Produto</h4>
              <ul className="space-y-2">
                <li><Link href="#recursos" className="text-gray-400 hover:text-[#eb594c]">Recursos</Link></li>
                <li><Link href="#precos" className="text-gray-400 hover:text-[#eb594c]">Planos</Link></li>
                <li><Link href="#demo" className="text-gray-400 hover:text-[#eb594c]">Demonstração</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#eb594c] mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><Link href="/sobre" className="text-gray-400 hover:text-[#eb594c]">Sobre nós</Link></li>
                <li><Link href="/contato" className="text-gray-400 hover:text-[#eb594c]">Contato</Link></li>
                <li><Link href="#blog" className="text-gray-400 hover:text-[#eb594c]">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#eb594c] mb-4">Legal</h4>
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