import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phần mềm quản lý doanh nghiệp',
  description: 'Phần mềm quản lý doanh nghiệp: ERP, CRM, HRM, phần mềm quản lý kho, bán hàng. Giải pháp quản lý toàn diện cho mọi ngành nghề và quy mô.',
  keywords: ['phần mềm quản lý doanh nghiệp', 'phần mềm ERP', 'phần mềm CRM', 'phần mềm HRM', 'phần mềm quản lý kho', 'phần mềm bán hàng', 'phần mềm kế toán', 'phần mềm quản lý miễn phí', 'phần mềm quản lý online', 'phần mềm quản lý đám mây', 'phần mềm SaaS Việt Nam', 'phần mềm quản lý tốt nhất', 'phần mềm quản lý giá rẻ', 'phần mềm quản lý chuyên nghiệp', 'phần mềm quản lý uy tín', 'MekongHRM', 'MekongERP', 'MekongCRM', 'phần mềm quản lý nhân sự', 'phần mềm chấm công', 'phần mềm tính lương', 'phần mềm quản lý bán hàng', 'phần mềm quản lý tồn kho', 'phần mềm quản lý công nợ', 'phần mềm quản lý khách hàng', 'phần mềm quản lý dự án', 'phần mềm quản lý công việc', 'phần mềm quản lý tài liệu', 'phần mềm quản lý sản xuất', 'phần mềm quản lý chuỗi cung ứng', 'so sánh phần mềm quản lý', 'top phần mềm quản lý', 'bảng giá phần mềm quản lý'],
  alternates: {
    canonical: 'https://mekongix.com/san-pham',
  },
  openGraph: {
    title: 'Sản phẩm phần mềm | Mekongix',
    description: 'Giải pháp phần mềm quản lý doanh nghiệp toàn diện',
    url: 'https://mekongix.com/san-pham',
    images: [
      {
        url: '/logo.png',
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
    images: ['/logo.png'],
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
