"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="pt-16 pb-0 bg-orange-100">
      <div className="container">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-neutral-900 mb-2">
              無料カウンセリング<span className="text-4xl align-middle">の</span>お申し込み
            </h2>
            <p className="text-xl tracking-widest text-neutral-700 font-light">c o n t a c t</p>
            <div className="flex justify-center items-center gap-2 mt-3">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-700"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-sm text-left">
            <p className="font-bold text-2xl lg:text-3xl mb-6">まずはZOOMしましょう！</p>
            <p className="text-lg lg:text-xl mb-5">当スクールでは、入会いただいた方との共同でビジネスも行っております。</p>
            <p className="text-lg lg:text-xl mb-5">そのため、スクール入会者は長いお付き合いをさせて頂ければと思っておりますので、大変恐縮ですが、スクール入会前に必ず、ユニコ🦄本人とのZOOM面談をさせて頂いております。</p>
            <p className="text-lg lg:text-xl mb-5">ZOOMでは、</p>
            <p className="text-lg lg:text-xl mb-2 pl-4">✅スクールに関する不明点</p>
            <p className="text-lg lg:text-xl mb-6 pl-4">✅「自分でもできるかな？」「自分にはどんなマネタイズが向いてる？」などのご質問<br />など何でもお答え致します！！</p>
            <p className="text-lg lg:text-xl mb-5">まずは下記より、LINE公式アカウントのご登録をよろしくお願いします！</p>
            <p className="text-base lg:text-lg text-neutral-700">※登録直後に、ZOOMの日程調整が始まりますのでご登録下さい！</p>
          </div>
        </div>
        
        <div className="flex justify-center pb-16">
          <Link href="#contact">
            <Image
              src="/images/CTAボタン.png"
              alt="無料カウンセリングに申し込む"
              width={350}
              height={105}
              className="w-auto h-auto max-w-[350px] cta-pulse hover:scale-105 transition-transform"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
} 