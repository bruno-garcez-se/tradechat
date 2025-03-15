'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre a Kanzap</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A Kanzap nasceu da necessidade de simplificar e otimizar a comunicação entre empresas e seus clientes. 
                Desde nossa fundação, temos nos dedicado a desenvolver soluções inovadoras que transformam a maneira 
                como as empresas interagem com seus clientes através do WhatsApp.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h2>
              <p className="text-gray-600 mb-4">
                Nossa missão é capacitar empresas com ferramentas de comunicação eficientes e intuitivas, 
                permitindo que elas construam relacionamentos mais próximos e duradouros com seus clientes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h3>
                  <p className="text-gray-600">
                    Buscamos constantemente novas maneiras de melhorar nossos serviços e criar soluções inovadoras.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Excelência</h3>
                  <p className="text-gray-600">
                    Comprometimento com a qualidade e excelência em tudo o que fazemos.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Foco no Cliente</h3>
                  <p className="text-gray-600">
                    O sucesso dos nossos clientes é nossa principal prioridade.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparência</h3>
                  <p className="text-gray-600">
                    Mantemos uma comunicação clara e honesta com nossos clientes e parceiros.
                  </p>
                </div>
              </div>
            </section>

            <div className="text-center">
              <a
                href="https://app.kanzap.com.br/#/signup"
                className="inline-block bg-[#213365] hover:bg-[#1a2951] text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Comece Agora
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 