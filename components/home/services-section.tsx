"use client"

import Link from "next/link"
import { Globe, Server, Layers, Settings, ArrowRight } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem, motion } from "@/components/motion"

const services = [
  {
    icon: Globe,
    title: "Phát triển Web & App",
    description: "Xây dựng website và ứng dụng di động hiện đại, tối ưu trải nghiệm người dùng và tương thích đa nền tảng.",
    href: "/dich-vu#web-app",
  },
  {
    icon: Server,
    title: "Giải pháp ERP & CMS",
    description: "Hệ thống quản lý doanh nghiệp toàn diện, tùy chỉnh theo quy mô và đặc thù ngành nghề.",
    href: "/dich-vu#enterprise",
  },
  {
    icon: Layers,
    title: "Nền tảng SaaS",
    description: "Phát triển và triển khai các sản phẩm SaaS với khả năng mở rộng cao và bảo mật tốt nhất.",
    href: "/dich-vu#saas",
  },
  {
    icon: Settings,
    title: "Bảo trì & Vận hành",
    description: "Dịch vụ hỗ trợ kỹ thuật, bảo trì hệ thống và vận hành đảm bảo hoạt động liên tục 24/7.",
    href: "/dich-vu#maintenance",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Dịch vụ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Giải pháp công nghệ toàn diện
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ từ tư vấn, thiết kế, 
            phát triển đến triển khai và vận hành hệ thống.
          </p>
        </FadeInUp>

        {/* Services grid */}
        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-all duration-300 h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
