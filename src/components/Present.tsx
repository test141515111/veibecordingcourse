"use client";

import React from 'react';
import Image from 'next/image';
import { BookOpen, Users, MessageSquare, Zap, Clock, Award, CheckCircle2 } from "lucide-react";

export default function Present() {
  return (
    <section id="present" className="py-12 sm:py-16 mt-0 relative overflow-hidden">
      {/* 背景虹色2.png */}
      <div className="absolute inset-0 z-[-10]">
        <Image
          src="/images/背景虹色2.png"
          alt="虹色の背景"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      
      {/* モダンな背景要素 - より控えめに */}
      <div className="absolute inset-0 overflow-hidden z-[-5]">
        {/* 高級感のある抽象的背景 - オレンジベース */}
        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,247,237,1)_0%,rgba(255,255,255,0)_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[40%] bg-[linear-gradient(180deg,rgba(255,247,237,0.3)_0%,rgba(255,247,237,0)_100%)]"></div>
          <div className="absolute top-1/4 right-1/3 w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] rounded-full bg-gradient-to-br from-orange-400/2 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[15rem] sm:w-[20rem] md:w-[30rem] h-[15rem] sm:h-[20rem] md:h-[30rem] rounded-full bg-gradient-to-bl from-orange-300/2 to-transparent blur-[100px]"></div>
        </div>
        
        {/* 幾何学模様装飾 - より控えめに */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <div className="w-40 h-40 border border-orange-100/50 rounded-full"></div>
          <div className="w-40 h-40 border border-orange-100/30 rounded-full absolute -top-10 -left-10"></div>
        </div>
      </div>
      
      <div className="w-[95%] sm:container mx-auto px-1 sm:px-6 relative z-10 bg-white/80 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm">
        {/* タイトルセクション - 他のコンポーネントと同じデザイン */}
        <div className="text-center mb-16 relative">
          {/* サブタイトル */}
          <div className="inline-block mb-3">
            <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
              バイブコーディングコース参加特典
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full ml-2.5"></span>
            </p>
          </div>
          
          {/* メインタイトル - 他のコンポーネントと同じデザイン */}
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
                コース参加者限定特典
              </span>
              {/* 3D効果の装飾下線 */}
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
              <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
            </h2>
          </div>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
            バイブコーディングコースにご参加いただく方限定の特別特典をご用意しています。
            これらの特典で、さらに充実した学習体験をお届けします！
          </p>
        </div>

        {/* 特典カードセクション */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/Present_images/特典1.png"
                  alt="特典1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/Present_images/特典2.png"
                  alt="特典2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/Present_images/特典3.png"
                  alt="特典3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/Present_images/特典4.png"
                  alt="特典4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/Present_images/特典5.png"
                  alt="特典5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/Present_images/特典6.png"
                  alt="特典6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 完全買い切り型スクールセクション */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              完全買い切り型スクールだから<br />
              追加料金、一切ゼロ！
            </h3>
          </div>
          
          {/* サムネイル画像枠 */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/永久会員.png"
                  alt="永久会員"
                  fill
                  className="object-cover"
                />
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
      `}</style>
    </section>
  );
} 