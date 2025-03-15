'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'info', message: 'Enviando mensagem...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'kanzapinc@gmail.com'
        }),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' })
        setFormData({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' })
      } else {
        throw new Error('Falha ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Erro ao enviar mensagem. Tente novamente.' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Entre em Contato</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informações de Contato</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">contato@kanzap.com.br</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Suporte</h3>
                    <p className="text-gray-600">
                      Para suporte técnico, acesse nossa{' '}
                      <a 
                        href="https://ajuda.kanzap.com.br" 
                        className="text-[#213365] hover:text-[#1a2951]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Central de Ajuda
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envie sua Mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 