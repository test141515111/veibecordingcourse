import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 h-16">
      <div className="container flex items-center justify-between h-full py-1">
        <Link href="/" className="relative">
          <Image
            src="/images/ロゴ.png"
            alt="Vibe Coding"
            width={85}
            height={28}
            className="h-auto"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="#about" className="hover:text-primary transition-colors">コースについて</Link>
          <Link href="#course" className="hover:text-primary transition-colors">カリキュラム</Link>
          <Link href="#support" className="hover:text-primary transition-colors">サポート</Link>
          <Link href="#voice" className="hover:text-primary transition-colors">受講生の声</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">よくある質問</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Link href="#contact" className="btn-primary text-sm py-2 px-5 flex items-center justify-center min-h-[36px]">無料相談に申し込む</Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 