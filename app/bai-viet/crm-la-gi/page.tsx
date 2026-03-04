"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getBreadcrumbSchema } from "@/lib/seo/schemas"
import { Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CRMBlogPost() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Blog', url: 'https://mekongix.com/bai-viet' },
    { name: 'CRM là gì', url: 'https://mekongix.com/bai-viet/crm-la-gi' },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'CRM là gì? Lợi ích của phần mềm CRM cho doanh nghiệp',
    description: 'Tìm hiểu CRM là gì, tính năng, lợi ích và cách chọn phần mềm CRM phù hợp',
    image: 'https://mekongix.com/logo.png',
    author: { '@type': 'Organization', name: 'Mekongix' },
    publisher: { '@type': 'Organization', name: 'Mekongix', logo: { '@type': 'ImageObject', url: 'https://mekongix.com/logo.png' } },
    datePublished: '2026-03-03',
    dateModified: '2026-03-03',
  }

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={articleSchema} />
      <Header />
      <main className="pt-20">
        <article className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <div className="mb-8">
                <span className="text-sm font-medium text-accent uppercase">Hướng dẫn</span>
                <h1 className="mt-4 text-4xl font-bold text-foreground">
                  CRM là gì? Lợi ích của phần mềm CRM cho doanh nghiệp
                </h1>
                <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>03/03/2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Mekongix Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>7 phút đọc</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>CRM là gì?</h2>
                <p>
                  <strong>CRM (Customer Relationship Management)</strong> hay <strong>phần mềm quản lý quan hệ khách hàng</strong> 
                  là hệ thống giúp doanh nghiệp quản lý và phát triển mối quan hệ với khách hàng một cách hiệu quả.
                </p>

                <p>
                  Phần mềm CRM lưu trữ tất cả thông tin khách hàng, lịch sử tương tác, đơn hàng, và giúp đội ngũ bán hàng, 
                  marketing, chăm sóc khách hàng làm việc hiệu quả hơn.
                </p>

                <h2>Tính năng chính của phần mềm CRM</h2>

                <h3>1. Quản lý thông tin khách hàng</h3>
                <ul>
                  <li>Lưu trữ thông tin chi tiết: tên, email, số điện thoại, địa chỉ</li>
                  <li>Phân loại khách hàng theo nhóm, nguồn, giá trị</li>
                  <li>Lịch sử tương tác, ghi chú quan trọng</li>
                </ul>

                <h3>2. Quản lý cơ hội bán hàng (Sales Pipeline)</h3>
                <ul>
                  <li>Theo dõi khách hàng tiềm năng từ lead đến deal</li>
                  <li>Quản lý quy trình bán hàng theo từng giai đoạn</li>
                  <li>Dự báo doanh số, tỷ lệ chuyển đổi</li>
                </ul>

                <h3>3. Tự động hóa Marketing</h3>
                <ul>
                  <li>Gửi email marketing tự động</li>
                  <li>Phân khúc khách hàng cho chiến dịch</li>
                  <li>Theo dõi hiệu quả chiến dịch</li>
                </ul>

                <h3>4. Chăm sóc khách hàng</h3>
                <ul>
                  <li>Quản lý yêu cầu hỗ trợ, khiếu nại</li>
                  <li>Ticket system, live chat</li>
                  <li>Đánh giá mức độ hài lòng</li>
                </ul>

                <h3>5. Báo cáo và phân tích</h3>
                <ul>
                  <li>Báo cáo doanh số theo nhân viên, sản phẩm</li>
                  <li>Phân tích hành vi khách hàng</li>
                  <li>Dashboard trực quan</li>
                </ul>

                <h2>Lợi ích khi sử dụng CRM</h2>

                <h3>1. Tăng doanh số bán hàng</h3>
                <p>
                  CRM giúp đội ngũ bán hàng theo dõi khách hàng tiềm năng hiệu quả, không bỏ lỡ cơ hội. 
                  Tự động nhắc nhở follow-up đúng thời điểm.
                </p>

                <h3>2. Cải thiện trải nghiệm khách hàng</h3>
                <p>
                  Với đầy đủ thông tin khách hàng, nhân viên có thể phục vụ tốt hơn, cá nhân hóa trải nghiệm.
                </p>

                <h3>3. Tiết kiệm thời gian</h3>
                <p>
                  Tự động hóa các công việc lặp đi lặp lại như gửi email, cập nhật thông tin, tạo báo cáo.
                </p>

                <h3>4. Tăng tỷ lệ giữ chân khách hàng</h3>
                <p>
                  Chăm sóc khách hàng tốt hơn, phản hồi nhanh chóng, tạo chương trình khách hàng thân thiết.
                </p>

                <h3>5. Ra quyết định dựa trên dữ liệu</h3>
                <p>
                  Báo cáo chi tiết giúp lãnh đạo hiểu rõ tình hình kinh doanh, đưa ra quyết định chính xác.
                </p>

                <h2>Doanh nghiệp nào nên dùng CRM?</h2>
                <ul>
                  <li><strong>Doanh nghiệp B2B:</strong> Chu kỳ bán hàng dài, cần theo dõi nhiều touchpoint</li>
                  <li><strong>Doanh nghiệp B2C:</strong> Nhiều khách hàng, cần phân khúc và marketing tự động</li>
                  <li><strong>Startup:</strong> Xây dựng quy trình bán hàng từ đầu</li>
                  <li><strong>Doanh nghiệp dịch vụ:</strong> Chăm sóc khách hàng là ưu tiên</li>
                </ul>

                <h2>Cách chọn phần mềm CRM phù hợp</h2>

                <h3>1. Xác định mục tiêu</h3>
                <p>Bạn muốn tăng doanh số? Cải thiện chăm sóc khách hàng? Hay tự động hóa marketing?</p>

                <h3>2. Dễ sử dụng</h3>
                <p>Giao diện thân thiện, nhân viên dễ học và sử dụng hàng ngày.</p>

                <h3>3. Tích hợp</h3>
                <p>Có thể kết nối với email, website, mạng xã hội, các công cụ khác?</p>

                <h3>4. Giá cả</h3>
                <p>Cân nhắc chi phí theo user/tháng, có phù hợp với ngân sách không?</p>

                <h3>5. Hỗ trợ</h3>
                <p>Nhà cung cấp có đội ngũ hỗ trợ tốt, đào tạo đầy đủ không?</p>

                <h2>Kết luận</h2>
                <p>
                  Phần mềm CRM là công cụ quan trọng giúp doanh nghiệp xây dựng và duy trì mối quan hệ tốt với khách hàng, 
                  từ đó tăng doanh số và phát triển bền vững. Đầu tư vào CRM là đầu tư vào tương lai của doanh nghiệp.
                </p>

                <div className="mt-12 p-6 bg-secondary rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Cần tư vấn giải pháp CRM?</h3>
                  <p className="mb-4">
                    Mekongix cung cấp giải pháp CRM tùy chỉnh theo nhu cầu doanh nghiệp. 
                    Liên hệ ngay để được tư vấn miễn phí!
                  </p>
                  <Button asChild className="bg-accent text-accent-foreground">
                    <Link href="/lien-he">Liên hệ tư vấn</Link>
                  </Button>
                </div>
              </div>
            </FadeInUp>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
