import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { CaseStudiesSection } from "@/components/home/case-studies-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
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
