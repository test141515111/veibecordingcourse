"use client";

import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "完全初心者ですが大丈夫ですか？",
    answer: "はい！大丈夫です！当スクールの特徴として「ユニコ🦄式メソッド」という形でAI美女画像生成やプロンプトエンジニア、バイブコーディングが最短距離で出来るようになります。"
  },
  {
    id: 2,
    question: "地方在住なのですが、受講はオンラインでしょうか？",
    answer: "はい！講義は動画配信＆ZOOM、サポートはDiscord＋LINEとなりますので、どこにお住まいでもご安心してご参加下さいませ！"
  },
  {
    id: 3,
    question: "分割決済は可能ですか？",
    answer: "最大36分割までの決済が可能となります。\n一括払い　　：銀行振込、クレジットカード払い\n2〜12回分割 ：クレジットカード払い、口座振替　\n※月払い（回数制限付きサブスク）のため手数料はかかりません。\n※請求額を分割回数で割った金額のみが毎月請求されます。\n13〜24回分割：クレジットカード払い　※クレジットカード側の与信枠を抑える形\n※カード会社が定めた手数料がかかります。例えばJCBであれば、通常手数料率は15.00％（実質年率）です。\n25〜36回分割：信販会社　※信用調査がございます。\nが可能となります！ぜひお気軽にご相談下さい！"
  },
  {
    id: 4,
    question: "期間内で課題を終えられるか心配です。",
    answer: "マンツーマンサポート期間は原則1年を目安に考えておりますが、1年が過ぎても対応させていただきますのでご安心ください"
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
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  return (
    <section id="faq" className="py-16 mt-0 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-neutral-900 mb-2">
              よくあるご質問
            </h2>
            <p className="text-xl tracking-widest text-neutral-700 font-light">f a q</p>
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
          
          <p className="text-xl max-w-3xl mx-auto">
            バイブコーディングコースに関するよくある質問をまとめました。
            その他のご質問は、お気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                >
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${openItems.includes(faq.id) ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 