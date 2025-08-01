"use client";

import React from 'react';

export default function VideoSection() {
  return (
    <section id="video" className="py-16 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
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
        {/* コンテンツエリア - プレミアムデザイン */}
        <div className="mx-auto px-2 relative">
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
            <div className="relative z-10 p-1 sm:p-2 md:p-3 lg:p-4">
              
              {/* 1. バイブコーディングとは？タイトル - AboutSection.tsxと同じデザイン */}
              <div className="text-center mb-12 relative">
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
                      バイブコーディングとは？
                    </span>
                    {/* 3D効果の装飾下線 */}
                    <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
                    <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
                  </h2>
                </div>
                
                {/* 説明文 */}
                <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
                  バイブコーディングは、AIとの対話を通じてコードを生成・最適化する次世代の開発手法です。
                </p>
              </div>
              
              {/* 2. 動画誘導テキスト - 横幅調整版 */}
              <div className="text-center mb-2 sm:mb-3 lg:mb-4 w-full">
                <div className="relative w-full">
                  {/* 装飾的な背景効果 - 横幅調整 */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-md"></div>
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl"></div>
                  
                  {/* メインテキスト - 横幅調整 */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 shadow-lg border border-primary/20 w-full">
                    <div className="relative">
                      {/* 装飾的な囲い線 */}
                      <div className="absolute inset-0 border-2 border-gradient-to-r from-primary/30 to-secondary/30 rounded-lg"></div>
                      <div className="absolute inset-1 border border-gradient-to-r from-primary/20 to-secondary/20 rounded-md"></div>
                      
                      {/* メインテキスト */}
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight px-2 py-1 relative z-10">
                        まずはバイブコーディングの世界を体験ください
                      </p>
                      
                      {/* 装飾的な角要素 */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary/50 rounded-tl-lg"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-secondary/50 rounded-tr-lg"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-secondary/50 rounded-bl-lg"></div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary/50 rounded-br-lg"></div>
                    </div>
                    
                    {/* 装飾的な矢印 - 調整 */}
                    <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        <svg className="w-5 h-5 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* キラキラ効果 - 調整 */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              
              {/* 3. 動画エリア - 横幅いっぱい */}
              <div className="w-full relative group perspective mb-12">
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
                      src="https://www.youtube.com/embed/3KSFkhw6WEs?si=RCP3AGzVNOt0BYRD" 
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
              
                              {/* 4. 速度比較セクション */}
                <div className="mt-16 mb-12">
                
                {/* 左右分割レイアウト */}
                <div className="max-w-7xl mx-auto">
                  <h4 className="text-3xl font-bold text-center text-slate-800 mb-4">
                    従来の開発 vs バイブコーディング
                  </h4>
                  <p className="text-lg sm:text-xl text-center text-slate-600 mb-12">
                    ゼロからWebサービスを作ろうとした場合
                  </p>
                  
                  {/* 比較テーブル */}
                  <div className="mb-12">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                        {/* テーブルヘッダー */}
                        <div className="grid grid-cols-3 bg-gradient-to-r from-orange-100 to-pink-100 border-b-2 border-orange-200">
                          <div className="p-3 sm:p-4 md:p-6 text-center">
                            <h5 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 mb-1 sm:mb-2">比較項目</h5>
                          </div>
                          <div className="p-3 sm:p-4 md:p-6 text-center border-l-2 border-r border-orange-200">
                            <h5 className="text-sm sm:text-base md:text-lg font-semibold text-slate-700">従来の開発</h5>
                          </div>
                          <div className="p-3 sm:p-4 md:p-6 text-center border-r-2 border-orange-200">
                            <h5 className="text-sm sm:text-base md:text-lg font-semibold text-orange-600">バイブコーディング</h5>
                          </div>
                        </div>
                        
                        {/* 比較項目 */}
                        <div className="divide-y divide-slate-100">
                          {/* 開発時間 */}
                          <div className="grid grid-cols-3 items-center">
                            <div className="p-3 sm:p-4 md:p-6 bg-slate-50">
                              <div className="flex items-center">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <span className="text-xs sm:text-sm md:text-base font-medium text-slate-800">開発時間</span>
                              </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6 text-center border-l-2 border-r border-orange-100">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-1">100時間</div>
                              <p className="text-xs sm:text-sm text-slate-600">4週間の開発期間</p>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6 text-center border-r-2 border-orange-100">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-1">25時間</div>
                              <p className="text-xs sm:text-sm text-orange-600 font-medium">1週間で完了</p>
                            </div>
                          </div>
                          
                          {/* デバッグ時間 */}
                          <div className="grid grid-cols-3 items-center">
                            <div className="p-3 sm:p-4 md:p-6 bg-slate-50">
                              <div className="flex items-center">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                </div>
                                <span className="text-xs sm:text-sm md:text-base font-medium text-slate-800">デバッグ時間</span>
                              </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6 text-center border-l-2 border-r border-orange-100">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-1">40時間</div>
                              <p className="text-xs sm:text-sm text-slate-600">開発時間の40%</p>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6 text-center border-r-2 border-orange-100">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-pink-600 mb-1">5時間</div>
                              <p className="text-xs sm:text-sm text-pink-600 font-medium">開発時間の20%</p>
                            </div>
                          </div>
                          
                          {/* 学習コスト */}
                          <div className="grid grid-cols-3 items-center">
                            <div className="p-3 sm:p-4 md:p-6 bg-slate-50">
                              <div className="flex items-center">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                </div>
                                <span className="text-xs sm:text-sm md:text-base font-medium text-slate-800">学習コスト</span>
                              </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6 text-center border-l-2 border-r border-orange-100">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-1">高</div>
                              <p className="text-xs sm:text-sm text-slate-600">技術的スキルが必要</p>
                            </div>
                            <div className="p-3 sm:p-4 md:p-6 text-center border-r-2 border-orange-100">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mb-1">低</div>
                              <p className="text-xs sm:text-sm text-orange-600 font-medium">アイデア重視</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  {/* 説明セクション */}
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center text-slate-700 space-y-6">
                      <p className="text-lg sm:text-xl leading-relaxed">
                        バイブコーディングはただ効率化するだけの手法ではありません。
                      </p>
                      <p className="text-lg sm:text-xl leading-relaxed">
                        「作れたらいいな」が「もう作れてる」に変わる。
                      </p>
                      <p className="text-lg sm:text-xl leading-relaxed">
                        この劇的な変化が、たった数ヶ月で起こるのがバイブコーディングのすごさです。
                      </p>
                      <p className="text-lg sm:text-xl leading-relaxed">
                        面倒な環境構築や、つまずきやすい初学者の壁をAIが取り除いてくれるので、"つくる楽しさ" にすぐ手が届くのが魅力です。
                      </p>
                    </div>
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
        
        @keyframes progress {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: var(--progress), 100;
          }
        }
        
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        
        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          100% {
            width: var(--progress-width);
          }
        }
        
        .animate-progress-bar {
          animation: progress-bar 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}