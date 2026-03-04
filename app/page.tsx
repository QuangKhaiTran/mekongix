import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { CaseStudiesSection } from "@/components/home/case-studies-section"
import { CTASection } from "@/components/home/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/schemas"

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Mekongix - Công ty phát triển phần mềm và giải pháp chuyển đổi số hàng đầu. Cung cấp dịch vụ phát triển web app, ứng dụng mobile, hệ thống ERP, CRM cho doanh nghiệp Việt Nam.',
  alternates: {
    canonical: 'https://mekongix.com',
  },
  openGraph: {
    title: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    url: 'https://mekongix.com',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mekongix - Chuyển đổi số cho doanh nghiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    images: ['/logo.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData data={getOrganizationSchema()} />
      <StructuredData data={getWebSiteSchema()} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkflowSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
