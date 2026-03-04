import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với Mekongix để được tư vấn miễn phí về giải pháp phần mềm và chuyển đổi số cho doanh nghiệp của bạn.',
  keywords: ['liên hệ Mekongix', 'tư vấn phần mềm', 'báo giá phần mềm', 'hotline', 'email liên hệ', 'đặt lịch tư vấn', 'demo phần mềm', 'yêu cầu báo giá', 'tư vấn miễn phí', 'dùng thử phần mềm', 'liên hệ công ty phần mềm', 'tư vấn giải pháp', 'tư vấn ERP CRM', 'báo giá phát triển phần mềm', 'chi phí phần mềm', 'bảng giá phần mềm', 'đăng ký dùng thử', 'hỗ trợ khách hàng', 'chăm sóc khách hàng'],
  alternates: {
    canonical: 'https://mekongix.com/lien-he',
  },
  openGraph: {
    title: 'Liên hệ | Mekongix',
    description: 'Tư vấn miễn phí về giải pháp phần mềm doanh nghiệp',
    url: 'https://mekongix.com/lien-he',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Liên hệ Mekongix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liên hệ | Mekongix',
    description: 'Tư vấn miễn phí về giải pháp phần mềm doanh nghiệp',
    images: ['/logo.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
