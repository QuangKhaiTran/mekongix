"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, FadeInLeft, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { ArrowRight, Clock, User } from "lucide-react"


const featuredPost = {
  title: "Xu hướng chuyển đổi số doanh nghiệp năm 2026",
  excerpt: "Khám phá những xu hướng công nghệ đang định hình lại cách doanh nghiệp vận hành và phát triển trong kỷ nguyên số.",
  category: "Digital Transformation",
  author: "Nguyễn Văn A",
  date: "15 Tháng 1, 2026",
  readTime: "8 phút đọc",
  slug: "xu-huong-chuyen-doi-so-2026",
}

const posts = [
  {
    title: "Tại sao doanh nghiệp cần ERP trong năm 2026?",
    excerpt: "Phân tích chi tiết về lợi ích của hệ thống ERP và cách lựa chọn giải pháp phù hợp.",
    category: "Enterprise Solutions",
    author: "Trần Thị B",
    date: "10 Tháng 1, 2026",
    readTime: "6 phút đọc",
    slug: "tai-sao-doanh-nghiep-can-erp",
  },
  {
    title: "Microservices vs Monolithic: Nên chọn kiến trúc nào?",
    excerpt: "So sánh ưu nhược điểm của hai kiến trúc phần mềm phổ biến và gợi ý lựa chọn.",
    category: "Technology",
    author: "Lê Văn C",
    date: "5 Tháng 1, 2026",
    readTime: "10 phút đọc",
    slug: "microservices-vs-monolithic",
  },
  {
    title: "Bảo mật ứng dụng web: Best practices năm 2026",
    excerpt: "Hướng dẫn các biện pháp bảo mật quan trọng cho ứng dụng web doanh nghiệp.",
    category: "Security",
    author: "Phạm Văn D",
    date: "28 Tháng 12, 2025",
    readTime: "7 phút đọc",
    slug: "bao-mat-ung-dung-web-2026",
  },
  {
    title: "Tích hợp AI vào quy trình kinh doanh",
    excerpt: "Cách áp dụng trí tuệ nhân tạo để tự động hóa và tối ưu các quy trình doanh nghiệp.",
    category: "AI & Automation",
    author: "Nguyễn Văn A",
    date: "20 Tháng 12, 2025",
    readTime: "9 phút đọc",
    slug: "tich-hop-ai-quy-trinh-kinh-doanh",
  },
  {
    title: "Cloud-native development: Hướng dẫn cho người mới",
    excerpt: "Giới thiệu về phát triển ứng dụng cloud-native và các công cụ cần thiết.",
    category: "Cloud",
    author: "Trần Thị B",
    date: "15 Tháng 12, 2025",
    readTime: "12 phút đọc",
    slug: "cloud-native-development-guide",
  },
  {
    title: "UX Design cho ứng dụng doanh nghiệp",
    excerpt: "Nguyên tắc thiết kế trải nghiệm người dùng hiệu quả cho phần mềm B2B.",
    category: "Design",
    author: "Lê Văn C",
    date: "10 Tháng 12, 2025",
    readTime: "5 phút đọc",
    slug: "ux-design-ung-dung-doanh-nghiep",
  },
]

const categories = [
  "Tất cả",
  "Digital Transformation",
  "Enterprise Solutions",
  "Technology",
  "Security",
  "AI & Automation",
  "Cloud",
  "Design",
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Blog & Insights
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Tin tức & Kiến thức công nghệ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Cập nhật những xu hướng mới nhất về công nghệ, chuyển đổi số và các bài viết 
                chuyên sâu từ đội ngũ chuyên gia của Mekongix.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category, index) => (
                <StaggerItem key={category}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      index === 0
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </motion.button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image placeholder */}
                    <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary to-secondary" />
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <h2 className="mt-4 text-2xl font-bold text-foreground group-hover:text-accent transition-colors lg:text-3xl text-balance">
                        {featuredPost.title}
                      </h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <div className="mt-6 flex items-center text-sm font-medium text-accent">
                        Đọc tiếp
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeInUp>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 h-full"
                    >
                      {/* Image placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-secondary to-primary/20" />
                      
                      {/* Content */}
                      <div className="p-6">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">
                          {post.category}
                        </span>
                        <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Load more */}
            <FadeInUp delay={0.3} className="mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
              >
                Xem thêm bài viết
              </motion.button>
            </FadeInUp>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-border bg-card p-8 lg:p-12 text-center"
              >
                <h2 className="text-2xl font-bold text-foreground lg:text-3xl text-balance">
                  Đăng ký nhận bản tin
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                  Nhận những bài viết mới nhất về công nghệ và chuyển đổi số trực tiếp vào email của bạn.
                </p>
                <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Địa chỉ email của bạn"
                    className="flex-1 rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Đăng ký
                  </motion.button>
                </form>
              </motion.div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
