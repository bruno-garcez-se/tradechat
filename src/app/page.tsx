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
                Revolucione seu atendimento com o <span className="text-white">Kanzap</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gerencie múltiplos atendimentos pelo WhatsApp de forma profissional e eficiente. Aumente suas vendas e satisfação dos clientes.
              </p>
              <div className="flex space-x-4">
                <Link href="https://app.kanzap.com.br/#/signup" className="bg-[#213365] text-white px-8 py-3 rounded-full hover:bg-[#eb594c] transition-colors duration-300">
                  Teste Grátis por 7 dias
                </Link>
                <Link href="#precos" className="bg-[#eb594c] text-white px-8 py-3 rounded-full hover:bg-[#213365] transition-colors duration-300">
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

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#213365] mb-4">
              Integração Multicanal
            </h2>
            <p className="text-xl text-gray-600">
              Centralize todas as suas conversas em um único lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213365]">CRM WhatsApp</h3>
              </div>
              <p className="text-gray-600">
                Gerencie todas as conversas do WhatsApp em uma única plataforma. Organize, responda e acompanhe o histórico completo dos seus clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213365]">Facebook Messenger</h3>
              </div>
              <p className="text-gray-600">
                Automatize respostas para as dúvidas mais comuns dos seus clientes no Messenger. Mantenha um atendimento ágil e eficiente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213365]">Instagram Direct</h3>
              </div>
              <p className="text-gray-600">
                Monitore e responda todas as mensagens do Direct em tempo real. Seus consultores terão acesso a todas as conversas em um só lugar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm5.144 14.5h-10.288c-.472 0-.856-.384-.856-.857v-7.286c0-.473.384-.857.856-.857h10.288c.472 0 .856.384.856.857v7.286c0 .473-.384.857-.856.857z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#213365]">Web Chat</h3>
              </div>
              <p className="text-gray-600">
                Integre nosso chat diretamente no seu site. Ofereça atendimento instantâneo e profissional aos visitantes da sua página.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#213365] via-[#1a2951] to-[#eb594c] py-20">
        {/* Ícones Flutuantes */}
        <div className="absolute inset-0 w-full h-full">
          {/* WhatsApp */}
          <div className="absolute top-[20%] left-[10%] animate-float-slow">
            <svg className="w-10 h-10 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          {/* Instagram */}
          <div className="absolute top-[40%] right-[15%] animate-float-normal">
            <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </div>
          {/* Facebook */}
          <div className="absolute bottom-[30%] left-[20%] animate-float-fast">
            <svg className="w-9 h-9 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </svg>
          </div>
          {/* Mercado Livre */}
          <div className="absolute top-[60%] right-[25%] animate-float-slow">
            <svg className="w-8 h-8 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
            </svg>
          </div>
          {/* Email */}
          <div className="absolute bottom-[20%] right-[10%] animate-float-normal">
            <svg className="w-10 h-10 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm5.144 14.5h-10.288c-.472 0-.856-.384-.856-.857v-7.286c0-.473.384-.857.856-.857h10.288c.472 0 .856.384.856.857v7.286c0 .473-.384.857-.856.857z"/>
            </svg>
          </div>
          {/* Telegram */}
          <div className="absolute top-[30%] left-[30%] animate-float-fast">
            <svg className="w-9 h-9 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.692 14.889c.161.115.368.143.553.073.185-.07.322-.228.354-.422.319-1.924 1.486-8.877 1.486-8.877.069-.398-.127-.789-.479-.992-.351-.202-.786-.207-1.142-.012l-10.473 5.734c-.231.126-.389.354-.429.614-.041.26.039.525.215.716.176.191.432.3.696.288l2.636-.012c.152-.001.298-.055.412-.152l5.833-4.371c.064-.048.181-.046.242.004.061.049.062.129.001.18l-4.725 3.95c-.219.182-.343.452-.335.735.008.282.149.543.378.71l4.778 3.534zm.109-1.314l-4.778-3.534c-.059-.043-.091-.117-.082-.188.009-.071.056-.133.12-.159l6.085-2.538.305-.128-1.65 6.547zm-11.422-2.554l10.473-5.734c.088-.048.198-.047.285.003.087.05.142.142.142.242 0 .001-.106.619-.201 1.198l-6.182 2.583-2.504.011c-.159.001-.298-.06-.395-.161-.096-.102-.143-.239-.134-.379.009-.14.075-.27.18-.346l-1.664 2.583zm5.832 2.268l1.119.827-1.119-.827zm4.75-5.693c.151.112.183.327.072.478-.112.151-.326.183-.478.072l.406-.55z"/>
            </svg>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              Comece agora mesmo a transformar seu atendimento
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Integre todos os seus canais de comunicação em uma única plataforma
            </p>
            <Link 
              href="https://app.kanzap.com.br/#/signup" 
              className="inline-block bg-white text-[#213365] px-8 py-3 rounded-full hover:bg-[#eb594c] hover:text-white transition-all duration-300 hover:scale-105 transform"
            >
              Começar Agora
            </Link>
          </div>
        </div>

        {/* Efeito de Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#213365] via-transparent to-transparent opacity-50"></div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Kanzap</h3>
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