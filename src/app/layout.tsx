import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'バイブコーディングコース in #ユニコスクール',
  description: 'AI とペアプロする"バイブコーディング"学習をオンライン課題＆ライブ配信で提供',
  keywords: ['バイブコーディング', 'AI開発', 'プログラミングスクール', 'オンライン学習', 'ユニコスクール', 'Web開発', 'ライブ講義'],
  authors: [{ name: 'ユニコ🦄' }],
  creator: 'ユニコ🦄',
  publisher: 'ユニコスクール',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vibecording.unikoukokun.com/',
  },
  openGraph: {
    title: 'バイブコーディングコース in #ユニコスクール',
    description: 'AI とペアプロする"バイブコーディング"学習をオンライン課題＆ライブ配信で提供。週4回のライブ講義と個別サポートで確実にスキルアップ。',
    url: 'https://vibecording.unikoukokun.com/',
    siteName: 'ユニコスクール',
    images: [
      {
        url: 'https://vibecording.unikoukokun.com/images/バイブコーディング.png',
        width: 1200,
        height: 630,
        alt: 'バイブコーディングコース',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バイブコーディングコース in #ユニコスクール',
    description: 'AI とペアプロする"バイブコーディング"学習をオンライン課題＆ライブ配信で提供',
    images: ['https://vibecording.unikoukokun.com/images/バイブコーディング.png'],
    creator: '@unikoukokun',
  },
  metadataBase: new URL('https://vibecording.unikoukokun.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 