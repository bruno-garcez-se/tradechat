'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  preferredDate: string
  preferredTime: string
}

export default function DemoScheduler() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Aqui você implementará a integração com a API do Google Calendar
      const response = await fetch('/api/schedule-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Falha ao agendar demonstração')
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        preferredDate: '',
        preferredTime: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6604] focus:border-transparent"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6604] focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6604] focus:border-transparent"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-white mb-2">Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6604] focus:border-transparent"
              placeholder="Nome da sua empresa"
            />
          </div>
          <div>
            <label htmlFor="preferredDate" className="block text-white mb-2">Data Preferida</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6604] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-white mb-2">Horário Preferido</label>
            <input
              type="time"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              min="09:00"
              max="18:00"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6604] focus:border-transparent"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block bg-white text-[#000000] px-8 py-3 rounded-full hover:bg-[#3A6604] hover:text-white transition-all duration-300 hover:scale-105 transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Agendando...' : 'Agendar Demonstração'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="text-green-400 text-center mt-4">
            Demonstração agendada com sucesso! Em breve você receberá um e-mail de confirmação.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-red-400 text-center mt-4">
            Ocorreu um erro ao agendar a demonstração. Por favor, tente novamente.
          </div>
        )}
      </form>
    </div>
  )
} 