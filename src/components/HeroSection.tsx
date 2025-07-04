import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="h-[95vh] relative overflow-hidden pt-16">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/背景虹色.jpeg"
          alt="背景"
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
        />
      </div>
      
      <div className="container relative z-10 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* 左側コンテンツ - 横幅を広げる */}
          <div className="flex flex-col justify-center md:pr-0 md:w-full lg:w-[120%]">
            {/* メインタイトル - 白背景、フォントを細くて丸みのあるものに変更、サイズを小さく */}
            <h1 className="mb-6 leading-relaxed">
              <span className="inline-block bg-white px-5 py-2 mb-2 text-4xl font-light tracking-wide w-auto max-w-full" style={{ fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif" }}>「思いつき」から「動くアプリ」へ</span><br />
              <span className="inline-block bg-white px-5 py-2 w-auto max-w-full">
                <span className="text-4xl font-light tracking-wide bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-full block" style={{ fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif", letterSpacing: '0.05em' }}>
                  バイブコーディングコース
                </span>
              </span>
            </h1>
            
            {/* サブコピー - 黒背景・白文字、メインコピーと同じフォント */}
            <p className="mb-8">
              <span className="inline-block bg-black text-white px-4 py-1.5 mb-2 text-2xl font-light tracking-wide w-auto max-w-full" style={{ fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif" }}>最先端のAIプログラミングが学び放題</span><br />
              <span className="inline-block bg-black text-white px-4 py-1.5 text-2xl font-light tracking-wide w-auto max-w-full" style={{ fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif" }}>オンライン完結可能</span>
            </p>
            
            {/* CTAボタン画像 - サイズ調整 & アニメーション追加 */}
            <div className="mt-2">
              <Link href="#contact">
                <Image
                  src="/images/CTAボタン.png"
                  alt="無料カウンセリングに申し込む"
                  width={300}
                  height={90}
                  className="w-auto h-auto max-w-[300px] cta-pulse hover:scale-105 transition-transform"
                  priority
                />
              </Link>
            </div>
          </div>
          
          {/* 右側画像 - 右にずらす、サイズ拡大 */}
          <div className="relative md:absolute md:right-[-8%] md:bottom-0 md:w-[55%] md:h-[90%]">
            <Image
              src="/images/ユニコhero.png"
              alt="バイブコーディングコース キャラクター"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 