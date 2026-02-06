import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Millat Hosen - AI Researcher & Full-Stack Developer',
  description: 'AI/ML researcher specializing in LLM fine-tuning, agent systems, and EdTech. Building the future of education technology.',
  keywords: ['AI', 'Machine Learning', 'LLM', 'Full-Stack Developer', 'EdTech', 'React', 'Next.js', 'Python'],
  authors: [{ name: 'MD Millat Hosen' }],
  openGraph: {
    title: 'MD Millat Hosen - AI Researcher & Developer',
    description: 'AI/ML researcher specializing in LLM fine-tuning and EdTech innovation',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
