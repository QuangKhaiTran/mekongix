"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { FadeInLeft, FadeInRight, motion } from "@/components/motion"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-border bg-card p-8 lg:p-12 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
          
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <FadeInLeft>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Sẵn sàng bắt đầu dự án của bạn?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về giải pháp công nghệ 
                phù hợp nhất cho doanh nghiệp của bạn.
              </p>
            </FadeInLeft>
            
            <FadeInRight className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/contact">
                    Liên hệ tư vấn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary bg-transparent">
                  <a href="tel:+84123456789">
                    <Phone className="mr-2 h-4 w-4" />
                    Gọi ngay: +84 123 456 789
                  </a>
                </Button>
              </motion.div>
            </FadeInRight>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
