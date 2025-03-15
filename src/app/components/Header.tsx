'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Kanzap"
                width={180}
                height={54}
                priority
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/#recursos" className="text-gray-600 hover:text-[#eb594c]">Recursos</Link>
            <Link href="/#precos" className="text-gray-600 hover:text-[#eb594c]">Planos</Link>
            <Link href="/sobre" className="text-gray-600 hover:text-[#eb594c]">Sobre</Link>
            <Link href="/contato" className="text-gray-600 hover:text-[#eb594c]">Contato</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link href="https://app.kanzap.com.br/#/login" className="bg-[#213365] text-white px-6 py-2 rounded-full hover:bg-[#1a2951]">
                Entrar
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header 