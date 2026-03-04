import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giải pháp phần mềm quản lý theo ngành nghề',
  description: 'Phần mềm quản lý chuyên biệt cho nhà hàng, spa, khách sạn, cửa hàng, phòng khám, trường học, gym, xưởng sản xuất, logistics. Giải pháp tối ưu cho từng lĩnh vực kinh doanh.',
  keywords: ['phần mềm quản lý', 'giải pháp quản lý', 'phần mềm theo ngành', 'hệ thống quản lý', 'phần mềm nhà hàng', 'phần mềm spa', 'phần mềm khách sạn', 'phần mềm gym', 'phần mềm sản xuất', 'phần mềm logistics', 'phần mềm quản lý nhà hàng', 'phần mềm quản lý quán cafe', 'phần mềm order nhà hàng', 'phần mềm gọi món', 'phần mềm quản lý spa salon', 'phần mềm đặt lịch spa', 'phần mềm quản lý khách sạn', 'phần mềm PMS', 'phần mềm đặt phòng', 'phần mềm quản lý cửa hàng', 'phần mềm bán lẻ', 'phần mềm POS', 'phần mềm quản lý phòng khám', 'phần mềm quản lý bệnh án', 'phần mềm quản lý trường học', 'phần mềm quản lý học sinh', 'phần mềm quản lý phòng gym', 'phần mềm quản lý hội viên', 'phần mềm quản lý xưởng may', 'phần mềm quản lý sản xuất', 'phần mềm quản lý vận tải', 'phần mềm quản lý logistics', 'phần mềm quản lý kho vận', 'phần mềm theo ngành nghề', 'phần mềm chuyên ngành', 'giải pháp quản lý theo ngành'],
  alternates: { canonical: 'https://mekongix.com/giai-phap' },
  openGraph: {
    title: 'Giải pháp phần mềm theo ngành nghề | Mekongix',
    description: 'Phần mềm quản lý chuyên biệt cho 9+ ngành nghề khác nhau',
    url: 'https://mekongix.com/giai-phap',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
