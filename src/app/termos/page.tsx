'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Termos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
            
            <div className="prose max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
                <p className="mb-4">
                  Ao acessar e usar o Kanzap, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. 
                  Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Descrição do Serviço</h2>
                <p className="mb-4">
                  O Kanzap é uma plataforma de atendimento multicanal que permite a integração com WhatsApp e outros canais de comunicação. 
                  Nos reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer momento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Contas de Usuário</h2>
                <p className="mb-4">
                  Para utilizar nossos serviços, você deve criar uma conta. Você é responsável por manter a confidencialidade de sua conta 
                  e senha, bem como por restringir o acesso ao seu computador.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Uso Aceitável</h2>
                <p className="mb-4">
                  Você concorda em usar o serviço apenas para fins legais e de acordo com estes termos. Você não deve usar o serviço para:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Violar leis ou regulamentos</li>
                  <li>Enviar spam ou mensagens não solicitadas</li>
                  <li>Prejudicar ou explorar menores de idade</li>
                  <li>Transmitir malware ou código malicioso</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Propriedade Intelectual</h2>
                <p className="mb-4">
                  Todo o conteúdo, recursos e funcionalidades do Kanzap são de nossa propriedade ou de nossos licenciadores 
                  e são protegidos por leis de direitos autorais e outras leis de propriedade intelectual.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitação de Responsabilidade</h2>
                <p className="mb-4">
                  O Kanzap não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes 
                  resultantes do uso ou incapacidade de usar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Alterações nos Termos</h2>
                <p className="mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente 
                  após a publicação dos termos atualizados em nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre estes termos, entre em contato conosco através do email: contato@kanzap.com.br
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 