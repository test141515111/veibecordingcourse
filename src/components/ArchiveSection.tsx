"use client";

import React from 'react';
import Image from 'next/image';

// 講義アーカイブのデータ
const archiveItems = [
  {
    id: 1,
    title: "話題のChrome MCPを徹底解説！！！ChromeをMCPで操作しよう！＆AI美女評価",
    date: "2025-07-06",
    image: "/Archive_images/話題のChrome MCP解説.png"
  },
  {
    id: 2,
    title: "ChromeMCPでクラウドワークスに自動応募させよう！",
    date: "2025-07-06",
    image: "/Archive_images/ChromeMCPでクラウドワークスに自動応募.png"
  },
  {
    id: 3,
    title: "【ハヤシシュンスケ降臨回】AIエージェント ❌ ワークフロー構築 ❌ n8n 徹底解説！！Claudeを操作するだけで、n8nでワークフローが無限に生み出される装置が完成！！",
    date: "2025-07-07",
    image: "/Archive_images/AIエージェント ❌ ワークフロー構築 ❌ n8n 徹底解説！！.png"
  },
  {
    id: 4,
    title: "【神回！後半はハヤシシュンスケさん降臨】Wixに80億円で買創業6ヶ月の「Base44」でバイブコーディングをしまくろう！　 ＆ 　【実践編！】ClaudeCode ❌️ MCPでサービス開発をガンガンやっていこう！！",
    date: "2025-07-14",
    image: "/Archive_images/Wixに80億円で買創業6ヶ月の「Base44」でバイブコーディングをしまくろう！.png"
  },
  {
    id: 5,
    title: "Kiro×ClaudeCodeが爆速すぎる...!?AWSが開発したコーディングエージェント「Kiro」徹底解説！！",
    date: "2025-07-20",
    image: "/Archive_images/Kiro×ClaudeCodeが爆速すぎる.png"
  },
  {
    id: 6,
    title: "AI彼女を徹底的に作っていこう！",
    date: "2025-07-20",
    image: "/Archive_images/AI彼女を徹底的に作っていこう！.png"
  },
  {
    id: 7,
    title: "パソコン自体をAIで遠隔操作してみよう！",
    date: "2025-07-21",
    image: "/Archive_images/AppleScriptを使ったパソコン操作徹底調査！.png"
  },
  {
    id: 8,
    title: "AppleScriptで自動出品に挑戦しよう！",
    date: "2025-07-21",
    image: "/Archive_images/AppleScriptで自動出品に挑戦しよう！.png"
  },
  {
    id: 9,
    title: "原点に返って クラウドワークス × AI活用でサクッと案件をこなそう！",
    date: "2025-06-16",
    image: "/images/クラウドワークス.png"
  },
  {
    id: 10,
    title: "「AI × 恋愛相談」毎日をサポートしてくれるBOTを構築",
    date: "2025-06-22",
    image: "/images/AI彼女.png"
  },
  {
    id: 11,
    title: "Udemyのようなスクールの受講ページをClaudeCodeで構築！",
    date: "2025-06-23",
    image: "/images/Udemy.png"
  },
  {
    id: 12,
    title: "今話題のバイブコーディング（AI開発）を丁寧に解説！",
    date: "2025-06-29",
    image: "/images/バイブコーディング.png"
  },
  {
    id: 13,
    title: "「セールスライティング × Webデザイン × バイブコーディング」に挑戦！",
    date: "2025-06-30",
    image: "/images/セールスコピーライティング.png"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function ArchiveSection() {
  const [showAll, setShowAll] = React.useState(false);
  const displayedItems = showAll ? archiveItems : archiveItems.slice(0, 3);
  
  return (
    <section id="archive" className="py-20 pb-8 mt-0 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-100/30 to-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-gradient-to-tr from-amber-100/20 to-yellow-100/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(247,249,251,1)_0%,rgba(255,255,255,0)_50%)]"></div>
      </div>
      
      <div className="container relative z-10 px-2 sm:px-6">
        {/* タイトルセクション */}
        <div className="text-center mb-16 relative">
          {/* サブタイトル */}
          <div className="inline-block mb-3">
            <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
              講義アーカイブ
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
                充実のアーカイブコンテンツ
              </span>
              {/* 3D効果の装飾下線 */}
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
              <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              最新の実践型講義を<br className="md:hidden" />いつでも視聴可能
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              毎週7時間の生放送講義をすべてアーカイブ<br />
              あなたの都合に合わせて何度でも学習できます
            </p>
          </div>
        </div>
        
        {/* 最新講義アーカイブセクション */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent w-16"></div>
            <h3 className="text-2xl font-bold text-gray-800 px-6">
              最新講義アーカイブ（一部抜粋）
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent w-16"></div>
          </div>
          
          {/* スマホ表示時に横スクロール可能なカルーセル */}
          <div className="relative max-w-5xl mx-auto">
            {/* スワイプヒントアイコン - スマホのみ表示 */}
            <div className="md:hidden flex justify-center items-center mb-4">
              <div className="flex items-center text-amber-500 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-swipe" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                横にスワイプ
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 animate-swipe" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          
            {/* カードコンテナ - スマホ表示時に横スクロール */}
            <div className="md:space-y-8 md:block flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {displayedItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 md:flex-shrink w-[85%] md:w-full mr-4 md:mr-0 md:mb-8 snap-start"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* 画像部分 - 16:9アスペクト比 */}
                    <div className="md:w-1/3 relative bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
                      <div className="w-full aspect-video relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover z-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* コンテンツ部分 - 改良版 */}
                    <div className="md:w-2/3 p-6 md:p-8 flex items-center">
                      <h4 className="text-xl font-bold text-gray-800 line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* スクロールインジケーター - スマホ表示時のみ */}
            <div className="mt-4 flex justify-center md:hidden">
              <div className="flex space-x-1">
                {displayedItems.slice(0, 3).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-2 h-2 rounded-full bg-amber-200 transition-colors duration-300"
                  ></div>
                ))}
              </div>
            </div>
            
            {/* 続きを見るボタン */}
            {!showAll && archiveItems.length > 3 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>続きを見る</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
            
            {/* 閉じるボタン */}
            {showAll && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(false)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>閉じる</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          {/* 追加説明テキスト */}
          <div className="mt-16 text-center relative">
            {/* 装飾要素 */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-gradient-to-b from-amber-300/30 to-transparent"></div>
                <div className="w-2 h-2 rotate-45 border border-amber-300/50 bg-white"></div>
              </div>
            </div>
            
            {/* 説明テキスト */}
            <div className="relative py-8 px-4 max-w-3xl mx-auto">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 rounded-xl"></div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-amber-700 font-medium mb-4 italic">
                  これらはほんの一部。毎週追加される最新講義をすべて視聴可能！
                </p>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-300 to-transparent my-5"></div>
                <p className="text-xl md:text-2xl font-bold text-gray-800 md:leading-relaxed">
                  永久会員だから、将来追加される講義も<br className="hidden md:inline" />すべて無料で視聴できます
                </p>
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-amber-200/20 to-orange-200/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tr from-amber-200/20 to-orange-200/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective {
          perspective: 2000px;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* スクロールバー非表示 */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }

        /* スワイプアイコンのアニメーション */
        @keyframes swipe {
          0% {
            transform: translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateX(4px);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 0.5;
          }
        }

        .animate-swipe {
          animation: swipe 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 