'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Kanzap</h3>
            <p className="text-gray-400">
              Sua solução completa para atendimento multicanal via WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link href="/#recursos" className="text-gray-400 hover:text-[#eb594c]">Recursos</Link></li>
              <li><Link href="/#precos" className="text-gray-400 hover:text-[#eb594c]">Planos</Link></li>
              <li><Link href="/#demo" className="text-gray-400 hover:text-[#eb594c]">Demonstração</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-400 hover:text-[#eb594c]">Sobre nós</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-[#eb594c]">Contato</Link></li>
              <li><Link href="/#blog" className="text-gray-400 hover:text-[#eb594c]">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="text-gray-400 hover:text-[#eb594c]">Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-400 hover:text-[#eb594c]">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kanzap. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 