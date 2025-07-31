"use client";

import React from 'react';
import Image from 'next/image';

// 講義アーカイブのデータ
const archiveItems = [
  {
    id: 1,
    title: "話題のChrome MCPを徹底解説！！！ChromeをMCPで操作しよう！＆AI美女評価",
    description: "Chrome MCPの概要と導入方法、さらにAIエージェントを使ったブラウザ操作の自動化手法について解説しています。また、AIによる美女評価の事例も交えて、実践的な使い方を紹介します。",
    date: "2025年6月16日",
    image: "/Archive_images/話題のChrome MCP解説.png",
    tags: ["Chrome MCP", "ブラウザ自動化"]
  },
  {
    id: 2,
    title: "ChromeMCPでクラウドワークスに自動応募させよう！",
    description: "Chrome MCPを用いてクラウドワークスへの案件応募を自動化する手順とそのプロンプト設計方法について講義しています。実務活用に向けた自動操作の具体例を紹介します。",
    date: "2025年6月16日",
    image: "/Archive_images/ChromeMCPでクラウドワークスに自動応募.png",
    tags: ["Chrome MCP", "自動応募"]
  },
  {
    id: 3,
    title: "【ハヤシシュンスケ降臨回】AIエージェント ❌ ワークフロー構築 ❌ n8n 徹底解説！！",
    description: "ClaudeなどのAIエージェントとn8nを連携させ、ノーコードでワークフローを自動生成・実行する方法について解説しています。AIからの自然言語指示で自動化を行うプロセスを実演しています。",
    date: "2025年6月16日",
    image: "/Archive_images/AIエージェント ❌ ワークフロー構築 ❌ n8n 徹底解説！！.png",
    tags: ["AIエージェント", "n8n", "ワークフロー"]
  },
  {
    id: 4,
    title: "【神回！後半はハヤシシュンスケさん降臨】ClaudeCode ❌ MCPでサービス開発をガンガンやっていこう！！",
    description: "ClaudeCodeとMCPを活用し、AI主導でWebサービスを構築する実践的な方法について講義しています。Base44などの先進事例も交えて、AI開発の最前線を解説します。",
    date: "2025年6月16日",
    image: "/Archive_images/Wixに80億円で買創業6ヶ月の「Base44」でバイブコーディングをしまくろう！.png",
    tags: ["ClaudeCode", "MCP", "サービス開発"]
  },
  {
    id: 5,
    title: "Kiro×ClaudeCodeが爆速すぎる...!?AWSが開発したコーディングエージェント『Kiro』徹底解説！！",
    description: "AWSが開発した新しいAIコーディングエージェント「Kiro」の機能と、ClaudeCodeとの連携による高速開発手法について解説しています。Kiroの実行環境や使い勝手も紹介します。",
    date: "2025年6月16日",
    image: "/Archive_images/Kiro×ClaudeCodeが爆速すぎる.png",
    tags: ["Kiro", "ClaudeCode", "AWS"]
  },
  {
    id: 6,
    title: "AI彼女を徹底的に作っていこう！",
    description: "AIエージェントや生成AIツールを活用して、対話可能な\"AI彼女\"を設計・構築する手順について講義しています。外見生成から性格設計までのフローを扱います。",
    date: "2025年6月16日",
    image: "/Archive_images/AI彼女を徹底的に作っていこう！.png",
    tags: ["AI彼女", "生成AI", "対話システム"]
  },
  {
    id: 7,
    title: "パソコン自体をAIで遠隔操作してみよう！AppleScriptを使ったパソコン操作徹底調査！",
    description: "AppleScriptを活用して、AIがパソコン本体を自動操作する仕組みについて解説しています。ファイル操作や起動スクリプトの実行などの自動化例も取り上げます。",
    date: "2025年6月16日",
    image: "/Archive_images/AppleScriptを使ったパソコン操作徹底調査！.png",
    tags: ["AppleScript", "パソコン操作", "自動化"]
  },
  {
    id: 8,
    title: "AppleScriptで自動出品に挑戦しよう！",
    description: "AppleScriptによるフリマアプリやECサイトへの自動出品フローを構築する方法について講義しています。Mac環境での自動処理スクリプトの基本も解説します。",
    date: "2025年6月16日",
    image: "/Archive_images/AppleScriptで自動出品に挑戦しよう！.png",
    tags: ["AppleScript", "自動出品", "EC"]
  },
  {
    id: 9,
    title: "原点に返って クラウドワークス × AI活用でサクッと案件をこなそう！",
    description: "画像生成、動画台本、SNS運用代行、ブログ記事、システム開発などその場で全部やるで！！",
    date: "2025年6月16日",
    image: "/images/クラウドワークス.png",
    tags: []
  },
  {
    id: 2,
    title: "「AI × 恋愛相談」毎日をサポートしてくれるBOTを構築",
    description: "プロンプトエンジニアリング＆ClaudeCodeで活用したバイブコーディング、音声回答システムをにじボイスAPI × ClaudeCodeで構築",
    date: "2025年6月22日",
    image: "/images/AI彼女.png",
    tags: ["プロンプトエンジニアリング", "音声システム"]
  },
  {
    id: 3,
    title: "Udemyのようなスクールの受講ページをClaudeCodeで構築！",
    description: "URLを渡すだけでスクールや講座の納品が可能！もちろんwebサービス課金不要で0円！コンテンツライティング編も収録",
    date: "2025年6月23日",
    image: "/images/Udemy.png",
    tags: ["Webサービス開発"]
  },
  {
    id: 4,
    title: "今話題のバイブコーディング（AI開発）を丁寧に解説！",
    description: "会社ホームページと連携BOT（dify）をバイブコーディング！Github→Vercel連携のエラー対応、マーケティング戦略まで",
    date: "2025年6月29日",
    image: "/images/バイブコーディング.png",
    tags: ["連携開発", "マーケティング"]
  },
  {
    id: 5,
    title: "「セールスライティング × Webデザイン × バイブコーディング」に挑戦！",
    description: "GoogleCloudのImagen 4.0で画像を生成してHPをリッチに！#ユニコスクール「バイブコーディング」コースのHPを作り込もう",
    date: "2025年6月30日",
    image: "/images/セールスコピーライティング.png",
    tags: ["ライティング", "画像生成"]
  }
];

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
                    {/* 画像部分 - より明確に */}
                    <div className="md:w-2/5 relative h-64 md:h-auto bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
                      {/* 画像プレースホルダーのデザイン */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover z-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                      

                    </div>
                    
                    {/* コンテンツ部分 - 改良版 */}
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      {/* タグ - より洗練されたデザイン */}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 text-xs font-medium py-1.5 px-3 rounded-full border border-amber-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* 視聴ボタン削除 */}
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