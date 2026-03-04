import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Tìm hiểu về tầm nhìn, sứ mệnh và giá trị cốt lõi của Mekongix - Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam.",
  keywords: ['về Mekongix', 'công ty phần mềm Việt Nam', 'đội ngũ phát triển', 'giá trị cốt lõi', 'tầm nhìn sứ mệnh', 'công ty phát triển phần mềm uy tín', 'đội ngũ chuyên gia phần mềm', 'lịch sử công ty', 'văn hóa doanh nghiệp', 'đối tác công nghệ', 'công ty IT Việt Nam', 'doanh nghiệp công nghệ', 'startup công nghệ', 'công ty outsourcing', 'đội ngũ developer', 'chuyên gia ERP CRM', 'tuyển dụng IT'],
  alternates: {
    canonical: 'https://mekongix.com/gioi-thieu',
  },
  openGraph: {
    title: 'Về chúng tôi | Mekongix',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    url: 'https://mekongix.com/gioi-thieu',
    images: [
      {
        url: '/logo.png',
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
    images: ['/logo.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
