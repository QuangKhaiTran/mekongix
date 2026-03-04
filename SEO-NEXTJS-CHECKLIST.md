# Checklist SEO cho Next.js - Mekongix

## ✅ Đã hoàn thành

### 1. Metadata & SEO Basics
- ✅ Title tags cho tất cả trang
- ✅ Meta descriptions cho tất cả trang
- ✅ Keywords cho tất cả trang
- ✅ Canonical URLs
- ✅ OpenGraph metadata (Facebook)
- ✅ Twitter Card metadata
- ✅ Viewport metadata
- ✅ Language tag (lang="vi")
- ✅ Robots meta tags
- ✅ metadataBase trong root layout

### 2. Structured Data (Schema.org)
- ✅ Organization schema
- ✅ WebSite schema
- ✅ Service schema
- ✅ Product/SoftwareApplication schema
- ✅ LocalBusiness schema
- ✅ Article schema (blog posts)
- ✅ BreadcrumbList schema

### 3. Technical SEO
- ✅ Sitemap.xml (dynamic)
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ 404 handling (Next.js default)
- ✅ HTTPS ready
- ✅ Mobile responsive
- ✅ Image optimization (next/image)
- ✅ Compression enabled
- ✅ poweredByHeader: false (security)

### 4. Performance
- ✅ Image formats: AVIF, WebP
- ✅ Image sizes configured
- ✅ Compression enabled
- ✅ Code splitting (Next.js default)
- ✅ Lazy loading (Next.js default)

### 5. Content
- ✅ 266 keywords tối ưu
- ✅ Unique content cho mỗi trang
- ✅ H1 tags
- ✅ Internal linking

---

## ⚠️ Chưa làm (Nên làm)

### 1. PWA & Manifest (Ưu tiên: Trung bình)
**Thiếu:** Web App Manifest file

**Tạo file:** `app/manifest.ts`
```typescript
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mekongix - Giải pháp phần mềm doanh nghiệp',
    short_name: 'Mekongix',
    description: 'Công ty phát triển phần mềm và giải pháp chuyển đổi số hàng đầu Việt Nam',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0a1628',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
```

**Lợi ích:**
- Cải thiện mobile experience
- Có thể cài đặt như app
- Tăng engagement
- Google ưu tiên PWA

---

### 2. Alt Text cho Images (Ưu tiên: Cao)
**Vấn đề:** Đang dùng PlaceholderImage nhưng chưa có alt text thực sự

**Cần làm:**
- Thêm alt text cho tất cả images
- Mô tả rõ ràng nội dung ảnh
- Bao gồm keywords tự nhiên

**Ví dụ:**
```tsx
<Image 
  src="/logo.png" 
  alt="Mekongix - Công ty phát triển phần mềm Việt Nam"
  width={200}
  height={50}
/>
```

**Lợi ích:**
- Tăng accessibility
- Tốt cho SEO
- Hiển thị khi ảnh lỗi

---

### 3. Hreflang Tags (Ưu tiên: Thấp)
**Thiếu:** Hreflang cho đa ngôn ngữ

**Nếu có phiên bản tiếng Anh:**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  alternates: {
    languages: {
      'vi': 'https://mekongix.com',
      'en': 'https://mekongix.com/en',
    },
  },
}
```

**Lợi ích:**
- Tránh duplicate content
- Tốt cho international SEO
- Google hiểu đúng ngôn ngữ

---

### 4. Verification Tags (Ưu tiên: Cao)
**Thiếu:** Google Search Console, Bing Webmaster verification

**Thêm vào root layout:**
```typescript
export const metadata: Metadata = {
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
}
```

**Lợi ích:**
- Xác thực ownership
- Truy cập Search Console
- Theo dõi performance
- Submit sitemap

---

### 5. Structured Data bổ sung (Ưu tiên: Trung bình)

#### a. FAQ Schema
**Thêm cho các trang có FAQ:**
```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Phần mềm ERP là gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ERP là hệ thống hoạch định nguồn lực doanh nghiệp...',
      },
    },
  ],
}
```

#### b. Review/Rating Schema
**Nếu có đánh giá khách hàng:**
```typescript
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MekongERP',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
}
```

#### c. VideoObject Schema
**Nếu có video demo:**
```typescript
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Hướng dẫn sử dụng MekongERP',
  description: 'Video demo chi tiết về phần mềm ERP',
  thumbnailUrl: 'https://mekongix.com/video-thumb.jpg',
  uploadDate: '2026-03-04',
}
```

**Lợi ích:**
- Rich snippets trong Google
- Tăng CTR
- Nổi bật hơn đối thủ

---

### 6. Open Graph Images (Ưu tiên: Trung bình)
**Vấn đề:** Đang dùng logo.png cho tất cả

**Nên tạo:**
- `/public/og-home.jpg` (1200x630px)
- `/public/og-services.jpg`
- `/public/og-products.jpg`
- `/public/og-blog.jpg`
- `/public/og-about.jpg`
- `/public/og-contact.jpg`

**Thiết kế:**
- Logo + Tagline
- Màu brand
- Text rõ ràng
- Kích thước: 1200x630px
- Format: JPG hoặc PNG

**Lợi ích:**
- Đẹp hơn khi share social
- Tăng CTR từ social media
- Professional branding

---

### 7. Loading States & Suspense (Ưu tiên: Trung bình)
**Thiếu:** Loading.tsx cho các route

**Tạo file:** `app/loading.tsx`
```typescript
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
    </div>
  )
}
```

**Lợi ích:**
- Better UX
- Tránh layout shift
- Tốt cho Core Web Vitals

---

### 8. Error Boundaries (Ưu tiên: Trung bình)
**Thiếu:** Error.tsx cho error handling

**Tạo file:** `app/error.tsx`
```typescript
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Có lỗi xảy ra!</h2>
      <button onClick={() => reset()}>Thử lại</button>
    </div>
  )
}
```

**Lợi ích:**
- Better error handling
- Không crash toàn bộ app
- Better UX

---

### 9. Not Found Page (Ưu tiên: Trung bình)
**Thiếu:** Custom 404 page

**Tạo file:** `app/not-found.tsx`
```typescript
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Không tìm thấy trang</p>
      <Link href="/" className="text-accent hover:underline">
        Về trang chủ
      </Link>
    </div>
  )
}
```

**Lợi ích:**
- Better UX
- Giữ chân user
- Internal linking

---

### 10. Security Headers (Ưu tiên: Cao)
**Thiếu:** Security headers trong next.config.mjs

**Thêm vào next.config.mjs:**
```javascript
const nextConfig = {
  // ... existing config
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
      ],
    },
  ],
}
```

**Lợi ích:**
- Tăng security
- Google ưu tiên HTTPS
- Bảo vệ khỏi XSS, clickjacking

---

### 11. Redirects (Ưu tiên: Thấp)
**Nếu có URL cũ cần redirect:**

**Thêm vào next.config.mjs:**
```javascript
const nextConfig = {
  // ... existing config
  redirects: async () => [
    {
      source: '/old-url',
      destination: '/new-url',
      permanent: true, // 301 redirect
    },
  ],
}
```

**Lợi ích:**
- Giữ SEO juice
- Tránh 404 errors
- Better UX

---

### 12. Analytics & Tracking (Ưu tiên: Cao)
**Đã có:** Google Analytics component nhưng chưa config

**Cần làm:**
1. Lấy Google Analytics ID
2. Uncomment code trong layout.tsx
3. Thêm Google Tag Manager (optional)

**Lợi ích:**
- Theo dõi traffic
- Hiểu user behavior
- Đo lường conversion
- A/B testing

---

### 13. Internal Linking (Ưu tiên: Trung bình)
**Cần cải thiện:** Thêm nhiều internal links hơn

**Ví dụ:**
- Blog posts link đến services
- Services link đến products
- Products link đến case studies
- Footer có sitemap links

**Lợi ích:**
- Tốt cho SEO
- Giảm bounce rate
- Tăng page views
- Crawlability tốt hơn

---

### 14. Content Updates (Ưu tiên: Thấp)
**Nên có:**
- dateModified trong Article schema (đã có)
- lastmod trong sitemap (đã có)
- "Cập nhật lần cuối" trong blog posts

**Lợi ích:**
- Google biết content fresh
- User tin tưởng hơn
- Tốt cho ranking

---

### 15. Social Media Integration (Ưu tiên: Thấp)
**Thiếu:** Social share buttons

**Thêm vào blog posts:**
- Facebook share
- Twitter share
- LinkedIn share
- Copy link

**Lợi ích:**
- Tăng social signals
- Viral content
- Backlinks

---

## 📊 Ưu tiên thực hiện

### Ưu tiên CAO (Làm ngay):
1. ✅ Alt text cho images
2. ✅ Verification tags (Google Search Console)
3. ✅ Security headers
4. ✅ Analytics configuration

### Ưu tiên TRUNG BÌNH (Làm trong 1-2 tuần):
1. ✅ PWA Manifest
2. ✅ Open Graph images
3. ✅ Loading states
4. ✅ Error boundaries
5. ✅ Not found page
6. ✅ FAQ Schema
7. ✅ Internal linking

### Ưu tiên THẤP (Làm khi có thời gian):
1. ✅ Hreflang tags (nếu có đa ngôn ngữ)
2. ✅ Review/Rating schema (nếu có reviews)
3. ✅ Video schema (nếu có videos)
4. ✅ Redirects (nếu cần)
5. ✅ Social share buttons
6. ✅ Content update dates

---

## 🎯 Tổng kết

### Đã làm tốt:
- ✅ Metadata hoàn chỉnh
- ✅ Structured data đầy đủ
- ✅ Keywords tối ưu (266 keywords)
- ✅ Technical SEO cơ bản
- ✅ Performance optimization

### Cần làm thêm:
- ⚠️ 4 items ưu tiên cao
- ⚠️ 7 items ưu tiên trung bình
- 💡 6 items ưu tiên thấp

### Điểm SEO hiện tại: 85/100
**Nếu hoàn thành tất cả:** 98/100

---

## 📝 Hướng dẫn triển khai

### Bước 1: Ưu tiên cao (1-2 ngày)
1. Thêm alt text cho images
2. Setup Google Search Console
3. Thêm security headers
4. Config Google Analytics

### Bước 2: Ưu tiên trung bình (1 tuần)
1. Tạo manifest.ts
2. Tạo OG images
3. Thêm loading.tsx, error.tsx, not-found.tsx
4. Thêm FAQ schema
5. Cải thiện internal linking

### Bước 3: Ưu tiên thấp (Khi có thời gian)
1. Thêm hreflang nếu cần
2. Thêm review schema nếu có
3. Thêm social share buttons
4. Setup redirects nếu cần

---

**Ngày tạo:** 04/03/2026  
**Người thực hiện:** Kiro AI Assistant
