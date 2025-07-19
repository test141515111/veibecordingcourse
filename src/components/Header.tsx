"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <Link href="#video" className="hover:text-primary transition-colors">コースについて</Link>
          <Link href="#about" className="hover:text-primary transition-colors">カリキュラム</Link>
          <Link href="#archive" className="hover:text-primary transition-colors">講義アーカイブ</Link>
          <Link href="#voice" className="hover:text-primary transition-colors">受講生の声</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">よくある質問</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <a 
            href="https://s.lmes.jp/landing-qr/1657937154-ZxeaYPRw?uLand=Bwaxsu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex text-base py-3 px-6 items-center justify-center min-h-[42px] rounded-full font-bold text-white transition-all hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[#FF7A00] to-[#FF9D4A]"
          >
            無料カウンセリングに申し込む
          </a>
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg animate-fade-in-down">
          <div className="flex flex-col py-4">
            <Link 
              href="#video" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              コースについて
            </Link>
            <Link 
              href="#about" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              カリキュラム
            </Link>
            <Link 
              href="#archive" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              講義アーカイブ
            </Link>
            <Link 
              href="#voice" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              受講生の声
            </Link>
            <Link 
              href="#faq" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </Link>
            <div className="px-5 py-4">
              <a 
                href="https://s.lmes.jp/landing-qr/1657937154-ZxeaYPRw?uLand=Bwaxsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex text-base py-3 px-6 items-center justify-center min-h-[42px] rounded-full font-bold text-white transition-all bg-gradient-to-r from-[#FF7A00] to-[#FF9D4A] w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                無料カウンセリングに申し込む
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
} 