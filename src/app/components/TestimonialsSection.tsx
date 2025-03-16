'use client'

import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Gerente de Marketing',
      company: 'Agência Digital',
      text: 'O Kanzap revolucionou nossa forma de atender clientes. A organização e eficiência melhoraram drasticamente, e nossos clientes notaram a diferença!'
    },
    {
      name: 'Carlos Santos',
      role: 'Proprietário',
      company: 'Loja de Roupas Online',
      text: 'Desde que começamos a usar o Kanzap, nossas vendas aumentaram em 40%. A facilidade de gerenciar múltiplos atendimentos é impressionante.'
    },
    {
      name: 'Mariana Costa',
      role: 'Supervisora de Atendimento',
      company: 'E-commerce',
      text: 'A integração com diferentes canais e o CRM Kanban tornaram nosso atendimento muito mais eficiente. Recomendo fortemente!'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-[#213365]/5 to-[#eb594c]/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#213365] text-center mb-16">
          O que nossos clientes falam
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#213365] to-[#eb594c] flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#213365]">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-[#eb594c]">{testimonial.company}</p>
                </div>
              </div>
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 w-8 h-8 text-[#eb594c]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic relative z-10">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 