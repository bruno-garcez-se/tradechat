'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
            
            <div className="prose max-w-none text-gray-600">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introdução</h2>
                <p className="mb-4">
                  A Kanzap está comprometida em proteger sua privacidade. Esta política descreve como coletamos, 
                  usamos e protegemos suas informações pessoais ao utilizar nossa plataforma.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Informações que Coletamos</h2>
                <p className="mb-4">Podemos coletar os seguintes tipos de informações:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Informações de conta (nome, email, telefone)</li>
                  <li>Dados de uso da plataforma</li>
                  <li>Informações de pagamento</li>
                  <li>Registros de comunicações</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Como Usamos suas Informações</h2>
                <p className="mb-4">Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Processar pagamentos</li>
                  <li>Enviar atualizações importantes</li>
                  <li>Fornecer suporte ao cliente</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Compartilhamento de Informações</h2>
                <p className="mb-4">
                  Não vendemos suas informações pessoais. Compartilhamos dados apenas quando necessário para:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Prestadores de serviços essenciais</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Proteger direitos e segurança</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Segurança de Dados</h2>
                <p className="mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra 
                  acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Seus Direitos</h2>
                <p className="mb-4">Você tem direito a:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações imprecisas</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Retirar consentimento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies e Tecnologias Similares</h2>
                <p className="mb-4">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência, entender como você usa 
                  nossos serviços e personalizar nosso conteúdo.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Alterações na Política</h2>
                <p className="mb-4">
                  Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas 
                  através de nosso site ou por email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contato</h2>
                <p>
                  Para questões sobre nossa política de privacidade, entre em contato através do email: contato@kanzap.com.br
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