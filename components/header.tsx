"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { motion } from "framer-motion"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/about" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Liên hệ", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-foreground">
              Mekong<span className="text-accent">ix</span>
            </span>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-sm p-0 flex flex-col h-full [&>button]:hidden"
            >
              <SheetHeader className="border-b border-border bg-background px-6 py-4 shrink-0">
                <SheetTitle className="flex items-center justify-between">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-2xl font-bold text-foreground">
                      Mekong<span className="text-accent">ix</span>
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto bg-background px-6 py-6">
                <nav className="flex flex-col h-full">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link href="/contact">Liên hệ ngay</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Liên hệ ngay</Link>
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  )
}
