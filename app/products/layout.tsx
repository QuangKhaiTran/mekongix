import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "San pham & Giai phap | Mekongix",
  description: "Kham pha cac san pham phan mem va giai phap SaaS tu Mekongix - ERP, HRM, E-commerce va nhieu hon nua.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
