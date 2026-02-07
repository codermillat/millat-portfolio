import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Millat Hosen - AI Researcher & Full-Stack Developer',
  description: 'AI/ML researcher specializing in LLM fine-tuning (Mistral-7B, LoRA), autonomous agent systems, and EdTech. Published researcher (arXiv:2504.15610, 3 citations). Digital Marketing & SEO Intern with International Relations Division, Sharda University. Seeking Masters opportunities in AI research.',
  keywords: [
    'MD Millat Hosen',
    'AI researcher',
    'Machine Learning',
    'LLM fine-tuning',
    'Mistral-7B',
    'LoRA',
    'QLoRA',
    'RAG systems',
    'Autonomous AI agents',
    'Full-Stack Developer',
    'EdTech',
    'React',
    'Next.js',
    'Python',
    'PyTorch',
    'Hugging Face',
    'Research intern',
    'Sharda University',
    'AI research PhD',
    'arXiv preprint',
    'Published researcher',
    'Semantic Scholar',
    'ORCID',
    'Medium',
    'LeetCode',
    'Kaggle',
    'codermillat'
  ],
  authors: [{ name: 'MD Millat Hosen', url: 'https://millat.is-a.dev' }],
  creator: 'MD Millat Hosen',
  publisher: 'MD Millat Hosen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://millat.is-a.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MD Millat Hosen - AI Researcher & Full-Stack Developer',
    description: 'AI/ML researcher specializing in LLM fine-tuning, autonomous agents, and EdTech. Seeking PhD opportunities in AI research.',
    url: 'https://millat.is-a.dev',
    siteName: 'MD Millat Hosen',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MD Millat Hosen - AI Researcher'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Millat Hosen - AI Researcher & Developer',
    description: 'AI/ML researcher specializing in LLM fine-tuning and EdTech innovation. Published researcher (arXiv:2504.15610). Seeking Masters opportunities in AI research.',
    creator: '@codermillat',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="canonical" href="https://millat.is-a.dev" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
