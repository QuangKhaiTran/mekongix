import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Tìm hiểu về tầm nhìn, sứ mệnh và giá trị cốt lõi của Mekongix - Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam.",
  alternates: {
    canonical: 'https://mekongix.com/gioi-thieu',
  },
  openGraph: {
    title: 'Về chúng tôi | Mekongix',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    url: 'https://mekongix.com/gioi-thieu',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Về Mekongix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Về chúng tôi | Mekongix',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    images: ['/og-about.jpg'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
