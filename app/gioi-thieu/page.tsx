"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, motion } from "@/components/motion"
import { StructuredData } from "@/components/seo/structured-data"
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/seo/schemas"


const values = [
  {
    icon: Heart,
    title: "Tận tâm",
    description: "Đặt lợi ích khách hàng lên hàng đầu, cam kết mang đến giải pháp tốt nhất.",
  },
  {
    icon: Award,
    title: "Chất lượng",
    description: "Luôn đảm bảo tiêu chuẩn cao nhất trong mọi sản phẩm và dịch vụ.",
  },
  {
    icon: Users,
    title: "Hợp tác",
    description: "Xây dựng mối quan hệ đối tác bền vững, cùng nhau phát triển.",
  },
  {
    icon: TrendingUp,
    title: "Đổi mới",
    description: "Không ngừng cập nhật công nghệ mới, sáng tạo giải pháp đột phá.",
  },
]

const team = [
  {
    name: "Nguyễn Văn A",
    role: "CEO & Founder",
    description: "15+ năm kinh nghiệm trong lĩnh vực công nghệ thông tin và quản lý doanh nghiệp.",
  },
  {
    name: "Trần Thị B",
    role: "CTO",
    description: "Chuyên gia kiến trúc hệ thống với nhiều dự án enterprise quy mô lớn.",
  },
  {
    name: "Lê Văn C",
    role: "Director of Engineering",
    description: "10+ năm phát triển phần mềm, chuyên môn về cloud và microservices.",
  },
]

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Về chúng tôi', url: 'https://mekongix.com/gioi-thieu' },
  ]

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={getOrganizationSchema()} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Về Mekongix
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Đối tác công nghệ chiến lược cho doanh nghiệp
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Mekongix được thành lập với sứ mệnh hỗ trợ doanh nghiệp Việt Nam trong hành trình 
                chuyển đổi số. Chúng tôi tin rằng công nghệ là chìa khóa để nâng cao năng lực cạnh 
                tranh và phát triển bền vững.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Vision */}
              <FadeInLeft>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-card p-8 lg:p-10 h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Tầm nhìn</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Trở thành công ty phát triển phần mềm hàng đầu tại Việt Nam và khu vực Đông Nam Á, 
                    được biết đến với các giải pháp công nghệ sáng tạo, đáng tin cậy và tạo ra giá trị 
                    thực sự cho doanh nghiệp.
                  </p>
                </motion.div>
              </FadeInLeft>

              {/* Mission */}
              <FadeInRight>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-border bg-card p-8 lg:p-10 h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Sứ mệnh</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Cung cấp giải pháp phần mềm và dịch vụ công nghệ chất lượng cao, giúp doanh nghiệp 
                    tối ưu hóa quy trình vận hành, nâng cao hiệu quả kinh doanh và sẵn sàng cho kỷ 
                    nguyên số.
                  </p>
                </motion.div>
              </FadeInRight>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Giá trị cốt lõi
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Những giá trị định hình nên Mekongix
              </h2>
            </FadeInUp>

            <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background">
                      <value.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Đội ngũ lãnh đạo
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Những người đứng sau Mekongix
              </h2>
            </FadeInUp>

            <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-border bg-card p-6 text-center h-full"
                  >
                    <PlaceholderImage 
                      variant="team" 
                      className="mx-auto h-32 w-32 rounded-full"
                    >
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(" ").pop()?.charAt(0)}
                      </span>
                    </PlaceholderImage>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Long-term Direction */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeInUp className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Định hướng phát triển
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Hướng tới tương lai
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Trong giai đoạn 2025-2030, Mekongix tập trung vào việc mở rộng thị trường khu vực, 
                phát triển các sản phẩm SaaS độc quyền và xây dựng hệ sinh thái công nghệ toàn diện 
                cho doanh nghiệp vừa và lớn.
              </p>
            </FadeInUp>
            <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-accent">2025</div>
                  <p className="mt-2 text-sm text-muted-foreground">Ra mắt 3 sản phẩm SaaS mới</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-accent">2027</div>
                  <p className="mt-2 text-sm text-muted-foreground">Mở rộng sang thị trường ASEAN</p>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-accent">2030</div>
                  <p className="mt-2 text-sm text-muted-foreground">Top 10 công ty IT Đông Nam Á</p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
