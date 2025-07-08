"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 mt-0 relative overflow-hidden">
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
          <div className="absolute top-1/4 right-1/3 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-orange-400/2 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-orange-300/2 to-transparent blur-[100px]"></div>
        </div>
        
        {/* 幾何学模様装飾 - より控えめに */}
        <div className="absolute top-20 right-20 hidden xl:block">
          <div className="w-40 h-40 border border-orange-100/50 rounded-full"></div>
          <div className="w-40 h-40 border border-orange-100/30 rounded-full absolute -top-10 -left-10"></div>
        </div>
      </div>
      
      <div className="container relative z-10 bg-white/80 rounded-xl p-6 shadow-lg backdrop-blur-sm">
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
        
        {/* 4つの特徴カード - より落ち着いたデザイン */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 px-4">
          {/* カード1: 実践形式で学ぶから伸びが早い */}
          <div className="relative group">
            {/* カードの背景効果 - より控えめに */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col shadow-md border border-orange-100/50">
              {/* カードヘッダー - オレンジベース */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl py-3 px-4 -mt-10 mb-6 shadow-md self-start">
                <h3 className="text-white font-bold text-lg leading-tight">実践形式で学ぶから<br/>伸びが早い！</h3>
              </div>
              
              {/* アイコン - より落ち着いた色に */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              
              {/* テキスト - オレンジアクセント */}
              <p className="text-gray-700 text-center">
                完成形を目指して手を動かすから、学んだことが<span className="text-orange-500 font-bold">身につく</span>。
              </p>
            </div>
          </div>
          
          {/* カード2: 未経験でもしっかりサポート */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col shadow-md border border-orange-100/50">
              {/* カードヘッダー - オレンジベース */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl py-3 px-4 -mt-10 mb-6 shadow-md self-start">
                <h3 className="text-white font-bold text-lg leading-tight">未経験でも<br/>しっかりサポート！</h3>
              </div>
              
              {/* アイコン - より落ち着いた色に */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              
              {/* テキスト - オレンジアクセント */}
              <p className="text-gray-700 text-center">
                つまずきポイントは<span className="text-orange-500 font-bold">AIと人のWサポート</span>で即解決。わからないまま進ませない。
              </p>
            </div>
          </div>
          
          {/* カード3: 週2回の生放送で最新情報をGet */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col shadow-md border border-orange-100/50">
              {/* カードヘッダー - オレンジベース */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl py-3 px-4 -mt-10 mb-6 shadow-md self-start">
                <h3 className="text-white font-bold text-lg leading-tight">週2回の生放送で<br/>最新情報をGet！</h3>
              </div>
              
              {/* アイコン - より落ち着いた色に */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              
              {/* テキスト - オレンジアクセント */}
              <p className="text-gray-700 text-center">
                講師が<span className="text-orange-500 font-bold">最新トレンドや技術解説</span>。リアルな質問にもその場で答えるから理解が深まる。
              </p>
            </div>
          </div>
          
          {/* カード4: ユニコ課題・添削でAI開発の地力がつく */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col shadow-md border border-orange-100/50">
              {/* カードヘッダー - オレンジベース */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl py-3 px-4 -mt-10 mb-6 shadow-md self-start">
                <h3 className="text-white font-bold text-lg leading-tight">課題・添削で<br/>AI開発の地力がつく！</h3>
              </div>
              
              {/* アイコン - より落ち着いた色に */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              
              {/* テキスト - オレンジアクセント */}
              <p className="text-gray-700 text-center">
                30を超える実践課題と講師の添削で<span className="text-orange-500 font-bold">考え抜く力と応用力</span>が身につく。
              </p>
            </div>
          </div>
        </div>
        
        {/* サポート体制セクション - 改良版 */}
        <div className="max-w-5xl mx-auto mb-16 px-4">
          {/* サポート体制ヘッダー - 改良版 */}
          <div className="relative mb-12">
            <div className="text-center">
              <div className="mb-2 flex justify-center items-center gap-2">
                <span className="w-10 h-px bg-orange-400"></span>
                <span className="w-10 h-px bg-orange-400"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                充実のサポート体制
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
          
          {/* サポート内容カード - 3カードバージョン */}
          <div className="space-y-16">
            {/* サポートカード1: コミュニティサポート */}
            
            {/* サポートカード2: ライブ講義 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* テキストセクション（右左入れ替え） */}
                <div className="lg:col-span-7 p-8 flex flex-col justify-center lg:order-1">
                  <div className="inline-block bg-orange-100 px-3 py-1 rounded-full text-orange-600 text-xs font-medium tracking-wider mb-3">LIVE SESSIONS</div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">週3回のライブ講義</h3>
                  <p className="text-gray-700 mb-6">
                    定期的なライブ講義でリアルタイムに質問や相談ができます。講師陣による丁寧な解説と、受講生同士の交流の場としても活用できます。
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-50/50 rounded-lg p-5 mb-4 shadow-sm border border-orange-100/70">
                    <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      ライブ講義・作業会スケジュール
                    </h4>
                    <div className="space-y-2.5">
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-sm">日</span>
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-baseline">
                              <p className="font-bold text-gray-800">ユニコのAI開発生放送</p>
                              <p className="text-sm text-gray-500 ml-2">20:00〜22:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-pink-200 pl-2">
                              最新のAI解説・開発実演
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-sm">月</span>
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-baseline">
                              <p className="font-bold text-gray-800">ユニコのAI開発生放送</p>
                              <p className="text-sm text-gray-500 ml-2">22:00〜24:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-blue-200 pl-2">
                              最新のAI解説・開発実演
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-orange-100 transition-shadow duration-300 hover:border-orange-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-300 flex items-center justify-center shadow-sm flex-shrink-0">
                            <span className="text-white font-bold text-sm">木</span>
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-baseline">
                              <p className="font-bold text-gray-800">バイブコーディング作業会</p>
                              <p className="text-sm text-gray-500 ml-2">20:00〜23:00</p>
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 border-l-2 border-green-200 pl-2">
                              参加型の共同作業会・質問なんでもOK
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    ライブ講義はすべてアーカイブ保存され、後からでも視聴可能です
                  </p>
                </div>
                
                {/* 画像セクション */}
                <div className="lg:col-span-5 relative lg:order-2 overflow-hidden rounded-r-2xl">
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
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* 画像セクション */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-orange-50/10 z-0"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="relative w-5/6 aspect-square overflow-hidden">
                      <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/50 via-pink-100/30 to-blue-100/40 rounded-full blur-md z-0 animate-pulse-slow"></div>
                      <div className="absolute inset-0 rounded-full border-8 border-white/40 z-10"></div>
                      <div className="relative z-0 rounded-full overflow-hidden w-full h-full border-8 border-white shadow-lg transform hover:scale-[1.03] transition-transform duration-300">
                        <Image
                          src="/images/その他のサポート3.png"
                          alt="バイブコーディングカリキュラム"
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
                
                {/* テキストセクション */}
                <div className="lg:col-span-7 p-8 flex flex-col justify-center">
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
                  <div className="bg-orange-50/80 rounded-lg p-5 mb-4">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <span className="w-1.5 h-5 bg-orange-500 rounded-sm mr-2 inline-block"></span>
                      添削&フィードバックの流れ
                    </h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">1</span>
                        <p className="text-gray-700">動画解説を視聴し、課題を理解する</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">2</span>
                        <p className="text-gray-700">バイブコーディングで作成</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">3</span>
                        <p className="text-gray-700">Discordで成果物を提出</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">4</span>
                        <p className="text-gray-700">講師による添削とフィードバック</p>
                      </li>
                    </ol>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

        {/* CTAボタン - 目立つオレンジデザイン */}
        <div className="flex justify-center mt-12 mb-8">
          <Link href="#contact" className="relative inline-block group scale-100 hover:scale-[1.03] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl blur-[2px] opacity-50 group-hover:opacity-70 transition duration-300 group-hover:duration-200 animate-pulse-slow"></div>
            <button className="relative px-14 py-5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl leading-none flex items-center divide-x divide-orange-200/30 shadow-md ring-1 ring-orange-300/50 hover:ring-orange-300/70 overflow-hidden">
              <span className="pr-6 text-white font-bold text-2xl relative z-10">無料カウンセリング</span>
              <span className="pl-6 text-white/90 group-hover:text-white transition duration-200 text-lg relative z-10">今すぐ申し込む <span className="group-hover:translate-x-2 inline-block transition-transform duration-200">&rarr;</span></span>
              {/* キラキラ光るエフェクト - 常時表示 */}
              <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-15 animate-shine pointer-events-none"></div>
              <div className="absolute top-0 left-[-100%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-15 animate-shine-delayed pointer-events-none"></div>
              {/* キラキラポイント */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle opacity-0"></div>
                <div className="absolute top-[70%] left-[25%] w-1.5 h-1.5 bg-white rounded-full animate-twinkle-delayed opacity-0"></div>
                <div className="absolute top-[30%] left-[75%] w-1 h-1 bg-white rounded-full animate-twinkle-delayed-more opacity-0"></div>
                <div className="absolute top-[60%] left-[85%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-0"></div>
              </div>
            </button>
          </Link>
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