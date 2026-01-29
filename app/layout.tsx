import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Mekongix | Enterprise Software Solutions',
  description: 'Mekongix - Professional software development, web applications, ERP, CMS, and SaaS solutions for enterprise digital transformation.',
  keywords: ['software development', 'enterprise solutions', 'ERP', 'CMS', 'SaaS', 'digital transformation', 'web development'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <body 
        className={`${inter.variable} font-sans antialiased scrollbar-hide`} 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowX: 'hidden' }}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
