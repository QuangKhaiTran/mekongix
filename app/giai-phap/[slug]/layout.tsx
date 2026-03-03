import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const validSolutions = [
  'nha-hang',
  'spa-salon',
  'khach-san',
  'ban-le',
  'phong-kham',
  'truong-hoc',
  'phong-gym',
  'san-xuat',
  'van-tai'
]

const solutionMetadata: Record<string, { title: string; description: string }> = {
  'nha-hang': {
    title: 'Phần mềm quản lý nhà hàng, quán cafe',
    description: 'Giải pháp phần mềm quản lý nhà hàng, quán cafe toàn diện. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'spa-salon': {
    title: 'Phần mềm quản lý spa, salon, thẩm mỹ viện',
    description: 'Giải pháp phần mềm quản lý spa, salon tóc, thẩm mỹ viện. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'khach-san': {
    title: 'Phần mềm quản lý khách sạn, resort',
    description: 'Giải pháp PMS quản lý khách sạn, resort toàn diện. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'ban-le': {
    title: 'Phần mềm quản lý cửa hàng, bán lẻ',
    description: 'Giải pháp phần mềm quản lý cửa hàng, bán lẻ, POS. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'phong-kham': {
    title: 'Phần mềm quản lý phòng khám',
    description: 'Giải pháp phần mềm quản lý phòng khám, bệnh án điện tử. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'truong-hoc': {
    title: 'Phần mềm quản lý trường học',
    description: 'Giải pháp phần mềm quản lý trường học, học sinh, học phí. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'phong-gym': {
    title: 'Phần mềm quản lý phòng gym, fitness',
    description: 'Giải pháp phần mềm quản lý phòng gym, yoga, fitness. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'san-xuat': {
    title: 'Phần mềm quản lý xưởng sản xuất',
    description: 'Giải pháp phần mềm quản lý xưởng may, cơ khí, sản xuất. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  },
  'van-tai': {
    title: 'Phần mềm quản lý logistics, vận tải',
    description: 'Giải pháp phần mềm quản lý vận chuyển, kho bãi, logistics. Đang phát triển - Liên hệ để được tư vấn chi tiết.'
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (!validSolutions.includes(params.slug)) {
    return {
      title: 'Không tìm thấy trang',
      description: 'Trang bạn tìm kiếm không tồn tại.'
    }
  }

  const meta = solutionMetadata[params.slug]
  
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://mekongix.com/giai-phap/${params.slug}`
    },
    openGraph: {
      title: `${meta.title} | Mekongix`,
      description: meta.description,
      url: `https://mekongix.com/giai-phap/${params.slug}`,
      type: 'website',
      locale: 'vi_VN',
    },
    robots: {
      index: false, // Không index trang placeholder
      follow: true,
    }
  }
}

export default function SolutionSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
