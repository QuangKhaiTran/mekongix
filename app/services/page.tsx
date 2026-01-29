"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"
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
    description: "Xây dựng website và ứng dụng di động hiện đại với công nghệ tiên tiến nhất.",
    features: [
      "Website doanh nghiệp & Landing page",
      "Ứng dụng web (Web Application)",
      "Ứng dụng di động iOS & Android",
      "Progressive Web App (PWA)",
      "E-commerce & Marketplace",
      "Portal & Dashboard",
    ],
    technologies: ["React", "Next.js", "React Native", "Flutter", "Node.js", "PostgreSQL"],
  },
  {
    id: "enterprise",
    icon: Server,
    title: "Giải pháp ERP & CMS",
    description: "Hệ thống quản lý doanh nghiệp toàn diện, tùy chỉnh theo quy mô và ngành nghề.",
    features: [
      "Hệ thống ERP (Quản lý tài nguyên)",
      "CRM (Quản lý khách hàng)",
      "HRM (Quản lý nhân sự)",
      "SCM (Quản lý chuỗi cung ứng)",
      "BI & Analytics Dashboard",
      "Document Management System",
    ],
    technologies: ["SAP", "Odoo", "Custom Development", "Power BI", "Tableau"],
  },
  {
    id: "saas",
    icon: Layers,
    title: "Nền tảng SaaS",
    description: "Phát triển và triển khai các sản phẩm SaaS với khả năng mở rộng và bảo mật cao.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "API Development & Integration",
      "Microservices Architecture",
      "Cloud Infrastructure (AWS/GCP/Azure)",
      "DevOps & CI/CD Pipeline",
    ],
    technologies: ["Kubernetes", "Docker", "AWS", "Terraform", "GraphQL", "Redis"],
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "Bảo trì & Vận hành",
    description: "Dịch vụ hỗ trợ kỹ thuật và vận hành hệ thống đảm bảo hoạt động liên tục.",
    features: [
      "Hỗ trợ kỹ thuật 24/7",
      "Monitoring & Alert System",
      "Performance Optimization",
      "Security Audit & Patch",
      "Backup & Disaster Recovery",
      "System Upgrade & Migration",
    ],
    technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "PagerDuty"],
  },
]

const highlights = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Tương thích mọi thiết bị từ desktop đến mobile.",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "Kiến trúc linh hoạt, dễ dàng mở rộng theo nhu cầu.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bảo mật cấp doanh nghiệp với các chuẩn quốc tế.",
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description: "Cam kết bàn giao đúng tiến độ đã thỏa thuận.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
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
                          <Link href="/contact">
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
                          <Link href="/contact">
                            Tư vấn ngay
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </FadeInRight>
                  )}

                  {/* Tech stack card */}
                  {index % 2 === 0 ? (
                    <FadeInRight>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-xl border border-border bg-card p-8"
                      >
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          Công nghệ sử dụng
                        </h3>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {service.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-border">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <div className="text-2xl font-bold text-accent">100+</div>
                              <div className="text-xs text-muted-foreground">Dự án hoàn thành</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-accent">98%</div>
                              <div className="text-xs text-muted-foreground">Khách hàng hài lòng</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </FadeInRight>
                  ) : (
                    <FadeInLeft className="lg:order-1">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-xl border border-border bg-card p-8"
                      >
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                          Công nghệ sử dụng
                        </h3>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {service.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-border">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <div className="text-2xl font-bold text-accent">100+</div>
                              <div className="text-xs text-muted-foreground">Dự án hoàn thành</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-accent">98%</div>
                              <div className="text-xs text-muted-foreground">Khách hàng hài lòng</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
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
                    <Link href="/contact">
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
