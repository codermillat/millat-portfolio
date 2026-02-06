import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Millat Hosen - AI Researcher & Full-Stack Developer',
  description: 'AI/ML researcher specializing in LLM fine-tuning (Mistral-7B, LoRA), autonomous agent systems, and EdTech. B.Tech CSE student seeking PhD opportunities in AI research.',
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
    description: 'AI/ML researcher specializing in LLM fine-tuning and EdTech innovation',
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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://millat.is-a.dev" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>{children}</body>
    </html>
  )
}
