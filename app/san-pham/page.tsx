"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getBreadcrumbSchema, getProductSchema } from "@/lib/seo/schemas"
import { 
  ArrowRight, 
  Users, 
  BarChart3, 
  ShoppingCart, 
  FileText,
  CheckCircle2,
  Star
} from "lucide-react"


const products = [
  {
    icon: Users,
    name: "MekongHRM",
    tagline: "Quản lý nhân sự thông minh",
    description: "Nền tảng HRM toàn diện với các module chấm công, tính lương, tuyển dụng và đào tạo. Phù hợp cho doanh nghiệp từ 50-5000 nhân viên.",
    features: [
      "Chấm công & Quản lý nghỉ phép",
      "Tính lương & Thuế tự động",
      "Tuyển dụng & Onboarding",
      "Đánh giá hiệu suất (KPI)",
      "E-learning & Đào tạo",
    ],
    stats: {
      users: "50K+",
      companies: "200+",
      rating: "4.8",
    },
    popular: true,
  },
  {
    icon: BarChart3,
    name: "MekongERP",
    tagline: "Quản lý doanh nghiệp toàn diện",
    description: "Hệ thống ERP tích hợp quản lý tài chính, kho vận, sản xuất và bán hàng. Tùy chỉnh linh hoạt theo ngành nghề.",
    features: [
      "Quản lý tài chính & Kế toán",
      "Quản lý kho & Logistics",
      "Quản lý sản xuất (MRP)",
      "Quản lý bán hàng & CRM",
      "Business Intelligence",
    ],
    stats: {
      users: "30K+",
      companies: "100+",
      rating: "4.7",
    },
    popular: false,
  },
  {
    icon: ShoppingCart,
    name: "MekongCommerce",
    tagline: "Nền tảng thương mại điện tử B2B",
    description: "Giải pháp e-commerce B2B với quản lý đơn hàng, thanh toán và logistics tích hợp. Hỗ trợ marketplace multi-vendor.",
    features: [
      "Quản lý sản phẩm & Catalog",
      "Đơn hàng & Thanh toán",
      "Tích hợp vận chuyển",
      "Multi-vendor Marketplace",
      "Analytics & Reporting",
    ],
    stats: {
      users: "100K+",
      companies: "500+",
      rating: "4.9",
    },
    popular: false,
  },
  {
    icon: FileText,
    name: "MekongDocs",
    tagline: "Quản lý tài liệu doanh nghiệp",
    description: "Hệ thống DMS với lưu trữ đám mây, workflow phê duyệt và tìm kiếm thông minh. Tuân thủ ISO 27001.",
    features: [
      "Lưu trữ đám mây bảo mật",
      "Workflow phê duyệt",
      "Tìm kiếm Full-text",
      "Version Control",
      "Chữ ký số tích hợp",
    ],
    stats: {
      users: "20K+",
      companies: "80+",
      rating: "4.6",
    },
    popular: false,
  },
]

export default function ProductsPage() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Sản phẩm', url: 'https://mekongix.com/san-pham' },
  ]

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={getProductSchema()} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Sản phẩm
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Giải pháp SaaS doanh nghiệp
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Các sản phẩm phần mềm được thiết kế đặc biệt cho doanh nghiệp Việt Nam, 
                với giao diện tiếng Việt, tuân thủ quy định pháp luật và tích hợp các dịch vụ nội địa.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {products.map((product) => (
                <StaggerItem key={product.name}>
                  <motion.article
                    whileHover={{ scale: 1.01, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 h-full"
                  >
                    {/* Popular badge */}
                    {product.popular && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground z-10"
                      >
                        Phổ biến nhất
                      </motion.div>
                    )}

                    {/* Product image */}
                    <PlaceholderImage 
                      variant="product" 
                      className="w-full aspect-[16/9]"
                    >
                      <product.icon className="h-16 w-16 text-white/90" />
                    </PlaceholderImage>

                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                          <product.icon className="h-7 w-7 text-accent" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
                          <p className="text-sm text-accent">{product.tagline}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-6 text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-6 space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Stats */}
                      <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xl font-bold text-accent">{product.stats.users}</div>
                          <div className="text-xs text-muted-foreground">Người dùng</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-accent">{product.stats.companies}</div>
                          <div className="text-xs text-muted-foreground">Doanh nghiệp</div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-accent fill-accent" />
                            <span className="text-xl font-bold text-accent">{product.stats.rating}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">Đánh giá</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/lien-he">
                              Dùng thử miễn phí
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button asChild variant="outline" className="w-full border-border text-foreground hover:bg-secondary bg-transparent">
                            <Link href={`/san-pham/${product.name.toLowerCase()}`}>
                              Tìm hiểu thêm
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border bg-card p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">
                      Custom Solutions
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-foreground text-balance">
                      Không tìm thấy sản phẩm phù hợp?
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Mekongix có thể phát triển giải pháp phần mềm theo yêu cầu riêng của doanh nghiệp bạn. 
                      Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi có thể biến ý tưởng của bạn thành hiện thực.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {[
                        "Phân tích yêu cầu miễn phí",
                        "Thiết kế UX/UI chuyên nghiệp",
                        "Phát triển theo phương pháp Agile",
                        "Hỗ trợ sau triển khai 24/7",
                      ].map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-accent" />
                          <span className="text-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 lg:items-end">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full lg:w-auto">
                        <Link href="/lien-he">
                          Liên hệ tư vấn
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
