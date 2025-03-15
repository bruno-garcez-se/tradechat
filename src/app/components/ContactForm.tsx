'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600"
          >
            Nome
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#213365] focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Seu nome completo"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#213365] focus:border-transparent transition duration-150 ease-in-out"
              placeholder="seu@email.com"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="phone"
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600"
        >
          Telefone
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#213365] focus:border-transparent transition duration-150 ease-in-out"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="message"
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600"
        >
          Mensagem
        </label>
        <div className="relative">
          <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#213365] focus:border-transparent transition duration-150 ease-in-out resize-none"
            placeholder="Digite sua mensagem aqui..."
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#213365] to-[#1a2951] hover:from-[#1a2951] hover:to-[#213365] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#213365] transform transition duration-150 ease-in-out hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </button>
      </div>

      {status === 'success' && (
        <div className="rounded-lg bg-green-50 p-4 border border-green-100">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 border border-red-100">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por email.
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
} 