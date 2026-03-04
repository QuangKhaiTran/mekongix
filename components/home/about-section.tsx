"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"

const highlights = [
  "Team tech đam mê và sáng tạo",
  "Làm việc linh hoạt theo Agile",
  "Luôn sẵn sàng hỗ trợ bạn",
  "Bảo mật là ưu tiên hàng đầu",
]

const stats = [
  { value: "5+", label: "Năm phát triển" },
  { value: "50+", label: "Dự án thành công" },
  { value: "30+", label: "Đối tác tin tưởng" },
  { value: "100%", label: "Tận tâm với khách hàng" },
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
              Đồng hành cùng bạn trong hành trình số hóa
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Mekongix với đam mê biến ý tưởng thành sản phẩm. 
              Chúng mình không chỉ code, mà còn thấu hiểu vấn đề của bạn để đưa ra giải pháp 
              phù hợp nhất. Từ MVP đến scale-up, chúng mình sẽ là đối tác đáng tin cậy 
              giúp doanh nghiệp bạn phát triển bền vững.
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

          {/* Image & Stats */}
          <FadeInRight>
            <div className="space-y-6">
              {/* Placeholder image */}
              <PlaceholderImage 
                variant="about" 
                className="w-full aspect-[4/3] rounded-xl"
              >
                <div className="text-white/90 text-center p-8">
                  <div className="text-6xl font-bold mb-2">5+</div>
                  <div className="text-lg">Năm phát triển</div>
                </div>
              </PlaceholderImage>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.slice(1).map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg border border-border bg-card p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
