"use client";

import React from 'react';
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
    title: "マーメイドアプリ開発",
    image: "https://placehold.co/600x400/EAF5FF/333333.png?text=マーメイド",
    target: "図表作成とドキュメント管理を効率化したい方",
    note: "※ダイアグラム作成の効率化ツール"
  },
  {
    id: 6,
    title: "YouTubeリサーチGASアプリ開発",
    image: "/images/projects/YouTubeリサーチツール.png",
    target: "Google Apps Scriptを活用したい方",
    note: "※YouTubeデータAPIと連携したツール開発"
  }
];

export default function VoiceSection() {
  return (
    <section id="voice" className="py-16 mt-0">
      <div className="container">
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
        
        {/* コースカードグリッド - そのまま維持 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseProjects.map((course) => (
            <div 
              key={course.id} 
              className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
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
        
        {/* 推薦者の声セクション */}
        <div className="mt-24 mb-16">
          {/* タイトルセクション */}
          <div className="text-center mb-16 relative">
            {/* サブタイトル */}
            <div className="inline-block mb-3">
              <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
                <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
                業界からの評価
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
                  推薦者の声
                </span>
                {/* 3D効果の装飾下線 */}
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
                <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
              </h2>
            </div>
            
            <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
              バイブコーディングコースの卒業生を採用・評価いただいている企業や専門家からの推薦の声をご紹介します。
            </p>
          </div>
          
          {/* 推薦者の声コンテンツはそのまま残す */}
        </div>
      </div>
      
      <style jsx>{`
        .perspective {
          perspective: 2000px;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
      `}</style>
    </section>
  );
} 