"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Users, Briefcase, Package, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Trang chủ", href: "/", icon: Home },
  { name: "Về chúng tôi", href: "/gioi-thieu", icon: Users },
  { name: "Dịch vụ", href: "/dich-vu", icon: Briefcase },
  { name: "Giải pháp", href: "/giai-phap", icon: Package },
  { name: "Blog", href: "/bai-viet", icon: BookOpen },
  { name: "Liên hệ", href: "/lien-he", icon: Mail },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-foreground">
              Mekong<span className="text-accent">ix</span>
            </span>
          </Link>
        </div>
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
                    {navigation.map((item) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      return (
                        <div key={item.name} className="group">
                          <Link
                            href={item.href}
                            className={`relative flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 group-hover:translate-x-1 ${
                              isActive
                                ? "bg-accent/10 text-foreground border-l-4 border-accent"
                                : "text-foreground hover:bg-secondary"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon
                              className={`h-5 w-5 shrink-0 transition-all duration-200 ${
                                isActive
                                  ? "scale-110 text-accent"
                                  : "group-hover:scale-105"
                              }`}
                            />
                            <span className="relative z-10">{item.name}</span>
                            {isActive && (
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full transition-all duration-300" />
                            )}
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
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
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
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                      isActive ? "scale-110 text-accent" : ""
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
