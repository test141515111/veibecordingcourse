"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fee3e7] sm:pt-0 pt-16">
      {/* トップに横幅いっぱいの画像を配置 */}
      <div className="w-full relative z-10">
        {/* スマホ表示用の画像 (sm:未満で表示) */}
        <div className="block sm:hidden w-full relative">
          <Image
            src="/images/herosection_image_smartphone3.png"
            alt="ヒーロー画像（スマホ表示）"
            width={750}
            height={1334}
            className="w-full h-auto"
            priority
            quality={100}
          />
        </div>
        
        {/* タブレット・デスクトップ表示用の画像 (sm:以上で表示) */}
        <div className="hidden sm:block w-full relative">
          <Image
            src="/images/herosection_image4.png"
            alt="ヒーロー画像"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
            quality={100}
          />
          
          {/* タブレット・デスクトップ表示用のCTAボタン (sm:以上で表示) - 右下に配置 */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 w-[90%] max-w-[380px]">
            <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF5E7A] rounded-lg p-5 shadow-lg">
              <div className="text-center text-white text-xl md:text-2xl font-bold mb-4">
                簡単申込60秒！
              </div>
              <a href="https://s.lmes.jp/landing-qr/1657937154-ZxeaYPRw?uLand=Bwaxsu" target="_blank" rel="noopener noreferrer">
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
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* スマホ表示用のCTAボタン (sm:未満で表示) - 画像下に中央配置 */}
      <div className="block sm:hidden mx-auto w-[90%] max-w-[380px] -mt-2 mb-6 relative z-10">
        <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF5E7A] rounded-lg p-5 shadow-lg">
          <div className="text-center text-white text-xl font-bold mb-4">
            簡単申込60秒！
          </div>
          <a href="https://s.lmes.jp/landing-qr/1657937154-ZxeaYPRw?uLand=Bwaxsu" target="_blank" rel="noopener noreferrer">
            <div className="bg-white rounded-full p-1 shadow-md animate-pulse-slow">
              <div className="bg-white rounded-full py-4 px-5 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[#FF7A00] text-lg font-bold">
                    まずはZOOMで
                  </div>
                  <div className="text-[#FF7A00] text-xl font-bold">
                    無料カウンセリング
                  </div>
                </div>
              </div>
            </div>
          </a>
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