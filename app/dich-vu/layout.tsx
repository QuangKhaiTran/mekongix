import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dịch vụ phát triển phần mềm chuyên nghiệp',
  description: 'Dịch vụ phát triển phần mềm theo yêu cầu: Web app, ứng dụng di động, hệ thống ERP, CRM, nền tảng SaaS. Giải pháp công nghệ toàn diện cho mọi quy mô doanh nghiệp.',
  alternates: {
    canonical: 'https://mekongix.com/dich-vu',
  },
  openGraph: {
    title: 'Dịch vụ phát triển phần mềm | Mekongix',
    description: 'Giải pháp công nghệ toàn diện cho doanh nghiệp',
    url: 'https://mekongix.com/dich-vu',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Dịch vụ phát triển phần mềm Mekongix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dịch vụ phát triển phần mềm | Mekongix',
    description: 'Giải pháp công nghệ toàn diện cho doanh nghiệp',
    images: ['/og-services.jpg'],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
