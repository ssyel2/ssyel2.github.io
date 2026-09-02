import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ssyel2.github.io'),
  title: 'SSYEL — Computational Neuroscience',
  description: '数字神经元、生物物理建模与脑电智能分析。',
  openGraph: {
    title: 'SSYEL — Computational Neuroscience',
    description: 'Evidence · Models · Open Science',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'SSYEL computational neuroscience' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSYEL — Computational Neuroscience',
    description: 'Evidence · Models · Open Science',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
