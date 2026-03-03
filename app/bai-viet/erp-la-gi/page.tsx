"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getBreadcrumbSchema } from "@/lib/seo/schemas"
import { Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ERPBlogPost() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Blog', url: 'https://mekongix.com/bai-viet' },
    { name: 'ERP là gì', url: 'https://mekongix.com/bai-viet/erp-la-gi' },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ERP là gì? Lợi ích của hệ thống ERP cho doanh nghiệp',
    description: 'Tìm hiểu ERP là gì, các tính năng chính, lợi ích và cách chọn phần mềm ERP phù hợp cho doanh nghiệp',
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
                  ERP là gì? Lợi ích của hệ thống ERP cho doanh nghiệp
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
                    <span>8 phút đọc</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>ERP là gì?</h2>
                <p>
                  <strong>ERP (Enterprise Resource Planning)</strong> hay còn gọi là <strong>hệ thống hoạch định nguồn lực doanh nghiệp</strong>, 
                  là phần mềm quản lý tích hợp giúp doanh nghiệp quản lý và tự động hóa các quy trình kinh doanh cốt lõi.
                </p>

                <p>
                  Hệ thống ERP kết nối tất cả các phòng ban trong doanh nghiệp - từ kế toán, nhân sự, sản xuất, 
                  bán hàng đến quản lý kho - trên một nền tảng duy nhất, giúp dữ liệu được đồng bộ và minh bạch.
                </p>

                <h2>Các tính năng chính của phần mềm ERP</h2>
                
                <h3>1. Quản lý tài chính & kế toán</h3>
                <ul>
                  <li>Ghi nhận và theo dõi các giao dịch tài chính</li>
                  <li>Lập báo cáo tài chính tự động</li>
                  <li>Quản lý công nợ, thu chi</li>
                  <li>Tích hợp với ngân hàng</li>
                </ul>

                <h3>2. Quản lý nhân sự (HRM)</h3>
                <ul>
                  <li>Quản lý hồ sơ nhân viên</li>
                  <li>Chấm công, tính lương tự động</li>
                  <li>Quản lý nghỉ phép, tăng ca</li>
                  <li>Đánh giá hiệu suất làm việc</li>
                </ul>

                <h3>3. Quản lý bán hàng & CRM</h3>
                <ul>
                  <li>Quản lý đơn hàng, báo giá</li>
                  <li>Theo dõi khách hàng tiềm năng</li>
                  <li>Quản lý hợp đồng, chính sách giá</li>
                  <li>Báo cáo doanh số theo thời gian thực</li>
                </ul>

                <h3>4. Quản lý kho & chuỗi cung ứng</h3>
                <ul>
                  <li>Quản lý nhập xuất tồn kho</li>
                  <li>Theo dõi vị trí hàng hóa</li>
                  <li>Cảnh báo tồn kho tối thiểu</li>
                  <li>Quản lý nhà cung cấp</li>
                </ul>

                <h3>5. Quản lý sản xuất</h3>
                <ul>
                  <li>Lập kế hoạch sản xuất</li>
                  <li>Quản lý nguyên vật liệu</li>
                  <li>Theo dõi tiến độ sản xuất</li>
                  <li>Kiểm soát chất lượng</li>
                </ul>

                <h2>Lợi ích khi triển khai hệ thống ERP</h2>

                <h3>1. Tăng hiệu quả vận hành</h3>
                <p>
                  Tự động hóa các quy trình thủ công, giảm thời gian xử lý công việc lặp đi lặp lại, 
                  giúp nhân viên tập trung vào các công việc có giá trị cao hơn.
                </p>

                <h3>2. Dữ liệu tập trung và minh bạch</h3>
                <p>
                  Tất cả thông tin được lưu trữ tập trung, dễ dàng truy cập và chia sẻ giữa các phòng ban. 
                  Lãnh đạo có cái nhìn toàn diện về tình hình kinh doanh.
                </p>

                <h3>3. Giảm chi phí vận hành</h3>
                <p>
                  Tối ưu hóa quy trình, giảm lãng phí, kiểm soát tốt hơn chi phí nguyên vật liệu và nhân công.
                </p>

                <h3>4. Ra quyết định nhanh chóng</h3>
                <p>
                  Báo cáo theo thời gian thực giúp lãnh đạo nắm bắt tình hình kinh doanh và đưa ra quyết định kịp thời.
                </p>

                <h3>5. Mở rộng quy mô dễ dàng</h3>
                <p>
                  Hệ thống ERP linh hoạt, dễ dàng thêm module mới hoặc mở rộng sang chi nhánh khác.
                </p>

                <h2>Doanh nghiệp nào nên sử dụng ERP?</h2>
                <p>
                  Hệ thống ERP phù hợp với:
                </p>
                <ul>
                  <li><strong>Doanh nghiệp sản xuất:</strong> Quản lý sản xuất, nguyên vật liệu, kho</li>
                  <li><strong>Doanh nghiệp thương mại:</strong> Quản lý bán hàng, kho, phân phối</li>
                  <li><strong>Doanh nghiệp dịch vụ:</strong> Quản lý dự án, nhân sự, tài chính</li>
                  <li><strong>Chuỗi cửa hàng:</strong> Quản lý đa chi nhánh, tồn kho, doanh thu</li>
                </ul>

                <h2>Cách chọn phần mềm ERP phù hợp</h2>
                
                <h3>1. Xác định nhu cầu</h3>
                <p>
                  Liệt kê các vấn đề hiện tại và mục tiêu muốn đạt được khi triển khai ERP.
                </p>

                <h3>2. Ngân sách</h3>
                <p>
                  Cân nhắc giữa chi phí mua bản quyền, triển khai, đào tạo và bảo trì hàng năm.
                </p>

                <h3>3. Tính năng</h3>
                <p>
                  Chọn phần mềm có đầy đủ tính năng cần thiết cho ngành nghề của bạn.
                </p>

                <h3>4. Khả năng tùy chỉnh</h3>
                <p>
                  Phần mềm có thể tùy chỉnh theo quy trình riêng của doanh nghiệp không?
                </p>

                <h3>5. Hỗ trợ và đào tạo</h3>
                <p>
                  Nhà cung cấp có đội ngũ hỗ trợ tốt và chương trình đào tạo đầy đủ không?
                </p>

                <h2>Kết luận</h2>
                <p>
                  Hệ thống ERP là công cụ quan trọng giúp doanh nghiệp quản lý hiệu quả, tăng năng suất và 
                  cạnh tranh tốt hơn trên thị trường. Việc lựa chọn và triển khai ERP phù hợp sẽ mang lại 
                  lợi ích lâu dài cho sự phát triển của doanh nghiệp.
                </p>

                <div className="mt-12 p-6 bg-secondary rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Cần tư vấn giải pháp ERP?</h3>
                  <p className="mb-4">
                    Mekongix cung cấp giải pháp ERP toàn diện, tùy chỉnh theo nhu cầu doanh nghiệp. 
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
