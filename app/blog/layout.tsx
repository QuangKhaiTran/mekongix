import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog & Insights | Mekongix",
  description: "Cap nhat tin tuc cong nghe, xu huong chuyen doi so va cac bai viet chuyen sau tu doi ngu Mekongix.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
