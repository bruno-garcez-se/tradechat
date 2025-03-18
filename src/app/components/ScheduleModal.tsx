'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

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
      setFormData({ name: '', email: '', phone: '' })
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

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-[#000000] mb-2"
                >
                  Agendar Demonstração
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-gray-600">
                    Agende uma demonstração gratuita e descubra como o TradeChat pode transformar seu atendimento
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#000000] focus:ring-2 focus:ring-[#000000]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#000000] focus:ring-2 focus:ring-[#000000]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#000000] focus:ring-2 focus:ring-[#000000]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm">
                      Ocorreu um erro ao agendar. Por favor, tente novamente.
                    </p>
                  )}

                  {submitStatus === 'success' && (
                    <p className="text-green-500 text-sm">
                      Demonstração agendada com sucesso! Entraremos em contato em breve.
                    </p>
                  )}

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 rounded-xl bg-[#000000] text-white font-semibold hover:bg-[#3A6604] transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Agendando...' : 'Agendar Demonstração'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 