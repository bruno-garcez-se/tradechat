'use client'

import React from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Gerente de Marketing',
      company: 'Tech Solutions',
      image: '/testimonial1.jpg',
      content: 'O Kanzap revolucionou nosso atendimento ao cliente. A produtividade da equipe aumentou em 70% e nossos clientes estão muito mais satisfeitos com o tempo de resposta.'
    },
    {
      name: 'Carlos Santos',
      role: 'CEO',
      company: 'Delivery Express',
      image: '/testimonial2.jpg',
      content: 'Desde que implementamos o Kanzap, nossas vendas aumentaram 45%. A facilidade de gerenciar múltiplos atendimentos e a integração com nosso e-commerce fez toda diferença.'
    },
    {
      name: 'Mariana Costa',
      role: 'Supervisora de Atendimento',
      company: 'Beauty Care',
      image: '/testimonial3.jpg',
      content: 'Os relatórios detalhados e a possibilidade de ter vários atendentes nos ajudou a melhorar nossos processos. O suporte é excelente e sempre nos ajuda quando precisamos.'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Diretor Comercial',
      company: 'Mega Store',
      image: '/testimonial4.jpg',
      content: 'A automação de respostas e o chatbot nos ajudaram a reduzir em 50% o tempo de atendimento. Nossos clientes adoram a rapidez e praticidade.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#213365]/5 via-white to-[#eb594c]/5">
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#eb594c]/20"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#213365]">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-[#eb594c]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 italic">
                  "{testimonial.content}"
                </p>
              </blockquote>
            </div>
          ))}
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