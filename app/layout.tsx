import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ssyel2.github.io'),
  title: 'Enze Li | Computational Neuroscience · Neuroengineering · AI for Science',
  description: 'Academic homepage of Enze Li, an undergraduate researcher working across computational neuroscience, neuroengineering, whole-brain modeling, neuroimaging, EEG/BCI, medical AI, and AI for Science.',
  openGraph: {
    title: 'Enze Li | Computational Neuroscience · Neuroengineering · AI for Science',
    description: 'Academic homepage of Enze Li, an undergraduate researcher working across computational neuroscience, neuroengineering, whole-brain modeling, neuroimaging, EEG/BCI, medical AI, and AI for Science.',
    type: 'website',
    images: [{ url: '/assets/images/enze-li.jpg', width: 680, height: 680, alt: 'Profile image selected by Enze Li' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enze Li | Computational Neuroscience · Neuroengineering · AI for Science',
    description: 'Academic homepage of Enze Li, an undergraduate researcher working across computational neuroscience, neuroengineering, whole-brain modeling, neuroimaging, EEG/BCI, medical AI, and AI for Science.',
    images: ['/assets/images/enze-li.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
