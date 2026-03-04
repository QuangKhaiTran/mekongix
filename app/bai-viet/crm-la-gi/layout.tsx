import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM là gì? Lợi ích của phần mềm CRM cho doanh nghiệp | Mekongix',
  description: 'Tìm hiểu CRM là gì, tại sao doanh nghiệp cần CRM, các tính năng chính và lợi ích của phần mềm quản lý quan hệ khách hàng. Hướng dẫn chọn CRM phù hợp.',
  keywords: 'CRM là gì, phần mềm CRM, quản lý khách hàng, customer relationship management, lợi ích CRM, tính năng CRM, phần mềm CRM miễn phí, phần mềm CRM Việt Nam, phần mềm CRM giá rẻ, phần mềm CRM tốt nhất, phần mềm quản lý khách hàng, hệ thống CRM, giải pháp CRM, CRM cho doanh nghiệp, CRM cho SME, phần mềm bán hàng CRM, phần mềm marketing CRM, phần mềm chăm sóc khách hàng, so sánh phần mềm CRM, top phần mềm CRM, báo giá phần mềm CRM, chi phí CRM, cách chọn CRM, triển khai CRM, hướng dẫn sử dụng CRM',
  alternates: {
    canonical: 'https://mekongix.com/bai-viet/crm-la-gi',
  },
  openGraph: {
    title: 'CRM là gì? Lợi ích của phần mềm CRM cho doanh nghiệp',
    description: 'Tìm hiểu CRM là gì, tại sao doanh nghiệp cần CRM, các tính năng chính và lợi ích của phần mềm quản lý quan hệ khách hàng.',
    type: 'article',
    locale: 'vi_VN',
    url: 'https://mekongix.com/bai-viet/crm-la-gi',
  },
}

export default function CRMBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
