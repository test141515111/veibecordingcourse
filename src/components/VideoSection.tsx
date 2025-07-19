"use client";

import React from 'react';

export default function VideoSection() {
  return (
    <section id="video" className="py-28 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
      {/* モダンな背景要素 */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* 高級感のある抽象的背景 */}
        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(247,249,251,1)_0%,rgba(255,255,255,0)_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[40%] bg-[linear-gradient(180deg,rgba(236,240,253,0.3)_0%,rgba(236,240,253,0)_100%)]"></div>
          <div className="absolute top-1/4 right-1/3 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-primary/3 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-secondary/3 to-transparent blur-[100px]"></div>
          <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-gradient-to-tl from-blue-400/3 to-transparent blur-3xl"></div>
        </div>
        
        {/* 幾何学模様装飾 */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <div className="w-40 h-40 border border-gray-200/50 rounded-full"></div>
          <div className="w-40 h-40 border border-gray-200/30 rounded-full absolute -top-10 -left-10"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full absolute top-0 left-0 blur-sm"></div>
        </div>
        <div className="absolute bottom-20 left-20 hidden xl:block">
          <div className="w-20 h-20 border border-gray-200/20 rotate-45 transform"></div>
          <div className="w-20 h-20 border border-gray-200/10 rotate-12 absolute -top-6 -left-6 transform"></div>
        </div>
        
        {/* 極薄グリッドパターン */}
        <div className="absolute inset-0 opacity-[0.015]"
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(40,40,40,.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(40,40,40,.3) 1px, transparent 1px)',
               backgroundSize: '60px 60px',
               backgroundPosition: 'center center'
             }}>
        </div>
      </div>
      
      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* タイトルセクション - 高級デザイン */}
        <div className="text-center mb-20 relative">
          {/* サブタイトル */}
          <div className="inline-block mb-3">
            <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
              次世代の開発手法
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full ml-2.5"></span>
            </p>
          </div>
          
          {/* メインタイトル - 洗練バージョン */}
          <div className="relative mb-5 perspective">
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
                バイブコーディングとは？
              </span>
              {/* 3D効果の装飾下線 */}
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
              <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
            </h2>
          </div>
        </div>
        
        {/* コンテンツエリア - プレミアムデザイン */}
        <div className="mx-auto px-4 relative">
          {/* メインコンテンツカード */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden relative group transform transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
            {/* 内部装飾効果 */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/90 z-0"></div>
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-blue-400/5 to-purple-500/5 rounded-full blur-3xl z-0"></div>
              <div className="absolute inset-0 border border-white/70 rounded-3xl z-0"></div>
            </div>
            
            {/* カード内コンテナ */}
            <div className="relative z-10 p-2 sm:p-6 md:p-10 lg:p-14">
              {/* フレックスコンテナ - 説明と動画を横並び */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-stretch">
                
                {/* 説明カード - 左側 */}
                <div className="lg:w-[42%] flex flex-col justify-center relative">
                  <div className="space-y-4 sm:space-y-8 lg:space-y-16">
                    {/* 項目1: AIとの対話 */}
                    <div className="transform transition-all duration-500 hover:-translate-y-1 hover:translate-x-1">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 items-center sm:items-start">
                        {/* アイコンコンテナ - スマホでは上部中央配置 */}
                        <div className="relative group mb-2 sm:mb-0">
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                          <div className="relative flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-md flex-shrink-0 overflow-hidden border border-white/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-700 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* テキストコンテンツ - スマホでは中央揃え */}
                        <div className="text-center sm:text-left sm:pt-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-3">
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[1.8rem] sm:text-[2.15rem] font-extrabold block leading-tight">Vibe Coding</span>
                            <span className="text-gray-600 text-lg sm:text-xl block mt-0 sm:mt-0">（バイブコーディング）</span>
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base sm:text-lg px-2 sm:px-0 max-w-xs mx-auto sm:max-w-none sm:mx-0">
                            AIとの対話だけで高品質なソフトウェアを生み出す次世代の開発手法。
                          </p>
                          <div className="h-0.5 w-16 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mt-2 sm:mt-4 mx-auto sm:mx-0 sm:w-12"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 項目2: ゼロから始める */}
                    <div className="transform transition-all duration-500 hover:-translate-y-1 hover:translate-x-1">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 items-center sm:items-start">
                        {/* アイコンコンテナ - スマホでは上部中央配置 */}
                        <div className="relative group mb-2 sm:mb-0">
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                          <div className="relative flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-md flex-shrink-0 overflow-hidden border border-white/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 opacity-50"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-700 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* テキストコンテンツ - スマホでは中央揃え */}
                        <div className="text-center sm:text-left sm:pt-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-3 px-2 sm:px-0">
                            ゼロからはじめる新しいものづくり
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-base sm:text-lg px-2 sm:px-0 max-w-xs mx-auto sm:max-w-none sm:mx-0">
                            プログラミング経験ゼロから始められる、まったく新しいものづくりの世界へようこそ。
                          </p>
                          <div className="h-0.5 w-16 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full mt-2 sm:mt-4 mx-auto sm:mx-0 sm:w-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 区切り装飾 */}
                <div className="hidden lg:block lg:w-[2px] self-stretch mx-4">
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent my-6 lg:hidden"></div>
                
                {/* 動画エリア - 右側 */}
                <div className="lg:w-[55%] flex flex-col">
                  <div className="relative group h-full flex items-center perspective">
                    {/* 動画フレーム - 高級感と3D効果 */}
                    <div className="w-full aspect-video bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white transform transition-transform duration-500 group-hover:translate-z-10 group-hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.2)]">
                      {/* フレーム装飾 */}
                      <div className="absolute inset-0 border border-gray-100 rounded-2xl pointer-events-none"></div>
                      <div className="absolute inset-[1px] border border-white rounded-2xl pointer-events-none"></div>
                      
                      {/* 動画コンテンツエリア */}
                      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-xl overflow-hidden relative">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/0hVnzJ-7iww?si=IqPAaXJeXuMqo-Jn" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="w-full h-full rounded-xl"
                        ></iframe>
                      </div>
                    </div>
                    
                    {/* 3Dシャドウ効果 */}
                    <div className="absolute -bottom-6 left-4 right-4 h-10 bg-black/10 blur-lg rounded-full transform skew-x-2 scale-x-[0.95] z-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 装飾的な要素 */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-px h-10 bg-gradient-to-b from-primary/30 to-transparent"></div>
            <div className="w-2 h-2 rotate-45 border border-primary/30 bg-white mt-1"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective {
          perspective: 2000px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.5; }
          50% { opacity: 0.3; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 0.5s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
      `}</style>
    </section>
  );
} 