'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const response = await fetch('/api/schedule-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao agendar demonstração')
      }

      setSubmitStatus('success')
      reset()
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      console.error('Erro:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro ao agendar demonstração')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Gerar horários disponíveis (9h às 18h)
  const availableTimes = Array.from({ length: 19 }, (_, i) => {
    const hour = 9 + Math.floor(i / 2)
    const minute = i % 2 === 0 ? '00' : '30'
    return `${hour.toString().padStart(2, '0')}:${minute}`
  })

  // Data mínima (hoje) e máxima (30 dias)
  const today = new Date().toISOString().split('T')[0]
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)
  const maxDateStr = maxDate.toISOString().split('T')[0]

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-[#213365] mb-6"
                >
                  Agende sua Demonstração
                </Dialog.Title>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#213365] focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('name', { required: 'Nome é obrigatório' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#213365] focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('phone', {
                        required: 'Telefone é obrigatório',
                        pattern: {
                          value: /^\d{10,11}$/,
                          message: 'Telefone inválido'
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Data Preferida
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      min={today}
                      max={maxDateStr}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#213365] focus:border-transparent ${
                        errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('preferredDate', { required: 'Data é obrigatória' })}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-red-500">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Horário Preferido
                    </label>
                    <select
                      id="preferredTime"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#213365] focus:border-transparent ${
                        errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('preferredTime', { required: 'Horário é obrigatório' })}
                    >
                      <option value="">Selecione um horário</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-500">{errors.preferredTime.message}</p>
                    )}
                  </div>

                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                      onClick={onClose}
                      disabled={isSubmitting}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className={`px-6 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-[#213365] hover:bg-[#eb594c]'
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Agendando...' : 'Agendar Demonstração'}
                    </button>
                  </div>
                </form>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    Demonstração agendada com sucesso! Em breve você receberá um e-mail com os detalhes.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                    {errorMessage}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 