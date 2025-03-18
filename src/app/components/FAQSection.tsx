'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Oferecemos um período de teste gratuito para que você possa experimentar todas as funcionalidades da plataforma. Durante este período, você terá acesso completo a todos os recursos e poderá avaliar como o TradeChat pode ajudar seu negócio.'
    },
    {
      question: 'Preciso instalar algum software adicional?',
      answer: 'Não é necessário instalar nenhum software adicional. O TradeChat é uma plataforma totalmente baseada na web, acessível através de qualquer navegador moderno. Basta fazer login e começar a usar.'
    },
    {
      question: 'Posso usar mais de um número de WhatsApp?',
      answer: 'Sim, você pode conectar múltiplos números de WhatsApp à sua conta TradeChat. Cada plano oferece um número específico de conexões, e você pode gerenciar todos eles através de uma única interface.'
    },
    {
      question: 'Como funcionam as integrações com outras plataformas?',
      answer: 'O TradeChat oferece integrações nativas com diversas plataformas como Facebook Messenger, Instagram e Mercado Livre. Cada integração tem um custo adicional de R$ 60,00 por mês.'
    },
    {
      question: 'É possível automatizar mensagens e respostas?',
      answer: 'Sim, o TradeChat oferece recursos avançados de automação. Você pode criar fluxos de mensagens automáticas, respostas predefinidas e chatbots personalizados para otimizar seu atendimento.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-[#000000]/5 via-white to-[#3A6604]/5 relative">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 bg-[url('/wave.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Perguntas <span className="text-[#3A6604]">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#3A6604] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-6 h-6 text-[#3A6604]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 