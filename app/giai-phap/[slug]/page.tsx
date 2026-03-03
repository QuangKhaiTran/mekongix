"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/motion"
import { ArrowRight, Clock, Mail } from "lucide-react"
import { notFound } from "next/navigation"

// Danh sách các solutions hợp lệ
const validSolutions = [
  'nha-hang',
  'spa-salon', 
  'khach-san',
  'ban-le',
  'phong-kham',
  'truong-hoc',
  'phong-gym',
  'san-xuat',
  'van-tai'
]

// Mapping tên tiếng Việt
const solutionNames: Record<string, string> = {
  'nha-hang': 'Nhà hàng & F&B',
  'spa-salon': 'Spa & Salon',
  'khach-san': 'Khách sạn & Du lịch',
  'ban-le': 'Bán lẻ & Cửa hàng',
  'phong-kham': 'Y tế & Phòng khám',
  'truong-hoc': 'Giáo dục & Đào tạo',
  'phong-gym': 'Gym & Fitness',
  'san-xuat': 'Xưởng sản xuất',
  'van-tai': 'Logistics & Vận tải'
}

export default function SolutionPlaceholderPage({ params }: { params: { slug: string } }) {
  // Nếu slug không hợp lệ, trả về 404
  if (!validSolutions.includes(params.slug)) {
    notFound()
  }

  const solutionName = solutionNames[params.slug] || params.slug

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <FadeInUp>
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-10 w-10 text-accent" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Giải pháp {solutionName}
              </h1>
              
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Đang phát triển
              </div>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Chúng tôi đang hoàn thiện trang giải pháp cho ngành <strong>{solutionName}</strong>. 
                Trang này sẽ sớm ra mắt với đầy đủ thông tin về tính năng, lợi ích và bảng giá.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/lien-he">
                    <Mail className="mr-2 h-4 w-4" />
                    Liên hệ tư vấn ngay
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/giai-phap">
                    Xem tất cả giải pháp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Info box */}
              <div className="rounded-xl border border-border bg-card p-8 text-left">
                <h2 className="text-xl font-semibold mb-4">Bạn cần tư vấn ngay?</h2>
                <p className="text-muted-foreground mb-6">
                  Đội ngũ chuyên gia của Mekongix sẵn sàng tư vấn miễn phí về giải pháp phần mềm 
                  phù hợp cho ngành <strong>{solutionName}</strong> của bạn.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Tư vấn miễn phí về tính năng và giá cả</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Demo trực tiếp qua video call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                      <span className="text-accent text-sm">✓</span>
                    </div>
                    <span className="text-foreground">Báo giá chi tiết trong 24h</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/lien-he">
                    Đăng ký tư vấn miễn phí
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
