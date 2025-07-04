import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-pink-50 mt-0">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="mb-4 inline-block relative bg-gradient-to-t from-yellow-400 from-0% via-yellow-400 via-30% to-transparent to-31% bg-bottom bg-no-repeat" style={{ backgroundSize: '100% 0.8em', paddingBottom: '0.3em' }}>
            バイブコーディングコースとは？
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            バイブコーディングコースは、ユニコスクールが提供する "AIと並走しながらWeb開発を学べる" オンライン講座です。
            洗練されたユニコ🦄の課題添削と毎週の生放送で、完全初心者でも安心スタート！
            目的やレベルに合わせて選べる多彩な課題ラインナップで、アイデアを最速でカタチにしましょう！
          </p>
        </div>
        
        <div className="mb-6">
          <Image 
            src="/images/4カード.png"
            alt="バイブコーディングコースの特徴"
            width={1200}
            height={400}
            className="w-full"
          />
        </div>
        
        <div className="mb-6 flex justify-center">
          <Image 
            src="/images/吹き出しアイコン.png"
            alt="続けられる仕組みとサポート体制"
            width={600}
            height={200}
            className="w-1/2"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-2 mb-6">
          <div className="md:w-1/2">
            <Image 
              src="/images/カード1.png"
              alt="実務で通用する力を計画的に身につける"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/images/カード2.png"
              alt="悩みは一人で抱えなくていい"
              width={500}
              height={300}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-gray-600 text-2xl">ほかにも...</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-full md:w-[calc(100%-1rem)]">
            <Image 
              src="/images/カード4.png"
              alt="テトリスから2ch風掲示板、かわいいHPなど遊びながら作れる力を総取り"
              width={1000}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-4">
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
    </section>
  );
} 