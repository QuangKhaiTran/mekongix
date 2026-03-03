import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với Mekongix để được tư vấn miễn phí về giải pháp phần mềm và chuyển đổi số cho doanh nghiệp của bạn.',
  alternates: {
    canonical: 'https://mekongix.com/lien-he',
  },
  openGraph: {
    title: 'Liên hệ | Mekongix',
    description: 'Tư vấn miễn phí về giải pháp phần mềm doanh nghiệp',
    url: 'https://mekongix.com/lien-he',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Liên hệ Mekongix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liên hệ | Mekongix',
    description: 'Tư vấn miễn phí về giải pháp phần mềm doanh nghiệp',
    images: ['/og-contact.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
