"use client";

import React from 'react';

const faqs = [
  {
    id: 1,
    question: "完全初心者ですが大丈夫ですか？",
    answer: "はい！大丈夫です！受講生の9割以上がプログラミング未経験からのスタートです。\n\n動画解説コンテンツでじっくり基礎を学び、ライブ講義で理解を深め、さらにサポートスタッフのフォローで順序立ててスキルが身に付く仕組みになっています。\n\n初心者でも着実にステップアップし、最終的には自分でアプリ開発ができるようになりますので、安心してご参加ください。"
  },
  {
    id: 2,
    question: "地方在住なのですが、受講はオンラインでしょうか？",
    answer: "はい！講義は動画配信＆ZOOM、サポートはDiscord＋LINEとなりますので、どこにお住まいでもご安心してご参加下さいませ！"
  },
  {
    id: 3,
    question: "分割決済は可能ですか？",
    answer: "最大36分割までの決済が可能となります。\n\n一括払い　　：銀行振込、クレジットカード払い\n2〜12回分割 ：クレジットカード払い、口座振替　\n※月払い（回数制限付きサブスク）のため手数料はかかりません。\n※請求額を分割回数で割った金額のみが毎月請求されます。\n\n13〜24回分割：クレジットカード払い　※クレジットカード側の与信枠を抑える形\n※カード会社が定めた手数料がかかります。例えばJCBであれば、通常手数料率は15.00％（実質年率）です。\n\n25〜36回分割：信販会社　※信用調査がございます。\n\nが可能となります！ぜひお気軽にご相談下さい！"
  },
  {
    id: 4,
    question: "期間内で課題を終えられるか心配です。",
    answer: "マンツーマンサポート期間は原則1年を目安に考えておりますが、1年が過ぎても対応させていただきますのでご安心ください。"
  },
  {
    id: 5,
    question: "スタッフや外注さんにも学ばせたいのですが可能でしょうか？",
    answer: "申込者含め、合計3人までグループチャットで対応可能です。"
  },
  {
    id: 6,
    question: "申し込み後のスケジュールを教えてください。",
    answer: "決済確認後、48時間以内にスクールのスタートが可能となります。"
  }
];

export default function FaqSection() {
  // 常にすべての項目を表示するため、useState は不要になります
  
  return (
    <section id="faq" className="py-16 mt-0 bg-gray-50">
      <div className="container">
        {/* タイトルセクション */}
        <div className="text-center mb-16 relative">
          {/* サブタイトル */}
          <div className="inline-block mb-3">
            <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
              よくあるご質問
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
                よくあるご質問
              </span>
              {/* 3D効果の装飾下線 */}
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
              <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
            </h2>
          </div>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
            バイブコーディングコースに関するよくある質問をまとめました。
            その他のご質問は、お気軽にお問い合わせください。
          </p>
        </div>
        
        {/* FAQ項目 */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="font-bold text-xl mb-4 text-gray-800 border-l-4 border-amber-500 pl-4">
                  {faq.question}
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            ))}
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