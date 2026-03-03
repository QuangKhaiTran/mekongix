# Tài liệu Thiết kế - Tối ưu SEO cho Website Mekongix

## Tổng quan

Tài liệu này mô tả thiết kế chi tiết cho việc triển khai tối ưu SEO cho website Mekongix. Thiết kế tập trung vào việc sử dụng các tính năng built-in của Next.js 14 App Router để quản lý metadata, structured data, và performance optimization.

## Kiến trúc hệ thống

### 1. Metadata Management

#### 1.1 Page-level Metadata
Mỗi trang sẽ export một `metadata` object hoặc `generateMetadata` function để định nghĩa metadata riêng.

**File structure:**
```
app/
├── layout.tsx          # Root metadata (fallback)
├── page.tsx           # Home metadata
├── services/
│   └── page.tsx       # Services metadata
├── products/
│   └── page.tsx       # Products metadata
├── blog/
│   └── page.tsx       # Blog listing metadata
│   └── [slug]/
│       └── page.tsx   # Blog post metadata
├── contact/
│   └── page.tsx       # Contact metadata
└── about/
    └── page.tsx       # About metadata
```

#### 1.2 Metadata Configuration

**app/layout.tsx** - Root metadata (cập nhật sang tiếng Việt):
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://mekongix.com'),
  title: {
    default: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    template: '%s | Mekongix'
  },
  description: 'Mekongix cung cấp dịch vụ phát triển phần mềm, hệ thống quản lý doanh nghiệp ERP, ứng dụng web và di động cho doanh nghiệp Việt Nam.',
  keywords: ['phát triển phần mềm', 'giải pháp ERP', 'phát triển web app', 'phát triển ứng dụng di động', 'hệ thống quản lý doanh nghiệp'],
  authors: [{ name: 'Mekongix' }],
  creator: 'Mekongix',
  publisher: 'Mekongix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://mekongix.com',
    siteName: 'Mekongix',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mekongix - Giải pháp phần mềm doanh nghiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mekongix',
    creator: '@mekongix',
  },
}
```

**app/page.tsx** - Home page metadata:
```typescript
export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Mekongix - Đối tác công nghệ đáng tin cậy, cung cấp giải pháp phần mềm, hệ thống ERP và ứng dụng web/mobile giúp doanh nghiệp chuyển đổi số thành công.',
  alternates: {
    canonical: 'https://mekongix.com',
  },
  openGraph: {
    title: 'Mekongix | Giải pháp phần mềm doanh nghiệp',
    description: 'Đối tác công nghệ đáng tin cậy cho doanh nghiệp Việt Nam',
    url: 'https://mekongix.com',
    images: ['/og-home.jpg'],
  },
}
```

**app/services/page.tsx** - Services page metadata:
```typescript
export const metadata: Metadata = {
  title: 'Dịch vụ phát triển phần mềm',
  description: 'Dịch vụ phát triển web, ứng dụng di động, hệ thống ERP, CMS và nền tảng SaaS. Giải pháp công nghệ toàn diện cho doanh nghiệp.',
  alternates: {
    canonical: 'https://mekongix.com/services',
  },
  openGraph: {
    title: 'Dịch vụ phát triển phần mềm | Mekongix',
    description: 'Giải pháp công nghệ toàn diện cho doanh nghiệp',
    url: 'https://mekongix.com/services',
    images: ['/og-services.jpg'],
  },
}
```

### 2. Structured Data (JSON-LD)

#### 2.1 Schema Components
Tạo reusable components cho structured data.

**lib/seo/schemas.ts**:
```typescript
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mekongix',
    url: 'https://mekongix.com',
    logo: 'https://mekongix.com/logo.png',
    description: 'Công ty phát triển phần mềm và giải pháp công nghệ doanh nghiệp',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hồ Chí Minh',
    },
    sameAs: [
      'https://www.facebook.com/mekongix',
      'https://www.linkedin.com/company/mekongix',
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mekongix',
    url: 'https://mekongix.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mekongix.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Phát triển Web & App',
        description: 'Xây dựng website và ứng dụng di động hiện đại',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
      {
        '@type': 'Service',
        name: 'Giải pháp ERP & CMS',
        description: 'Hệ thống quản lý doanh nghiệp toàn diện',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
      {
        '@type': 'Service',
        name: 'Nền tảng SaaS',
        description: 'Phát triển và triển khai sản phẩm SaaS',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
      {
        '@type': 'Service',
        name: 'Bảo trì & Vận hành',
        description: 'Hỗ trợ kỹ thuật và vận hành hệ thống 24/7',
        provider: {
          '@type': 'Organization',
          name: 'Mekongix',
        },
      },
    ],
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
```

#### 2.2 StructuredData Component

**components/seo/structured-data.tsx**:
```typescript
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

### 3. Sitemap Generation

**app/sitemap.ts**:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mekongix.com'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
```

### 4. Robots.txt

**app/robots.ts**:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://mekongix.com/sitemap.xml',
  }
}
```

### 5. Content Optimization

#### 5.1 Heading Structure
Đảm bảo mỗi trang có cấu trúc heading đúng:

**Home page (app/page.tsx)**:
- H1: "Chuyển đổi số cho doanh nghiệp của bạn" (đã có)
- H2: "Giải pháp công nghệ toàn diện" (services section)
- H2: "Quy trình làm việc" (workflow section)
- H2: "Dự án tiêu biểu" (case studies section)

**Services page (app/services/page.tsx)**:
- H1: "Giải pháp công nghệ toàn diện" (đã có)
- H2: "Phát triển Web & App", "Giải pháp ERP & CMS", etc. (service details)

#### 5.2 Keyword Optimization
Tối ưu nội dung với từ khóa tự nhiên:

**Từ khóa chính:**
- "phát triển phần mềm"
- "giải pháp ERP"
- "phát triển web app"
- "phát triển ứng dụng di động"

**LSI Keywords:**
- "hệ thống quản lý doanh nghiệp"
- "chuyển đổi số"
- "ứng dụng web"
- "ứng dụng mobile"
- "nền tảng SaaS"

### 6. Performance Optimization

#### 6.1 Image Optimization
Sử dụng Next.js Image component với lazy loading:

```typescript
import Image from 'next/image'

<Image
  src="/images/service.jpg"
  alt="Dịch vụ phát triển phần mềm Mekongix"
  width={1200}
  height={630}
  loading="lazy"
  quality={85}
/>
```

#### 6.2 Next.js Configuration

**next.config.mjs**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
```

### 7. Analytics Integration

#### 7.1 Google Analytics 4

**components/analytics/google-analytics.tsx**:
```typescript
'use client'

import Script from 'next/script'

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
```

#### 7.2 Google Search Console Verification

**app/layout.tsx** - Thêm verification meta tag:
```typescript
export const metadata: Metadata = {
  // ... existing metadata
  verification: {
    google: 'your-google-verification-code',
  },
}
```

## Implementation Plan

### Phase 1: Metadata & Structured Data
1. Cập nhật root layout metadata sang tiếng Việt
2. Thêm metadata cho từng trang (Home, Services, Products, Blog, Contact, About)
3. Tạo schema components (Organization, WebSite, Service, Breadcrumb)
4. Thêm structured data vào các trang

### Phase 2: Sitemap & Robots
1. Tạo sitemap.ts với tất cả pages
2. Tạo robots.ts
3. Test sitemap và robots.txt

### Phase 3: Content Optimization
1. Review và cập nhật heading structure
2. Tối ưu nội dung với từ khóa tự nhiên
3. Cập nhật alt text cho hình ảnh
4. Thêm internal links

### Phase 4: Performance & Analytics
1. Kiểm tra và tối ưu images với Next.js Image
2. Cấu hình next.config.mjs
3. Tích hợp Google Analytics 4
4. Thêm Google Search Console verification
5. Test Core Web Vitals

## Testing & Validation

### SEO Testing Tools:
1. Google Rich Results Test - Validate structured data
2. Google PageSpeed Insights - Check Core Web Vitals
3. Google Search Console - Monitor indexing and performance
4. Lighthouse - Overall SEO audit

### Validation Checklist:
- [ ] Metadata hiển thị đúng trên mỗi trang
- [ ] Open Graph preview đúng khi share trên social media
- [ ] Structured data valid theo Schema.org
- [ ] Sitemap accessible tại /sitemap.xml
- [ ] Robots.txt accessible tại /robots.txt
- [ ] Core Web Vitals đạt chuẩn (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Images có alt text phù hợp
- [ ] Heading structure đúng (H1 → H2 → H3)
- [ ] Google Analytics tracking hoạt động

## Maintenance

### Regular Tasks:
1. Cập nhật sitemap khi có page mới
2. Monitor Core Web Vitals qua Google Search Console
3. Review và cập nhật metadata khi có thay đổi nội dung
4. Kiểm tra structured data validity định kỳ
5. Analyze GA4 data để tối ưu content

