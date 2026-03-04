"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/seo/schemas"
import { 
  Globe, 
  Server, 
  Layers, 
  Settings, 
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Database,
  Shield,
  Clock
} from "lucide-react"


const services = [
  {
    id: "web-app",
    icon: Globe,
    title: "Phát triển Web & App",
    description: "Xây dựng website và ứng dụng di động giúp doanh nghiệp tiếp cận khách hàng hiệu quả, tăng doanh thu và nâng cao trải nghiệm người dùng.",
    features: [
      "Website doanh nghiệp chuyên nghiệp",
      "Ứng dụng web quản lý nội bộ",
      "App di động iOS & Android",
      "Website bán hàng online",
      "Cổng thông tin khách hàng",
      "Hệ thống báo cáo trực quan",
    ],
    benefits: [
      "Tăng khả năng tiếp cận khách hàng",
      "Tự động hóa quy trình làm việc",
      "Giảm chi phí vận hành",
      "Nâng cao hình ảnh thương hiệu",
    ],
  },
  {
    id: "enterprise",
    icon: Server,
    title: "Giải pháp ERP & CRM",
    description: "Hệ thống quản lý doanh nghiệp toàn diện giúp tối ưu vận hành, tăng hiệu suất làm việc và kiểm soát tài chính chặt chẽ.",
    features: [
      "Quản lý tài nguyên doanh nghiệp (ERP)",
      "Quản lý quan hệ khách hàng (CRM)",
      "Quản lý nhân sự và chấm công",
      "Quản lý chuỗi cung ứng",
      "Báo cáo và phân tích kinh doanh",
      "Quản lý tài liệu điện tử",
    ],
    benefits: [
      "Tăng hiệu suất làm việc 40-60%",
      "Giảm sai sót trong quản lý",
      "Kiểm soát chi phí tốt hơn",
      "Ra quyết định nhanh và chính xác",
    ],
  },
  {
    id: "saas",
    icon: Layers,
    title: "Nền tảng SaaS",
    description: "Phát triển sản phẩm phần mềm dịch vụ với khả năng mở rộng cao, giúp doanh nghiệp tạo nguồn thu định kỳ ổn định.",
    features: [
      "Hệ thống đa khách hàng",
      "Quản lý gói dịch vụ và thanh toán",
      "Tích hợp API với hệ thống khác",
      "Hạ tầng đám mây linh hoạt",
      "Tự động mở rộng theo nhu cầu",
      "Triển khai và cập nhật liên tục",
    ],
    benefits: [
      "Tạo nguồn thu định kỳ",
      "Mở rộng quy mô dễ dàng",
      "Chi phí vận hành tối ưu",
      "Cập nhật tính năng liên tục",
    ],
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Bảo trì & Vận hành",
    description: "Dịch vụ hỗ trợ và vận hành hệ thống 24/7 đảm bảo website, ứng dụng hoạt động ổn định, an toàn và hiệu quả.",
    features: [
      "Hỗ trợ kỹ thuật 24/7",
      "Giám sát hệ thống liên tục",
      "Tối ưu hiệu suất",
      "Kiểm tra bảo mật định kỳ",
      "Sao lưu và phục hồi dữ liệu",
      "Nâng cấp và di chuyển hệ thống",
    ],
    benefits: [
      "Hệ thống hoạt động 99.9% thời gian",
      "Phát hiện và xử lý sự cố nhanh",
      "Bảo vệ dữ liệu an toàn",
      "Yên tâm tập trung kinh doanh",
    ],
  },
]

const highlights = [
  {
    icon: Smartphone,
    title: "Dễ sử dụng",
    description: "Giao diện thân thiện, hoạt động mượt mà trên mọi thiết bị.",
  },
  {
    icon: Database,
    title: "Mở rộng linh hoạt",
    description: "Dễ dàng thêm tính năng khi doanh nghiệp phát triển.",
  },
  {
    icon: Shield,
    title: "An toàn bảo mật",
    description: "Bảo vệ dữ liệu khách hàng với tiêu chuẩn cao nhất.",
  },
  {
    icon: Clock,
    title: "Đúng tiến độ",
    description: "Cam kết bàn giao đúng thời gian đã thỏa thuận.",
  },
]

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Dịch vụ', url: 'https://mekongix.com/dich-vu' },
  ]

  return (
    <>
      <StructuredData data={getServiceSchema()} />
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <Header />
      <main className="pt-20 overflow-x-hidden">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Dịch vụ
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Giải pháp công nghệ toàn diện
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ từ tư vấn, thiết kế, phát triển 
                đến triển khai và vận hành hệ thống, đáp ứng mọi nhu cầu của doanh nghiệp.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  {index % 2 === 0 ? (
                    <FadeInLeft className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                        <service.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h2 className="mt-6 text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="mt-8 space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/lien-he">
                            Tư vấn ngay
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </FadeInLeft>
                  ) : (
                    <FadeInRight className="lg:order-2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                        <service.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h2 className="mt-6 text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="mt-8 space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/lien-he">
                            Tư vấn ngay
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </FadeInRight>
                  )}

                  {/* Image */}
                  {index % 2 === 0 ? (
                    <FadeInRight>
                      <PlaceholderImage 
                        variant="product" 
                        className="w-full aspect-[4/3] rounded-xl"
                      >
                        <service.icon className="h-20 w-20 text-white/90" />
                      </PlaceholderImage>
                    </FadeInRight>
                  ) : (
                    <FadeInLeft className="lg:order-1">
                      <PlaceholderImage 
                        variant="product" 
                        className="w-full aspect-[4/3] rounded-xl"
                      >
                        <service.icon className="h-20 w-20 text-white/90" />
                      </PlaceholderImage>
                    </FadeInLeft>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border bg-card p-8 lg:p-12 text-center"
              >
                <h2 className="text-3xl font-bold text-foreground text-balance">
                  Không chắc dịch vụ nào phù hợp?
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  Liên hệ với chúng tôi để được tư vấn miễn phí. Đội ngũ chuyên gia của Mekongix 
                  sẽ phân tích nhu cầu và đề xuất giải pháp tối ưu nhất cho doanh nghiệp của bạn.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/lien-he">
                      Nhận tư vấn miễn phí
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
