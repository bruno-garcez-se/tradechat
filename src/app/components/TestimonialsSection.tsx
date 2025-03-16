'use client'

import React from 'react'

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <blockquote className="text-gray-600 mb-4 italic">
              "O Kanzap revolucionou nosso atendimento ao cliente. A produtividade da equipe aumentou em 70% e nossos clientes estão muito mais satisfeitos com o tempo de resposta."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-[#213365]">Louise Helen</p>
                <p className="text-gray-600">Gerente de Marketing - Tech Solutions</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <blockquote className="text-gray-600 mb-4 italic">
              "Desde que implementamos o Kanzap, nossas vendas aumentaram 45%. A facilidade de gerenciar múltiplos atendimentos e a integração com nosso e-commerce fez toda diferença."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-[#213365]">Rafael</p>
                <p className="text-gray-600">CEO - Delivery Express</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <blockquote className="text-gray-600 mb-4 italic">
              "Os relatórios detalhados e a possibilidade de ter vários atendentes nos ajudou a melhorar nossos processos. O suporte é excelente e sempre nos ajuda quando precisamos."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-[#213365]">Lilian Daniele</p>
                <p className="text-gray-600">Supervisora de Atendimento - Beauty Care</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <blockquote className="text-gray-600 mb-4 italic">
              "A automação de respostas e o chatbot nos ajudaram a reduzir em 50% o tempo de atendimento. Nossos clientes adoram a rapidez e praticidade."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-[#213365]">Rafael</p>
                <p className="text-gray-600">Diretor Comercial - Mega Store</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="flex items-center">
              <div className="text-[#213365]">
                <span className="text-4xl font-bold">98%</span>
                <p className="text-sm">Satisfação dos clientes</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[#213365]">
                <span className="text-4xl font-bold">50%</span>
                <p className="text-sm">Redução no tempo de resposta</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[#213365]">
                <span className="text-4xl font-bold">2000+</span>
                <p className="text-sm">Empresas atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 