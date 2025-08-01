"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users, Tv, Code, MessageSquare, CheckCircle2, Target, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 mt-0 relative overflow-hidden">
      {/* 背景虹色2.png */}
      <div className="absolute inset-0 z-[-10]">
        <Image
          src="/images/背景虹色2.png"
          alt="虹色の背景"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>
      
      {/* モダンな背景要素 - より控えめに */}
      <div className="absolute inset-0 overflow-hidden z-[-5]">
        {/* 高級感のある抽象的背景 - オレンジベース */}
        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,247,237,1)_0%,rgba(255,255,255,0)_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[40%] bg-[linear-gradient(180deg,rgba(255,247,237,0.3)_0%,rgba(255,247,237,0)_100%)]"></div>
          <div className="absolute top-1/4 right-1/3 w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] rounded-full bg-gradient-to-br from-orange-400/2 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[15rem] sm:w-[20rem] md:w-[30rem] h-[15rem] sm:h-[20rem] md:h-[30rem] rounded-full bg-gradient-to-bl from-orange-300/2 to-transparent blur-[100px]"></div>
        </div>
        
        {/* 幾何学模様装飾 - より控えめに */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <div className="w-40 h-40 border border-orange-100/50 rounded-full"></div>
          <div className="w-40 h-40 border border-orange-100/30 rounded-full absolute -top-10 -left-10"></div>
        </div>
      </div>
      
      <div className="w-[95%] sm:container mx-auto px-1 sm:px-6 relative z-10 bg-white/80 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm">
        {/* タイトルセクション - そのまま維持 */}
        <div className="text-center mb-16 relative">
          {/* サブタイトル */}
          <div className="inline-block mb-3">
            <p className="text-sm uppercase tracking-[0.25em] py-1.5 px-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-700 font-medium relative inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full mr-2.5"></span>
              バイブコーディングコース
              <span className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-secondary rounded-full ml-2.5"></span>
            </p>
          </div>
          
          {/* メインタイトル - そのまま維持 */}
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
                最速で実力がつく仕組み
              </span>
              {/* 3D効果の装飾下線 */}
              <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-primary/50 via-secondary/70 to-primary/50 rounded-full transform rotate-x-12 shadow-lg"></span>
              <span className="absolute left-0 -bottom-1 w-[90%] h-[1px] mx-[5%] bg-gradient-to-r from-transparent via-secondary/50 to-transparent rounded-full"></span>
            </h2>
          </div>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
            バイブコーディングコースは、ユニコスクールの "AIと並走するWeb開発" オンライン講座です。
            ユニコ🦄の課題添削と毎週の生放送で初心者も安心。多彩な課題であなたのアイデアを形にします！
          </p>
        </div>
        

        
        {/* サポート体制セクション - 改良版 */}
        <div className="max-w-5xl mx-auto mb-16 px-4">
          {/* サポート体制ヘッダー - 改良版 */}
          <div className="relative mb-12">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                {/* かわいいボーダー効果 */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-orange-300 rounded-2xl animate-pulse-slow"></div>
                <div className="absolute -inset-0.5 bg-white/50 rounded-2xl blur-sm"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-0.5 shadow-lg border border-pink-100">
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-200 rounded-full shadow-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-pink-200 rounded-full shadow-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent px-6 py-2 relative">
                    充実したサポート体制
                  </h2>
                </div>
                              </div>
            </div>
          </div>
          
          {/* サポート内容カード - 3カードバージョン */}
          <div className="space-y-16">
            {/* サポートカード1: コミュニティサポート */}
            
            {/* サポートカード2: ライブ講義 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* テキストセクション（右左入れ替え） */}
                <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-center lg:order-1 order-2">
                  <div className="inline-block bg-orange-100 px-3 py-1 rounded-full text-orange-600 text-xs font-medium tracking-wider mb-3">LIVE SESSIONS</div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">週4回のライブ講義</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                    定期的なライブ講義でリアルタイムに質問や相談ができます。講師陣による丁寧な解説と、受講生同士の交流の場としても活用できます。
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-50/50 rounded-lg p-3 sm:p-5 mb-4 shadow-sm border border-orange-100/70">
                    <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 flex items-center text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      ライブ講義・作業会スケジュール
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-xs sm:text-sm">日</span>
                          </div>
                          <div className="ml-2 sm:ml-3 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                              <p className="font-bold text-gray-800 text-sm sm:text-base">ユニコ🦄のAI開発生放送</p>
                              <p className="text-xs sm:text-sm text-gray-500 sm:ml-2">20:00〜22:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-pink-200 pl-2">
                              最新のAI解説・開発実演
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-xs sm:text-sm">月</span>
                          </div>
                          <div className="ml-2 sm:ml-3 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                              <p className="font-bold text-gray-800 text-sm sm:text-base">ユニコ🦄のAI開発生放送</p>
                              <p className="text-xs sm:text-sm text-gray-500 sm:ml-2">22:00〜24:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-blue-200 pl-2">
                              最新のAI解説・開発実演
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-xs sm:text-sm">火</span>
                          </div>
                          <div className="ml-2 sm:ml-3 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                              <p className="font-bold text-gray-800 text-sm sm:text-base">ハヤシシュンスケと<br/>ユニコ🦄のAI開発生放送</p>
                              <p className="text-xs sm:text-sm text-gray-500 sm:ml-2">23:00〜25:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-green-200 pl-2">
                              最新のAI解説・開発実演
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-xs sm:text-sm">木</span>
                          </div>
                          <div className="ml-2 sm:ml-3 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                              <p className="font-bold text-gray-800 text-sm sm:text-base">バイブコーディング作業会</p>
                              <p className="text-xs sm:text-sm text-gray-500 sm:ml-2">20:00〜23:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-purple-200 pl-2">
                              参加型の共同作業会・質問なんでもOK
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-medium text-gray-700">
                    ライブ講義はすべてアーカイブ保存され、後からでも視聴可能です
                  </p>
                  <p className="text-base font-medium text-gray-700 mt-2">
                    ハヤシシュンスケさんの生放送は期間限定のため永久ではありません
                  </p>
                  
                  {/* 1週間の合計時間表示 */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl border-2 border-orange-200 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
                        1週間の合計時間: 9時間
                      </div>
                      <p className="text-sm text-orange-700 font-medium">
                        毎週これだけの時間をライブで学習できます！
                      </p>
                    </div>
                  </div>

                </div>
                
                {/* 画像セクション */}
                <div className="lg:col-span-5 relative lg:order-2 order-1 overflow-hidden rounded-r-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-orange-50/10 z-0"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="relative w-5/6 aspect-square overflow-hidden">
                      <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/50 via-pink-100/30 to-blue-100/40 rounded-full blur-md z-0 animate-pulse-slow"></div>
                      <div className="absolute inset-0 rounded-full border-8 border-white/40 z-10"></div>
                      <div className="relative z-0 rounded-full overflow-hidden w-full h-full border-8 border-white shadow-lg transform hover:scale-[1.03] transition-transform duration-300">
                        <Image
                          src="/images/uniko_icon.png"
                          alt="ユニコのAI開発生放送"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* 装飾要素 */}
                    <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-gradient-to-br from-pink-200/40 to-orange-200/40 blur-sm"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* サポートカード3: 課題添削 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-1 items-stretch">
                {/* テキストセクション */}
                <div className="lg:col-span-1 p-8 flex flex-col justify-center">
                  <div className="inline-block bg-orange-100 px-3 py-1 rounded-full text-orange-600 text-xs font-medium tracking-wider mb-3">VIBE CODING CURRICULUM</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    <span className="inline-block bg-purple-100 px-3 py-1 rounded-lg text-purple-600 relative mb-1">
                      ユニコ式🦄
                      <span className="absolute bottom-0 left-4 w-3 h-3 bg-purple-100 transform rotate-45 translate-y-1.5"></span>
                    </span>
                    <br />
                    バイブコーディングカリキュラム
                  </h3>
                  <p className="text-gray-700 mb-6">
                    動画解説付きの課題に取り組むことで、理解を深めながら、実際にコードを書いていくことができます。講師の丁寧な添削とフィードバックにより、より良いコードを書く力が身につきます。
                  </p>
                  
                  {/* 添削&フィードバックの流れ */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-4 flex items-center">
                      <span className="w-1.5 h-5 bg-orange-500 rounded-sm mr-2 inline-block"></span>
                      添削&フィードバックの流れ
                    </h4>
                    
                    {/* 4つのステップを1行ずつ表示 */}
                    <div className="space-y-4">
                      {/* ステップ1 */}
                      <div className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 sm:p-4 lg:p-5 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-full lg:w-48 xl:w-64 aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-4 lg:mb-0 lg:mr-5 shadow-md flex-shrink-0 border-2 border-orange-200 overflow-hidden">
                          <Image
                            src="/Feedback_images/課題動画.png"
                            alt="動画解説視聴"
                            width={256}
                            height={144}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-orange-800 text-lg sm:text-xl mb-2">STEP1 動画解説＋テキストコンテンツで課題を視聴</h5>
                          <p className="text-sm sm:text-base text-gray-700">テーマを絞った分かりやすい動画解説で、初心者でも安心して取り組めます。動画だけでなく図解やキャプチャなどテキストベースの説明も充実。使用している参考プロンプトも共有されるので、完成例が見えている状態で取り組みやすくなっています。</p>
                        </div>
                      </div>
                      
                      {/* 流れの矢印1 */}
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white font-bold text-sm">▼</span>
                        </div>
                      </div>
                      
                      {/* ステップ2 */}
                      <div className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 sm:p-4 lg:p-5 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-full lg:w-48 xl:w-64 aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-4 lg:mb-0 lg:mr-5 shadow-md flex-shrink-0 border-2 border-orange-200 overflow-hidden">
                          <Image
                            src="/Feedback_images/バイブコーディング.png"
                            alt="バイブコーディング"
                            width={256}
                            height={144}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-orange-800 text-lg sm:text-xl mb-2">STEP2 バイブコーディングで開発</h5>
                          <p className="text-sm sm:text-base text-gray-700">指定ツールを用いてバイブコーディングによる開発に取り組みます。うまくいかない場合は講師になんでも相談OK！何回でも、解決するまで何度でも相談できるので、挫折することなく安心して開発を進められます。</p>
                        </div>
                      </div>
                      
                      {/* 流れの矢印2 */}
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white font-bold text-sm">▼</span>
                        </div>
                      </div>
                      
                      {/* ステップ3 */}
                      <div className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 sm:p-4 lg:p-5 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-full lg:w-48 xl:w-64 aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-4 lg:mb-0 lg:mr-5 shadow-md flex-shrink-0 border-2 border-orange-200 overflow-hidden">
                          <Image
                            src="/Feedback_images/課題提出.png"
                            alt="成果物提出"
                            width={256}
                            height={144}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-orange-800 text-lg sm:text-xl mb-2">STEP3 成果物の提出</h5>
                          <p className="text-sm sm:text-base text-gray-700">完成した成果物をコミュニティで共有します。他の生徒の成果物も見ることができるので、モチベーション向上にもつながります。課題は取り組みたいものから自由に選んで取り組めるので、自分のペースで学習を進められます。</p>
                        </div>
                      </div>
                      
                      {/* 流れの矢印3 */}
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white font-bold text-sm">▼</span>
                        </div>
                      </div>
                      
                      {/* ステップ4 */}
                      <div className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 sm:p-4 lg:p-5 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-full lg:w-48 xl:w-64 aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-4 lg:mb-0 lg:mr-5 shadow-md flex-shrink-0 border-2 border-orange-200 overflow-hidden">
                          <Image
                            src="/Feedback_images/フィードバック.png"
                            alt="添削・フィードバック"
                            width={256}
                            height={144}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-orange-800 text-lg sm:text-xl mb-2">STEP4 講師による添削・フィードバック</h5>
                          <p className="text-sm sm:text-base text-gray-700">AI開発の最前線で活躍するプロの講師から個別でフィードバックがもらえます。何度でも添削OKで、具体的なアドバイスによりあなたの成長を加速させます。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg font-extrabold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent flex items-center tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-orange-500 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    何度でも添削OK！具体的なアドバイスで上達
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3軸構成の学習プログラムヘッダー */}
        <div className="relative mb-12 mt-16">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              {/* かわいいボーダー効果 */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-orange-300 rounded-2xl animate-pulse-slow"></div>
              <div className="absolute -inset-0.5 bg-white/50 rounded-2xl blur-sm"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-0.5 shadow-lg border border-pink-100">
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-200 rounded-full shadow-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-pink-200 rounded-full shadow-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent px-6 py-2 relative">
                  3軸構成の学習プログラム
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* 学習ロードマップ */}
        <div className="max-w-6xl mx-auto px-3 sm:px-6 mt-6 sm:mt-8 mb-12 sm:mb-16">
          {/* Main Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Table Header - モバイル表示ではスタック */}
            <div className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-t-2xl">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 sm:p-6 md:p-8 text-center relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300/30 via-amber-400/50 to-amber-300/30"></div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-500 to-amber-400 rounded-lg sm:rounded-xl shadow-md flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-amber-900/70 tracking-wider uppercase mb-0.5 sm:mb-1">AXIS 01</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-950 tracking-tight">学習軸</div>
                  </div>
                </div>
                <p className="text-amber-800 text-xs sm:text-sm font-medium">基礎から実践まで段階的学習</p>
              </div>

              <div className="bg-gradient-to-br from-amber-200 to-amber-300 p-4 sm:p-6 md:p-8 text-center relative group border-t sm:border-t-0 sm:border-l border-amber-200/50">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/30 via-amber-500/50 to-amber-400/30"></div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-600 to-amber-500 rounded-lg sm:rounded-xl shadow-md flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-amber-900/70 tracking-wider uppercase mb-0.5 sm:mb-1">AXIS 02</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-950 tracking-tight">指導軸</div>
                  </div>
                </div>
                <p className="text-amber-800 text-xs sm:text-sm font-medium">個別サポートによる成長加速</p>
              </div>

              <div className="bg-gradient-to-br from-amber-300 to-amber-400 p-4 sm:p-6 md:p-8 text-center relative group border-t sm:border-t-0 sm:border-l border-amber-200/50">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-200/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/30 via-amber-600/50 to-amber-500/30"></div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg sm:rounded-xl shadow-md flex items-center justify-center">
                    <Tv className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-amber-900/70 tracking-wider uppercase mb-0.5 sm:mb-1">AXIS 03</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-950 tracking-tight">交流軸</div>
                  </div>
                </div>
                <p className="text-amber-800 text-xs sm:text-sm font-medium">リアルタイム学習とコミュニティ参加</p>
              </div>
            </div>

            {/* Main Content Row - モバイル表示ではスタック */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-amber-100 min-h-[300px] sm:min-h-[400px]">
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
                        講師による添削
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">課題添削と個別サポートで急速成長を実現</p>
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
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-500 bg-clip-text text-transparent mb-1">30以上</div>
                    <div className="text-sm text-amber-800 font-medium">実践課題</div>
                  </div>
                </div>
                <div className="p-6 text-center relative group">
                  <div className="transform transition-transform group-hover:scale-105">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-500 bg-clip-text text-transparent mb-1">個別</div>
                    <div className="text-sm text-amber-800 font-medium">Discordサポート</div>
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

        {/* 現在のスクール生セクション */}
        <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6">
          {/* スクール生情報カード */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              {/* タイトル */}
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-6 text-center">現在のスクール生</h2>
              
              {/* 数字情報 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center border border-orange-100 shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-orange-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-700">スクール参加者人数</h3>
                  </div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">501人</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center border border-orange-100 shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-orange-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-700">スタッフ人数</h3>
                  </div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">ユニコ🦄 + 25人</p>
                </div>
              </div>
              
              {/* 説明文 */}
              <div className="bg-gradient-to-r from-orange-100/50 to-amber-100/50 rounded-xl p-6 border border-orange-100/70 shadow-sm">
                <p className="text-center text-gray-700 text-lg leading-relaxed">
                  この大人数の集団をユニコ🦄が1人1人コミュニケーションを取り、成功や失敗のノウハウを吸い上げ、<span className="font-bold text-orange-600">「スクール生全員で勝ちに行く！」</span>体制が出来ております！
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ユニコ🦄とのマンツーマンZoom案内セクション */}
        <div className="max-w-5xl mx-auto my-16 px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
            <div className="p-8 sm:p-10 text-center">
              <div className="inline-block bg-orange-100 px-3 py-1 rounded-full text-orange-600 text-xs font-medium tracking-wider mb-3">SPECIAL FEATURE</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                マンツーマンZoomセッション(1回)
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                あなたの悩みや目標に合わせて、ユニコ🦄が直接アドバイスします。キャリア相談からAIマネタイズ手法の提案まで、あなたに必要なサポートを提供します。
              </p>
              <div className="bg-orange-50/80 rounded-lg p-5 mb-6 max-w-2xl mx-auto">
                <h4 className="font-bold text-lg mb-3 flex items-center justify-center">
                  <span className="w-1.5 h-5 bg-orange-500 rounded-sm mr-2 inline-block"></span>
                  こんな相談ができます
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                    <div className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">1</span>
                      <div className="text-left">
                        <p className="text-gray-800 font-medium">AIマネタイズ手法提案</p>
                        <p className="text-sm text-gray-600">あなたに合ったAI活用・収益化の方法</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                    <div className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">2</span>
                      <div className="text-left">
                        <p className="text-gray-800 font-medium">課題でスキル＋マネタイズ</p>
                        <p className="text-sm text-gray-600">スキル習得とその活かし方</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                    <div className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">3</span>
                      <div className="text-left">
                        <p className="text-gray-800 font-medium">目標達成ロードマップ</p>
                        <p className="text-sm text-gray-600">一緒に目標や計画を考える</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                    <div className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">4</span>
                      <div className="text-left">
                        <p className="text-gray-800 font-medium">人生・キャリア相談</p>
                        <p className="text-sm text-gray-600">ジャンル問わず何でもOK！</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAボタン - 目立つオレンジデザイン */}
        <div className="flex justify-center mt-10 sm:mt-14 mb-8 sm:mb-10">
          <a href="https://s.lmes.jp/landing-qr/1657937154-ZxeaYPRw?uLand=Bwaxsu" target="_blank" rel="noopener noreferrer" className="relative inline-block group scale-100 hover:scale-[1.05] transition-transform duration-300 w-[90%] sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl blur-[3px] opacity-60 group-hover:opacity-80 transition duration-300 group-hover:duration-200 animate-pulse-slow"></div>
            <button className="relative w-full px-4 py-4 sm:px-12 sm:py-6 md:px-20 md:py-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl leading-none flex flex-col items-center justify-center shadow-lg ring-2 ring-orange-300/50 hover:ring-orange-300/70 overflow-hidden">
              <span className="text-white font-bold text-xl sm:text-3xl md:text-4xl relative z-10 mb-2 sm:mb-3 drop-shadow-md">無料カウンセリング</span>
              <span className="text-white group-hover:text-white transition duration-200 text-base sm:text-xl md:text-2xl relative z-10">今すぐ申し込む <span className="group-hover:translate-x-2 inline-block transition-transform duration-200">&rarr;</span></span>
              {/* キラキラ光るエフェクト - 常時表示 */}
              <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-15 animate-shine pointer-events-none"></div>
              <div className="absolute top-0 left-[-100%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-15 animate-shine-delayed pointer-events-none"></div>
            </button>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .perspective {
          perspective: 2000px;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 120%;
          }
        }
        
        .animate-shine {
          animation: shine 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-shine-delayed {
          animation: shine 3s infinite 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .animate-twinkle-delayed {
          animation: twinkle 4s ease-in-out infinite 1s;
        }
        
        .animate-twinkle-delayed-more {
          animation: twinkle 4s ease-in-out infinite 2s;
        }
        
        .skew-x-15 {
          transform: skewX(-15deg);
        }
      `}</style>
    </section>
  );
} 