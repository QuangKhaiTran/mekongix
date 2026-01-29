"use client"

import { CheckCircle2 } from "lucide-react"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"

const highlights = [
  "Đội ngũ chuyên gia giàu kinh nghiệm",
  "Quy trình phát triển chuẩn Agile",
  "Hỗ trợ kỹ thuật 24/7",
  "Cam kết bảo mật dữ liệu",
]

const stats = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "200+", label: "Dự án hoàn thành" },
  { value: "50+", label: "Khách hàng doanh nghiệp" },
  { value: "98%", label: "Khách hàng hài lòng" },
]

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <FadeInLeft>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Về Mekongix
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Đối tác công nghệ chiến lược cho hành trình số hóa
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm, Mekongix đã đồng hành 
              cùng hàng trăm doanh nghiệp trong hành trình chuyển đổi số. Chúng tôi không chỉ cung cấp 
              giải pháp công nghệ, mà còn là đối tác chiến lược giúp doanh nghiệp tối ưu hóa quy trình 
              và nâng cao năng lực cạnh tranh.
            </p>
            
            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </FadeInLeft>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-card p-8 text-center"
                >
                  <div className="text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
