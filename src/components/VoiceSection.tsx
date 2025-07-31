"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// 受講生が開発したアプリ/コースのデータ
const courseProjects = [
  {
    id: 1,
    title: "5ch風掲示板サイト作成",
    image: "/images/projects/5ch.png",
    target: "Webアプリケーション開発を学びたい方",
    note: "※フロントエンド・バックエンド両方を学べます"
  },
  {
    id: 2,
    title: "食べログ風レビューサイト作成",
    image: "/images/projects/食べログ風.png",
    target: "データベース連携とUI設計を学びたい方",
    note: "※実際のサービスを参考にした実践的な開発"
  },
  {
    id: 3,
    title: "占いAIチャットボット開発",
    image: "/images/projects/占いBOT.png",
    target: "AI技術とチャットボット開発に興味がある方",
    note: "※APIを活用した実用的なアプリケーション開発"
  },
  {
    id: 4,
    title: "リサーチLINEボット開発",
    image: "/images/projects/LINEBOT.png",
    target: "LINE APIを活用したサービス開発を学びたい方",
    note: "※実際に使えるボットを作成します"
  },
  {
    id: 5,
    title: "作業フロー可視化アプリ開発",
    image: "/images/作業フロー可視化.png",
    target: "図表作成とドキュメント管理を効率化したい方",
    note: "※ダイアグラム作成の効率化ツール"
  },
  {
    id: 6,
    title: "推し活アプリ開発",
    image: "/images/推し活アプリ.png",
    target: "Google Apps Scriptを活用したい方",
    note: "※YouTubeデータAPIと連携したツール開発"
  }
];

export default function VoiceSection() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <section id="voice" className="py-12 pt-4 mt-0">
      <div className="container px-0 sm:px-6">
        <div className="text-center mb-12">
          {/* タイトルセクション */}
          <div className="text-center mb-16 relative">
            {/* サブタイトル */}
            <div className="inline-block mb-3">
              <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
                受講生の声
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
                  学習の成果と実績
                </span>
                {/* 3D効果の装飾下線 */}
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
                <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
              </h2>
            </div>
            
            <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
              バイブコーディングコースを受講された方々が実際に開発したプロジェクトをご紹介します。
              様々なコースで学び、実践的なスキルを身につけた成果をご覧ください。
            </p>
          </div>
        </div>
        
        {/* コースカードのカルーセルセクション */}
        <div className="relative mb-16">
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
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {courseProjects.map((course) => (
              <div 
                key={course.id} 
                className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex-shrink-0 md:flex-shrink w-[80%] md:w-full mr-4 md:mr-0 snap-start"
              >
                {/* コースヘッダー */}
                <div className="bg-amber-500 text-white py-3 px-4 text-center font-bold">
                  {course.title}
                </div>
                
                {/* コース画像 - マージンとパディングなし */}
                <div className="relative h-[300px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* スクロールインジケーター - スマホ表示時のみ */}
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex space-x-1">
              {courseProjects.map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-amber-200 transition-colors duration-300"
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 推薦者の声セクション */}
        <div className="mt-16 mb-16">
          {/* タイトルセクション */}
          <div className="text-center mb-16 relative">
            {/* サブタイトル */}
            <div className="inline-block mb-3">
              <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
                推薦者の声
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full ml-2.5"></span>
              </p>
            </div>
            
            {/* メインタイトル */}
            <div className="relative mb-8 perspective">
              <h2 className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transform transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      lineHeight: 1.3,
                      fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif",
                      textShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                  ユニコスクール推薦文
                </span>
                {/* 3D効果の装飾下線 */}
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
                <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
              </h2>
            </div>
            
            <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
              
            </p>
          </div>
          
          {/* 推薦者の声コンテンツ - 林俊介氏の画像と推薦文 */}
          <div className="max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg mx-2 sm:mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* 丸いアイコン画像 */}
              <div className="w-40 h-40 relative flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-amber-500 shadow-lg relative z-10 transform transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 25px rgba(245, 158, 11, 0.3), 0 0 15px rgba(245, 158, 11, 0.2), 0 0 5px rgba(245, 158, 11, 0.1)',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.2) 100%)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/20 z-0"></div>
                  <Image 
                    src="/images/林俊介.png"
                    alt="林俊介氏"
                    fill
                    className="object-cover z-10 relative"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              
              {/* 推薦文コンテンツ */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">ハヤシシュンスケ</h3>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {/* 導入部分 */}
                    <p className="text-lg font-medium text-gray-800 leading-relaxed">
                      半年以上、ユニコさんと毎日Zoomで<b>バイブコーディング</b>について議論してきた経験から、心から推薦します。
                    </p>
                    
                    {/* メインコンテンツ */}
                    <div className="space-y-6">
                      {/* 強みについて */}
                      <div>
                        <p className="text-base leading-relaxed mb-4">
                          ユニコさんの強みは<b>高い技術力</b>と<b>ビジネスに結びつける発想力</b>です。
                        </p>
                        
                        <p className="text-base leading-relaxed mb-4">
                          多くのエンジニアが技術に偏りがちな中、彼は常に
                        </p>
                        
                        {/* 重要なポイント */}
                        <div className="bg-white/70 p-4 rounded-lg mb-4">
                          <div className="space-y-2">
                            <p className="text-gray-800 font-semibold">「この技術をどう収益化するか」</p>
                            <p className="text-gray-800 font-semibold">「どうすれば価値を生み出せるか」</p>
                          </div>
                        </div>
                        
                        <p className="text-base leading-relaxed">という視点を持っています。</p>
                      </div>
                      
                      {/* 続きを読むボタン */}
                      <div className="text-center mt-6">
                        <button
                          onClick={() => setShowFullText(!showFullText)}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          {showFullText ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                              閉じる
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                              続きを読む
                            </>
                          )}
                        </button>
                      </div>
                      
                      {/* 続きのテキスト - 条件付き表示 */}
                      {showFullText && (
                        <div className="space-y-6 mt-6">
                          {/* 実績について */}
                          <div>
                            <p className="text-base leading-relaxed">
                              現在、<b>バイブコーディング</b>の情報は多くありますが、その多くは表面的です。しかし、技術の世界では<b>実装できなければ意味がありません</b>。ユニコさんは実際にコードを書き、プロダクトを作り、ビジネスに繋げてきた実績があります。
                            </p>
                          </div>
                          
                          {/* 初心者へのメッセージ */}
                          <div>
                            <p className="text-base leading-relaxed">
                              初心者の方でも安心してください。彼の説明は<b>丁寧で分かりやすく</b>、段階を踏んで理解を深められます。ユニコスクールで学べば、<b>バイブコーディングの技術力とビジネスセンスの両方</b>を身につけられます。
                            </p>
                          </div>
                          
                          {/* 成長について */}
                          <div>
                            <p className="text-base leading-relaxed mb-4">
                              ただし、基礎はスクールで学べますが、その後の成長は自分次第です。
                            </p>
                            
                            <p className="text-base leading-relaxed mb-4">
                              スクールでの学びを起点に、
                            </p>
                            
                            {/* 重要なポイント */}
                            <div className="bg-white/70 p-4 rounded-lg mb-4">
                              <div className="space-y-2">
                                <p className="text-gray-800 font-semibold">自分の頭で考え、</p>
                                <p className="text-gray-800 font-semibold">自分の手を動かし、</p>
                                <p className="text-gray-800 font-semibold">試行錯誤を続けること</p>
                              </div>
                            </div>
                            
                            <p className="text-base leading-relaxed">
                              が大切です。
                            </p>
                          </div>
                          
                          {/* 締めのメッセージ */}
                          <p className="text-base leading-relaxed">
                            ユニコさん自身が手を動かして結果を出してきたからこそ、その姿勢を参考に学習を続けてもらえたらと思います。
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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