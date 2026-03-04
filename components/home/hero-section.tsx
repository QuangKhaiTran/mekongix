"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { ArrowRight, Code2, Database, Cloud } from "lucide-react"
import { motion } from "framer-motion"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Đối tác công nghệ đáng tin cậy
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            Phát triển phần mềm
            <br />
            <span className="text-accent">chuyển đổi số doanh nghiệp</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Công ty phát triển phần mềm hàng đầu Việt Nam. Chuyên cung cấp giải pháp ERP, CRM, 
            phát triển web app và ứng dụng di động. Đối tác tin cậy giúp doanh nghiệp chuyển đổi số thành công.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              <Link href="/lien-he">
                Tư vấn miễn phí
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary bg-transparent">
              <Link href="/dich-vu">
                Khám phá dịch vụ
              </Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <StaggerContainer className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card/50 p-4"
              >
                <Code2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Web & App Development</span>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card/50 p-4"
              >
                <Database className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">ERP & CMS Solutions</span>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card/50 p-4"
              >
                <Cloud className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">SaaS Platform</span>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
