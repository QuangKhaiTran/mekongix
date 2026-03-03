import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phần mềm quản lý doanh nghiệp',
  description: 'Phần mềm quản lý doanh nghiệp: ERP, CRM, HRM, phần mềm quản lý kho, bán hàng. Giải pháp quản lý toàn diện cho mọi ngành nghề và quy mô.',
  alternates: {
    canonical: 'https://mekongix.com/san-pham',
  },
  openGraph: {
    title: 'Sản phẩm phần mềm | Mekongix',
    description: 'Giải pháp phần mềm quản lý doanh nghiệp toàn diện',
    url: 'https://mekongix.com/san-pham',
    images: [
      {
        url: '/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Sản phẩm phần mềm Mekongix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sản phẩm phần mềm | Mekongix',
    description: 'Giải pháp phần mềm quản lý doanh nghiệp toàn diện',
    images: ['/og-products.jpg'],
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
