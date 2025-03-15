'use client'

import React, { useState } from 'react'

interface FormData {
  nome: string
  email: string
  telefone: string
  empresa: string
  mensagem: string
}

interface Status {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  })

  const [status, setStatus] = useState<Status>({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setStatus({ type: 'loading', message: 'Enviando mensagem...' })

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

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem')
      }

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      })

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
          Nome *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#213365] focus:border-[#213365]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#213365] focus:border-[#213365]"
        />
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefone
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#213365] focus:border-[#213365]"
        />
      </div>

      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
          Empresa
        </label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#213365] focus:border-[#213365]"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#213365] focus:border-[#213365]"
        />
      </div>

      {status.message && (
        <div 
          className={`text-sm ${
            status.type === 'error' 
              ? 'text-red-600' 
              : status.type === 'success' 
              ? 'text-green-600' 
              : 'text-blue-600'
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === 'loading'}
        className={`w-full bg-[#213365] text-white py-3 px-4 rounded-lg hover:bg-[#1a2951] transition-colors ${
          status.type === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  )
} 