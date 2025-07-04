import React from 'react';

export default function VideoSection() {
  return (
    <section id="video" className="pt-20 pb-12 bg-white relative overflow-hidden">
      {/* 斜めの装飾ライン */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -left-4 top-0 w-8 h-full bg-gradient-to-r from-primary/20 to-transparent transform -skew-x-12"></div>
        <div className="absolute -right-4 top-0 w-8 h-full bg-gradient-to-l from-primary/20 to-transparent transform -skew-x-12"></div>
      </div>
      
      <div className="container relative z-10">
        {/* 動画説明ヘッダー - 中央揃え */}
        <div className="max-w-6xl mx-auto mb-12 relative">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="text-5xl md:text-6xl font-bold text-primary mr-6" style={{ lineHeight: '1' }}>＼</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  #ユニコスクールに
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold mb-0 text-center">
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-400 text-white px-3 py-1 mx-1 rounded text-2xl md:text-3xl">
                    バイブコーディングコース
                  </span>
                  が登場！
                </h2>
              </div>
              <span className="text-5xl md:text-6xl font-bold text-primary ml-6" style={{ lineHeight: '1' }}>／</span>
            </div>
          </div>
        </div>
        
        {/* 動画エリア */}
        <div className="max-w-3xl mx-auto relative">
          <div className="max-w-2xl mx-auto aspect-video bg-gradient-to-b from-gray-800 to-black rounded-xl overflow-hidden shadow-xl border border-primary/10 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* サムネイル画像の代わりに暗い背景 */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-lg font-medium text-center px-4">バイブコーディング紹介動画</div>
              </div>
              
              {/* 再生ボタン */}
              <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* 動画の長さ表示 */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                3:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 