'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      {/* Botão do Menu */}
      <button
        onClick={toggleMenu}
        className="text-gray-600 hover:text-[#eb594c] focus:outline-none"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#recursos"
              className="text-gray-600 hover:text-[#eb594c]"
              onClick={toggleMenu}
            >
              Recursos
            </Link>
            <Link
              href="/#precos"
              className="text-gray-600 hover:text-[#eb594c]"
              onClick={toggleMenu}
            >
              Planos
            </Link>
            <Link
              href="/sobre"
              className="text-gray-600 hover:text-[#eb594c]"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-gray-600 hover:text-[#eb594c]"
              onClick={toggleMenu}
            >
              Contato
            </Link>
            <Link
              href="https://app.kanzap.com.br/#/login"
              className="bg-[#213365] text-white px-6 py-2 rounded-full hover:bg-[#1a2951] text-center"
              onClick={toggleMenu}
            >
              Entrar
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu 