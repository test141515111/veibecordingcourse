"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="pt-16 pb-0 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-100/20 to-yellow-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="mb-16">
          {/* タイトルセクション */}
          <div className="text-center mb-12 relative">
            {/* サブタイトル */}
            <div className="inline-block mb-3">
              <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
                お問い合わせ
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full ml-2.5"></span>
              </p>
            </div>
            
            {/* メインタイトル */}
            <div className="relative mb-8 perspective">
              <h2 className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transform transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      lineHeight: 1.1,
                      fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif",
                      textShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                  無料カウンセリングのお申し込み
                </span>
                {/* 3D効果の装飾下線 */}
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
                <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
              </h2>
            </div>
          </div>
          
          {/* ユニコアイコンと吹き出し - メインコンテンツとして大きく表示 */}
          <div className="max-w-4xl mx-auto mb-16 p-6 md:p-10 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border border-orange-100/50 relative">
            {/* 装飾要素 */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-yellow-100/30 to-orange-100/30 rounded-full blur-xl -z-10"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* 丸いアイコン - 大きく表示 */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-3 bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300 rounded-full blur-sm opacity-70 animate-pulse-slow"></div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                  <Image
                    src="/images/uniko_icon.png"
                    alt="ユニコ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* 装飾エフェクト */}
                <div className="absolute -top-2 -right-1 w-10 h-10 bg-orange-100 rounded-full shadow-inner z-0"></div>
                <div className="absolute bottom-0 -left-3 w-8 h-8 bg-pink-100 rounded-full shadow-inner z-0"></div>
              </div>
              
              {/* 吹き出し - 大きく表示し、本文をすべて含める */}
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 p-6 md:p-8 rounded-2xl shadow-md flex-1 border border-orange-100/50">
                {/* 三角形の吹き出しの尻尾 - モバイルでは下、デスクトップでは左に配置 */}
                <div className="absolute md:top-1/2 md:-left-4 md:transform md:-translate-y-1/2 top-[-10px] left-1/2 transform -translate-x-1/2 md:translate-x-0">
                  <div className="w-0 h-0 md:border-t-[10px] md:border-t-transparent md:border-r-[16px] md:border-r-orange-50 md:border-b-[10px] md:border-b-transparent border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-orange-50"></div>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-800 mb-5 pb-2 border-b border-orange-200/50">まずはZOOMしましょう！</h3>
                  
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700">
                      当スクールでは、入会いただいた方との共同でビジネスも行っております。
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-700">
                      そのため、スクール入会者は長いお付き合いをさせて頂ければと思っておりますので、大変恐縮ですが、スクール入会前に必ず、ユニコ🦄本人とのZOOM面談をさせて頂いております。
                    </p>
                    
                    <div className="mt-6">
                      <p className="text-base md:text-lg font-medium text-gray-800 mb-3">
                        ZOOMでは、
                      </p>
                      
                      <div className="bg-white/70 rounded-xl p-4 shadow-sm space-y-3">
                        <p className="text-base md:text-lg text-gray-700 flex items-start">
                          <span className="text-orange-500 font-bold mr-2 flex-shrink-0">✅</span>
                          <span>スクールに関する不明点</span>
                        </p>
                        
                        <p className="text-base md:text-lg text-gray-700 flex items-start">
                          <span className="text-orange-500 font-bold mr-2 flex-shrink-0">✅</span>
                          <span>「自分でもできるかな？」「自分にはどんなマネタイズが向いてる？」などのご質問<br />など何でもお答え致します！！</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-base md:text-lg text-gray-700 font-medium">
                        まずは下記より、LINE公式アカウントのご登録をよろしくお願いします！
                      </p>
                      
                      <p className="text-sm md:text-base text-orange-600 font-medium mt-2 bg-orange-50 p-2 rounded-md inline-block">
                        ※登録直後に、ZOOMの日程調整が始まりますのでご登録下さい！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTAボタン - 目立つオレンジデザイン */}
        <div className="flex justify-center pb-20">
          <a href="https://s.lmes.jp/landing-qr/1657937154-ZxeaYPRw?uLand=Bwaxsu" target="_blank" rel="noopener noreferrer" className="relative inline-block group scale-100 hover:scale-[1.05] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl blur-[3px] opacity-60 group-hover:opacity-80 transition duration-300 group-hover:duration-200 animate-pulse-slow"></div>
            <button className="relative px-6 py-5 sm:px-20 sm:py-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl leading-none flex flex-col items-center justify-center shadow-lg ring-2 ring-orange-300/50 hover:ring-orange-300/70 overflow-hidden">
              <span className="text-white font-bold text-2xl sm:text-4xl relative z-10 mb-2 sm:mb-3 drop-shadow-md">無料カウンセリング</span>
              <span className="text-white group-hover:text-white transition duration-200 text-xl sm:text-2xl relative z-10">今すぐ申し込む <span className="group-hover:translate-x-2 inline-block transition-transform duration-200">&rarr;</span></span>
              {/* キラキラ光るエフェクト - 常時表示 */}
              <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-15 animate-shine pointer-events-none"></div>
              <div className="absolute top-0 left-[-100%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-15 animate-shine-delayed pointer-events-none"></div>
            </button>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .perspective {
          perspective: 2000px;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 120%;
          }
        }
        
        .animate-shine {
          animation: shine 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-shine-delayed {
          animation: shine 3s infinite 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skew-x-15 {
          transform: skewX(-15deg);
        }
      `}</style>
    </section>
  );
} 