'use client'

import React from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#213365] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que transformaram seu atendimento com o Kanzap
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <p className="font-semibold text-[#213365]">Louise Helen</p>
                <p className="text-gray-500 text-sm">Escrevente</p>
                <p className="text-[#eb594c] text-sm">Cartório 1º Ofício</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              "O Kanzap revolucionou nossa forma de atender clientes. A organização e eficiência melhoraram drasticamente, e nossos clientes notaram a diferença!"
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
                <p className="font-semibold text-[#213365]">Rafael Santos</p>
                <p className="text-gray-500 text-sm">Proprietário</p>
                <p className="text-[#eb594c] text-sm">Agência R2</p>
              </div>
            </div>
            <blockquote className="text-gray-600 italic">
              "O Kanzap transformou nossa comunicação com os clientes. A facilidade de gerenciar múltiplos atendimentos e a integração com nossas redes sociais otimizou nossos resultados."
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
                <p className="font-semibold text-[#213365]">Lilian Daniele</p>
                <p className="text-gray-500 text-sm">Sócia/Contadora</p>
                <p className="text-[#eb594c] text-sm">Persiga Contabilidade</p>
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