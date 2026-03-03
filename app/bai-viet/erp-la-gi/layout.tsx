import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ERP là gì? Lợi ích của hệ thống ERP cho doanh nghiệp',
  description: 'Tìm hiểu ERP là gì, các tính năng chính của phần mềm ERP, lợi ích khi triển khai và cách chọn hệ thống ERP phù hợp cho doanh nghiệp của bạn.',
  keywords: ['ERP là gì', 'hệ thống ERP', 'phần mềm ERP', 'lợi ích ERP', 'chọn phần mềm ERP'],
  alternates: { canonical: 'https://mekongix.com/blog/erp-la-gi' },
  openGraph: {
    type: 'article',
    title: 'ERP là gì? Lợi ích của hệ thống ERP cho doanh nghiệp',
    description: 'Hướng dẫn chi tiết về ERP và cách chọn phần mềm phù hợp',
    url: 'https://mekongix.com/blog/erp-la-gi',
  },
}

export default function ERPBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
