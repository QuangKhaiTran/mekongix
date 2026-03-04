"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion"

const footerLinks = {
  company: [
    { name: "Về chúng tôi", href: "/gioi-thieu" },
    { name: "Dịch vụ", href: "/dich-vu" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Blog", href: "/bai-viet" },
  ],
  services: [
    { name: "Phát triển Web & App", href: "/dich-vu#web-app" },
    { name: "Giải pháp doanh nghiệp", href: "/dich-vu#enterprise" },
    { name: "Bảo trì & Vận hành", href: "/dich-vu#maintenance" },
  ],
  legal: [
    { name: "Chính sách bảo mật", href: "/privacy" },
    { name: "Điều khoản sử dụng", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <FadeInUp className="lg:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Mekongix"
                width={357}
                height={344}
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Đối tác công nghệ đáng tin cậy cho hành trình chuyển đổi số của doanh nghiệp bạn.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </FadeInUp>

          {/* Links */}
          <StaggerContainer className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <StaggerItem>
              <h3 className="text-sm font-semibold text-foreground">Công ty</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-sm font-semibold text-foreground">Dịch vụ</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-sm font-semibold text-foreground">Pháp lý</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerContainer>

          {/* Contact */}
          <FadeInUp delay={0.2}>
            <h3 className="text-sm font-semibold text-foreground">Liên hệ</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Đường ABC, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+84123456789" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +84 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@mekongix.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contact@mekongix.com
                </a>
              </li>
            </ul>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.3} className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mekongix. All rights reserved.
          </p>
        </FadeInUp>
      </div>
    </footer>
  )
}
