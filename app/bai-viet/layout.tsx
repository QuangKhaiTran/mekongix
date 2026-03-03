import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog công nghệ',
  description: 'Chia sẻ kiến thức về phát triển phần mềm, chuyển đổi số, và xu hướng công nghệ mới nhất cho doanh nghiệp.',
  alternates: {
    canonical: 'https://mekongix.com/bai-viet',
  },
  openGraph: {
    title: 'Blog công nghệ | Mekongix',
    description: 'Kiến thức và xu hướng công nghệ cho doanh nghiệp',
    url: 'https://mekongix.com/bai-viet',
    images: [
      {
        url: '/og-blog.jpg',
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
    images: ['/og-blog.jpg'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
