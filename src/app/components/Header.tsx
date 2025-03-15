'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Kanzap Logo"
                width={180}
                height={54}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#recursos" className="text-gray-600 hover:text-[#eb594c]">
              Recursos
            </Link>
            <Link href="/#precos" className="text-gray-600 hover:text-[#eb594c]">
              Planos
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-[#eb594c]">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-[#eb594c]">
              Contato
            </Link>
            <Link
              href="https://app.kanzap.com.br/#/login"
              className="text-gray-600 hover:text-[#eb594c]"
            >
              Entrar
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#eb594c] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/#recursos"
                className="block px-3 py-2 text-gray-600 hover:text-[#eb594c]"
              >
                Recursos
              </Link>
              <Link
                href="/#precos"
                className="block px-3 py-2 text-gray-600 hover:text-[#eb594c]"
              >
                Planos
              </Link>
              <Link
                href="/sobre"
                className="block px-3 py-2 text-gray-600 hover:text-[#eb594c]"
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 text-gray-600 hover:text-[#eb594c]"
              >
                Contato
              </Link>
              <Link
                href="https://app.kanzap.com.br/#/login"
                className="block px-3 py-2 text-gray-600 hover:text-[#eb594c]"
              >
                Entrar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 