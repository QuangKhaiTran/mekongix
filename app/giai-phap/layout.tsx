import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giải pháp phần mềm quản lý theo ngành nghề',
  description: 'Phần mềm quản lý chuyên biệt cho nhà hàng, spa, khách sạn, cửa hàng, phòng khám, trường học, gym, xưởng sản xuất, logistics. Giải pháp tối ưu cho từng lĩnh vực kinh doanh.',
  keywords: ['phần mềm quản lý', 'giải pháp quản lý', 'phần mềm theo ngành', 'hệ thống quản lý', 'phần mềm nhà hàng', 'phần mềm spa', 'phần mềm khách sạn', 'phần mềm gym', 'phần mềm sản xuất', 'phần mềm logistics'],
  alternates: { canonical: 'https://mekongix.com/giai-phap' },
  openGraph: {
    title: 'Giải pháp phần mềm theo ngành nghề | Mekongix',
    description: 'Phần mềm quản lý chuyên biệt cho 9+ ngành nghề khác nhau',
    url: 'https://mekongix.com/solutions',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
