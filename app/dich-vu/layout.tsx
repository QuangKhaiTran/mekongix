import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dịch vụ phát triển phần mềm chuyên nghiệp',
  description: 'Dịch vụ phát triển phần mềm theo yêu cầu: Web app, ứng dụng di động, hệ thống ERP, CRM, nền tảng SaaS. Giải pháp công nghệ toàn diện cho mọi quy mô doanh nghiệp.',
  keywords: ['dịch vụ phát triển phần mềm', 'phát triển web app', 'phát triển mobile app', 'outsourcing phần mềm', 'thuê developer', 'phát triển ERP', 'phát triển CRM', 'phát triển SaaS', 'lập trình phần mềm theo yêu cầu', 'thiết kế phần mềm', 'phát triển phần mềm TP.HCM', 'phát triển phần mềm Hà Nội', 'công ty phát triển phần mềm uy tín', 'dịch vụ lập trình phần mềm', 'phát triển ứng dụng web', 'phát triển ứng dụng mobile', 'phát triển hệ thống quản lý', 'phát triển phần mềm quản lý', 'custom software development', 'software development Vietnam', 'phát triển phần mềm giá rẻ', 'báo giá phát triển phần mềm', 'chi phí phát triển phần mềm', 'thời gian phát triển phần mềm', 'quy trình phát triển phần mềm'],
  alternates: {
    canonical: 'https://mekongix.com/dich-vu',
  },
  openGraph: {
    title: 'Dịch vụ phát triển phần mềm | Mekongix',
    description: 'Giải pháp công nghệ toàn diện cho doanh nghiệp',
    url: 'https://mekongix.com/dich-vu',
    images: [
      {
        url: '/logo.png',
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
    images: ['/logo.png'],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
