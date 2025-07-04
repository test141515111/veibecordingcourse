import React from 'react';
import Image from 'next/image';

export default function SupportSection() {
  return (
    <section id="support" className="py-16 mt-0">
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-neutral-900 mb-2">
              充実<span className="text-4xl align-middle">の</span>サポート体制
            </h2>
            <p className="text-xl tracking-widest text-neutral-700 font-light">s u p p o r t</p>
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
            バイブコーディングコースでは、受講生の学習をあらゆる面からサポートします。
            初心者の方も安心して学習を進められる環境を整えています。
          </p>
        </div>
        
        <div className="mb-32 relative">
          <div className="relative">
            <div className="w-full md:w-3/4 ml-auto">
              <Image 
                src="/images/サポート4.png"
                alt="ライブ配信サポート"
                width={1000}
                height={667}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 absolute top-0 left-0 md:-left-8 md:-top-8 w-full md:w-1/2 z-10 border border-gray-100 backdrop-blur-sm">
              <div className="absolute top-0 right-0 h-20 w-20 bg-primary/10 rounded-bl-[100px] -z-10"></div>
              <div className="mb-5">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  ユニコのライブ講義
                </h3>
              </div>
              
              <p className="mb-6 text-neutral-700 leading-relaxed">
                定期的なライブ講義で、リアルタイムに質問や相談ができます。
                講師陣による丁寧な解説と、受講生同士の交流の場としても活用できます。
              </p>
              
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="font-bold text-lg mb-3 flex items-center text-neutral-800">
                  <span className="w-1.5 h-5 bg-primary rounded-sm mr-2 inline-block"></span>
                  ライブ講義スケジュール
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-primary text-white px-2.5 py-1 rounded-md text-xs mr-3 mt-1 font-medium">
                      日曜日
                    </span>
                    <div>
                      <p className="font-bold text-neutral-800">ライブ講義</p>
                      <p className="text-sm text-neutral-600">20:00〜22:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-secondary text-white px-2.5 py-1 rounded-md text-xs mr-3 mt-1 font-medium">
                      月曜日
                    </span>
                    <div>
                      <p className="font-bold text-neutral-800">ライブ講義</p>
                      <p className="text-sm text-neutral-600">22:00〜0:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-neutral-600 mt-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                ライブ講義はすべてアーカイブ保存され、後からでも視聴可能です。
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16 relative">
          <div className="relative">
            <div className="w-full md:w-3/4 mr-auto">
              <Image 
                src="/images/サポート5.png"
                alt="コード添削サポート"
                width={1000}
                height={667}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 absolute top-0 right-0 md:-right-8 md:-top-8 w-full md:w-1/2 z-10 border border-gray-100 backdrop-blur-sm">
              <div className="absolute top-0 left-0 h-20 w-20 bg-secondary/10 rounded-br-[100px] -z-10"></div>
              <div className="mb-5">
                <h3 className="text-3xl font-bold text-secondary mb-2">
                  課題の添削
                </h3>
              </div>
              
              <p className="mb-6 text-neutral-700 leading-relaxed">
                制作した成果物の添削や疑問点の解消などができます。専用のDiscordサーバーでチャット形式でやり取りし、
                経験豊富なメンターから丁寧なフィードバックを受け取ることができます。
              </p>
              
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h4 className="font-bold text-lg mb-3 flex items-center text-neutral-800">
                  <span className="w-1.5 h-5 bg-secondary rounded-sm mr-2 inline-block"></span>
                  添削の流れ
                </h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">1</span>
                    <p className="text-neutral-700">Notionの課題に取り組む</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">2</span>
                    <p className="text-neutral-700">Discordで課題提出</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">3</span>
                    <p className="text-neutral-700">講師による添削</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-sm">4</span>
                    <p className="text-neutral-700">必要に応じてフィードバック</p>
                  </li>
                </ol>
              </div>
              
              <p className="text-sm text-neutral-600 mt-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                添削では成果物を見て具体的なアドバイスを行います。回数の制限はありません。
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl p-10 md:p-14 shadow-lg border border-gray-200/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/images/背景シャイニング.jpeg"
              alt="シャイニング背景"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
              quality={90}
            />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl"></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h3 className="mb-12 text-center relative">
            <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">その他のサポート</span>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-5"></div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl -z-10"></div>
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative group overflow-hidden h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 relative overflow-hidden rounded-l-xl md:border-r border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/その他のサポート1.png"
                    alt="バイブコーディング作業会"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4 pt-0 md:pt-4 flex flex-col justify-center">
                  <div className="bg-primary/5 rounded-lg px-2 py-1 text-xs text-primary font-medium inline-block mb-2">毎週木曜日 20:00〜22:00</div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">バイブコーディング作業会</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">バイブコーディングやAI開発に興味がある方が集まり、課題を中心に共同作業を行います。</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative group overflow-hidden h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 relative overflow-hidden rounded-l-xl md:border-r border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/その他のサポート2.png"
                    alt="サービスの見せ合い"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4 pt-0 md:pt-4 flex flex-col justify-center">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors duration-300">サービスの見せ合い</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">講座生同士で作成したサービスやプロジェクトを発表し合います。課題提出だけでなく、同じ志を持つライバルたちと刺激し合うことで、より高いレベルの成長を目指せます。</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative group overflow-hidden h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/3 relative overflow-hidden rounded-l-xl md:border-r border-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/その他のサポート3.png"
                    alt="生放送アーカイブ"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-4 pt-0 md:pt-4 flex flex-col justify-center">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">生放送アーカイブ</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">バイブコーディングの全授業は録画保存されており、いつでも振り返り学習が可能です。自分のペースで繰り返し学習することで、確実にスキルを身につけられます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 