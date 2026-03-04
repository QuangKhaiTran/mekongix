"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/gioi-thieu" },
  { name: "Dịch vụ", href: "/dich-vu" },
  { name: "Giải pháp", href: "/giai-phap" },
  { name: "Blog", href: "/bai-viet" },
  { name: "Liên hệ", href: "/lien-he" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 lg:px-8">
        <div className="flex lg:flex-1 flex-1 justify-center lg:justify-start">
          <Link href="/" className="p-0">
            <Image
              src="/logo.png"
              alt="Mekongix"
              width={357}
              height={344}
              className="h-12 w-auto md:h-13 lg:h-14 object-contain transition-transform hover:scale-105"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden absolute right-6" suppressHydrationWarning>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                suppressHydrationWarning
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-sm p-0 flex flex-col h-full [&>button]:hidden"
            >
              <SheetHeader className="border-b border-border bg-background px-6 py-1 shrink-0">
                <SheetTitle className="flex items-center justify-center relative">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="Mekongix"
                      width={357}
                      height={344}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                  <button
                    type="button"
                    className="absolute right-0 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-secondary transition-colors"
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
                    {navigation.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <div key={item.name} className="group">
                          <Link
                            href={item.href}
                            className={`relative flex items-center justify-center rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 ${
                              isActive
                                ? "bg-accent/10 text-foreground"
                                : "text-foreground hover:bg-secondary"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="relative z-10">{item.name}</span>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-auto pt-6 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link href="/lien-he">Liên hệ ngay</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`relative flex items-center text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/lien-he">Liên hệ ngay</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
