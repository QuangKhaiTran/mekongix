"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getBreadcrumbSchema } from "@/lib/seo/schemas"
import { Utensils, Sparkles, Hotel, GraduationCap, ShoppingBag, Stethoscope, ArrowRight, Dumbbell, Factory, Truck } from "lucide-react"

const solutions = [
  {
    icon: Utensils,
    title: "Nhà hàng & F&B",
    description: "Phần mềm quản lý nhà hàng, quán cafe, bar, trà sữa",
    href: "/giai-phap/nha-hang",
    keywords: ["Gọi món", "Quản lý bàn", "Order", "Thực đơn"],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Sparkles,
    title: "Spa & Salon",
    description: "Phần mềm quản lý spa, salon tóc, thẩm mỹ viện, tiệm nails",
    href: "/giai-phap/spa-salon",
    keywords: ["Đặt lịch", "Liệu trình", "Khách hàng", "Dịch vụ"],
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Hotel,
    title: "Khách sạn & Du lịch",
    description: "Phần mềm quản lý khách sạn, nhà nghỉ, resort",
    href: "/giai-phap/khach-san",
    keywords: ["Đặt phòng", "Check-in", "Housekeeping", "PMS"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: ShoppingBag,
    title: "Bán lẻ & Cửa hàng",
    description: "Phần mềm quản lý cửa hàng, tạp hóa, siêu thị, shop",
    href: "/giai-phap/ban-le",
    keywords: ["Bán hàng", "Kho", "POS", "Công nợ"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Stethoscope,
    title: "Y tế & Phòng khám",
    description: "Phần mềm quản lý phòng khám, nha khoa, bệnh viện",
    href: "/giai-phap/phong-kham",
    keywords: ["Bệnh án", "Khám bệnh", "Thuốc", "Lịch hẹn"],
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: GraduationCap,
    title: "Giáo dục & Đào tạo",
    description: "Phần mềm quản lý trường học, trung tâm, học sinh",
    href: "/giai-phap/truong-hoc",
    keywords: ["Học sinh", "Điểm danh", "Học phí", "Lớp học"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    description: "Phần mềm quản lý phòng gym, yoga, fitness, thể hình",
    href: "/giai-phap/phong-gym",
    keywords: ["Hội viên", "Gói tập", "PT", "Check-in"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Factory,
    title: "Xưởng sản xuất",
    description: "Phần mềm quản lý xưởng may, cơ khí, sản xuất",
    href: "/giai-phap/san-xuat",
    keywords: ["Sản xuất", "Chuyền", "Nguyên liệu", "Đơn hàng"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Truck,
    title: "Logistics & Vận tải",
    description: "Phần mềm quản lý vận chuyển, kho bãi, logistics",
    href: "/giai-phap/van-tai",
    keywords: ["Vận chuyển", "Kho", "Đơn hàng", "Tài xế"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  }
]

export default function SolutionsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Giải pháp', url: 'https://mekongix.com/giai-phap' },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden py-24 lg:py-32 bg-secondary">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
            alt="Giải pháp phần mềm cho doanh nghiệp"
            fill
            className="object-cover opacity-32"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/65 via-secondary/50 to-secondary/65" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="relative z-10 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Giải pháp phần mềm quản lý theo ngành nghề
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Phần mềm quản lý chuyên biệt cho từng lĩnh vực kinh doanh. 
                Tối ưu vận hành, tăng doanh thu, tiết kiệm chi phí.
              </p>
            </FadeInUp>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <StaggerItem key={solution.title}>
                  <Link href={solution.href}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="rounded-xl border border-border bg-card overflow-hidden h-full group"
                    >
                      {/* Solution image */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{solution.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {solution.keywords.map((keyword) => (
                            <span key={keyword} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                              {keyword}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-accent font-medium">
                          Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
