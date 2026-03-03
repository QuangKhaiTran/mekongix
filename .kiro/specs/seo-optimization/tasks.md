# Tasks - Tối ưu SEO cho Website Mekongix

## 1. Metadata & Structured Data

- [x] 1.1 Cập nhật root layout metadata
  - [x] 1.1.1 Chuyển metadata trong app/layout.tsx sang tiếng Việt
  - [x] 1.1.2 Thêm metadataBase URL
  - [x] 1.1.3 Cấu hình title template
  - [x] 1.1.4 Thêm Open Graph và Twitter Card tags
  - [x] 1.1.5 Cấu hình robots meta tags

- [x] 1.2 Tạo schema components
  - [x] 1.2.1 Tạo file lib/seo/schemas.ts
  - [x] 1.2.2 Implement getOrganizationSchema()
  - [x] 1.2.3 Implement getWebSiteSchema()
  - [x] 1.2.4 Implement getServiceSchema()
  - [x] 1.2.5 Implement getBreadcrumbSchema()

- [x] 1.3 Tạo StructuredData component
  - [x] 1.3.1 Tạo file components/seo/structured-data.tsx
  - [x] 1.3.2 Implement StructuredData component

- [x] 1.4 Thêm metadata cho Home page
  - [x] 1.4.1 Export metadata object trong app/page.tsx
  - [x] 1.4.2 Thêm Organization schema
  - [x] 1.4.3 Thêm WebSite schema

- [x] 1.5 Thêm metadata cho Services page
  - [x] 1.5.1 Export metadata object trong app/services/page.tsx
  - [x] 1.5.2 Thêm Service schema
  - [x] 1.5.3 Thêm Breadcrumb schema

- [x] 1.6 Thêm metadata cho Products page
  - [x] 1.6.1 Export metadata object trong app/products/page.tsx
  - [x] 1.6.2 Thêm Breadcrumb schema

- [x] 1.7 Thêm metadata cho Blog page
  - [x] 1.7.1 Export metadata object trong app/blog/page.tsx
  - [x] 1.7.2 Thêm Breadcrumb schema

- [x] 1.8 Thêm metadata cho Contact page
  - [x] 1.8.1 Export metadata object trong app/contact/page.tsx
  - [x] 1.8.2 Thêm Breadcrumb schema

- [x] 1.9 Thêm metadata cho About page
  - [x] 1.9.1 Export metadata object trong app/about/page.tsx
  - [x] 1.9.2 Thêm Breadcrumb schema

## 2. Sitemap & Robots

- [x] 2.1 Tạo sitemap
  - [x] 2.1.1 Tạo file app/sitemap.ts
  - [x] 2.1.2 Thêm tất cả pages với priority và changeFrequency phù hợp

- [x] 2.2 Tạo robots.txt
  - [x] 2.2.1 Tạo file app/robots.ts
  - [x] 2.2.2 Cấu hình allow/disallow rules
  - [x] 2.2.3 Thêm sitemap URL

## 3. Content Optimization

- [ ] 3.1 Tối ưu Home page content
  - [ ] 3.1.1 Kiểm tra H1 tag (đã có: "Chuyển đổi số cho doanh nghiệp của bạn")
  - [ ] 3.1.2 Thêm/cập nhật H2 tags cho các sections
  - [ ] 3.1.3 Tối ưu paragraph đầu tiên với từ khóa chính
  - [ ] 3.1.4 Thêm internal links đến Services và Products

- [ ] 3.2 Tối ưu Services page content
  - [ ] 3.2.1 Kiểm tra H1 tag
  - [ ] 3.2.2 Đảm bảo H2 tags cho mỗi service
  - [ ] 3.2.3 Cập nhật mô tả services với từ khóa tự nhiên
  - [ ] 3.2.4 Thêm internal links đến Contact

- [ ] 3.3 Tối ưu Products page content
  - [ ] 3.3.1 Kiểm tra heading structure
  - [ ] 3.3.2 Thêm từ khóa vào nội dung
  - [ ] 3.3.3 Thêm internal links

- [ ] 3.4 Tối ưu image alt text
  - [ ] 3.4.1 Review tất cả images trong components/home/
  - [ ] 3.4.2 Thêm descriptive alt text với từ khóa phù hợp
  - [ ] 3.4.3 Đảm bảo decorative images có alt=""

## 4. Performance Optimization

- [x] 4.1 Cấu hình Next.js
  - [x] 4.1.1 Cập nhật next.config.mjs với image optimization
  - [x] 4.1.2 Enable compression
  - [x] 4.1.3 Disable poweredByHeader

- [ ] 4.2 Tối ưu images
  - [ ] 4.2.1 Kiểm tra tất cả images đang dùng Next.js Image component
  - [ ] 4.2.2 Thêm loading="lazy" cho images below the fold
  - [ ] 4.2.3 Tối ưu quality settings

- [ ] 4.3 Tạo OG images
  - [ ] 4.3.1 Tạo og-home.jpg (1200x630)
  - [ ] 4.3.2 Tạo og-services.jpg (1200x630)
  - [ ] 4.3.3 Tạo og-products.jpg (1200x630)
  - [ ] 4.3.4 Tạo og-image.jpg (default, 1200x630)

## 5. Analytics & Monitoring

- [x] 5.1 Tích hợp Google Analytics 4
  - [x] 5.1.1 Tạo components/analytics/google-analytics.tsx
  - [x] 5.1.2 Thêm GoogleAnalytics component vào root layout
  - [x] 5.1.3 Cấu hình GA4 tracking ID

- [ ] 5.2 Google Search Console
  - [ ] 5.2.1 Thêm verification meta tag vào root layout
  - [ ] 5.2.2 Submit sitemap to Google Search Console

## 6. Testing & Validation

- [ ] 6.1 SEO Testing
  - [ ] 6.1.1 Test metadata trên tất cả pages
  - [ ] 6.1.2 Validate structured data với Google Rich Results Test
  - [ ] 6.1.3 Test Open Graph preview trên Facebook Debugger
  - [ ] 6.1.4 Test Twitter Card preview

- [ ] 6.2 Performance Testing
  - [ ] 6.2.1 Run Lighthouse audit
  - [ ] 6.2.2 Check Core Web Vitals với PageSpeed Insights
  - [ ] 6.2.3 Verify LCP < 2.5s
  - [ ] 6.2.4 Verify FID < 100ms
  - [ ] 6.2.5 Verify CLS < 0.1

- [ ] 6.3 Accessibility Testing
  - [ ] 6.3.1 Verify heading hierarchy
  - [ ] 6.3.2 Check alt text coverage
  - [ ] 6.3.3 Test keyboard navigation

