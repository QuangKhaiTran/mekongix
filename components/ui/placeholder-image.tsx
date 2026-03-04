import { cn } from "@/lib/utils"

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
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent animate-pulse" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
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
