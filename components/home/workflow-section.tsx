"use client"

import { FadeInUp, motion } from "@/components/motion"

const steps = [
  {
    number: "01",
    title: "Tư vấn & Phân tích",
    description: "Lắng nghe nhu cầu, phân tích yêu cầu và đề xuất giải pháp phù hợp với mục tiêu kinh doanh.",
  },
  {
    number: "02",
    title: "Thiết kế & Lập kế hoạch",
    description: "Thiết kế kiến trúc hệ thống, UX/UI và lập kế hoạch dự án chi tiết với timeline rõ ràng.",
  },
  {
    number: "03",
    title: "Phát triển & Kiểm thử",
    description: "Phát triển theo phương pháp Agile với các sprint ngắn, đảm bảo chất lượng qua quy trình QA nghiêm ngặt.",
  },
  {
    number: "04",
    title: "Triển khai & Hỗ trợ",
    description: "Triển khai hệ thống, đào tạo người dùng và cung cấp hỗ trợ kỹ thuật liên tục sau bàn giao.",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Quy trình
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Quy trình làm việc chuyên nghiệp
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Quy trình 4 bước rõ ràng, minh bạch giúp đảm bảo dự án được triển khai 
            đúng tiến độ và đạt chất lượng cao nhất.
          </p>
        </FadeInUp>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-border origin-left"
                  style={{ transform: "translateX(-50%)" }}
                />
              )}
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background"
                >
                  <span className="text-xl font-bold text-accent">{step.number}</span>
                </motion.div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
