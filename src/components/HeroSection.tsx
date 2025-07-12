"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* トップに横幅いっぱいの画像を配置 */}
      <div className="w-full relative">
        <Image
          src="/images/herosection_image2.png"
          alt="ヒーロー画像"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
          quality={100}
        />
        
        {/* 画像下部のグラデーションオーバーレイ */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent"></div>
        
        {/* CTAボタンを画像の右下に配置 */}
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 w-[90%] max-w-[380px]">
          <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF5E7A] rounded-lg p-5 shadow-lg">
            <div className="text-center text-white text-xl md:text-2xl font-bold mb-4">
              簡単申込60秒！
            </div>
            <Link href="#contact">
              <div className="bg-white rounded-full p-1 shadow-md animate-pulse-slow">
                <div className="bg-white rounded-full py-5 px-6 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-[#FF7A00] text-xl md:text-2xl font-bold">
                      まずはZOOMで
                    </div>
                    <div className="text-[#FF7A00] text-2xl md:text-3xl font-bold">
                      無料カウンセリング
                    </div>
                  </div>
            </div>
          </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* カスタムアニメーションのためのスタイル */}
      <style jsx>{`
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        :global(.animate-pulse-slow) {
          animation: pulseSlow 2s infinite;
        }
      `}</style>
    </section>
  );
} 