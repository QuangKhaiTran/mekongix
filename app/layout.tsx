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
  keywords: ['phát triển phần mềm', 'công ty phần mềm Việt Nam', 'giải pháp ERP', 'phần mềm CRM', 'phát triển web app', 'phát triển ứng dụng di động', 'phần mềm quản lý doanh nghiệp', 'hệ thống quản lý', 'chuyển đổi số', 'phần mềm SaaS', 'dịch vụ phát triển phần mềm', 'phần mềm quản lý miễn phí', 'phần mềm quản lý bán hàng', 'phần mềm quản lý kho', 'phần mềm kế toán', 'phần mềm nhân sự', 'phần mềm quản lý công việc', 'phần mềm quản lý dự án', 'phần mềm quản lý khách hàng', 'phần mềm quản lý tồn kho', 'phần mềm quản lý cửa hàng', 'phần mềm quản lý nhà hàng', 'phần mềm quản lý spa', 'phần mềm quản lý khách sạn', 'phần mềm quản lý xưởng', 'phần mềm quản lý sản xuất', 'phần mềm quản lý vận tải', 'phần mềm quản lý logistics', 'phần mềm quản lý trường học', 'phần mềm quản lý phòng gym', 'phần mềm quản lý phòng khám', 'phần mềm quản lý giá rẻ', 'phần mềm quản lý online', 'phần mềm quản lý đám mây', 'phần mềm quản lý trên điện thoại', 'phần mềm quản lý Việt Nam', 'phần mềm quản lý tốt nhất', 'phần mềm quản lý uy tín', 'phần mềm quản lý chuyên nghiệp'],
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
        url: '/icon.png',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
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
        url: '/logo.png',
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
    images: ['/logo.png'],
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
