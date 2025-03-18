'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ScheduleModal from './ScheduleModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer className="bg-gradient-to-br from-[#000000] via-[#000000]/95 to-[#3A6604]/90 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <div className="text-white text-2xl font-bold">
                Trade Chat
              </div>
            </div>
            <p className="text-gray-400">
              Sua solução completa para atendimento multicanal via WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#3A6604] mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link href="/#recursos" className="text-gray-400 hover:text-[#3A6604] transition-colors">Recursos</Link></li>
              <li><Link href="/#precos" className="text-gray-400 hover:text-[#3A6604] transition-colors">Planos</Link></li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-400 hover:text-[#3A6604] transition-colors cursor-pointer"
                >
                  Agendar Demo
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#3A6604] mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-400 hover:text-[#3A6604] transition-colors">Sobre nós</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-[#3A6604] transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#3A6604] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-gray-400 hover:text-[#3A6604] transition-colors">Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-400 hover:text-[#3A6604] transition-colors">Termos de Uso</Link></li>
              <li><Link href="/lgpd" className="text-gray-400 hover:text-[#3A6604] transition-colors">LGPD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#3A6604] mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kanzap.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3A6604] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/kanzap.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3A6604] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@kanzap.Oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3A6604] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} TradeChat. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal de Agendamento */}
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  )
}