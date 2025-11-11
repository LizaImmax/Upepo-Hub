import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import { DarkModeProvider } from '@/contexts/DarkModeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Upepo Hub - Your Gateway to the Upepo Ecosystem',
  description: 'The central digital space connecting all Upepo services: Cloud, Learn, Voices, Labs, Foundation, Network, Studio, Academy, Space, Insights, Ventures, and Exchange.',
  keywords: 'Upepo, cloud, learning, community, innovation, Africa, technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DarkModeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </DarkModeProvider>
      </body>
    </html>
  )
}
