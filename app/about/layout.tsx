import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi | Mekongix",
  description: "Tìm hiểu về tầm nhìn, sứ mệnh và giá trị cốt lõi của Mekongix - Đối tác công nghệ đáng tin cậy cho doanh nghiệp.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
