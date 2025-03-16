'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  phone: string
  preferredDate: string
  preferredTime: string
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
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
        phone: '',
        preferredDate: '',
        preferredTime: ''
      })
      
      // Fecha o modal após 2 segundos em caso de sucesso
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
      }, 2000)
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
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-lg w-full rounded-2xl bg-white p-8 shadow-xl">
          <Dialog.Title className="text-2xl font-bold text-[#213365] mb-6">
            Agende sua Demonstração
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb594c] focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb594c] focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Data Preferida
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb594c] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Horário Preferido
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  min="09:00"
                  max="18:00"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb594c] focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-[#213365] text-white rounded-lg hover:bg-[#eb594c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Agendando...' : 'Agendar Demonstração'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-green-600 text-center mt-4">
                Demonstração agendada com sucesso! Em breve você receberá um e-mail de confirmação.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-red-600 text-center mt-4">
                Ocorreu um erro ao agendar a demonstração. Por favor, tente novamente.
              </div>
            )}
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
} 