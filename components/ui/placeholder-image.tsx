import { cn } from "@/lib/utils"
import Image from "next/image"

interface PlaceholderImageProps {
  className?: string
  variant?: "hero" | "product" | "team" | "project" | "blog" | "about"
  children?: React.ReactNode
}

const gradients = {
  hero: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
  product: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600",
  team: "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
  project: "bg-gradient-to-br from-green-400 via-teal-500 to-blue-500",
  blog: "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500",
  about: "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
}

const unsplashByVariant: Record<NonNullable<PlaceholderImageProps["variant"]>, string> = {
  hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  product: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  team: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  project: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  blog: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
}

export function PlaceholderImage({ 
  className, 
  variant = "hero",
  children 
}: PlaceholderImageProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        gradients[variant],
        className
      )}
    >
      <Image
        src={unsplashByVariant[variant]}
        alt={`${variant} image`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content */}
      {children && (
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      )}
    </div>
  )
}
