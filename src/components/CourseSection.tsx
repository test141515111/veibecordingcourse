"use client";

import React from 'react';
import Image from 'next/image';
import { BookOpen, Users, Tv, Code, MessageSquare, CheckCircle2, Target, Zap } from "lucide-react";

export default function CourseSection() {
  return (
    <section id="course" className="py-16 mt-0 relative overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-[-10]">
        <Image
          src="/images/背景白.jpeg"
          alt="白い背景"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      
      {/* モダンな背景要素 */}
      <div className="absolute inset-0 overflow-hidden z-[-5]">
        {/* 高級感のある抽象的背景 */}
        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(245,247,250,1)_0%,rgba(255,255,255,0)_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[40%] bg-[linear-gradient(180deg,rgba(236,240,253,0.3)_0%,rgba(236,240,253,0)_100%)]"></div>
          <div className="absolute top-1/4 right-1/3 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-400/2 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-blue-300/2 to-transparent blur-[100px]"></div>
        </div>
        
        {/* 幾何学模様装飾 */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <div className="w-40 h-40 border border-blue-100/50 rounded-full"></div>
          <div className="w-40 h-40 border border-blue-100/30 rounded-full absolute -top-10 -left-10"></div>
        </div>
      </div>
      
      <div className="container relative z-10 bg-white/80 rounded-xl p-6 shadow-lg backdrop-blur-sm">
        <div className="text-center mb-16 relative">
          {/* サブタイトル */}
          <div className="inline-block mb-3">
            <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
              バイブコーディングコース
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
                充実のカリキュラム
              </span>
              {/* 3D効果の装飾下線 */}
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
              <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
            </h2>
          </div>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
            バイブコーディングコースは、3つの軸で構成された実践的な学習プログラムです。
            学習・指導・交流の3軸アプローチで効率的にAIコーディングスキルを習得できます。
          </p>
        </div>
        
        {/* 学習ロードマップ */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          {/* Main Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Table Header */}
            <div className="grid grid-cols-3 overflow-hidden rounded-t-2xl">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300/30 via-amber-400/50 to-amber-300/30"></div>
                <div className="relative flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-400 rounded-xl shadow-md flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-amber-900/70 tracking-wider uppercase mb-1">AXIS 01</div>
                    <div className="text-2xl font-bold text-amber-950 tracking-tight">学習軸</div>
                  </div>
                </div>
                <p className="text-amber-800 text-sm font-medium">基礎から実践まで段階的学習</p>
              </div>

              <div className="bg-gradient-to-br from-amber-200 to-amber-300 p-8 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/30 via-amber-500/50 to-amber-400/30"></div>
                <div className="relative flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl shadow-md flex items-center justify-center">
                    <Users className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-amber-900/70 tracking-wider uppercase mb-1">AXIS 02</div>
                    <div className="text-2xl font-bold text-amber-950 tracking-tight">指導軸</div>
                  </div>
                </div>
                <p className="text-amber-800 text-sm font-medium">マンツーマン指導による成長加速</p>
              </div>

              <div className="bg-gradient-to-br from-amber-300 to-amber-400 p-8 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-200/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/30 via-amber-600/50 to-amber-500/30"></div>
                <div className="relative flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-700 to-amber-600 rounded-xl shadow-md flex items-center justify-center">
                    <Tv className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-amber-900/70 tracking-wider uppercase mb-1">AXIS 03</div>
                    <div className="text-2xl font-bold text-amber-950 tracking-tight">交流軸</div>
                  </div>
                </div>
                <p className="text-amber-800 text-sm font-medium">リアルタイム学習とコミュニティ参加</p>
              </div>
            </div>

            {/* Main Content Row */}
            <div className="grid grid-cols-3 divide-x divide-amber-100 min-h-[400px]">
              {/* Learning Axis */}
              <div className="p-8 bg-gradient-to-b from-amber-50/30 to-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-amber-900">課題内容</h3>
                      <span className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                        30課題
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      バイブコーディング独自のカリキュラムで実践的なスキルを習得
                    </p>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="rounded-xl p-5 bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow-sm">
                          <Code className="w-5 h-5 text-amber-700" />
                        </div>
                        <h4 className="font-semibold text-amber-950">基礎課題</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-10">テトリス、プロンプト量産アプリ、占いbot開発など基礎力の育成</p>
                    </div>

                    <div className="rounded-xl p-5 bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow-sm">
                          <Target className="w-5 h-5 text-amber-700" />
                        </div>
                        <h4 className="font-semibold text-amber-950">実践課題</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-10">企業サイト作成、リサーチアプリ開発など実践力養成</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentoring Axis */}
              <div className="p-8 bg-gradient-to-b from-amber-100/20 to-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-amber-900">指導内容</h3>
                      <span className="bg-gradient-to-r from-amber-200 to-amber-300 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                        マンツーマン
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">課題の添削とマンツーマン指導で急速成長を実現</p>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="rounded-xl p-5 bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg shadow-sm">
                          <MessageSquare className="w-5 h-5 text-amber-700" />
                        </div>
                        <h4 className="font-semibold text-amber-950">成果物フィードバック</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-10">実際の成果物を見ながら具体的な改善点を指導</p>
                    </div>

                    <div className="rounded-xl p-5 bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-amber-700" />
                        </div>
                        <h4 className="font-semibold text-amber-950">個別サポート</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-10">つまずきポイントを即座に解決</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Axis */}
              <div className="p-8 bg-gradient-to-b from-amber-100/30 to-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-amber-900">参加内容</h3>
                      <span className="bg-gradient-to-r from-amber-300 to-amber-400 text-amber-800 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                        LIVE配信
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">生放送に参加して最新トレンドや疑問を一発解消</p>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="rounded-xl p-5 bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-gradient-to-br from-amber-300 to-amber-200 rounded-lg shadow-sm">
                          <Tv className="w-5 h-5 text-amber-700" />
                        </div>
                        <h4 className="font-semibold text-amber-950">ライブ講義</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-10">最新技術トレンドをリアルタイムで学習</p>
                    </div>

                    <div className="rounded-xl p-5 bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-gradient-to-br from-amber-300 to-amber-200 rounded-lg shadow-sm">
                          <MessageSquare className="w-5 h-5 text-amber-700" />
                        </div>
                        <h4 className="font-semibold text-amber-950">質疑応答</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-10">疑問点をその場で直接質問・解決</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Row */}
            <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 border-t border-amber-100 rounded-b-2xl overflow-hidden">
              <div className="grid grid-cols-3">
                <div className="p-6 text-center relative group">
                  <div className="transform transition-transform group-hover:scale-105">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-500 bg-clip-text text-transparent mb-1">30</div>
                    <div className="text-sm text-amber-800 font-medium">実践課題</div>
                  </div>
                </div>
                <div className="p-6 text-center relative group">
                  <div className="transform transition-transform group-hover:scale-105">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-500 bg-clip-text text-transparent mb-1">個別</div>
                    <div className="text-sm text-amber-800 font-medium">マンツーマン指導</div>
                  </div>
                </div>
                <div className="p-6 text-center relative group">
                  <div className="transform transition-transform group-hover:scale-105">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-500 bg-clip-text text-transparent mb-1">LIVE</div>
                    <div className="text-sm text-amber-800 font-medium">リアルタイム学習</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-8">
            <p className="text-slate-600">3つの軸が同時に機能することで、確実にスキルアップを実現します</p>
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