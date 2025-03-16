'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
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
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Agendar Demonstração
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Preencha o formulário abaixo para agendar uma demonstração gratuita do Kanzap.
                  </p>
                </div>

                <form className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#213365] focus:ring-[#213365] sm:text-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#213365] focus:ring-[#213365] sm:text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#213365] focus:ring-[#213365] sm:text-sm"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#213365] focus:ring-[#213365] sm:text-sm"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#213365] px-4 py-2 text-sm font-medium text-white hover:bg-[#eb594c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#213365] focus-visible:ring-offset-2"
                    >
                      Agendar
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