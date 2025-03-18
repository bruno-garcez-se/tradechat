'use client'

import React from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-[#000000]/5 via-white to-[#3A6604]/5 relative">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            O que nossos <span className="text-[#3A6604]">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o TradeChat está transformando empresas por todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-6">
              <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/cart.png"
                  alt="Cartório Logo"
                  width={70}
                  height={70}
                  className="object-contain scale-110"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-[#000000]">Louise Helen</p>
                <p className="text-gray-500 text-sm">Escrevente</p>
                <p className="text-[#3A6604] text-sm">Cartório 1º Ofício</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              "O TradeChat revolucionou nossa forma de atender clientes. A organização e eficiência melhoraram drasticamente, e nossos clientes notaram a diferença!"
            </blockquote>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-6">
              <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/r2.png"
                  alt="Delivery Express Logo"
                  width={70}
                  height={70}
                  className="object-contain scale-110"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-[#000000]">Rafael Santos</p>
                <p className="text-gray-500 text-sm">Proprietário</p>
                <p className="text-[#3A6604] text-sm">Agência R2</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              "O TradeChat transformou nossa comunicação com os clientes. A facilidade de gerenciar múltiplos atendimentos e a integração com nossas redes sociais otimizou nossos resultados."
            </blockquote>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-6">
              <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/persiga.png"
                  alt="Beauty Care Logo"
                  width={70}
                  height={70}
                  className="object-contain scale-110"
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-[#000000]">Lilian Daniele</p>
                <p className="text-gray-500 text-sm">Sócia/Contadora</p>
                <p className="text-[#3A6604] text-sm">Persiga Contabilidade</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              "Os relatórios detalhados e a possibilidade de ter vários atendentes nos ajudou a melhorar nossos processos. O suporte é excelente e sempre nos ajuda quando precisamos."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
} 