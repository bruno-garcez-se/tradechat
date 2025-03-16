'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Existe período de teste gratuito?',
      answer: 'Sim! Oferecemos 7 dias de teste gratuito para você experimentar todas as funcionalidades da plataforma sem compromisso.'
    },
    {
      question: 'Preciso instalar algo no computador?',
      answer: 'Não é necessário instalar nada! O Kanzap é uma plataforma 100% web, basta acessar através do seu navegador preferido.'
    },
    {
      question: 'Posso usar mais de um número de WhatsApp?',
      answer: 'Sim! Dependendo do seu plano, você pode adicionar múltiplos números de WhatsApp. O plano Básico inclui 1 número, o Profissional 2 números. Para mais números, oferecemos um plano personalizado que atende às necessidades específicas da sua empresa.'
    },
    {
      question: 'Como funcionam as integrações com outras plataformas?',
      answer: 'O Kanzap oferece integrações com diversas plataformas como Instagram, Facebook Messenger, Telegram, E-mail, Web Chat e Mercado Livre. Cada integração tem um custo adicional de R$ 60,00 por mês. Você pode escolher quais integrações deseja utilizar.'
    },
    {
      question: 'Como funciona a automação de mensagens?',
      answer: 'Nossa plataforma permite criar respostas automáticas personalizadas, chatbots inteligentes e fluxos de atendimento automatizados. Você pode configurar mensagens de boas-vindas, respostas para perguntas frequentes e muito mais.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Perguntas Frequentes</h2>
        <p className="text-center text-gray-600 mb-12">
          Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection 