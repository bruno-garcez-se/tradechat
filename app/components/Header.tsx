'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="TradeChat Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#3A6604] transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-[#3A6604] transition-colors">
              Sobre
            </Link>
            <Link href="/chat" className="hover:text-[#3A6604] transition-colors">
              Chat
            </Link>
            <Link href="/termos" className="hover:text-[#3A6604] transition-colors">
              Termos
            </Link>
            <Link href="/privacidade" className="hover:text-[#3A6604] transition-colors">
              Privacidade
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 