import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM là gì? Lợi ích của phần mềm CRM cho doanh nghiệp | Mekongix',
  description: 'Tìm hiểu CRM là gì, tại sao doanh nghiệp cần CRM, các tính năng chính và lợi ích của phần mềm quản lý quan hệ khách hàng. Hướng dẫn chọn CRM phù hợp.',
  keywords: 'CRM là gì, phần mềm CRM, quản lý khách hàng, customer relationship management, lợi ích CRM, tính năng CRM',
  openGraph: {
    title: 'CRM là gì? Lợi ích của phần mềm CRM cho doanh nghiệp',
    description: 'Tìm hiểu CRM là gì, tại sao doanh nghiệp cần CRM, các tính năng chính và lợi ích của phần mềm quản lý quan hệ khách hàng.',
    type: 'article',
    locale: 'vi_VN',
  },
}

export default function CRMBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
