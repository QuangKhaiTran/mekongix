"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { Utensils, Sparkles, Hotel, GraduationCap, ShoppingBag, Stethoscope, ArrowRight, Dumbbell, Factory, Truck } from "lucide-react"

const solutions = [
  {
    icon: Utensils,
    title: "Nhà hàng & F&B",
    description: "Phần mềm quản lý nhà hàng, quán cafe, bar, trà sữa",
    href: "/giai-phap/nha-hang",
    keywords: ["Gọi món", "Quản lý bàn", "Order", "Thực đơn"]
  },
  {
    icon: Sparkles,
    title: "Spa & Salon",
    description: "Phần mềm quản lý spa, salon tóc, thẩm mỹ viện, tiệm nails",
    href: "/giai-phap/spa-salon",
    keywords: ["Đặt lịch", "Liệu trình", "Khách hàng", "Dịch vụ"]
  },
  {
    icon: Hotel,
    title: "Khách sạn & Du lịch",
    description: "Phần mềm quản lý khách sạn, nhà nghỉ, resort",
    href: "/giai-phap/khach-san",
    keywords: ["Đặt phòng", "Check-in", "Housekeeping", "PMS"]
  },
  {
    icon: ShoppingBag,
    title: "Bán lẻ & Cửa hàng",
    description: "Phần mềm quản lý cửa hàng, tạp hóa, siêu thị, shop",
    href: "/giai-phap/ban-le",
    keywords: ["Bán hàng", "Kho", "POS", "Công nợ"]
  },
  {
    icon: Stethoscope,
    title: "Y tế & Phòng khám",
    description: "Phần mềm quản lý phòng khám, nha khoa, bệnh viện",
    href: "/giai-phap/phong-kham",
    keywords: ["Bệnh án", "Khám bệnh", "Thuốc", "Lịch hẹn"]
  },
  {
    icon: GraduationCap,
    title: "Giáo dục & Đào tạo",
    description: "Phần mềm quản lý trường học, trung tâm, học sinh",
    href: "/giai-phap/truong-hoc",
    keywords: ["Học sinh", "Điểm danh", "Học phí", "Lớp học"]
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    description: "Phần mềm quản lý phòng gym, yoga, fitness, thể hình",
    href: "/giai-phap/phong-gym",
    keywords: ["Hội viên", "Gói tập", "PT", "Check-in"]
  },
  {
    icon: Factory,
    title: "Xưởng sản xuất",
    description: "Phần mềm quản lý xưởng may, cơ khí, sản xuất",
    href: "/giai-phap/san-xuat",
    keywords: ["Sản xuất", "Chuyền", "Nguyên liệu", "Đơn hàng"]
  },
  {
    icon: Truck,
    title: "Logistics & Vận tải",
    description: "Phần mềm quản lý vận chuyển, kho bãi, logistics",
    href: "/giai-phap/van-tai",
    keywords: ["Vận chuyển", "Kho", "Đơn hàng", "Tài xế"]
  }
]

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
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
                      className="p-6 rounded-xl border border-border bg-card h-full group"
                    >
                      <solution.icon className="h-12 w-12 text-accent mb-4" />
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
