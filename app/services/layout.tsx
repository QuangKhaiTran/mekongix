import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dich vu | Mekongix",
  description: "Kham pha cac dich vu phat trien phan mem, giai phap doanh nghiep va ho tro ky thuat tu Mekongix.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
