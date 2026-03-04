import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ERP là gì? Lợi ích của hệ thống ERP cho doanh nghiệp',
  description: 'Tìm hiểu ERP là gì, các tính năng chính của phần mềm ERP, lợi ích khi triển khai và cách chọn hệ thống ERP phù hợp cho doanh nghiệp của bạn.',
  keywords: ['ERP là gì', 'hệ thống ERP', 'phần mềm ERP', 'lợi ích ERP', 'chọn phần mềm ERP', 'phần mềm ERP miễn phí', 'phần mềm ERP Việt Nam', 'phần mềm ERP giá rẻ', 'phần mềm ERP tốt nhất', 'hệ thống quản lý doanh nghiệp', 'giải pháp ERP', 'ERP cho doanh nghiệp', 'ERP cho SME', 'ERP cho sản xuất', 'phần mềm quản lý tổng thể', 'so sánh phần mềm ERP', 'top phần mềm ERP', 'báo giá phần mềm ERP', 'chi phí ERP', 'cách chọn ERP', 'triển khai ERP', 'hướng dẫn sử dụng ERP', 'tính năng ERP', 'module ERP', 'ERP cloud', 'ERP on-premise'],
  alternates: { canonical: 'https://mekongix.com/bai-viet/erp-la-gi' },
  openGraph: {
    type: 'article',
    title: 'ERP là gì? Lợi ích của hệ thống ERP cho doanh nghiệp',
    description: 'Hướng dẫn chi tiết về ERP và cách chọn phần mềm phù hợp',
    url: 'https://mekongix.com/bai-viet/erp-la-gi',
  },
}

export default function ERPBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
