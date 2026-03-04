"use client"

import React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/seo/schemas"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh, Việt Nam",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    content: "+84 123 456 789",
    href: "tel:+84123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@mekongix.com",
    href: "mailto:contact@mekongix.com",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 6: 8:00 - 18:00",
  },
]

const services = [
  "Phát triển Web & App",
  "Giải pháp ERP & CMS",
  "Nền tảng SaaS",
  "Bảo trì & Vận hành",
  "Tư vấn công nghệ",
  "Khác",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const breadcrumbItems = [
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Liên hệ', url: 'https://mekongix.com/lien-he' },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={getLocalBusinessSchema()} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Liên hệ
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Hãy kết nối với chúng tôi
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Bạn có dự án cần thực hiện? Hãy liên hệ với Mekongix để được tư vấn miễn phí. 
                Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Info */}
              <FadeInLeft>
                <h2 className="text-2xl font-bold text-foreground">Thông tin liên hệ</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Liên hệ trực tiếp với chúng tôi qua các kênh dưới đây hoặc điền form để được 
                  tư vấn chi tiết về dự án của bạn.
                </p>

                <StaggerContainer className="mt-10 space-y-6">
                  {contactInfo.map((item) => (
                    <StaggerItem key={item.title}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                          {item.href ? (
                            <a 
                              href={item.href} 
                              className="mt-1 text-muted-foreground hover:text-accent transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="mt-1 text-muted-foreground">{item.content}</p>
                          )}
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Map placeholder */}
                <FadeInUp delay={0.3}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="mt-10 aspect-video rounded-xl border border-border bg-secondary overflow-hidden"
                  >
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <MapPin className="h-8 w-8 mr-2" />
                      <span>Bản đồ vị trí</span>
                    </div>
                  </motion.div>
                </FadeInUp>
              </FadeInLeft>

              {/* Contact Form */}
              <FadeInRight>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-border bg-card p-8 lg:p-10"
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, type: "spring" }}
                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10"
                      >
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </motion.div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">
                        Cảm ơn bạn đã liên hệ!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                      </p>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          onClick={() => setIsSubmitted(false)}
                          className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          Gửi yêu cầu khác
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-foreground">Gửi yêu cầu tư vấn</h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Điền thông tin dưới đây và chúng tôi sẽ liên hệ với bạn sớm nhất.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="space-y-2"
                          >
                            <Label htmlFor="name">Họ và tên *</Label>
                            <Input 
                              id="name" 
                              name="name" 
                              required 
                              placeholder="Nguyễn Văn A"
                              className="bg-input border-border"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="space-y-2"
                          >
                            <Label htmlFor="company">Công ty</Label>
                            <Input 
                              id="company" 
                              name="company" 
                              placeholder="Tên công ty"
                              className="bg-input border-border"
                            />
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="space-y-2"
                          >
                            <Label htmlFor="email">Email *</Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              required 
                              placeholder="email@company.com"
                              className="bg-input border-border"
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.25 }}
                            className="space-y-2"
                          >
                            <Label htmlFor="phone">Số điện thoại *</Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              type="tel" 
                              required 
                              placeholder="0123 456 789"
                              className="bg-input border-border"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="service">Dịch vụ quan tâm *</Label>
                          <select
                            id="service"
                            name="service"
                            required
                            className="w-full rounded-md border border-border bg-input px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          >
                            <option value="">Chọn dịch vụ</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.35 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="budget">Ngân sách dự kiến</Label>
                          <select
                            id="budget"
                            name="budget"
                            className="w-full rounded-md border border-border bg-input px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          >
                            <option value="">Chọn ngân sách</option>
                            <option value="under-50m">Dưới 50 triệu VND</option>
                            <option value="50m-200m">50 - 200 triệu VND</option>
                            <option value="200m-500m">200 - 500 triệu VND</option>
                            <option value="500m-1b">500 triệu - 1 tỷ VND</option>
                            <option value="above-1b">Trên 1 tỷ VND</option>
                          </select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="message">Mô tả dự án *</Label>
                          <Textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows={4}
                            placeholder="Mô tả ngắn gọn về dự án hoặc yêu cầu của bạn..."
                            className="bg-input border-border resize-none"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.45 }}
                        >
                          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Button 
                              type="submit" 
                              disabled={isLoading}
                              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                              {isLoading ? (
                                "Đang gửi..."
                              ) : (
                                <>
                                  Gửi yêu cầu
                                  <Send className="ml-2 h-4 w-4" />
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </motion.div>

                        <p className="text-xs text-muted-foreground text-center">
                          Bằng việc gửi form, bạn đồng ý với{" "}
                          <a href="/privacy" className="text-accent hover:underline">
                            Chính sách bảo mật
                          </a>{" "}
                          của chúng tôi.
                        </p>
                      </form>
                    </>
                  )}
                </motion.div>
              </FadeInRight>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
