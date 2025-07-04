"use client";

import React from 'react';
import { BookOpen, Users, Tv, Code, MessageSquare, CheckCircle2, Target, Zap } from "lucide-react";

export default function CourseSection() {
  return (
    <section id="course" className="py-16 mt-0" style={{ backgroundImage: 'url(/images/背景白.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-neutral-900 mb-2">
              充実<span className="text-4xl align-middle">の</span>カリキュラム
            </h2>
            <p className="text-xl tracking-widest text-neutral-700 font-light">c o u r s e s</p>
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
          
          <div className="relative mt-8 mb-12">
            <div className="bg-yellow-400 py-6 px-8 text-center mx-auto max-w-4xl relative">
              <h3 className="text-2xl font-bold text-neutral-900">バイブコーディングコースの学習カリキュラム</h3>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 
                  border-l-[20px] border-l-transparent 
                  border-t-[20px] border-t-yellow-400 
                  border-r-[20px] border-r-transparent"></div>
            </div>
          </div>
          
          <p className="text-xl max-w-3xl mx-auto">
            バイブコーディングコースは、3つの軸で構成された実践的な学習プログラムです。
            学習・指導・交流の3軸アプローチで効率的にAIコーディングスキルを習得できます。
          </p>
        </div>
        
        {/* 学習ロードマップ */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          {/* Main Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Table Header */}
            <div className="grid grid-cols-3">
              <div className="bg-blue-400 p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-blue-900 font-medium">AXIS 01</div>
                    <div className="text-2xl font-bold text-slate-800">学習軸</div>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">基礎から実践まで段階的学習</p>
              </div>

              <div className="bg-emerald-300 p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-600 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-emerald-900 font-medium">AXIS 02</div>
                    <div className="text-2xl font-bold text-slate-800">指導軸</div>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">マンツーマン指導による成長加速</p>
              </div>

              <div className="bg-purple-300 p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-purple-900 font-medium">AXIS 03</div>
                    <div className="text-2xl font-bold text-slate-800">交流軸</div>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">リアルタイム学習とコミュニティ参加</p>
              </div>
            </div>

            {/* Main Content Row */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 min-h-[400px]">
              {/* Learning Axis */}
              <div className="p-8 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-900">課題内容</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                        30課題
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      バイブコーディング独自のカリキュラムで実践的なスキルを習得
                    </p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="border border-slate-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Code className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-slate-900">基礎課題</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">テトリス、プロンプト量産アプリ、占いbot開発など基礎力の育成</p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-slate-900">実践課題</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">企業サイト作成、リサーチアプリ開発など実践力養成</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentoring Axis */}
              <div className="p-8 bg-gradient-to-b from-emerald-50/50 to-white">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-900">指導内容</h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                        マンツーマン
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">課題の添削とマンツーマン指導で急速成長を実現</p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="border border-slate-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-semibold text-slate-900">成果物フィードバック</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">実際の成果物を見ながら具体的な改善点を指導</p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-semibold text-slate-900">個別サポート</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">つまずきポイントを即座に解決</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Axis */}
              <div className="p-8 bg-gradient-to-b from-purple-50/50 to-white">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-slate-900">参加内容</h3>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                        LIVE配信
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">生放送に参加して最新トレンドや疑問を一発解消</p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="border border-slate-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Tv className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold text-slate-900">ライブ講義</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">最新技術トレンドをリアルタイムで学習</p>
                    </div>

                    <div className="border border-slate-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold text-slate-900">質疑応答</h4>
                      </div>
                      <p className="text-sm text-slate-600 pl-8">疑問点をその場で直接質問・解決</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Row */}
            <div className="bg-slate-50 border-t border-slate-200">
              <div className="grid grid-cols-3 divide-x divide-slate-200">
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">30</div>
                  <div className="text-sm text-slate-600">実践課題</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">個別</div>
                  <div className="text-sm text-slate-600">マンツーマン指導</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">LIVE</div>
                  <div className="text-sm text-slate-600">リアルタイム学習</div>
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
    </section>
  );
} 