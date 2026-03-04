"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { FadeInUp, FadeInLeft, StaggerContainer, StaggerItem, motion } from "@/components/motion"

const caseStudies = [
  {
    title: "Hệ thống ERP cho Tập đoàn sản xuất",
    category: "Enterprise Solutions",
    description: "Triển khai hệ thống quản lý tài nguyên doanh nghiệp toàn diện, tích hợp quản lý kho, sản xuất và tài chính.",
    metrics: [
      { label: "Giảm chi phí vận hành", value: "35%" },
      { label: "Tăng hiệu suất", value: "50%" },
    ],
  },
  {
    title: "Nền tảng E-commerce B2B",
    category: "Web Development",
    description: "Xây dựng sàn thương mại điện tử B2B với tính năng quản lý đơn hàng, thanh toán và logistics tích hợp.",
    metrics: [
      { label: "Giao dịch/tháng", value: "10K+" },
      { label: "Đối tác kinh doanh", value: "500+" },
    ],
  },
  {
    title: "Ứng dụng quản lý nhân sự SaaS",
    category: "SaaS Platform",
    description: "Phát triển nền tảng HRM đa tenant với các module chấm công, lương, tuyển dụng và đào tạo.",
    metrics: [
      { label: "Doanh nghiệp sử dụng", value: "200+" },
      { label: "Nhân viên quản lý", value: "50K+" },
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeInLeft>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Dự án tiêu biểu
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Những dự án nổi bật
            </h2>
          </FadeInLeft>
          <FadeInUp>
            <Link 
              href="/products" 
              className="inline-flex items-center text-sm font-medium text-accent hover:underline"
            >
              Xem tất cả dự án
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </FadeInUp>
        </div>

        {/* Case studies grid */}
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <motion.article
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 h-full"
              >
                {/* Project image */}
                <PlaceholderImage 
                  variant="project" 
                  className="w-full aspect-[16/9]"
                />
                
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-border">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-accent">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
