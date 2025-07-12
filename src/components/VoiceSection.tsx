"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "田中 直樹",
    age: "28歳",
    occupation: "Webデザイナー",
    comment: "AIを活用したコーディング手法を学び、制作時間が半分になりました。実践的な課題と丁寧なフィードバックのおかげで、短期間で自信を持ってコードが書けるようになりました。",
    image: "https://placehold.co/300x300/FF44E0/FFFFFF.png?text=田中さん",
    before: "デザインはできてもコーディングに時間がかかっていた",
    after: "AIと協働しながら効率よく高品質なコードを書けるように"
  },
  {
    id: 2,
    name: "佐藤 美咲",
    age: "32歳",
    occupation: "事務職から転職",
    comment: "未経験からのスタートで不安でしたが、バイブコーディングのカリキュラムは初心者にも理解しやすく、ライブ配信での質問対応も親切でした。3ヶ月で自分のポートフォリオサイトが作れるようになり、Web制作会社への転職も決まりました！",
    image: "https://placehold.co/300x300/00C3FF/FFFFFF.png?text=佐藤さん",
    before: "プログラミングの経験ゼロからのスタート",
    after: "自信を持ってWeb制作の仕事に応募できるレベルに"
  },
  {
    id: 3,
    name: "山田 健太",
    age: "25歳",
    occupation: "フリーランスエンジニア",
    comment: "独学で行き詰まっていたところ、このコースに出会いました。特にAIを活用したコーディング手法は目から鱗で、作業効率が格段に上がりました。メンターからのフィードバックも的確で、技術力が大きく向上しました。",
    image: "https://placehold.co/300x300/FF44E0/FFFFFF.png?text=山田さん",
    before: "独学での限界を感じていた",
    after: "高単価案件を受注できるスキルを習得"
  },
  {
    id: 4,
    name: "鈴木 優子",
    age: "35歳",
    occupation: "マーケティング担当",
    comment: "業務でWebサイトの更新を任されるようになり、基礎から学び直したくて受講しました。AIを活用した効率的な学習方法のおかげで、仕事と両立しながらもスキルアップできました。社内での評価も上がり、大変満足しています。",
    image: "https://placehold.co/300x300/00C3FF/FFFFFF.png?text=鈴木さん",
    before: "HTMLの基本的な知識しかなかった",
    after: "自社サイトの改善提案ができるレベルに成長"
  },
];

export default function VoiceSection() {
  const [activeTab, setActiveTab] = useState(1);
  
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
              バイブコーディングコースを受講された方々の声をご紹介します。
              様々な経歴や目標を持った方が学習し、成果を出しています。
            </p>
          </div>
          
        </div>
        
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-4 space-x-2 md:space-x-4 md:justify-center">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTab(testimonial.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex-shrink-0 ${
                  activeTab === testimonial.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-neutral-700 hover:bg-gray-100"
                }`}
              >
                {testimonial.name} ({testimonial.occupation})
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`${
              activeTab === testimonial.id ? "block" : "hidden"
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="col-span-2 p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                      <p className="text-neutral-700">{testimonial.age} / {testimonial.occupation}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg italic mb-6 border-l-4 border-primary pl-4 py-2">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-neutral-900 mb-2">Before</h4>
                      <p>{testimonial.before}</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-bold text-neutral-900 mb-2">After</h4>
                      <p>{testimonial.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        
        <div className="mb-12 bg-secondary/10 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-3">受講生のプロジェクト例</h3>
            <p>コース修了生が作成した実際のプロジェクトをご覧ください</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={`https://placehold.co/400x300/00C3FF/FFFFFF.png?text=ポートフォリオ${item}`}
                    alt={`ポートフォリオ例 ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white p-4 font-bold">プロジェクト例 {item}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-neutral-700">
                    受講生が{item}週間で作成した作品です。AIを活用した効率的なコーディング手法を駆使しています。
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 