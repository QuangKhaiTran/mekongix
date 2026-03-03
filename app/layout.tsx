import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://mekongix.com'),
  title: {
    default: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    template: '%s | Mekongix'
  },
  description: 'Mekongix - Công ty phát triển phần mềm hàng đầu Việt Nam. Chuyên cung cấp giải pháp ERP, CRM, phần mềm quản lý doanh nghiệp, phát triển web app và ứng dụng di động. Đối tác chuyển đổi số đáng tin cậy.',
  keywords: ['phát triển phần mềm', 'công ty phần mềm Việt Nam', 'giải pháp ERP', 'phần mềm CRM', 'phát triển web app', 'phát triển ứng dụng di động', 'phần mềm quản lý doanh nghiệp', 'hệ thống quản lý', 'chuyển đổi số', 'phần mềm SaaS', 'dịch vụ phát triển phần mềm'],
  authors: [{ name: 'Mekongix' }],
  creator: 'Mekongix',
  publisher: 'Mekongix',
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
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://mekongix.com',
    siteName: 'Mekongix',
    title: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mekongix - Giải pháp phần mềm doanh nghiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    images: ['/og-image.jpg'],
  },
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
        {/* TODO: Thêm Google Analytics ID của bạn vào đây */}
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  )
}
