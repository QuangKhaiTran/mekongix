import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog công nghệ',
  description: 'Chia sẻ kiến thức về phát triển phần mềm, chuyển đổi số, và xu hướng công nghệ mới nhất cho doanh nghiệp.',
  keywords: ['blog công nghệ', 'kiến thức phần mềm', 'chuyển đổi số', 'xu hướng công nghệ', 'hướng dẫn phần mềm', 'tin tức công nghệ', 'blog phần mềm doanh nghiệp', 'kiến thức ERP CRM', 'hướng dẫn sử dụng phần mềm', 'cách chọn phần mềm', 'so sánh phần mềm', 'review phần mềm', 'đánh giá phần mềm', 'tư vấn phần mềm', 'ERP là gì', 'CRM là gì', 'HRM là gì', 'SaaS là gì', 'chuyển đổi số doanh nghiệp', 'digital transformation', 'công nghệ doanh nghiệp', 'phần mềm quản lý là gì', 'lợi ích phần mềm quản lý', 'cách triển khai phần mềm'],
  alternates: {
    canonical: 'https://mekongix.com/bai-viet',
  },
  openGraph: {
    title: 'Blog công nghệ | Mekongix',
    description: 'Kiến thức và xu hướng công nghệ cho doanh nghiệp',
    url: 'https://mekongix.com/bai-viet',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Blog công nghệ Mekongix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog công nghệ | Mekongix',
    description: 'Kiến thức và xu hướng công nghệ cho doanh nghiệp',
    images: ['/logo.png'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
