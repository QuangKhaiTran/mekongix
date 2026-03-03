# Tài liệu Yêu cầu - Tối ưu SEO cho Website Mekongix

## Giới thiệu

Tối ưu hóa công cụ tìm kiếm (SEO) cho website Mekongix nhằm cải thiện khả năng hiển thị trên Google khi khách hàng tìm kiếm các dịch vụ phát triển phần mềm, giải pháp ERP, và phát triển web/app. Hệ thống sẽ tập trung vào việc cung cấp metadata phù hợp, structured data, và tối ưu hiệu suất tải trang để nâng cao trải nghiệm người dùng và xếp hạng tìm kiếm.

## Thuật ngữ

- **SEO_System**: Hệ thống tối ưu hóa công cụ tìm kiếm cho website Mekongix
- **Metadata_Generator**: Thành phần tạo và quản lý meta tags cho các trang
- **Structured_Data_Provider**: Thành phần cung cấp dữ liệu có cấu trúc (JSON-LD)
- **Sitemap_Generator**: Thành phần tạo sitemap XML
- **Performance_Optimizer**: Thành phần tối ưu hiệu suất tải trang
- **Page**: Trang web cụ thể (Home, Services, Products, Blog, Contact, About)
- **Meta_Tags**: Các thẻ HTML metadata (title, description, keywords, Open Graph)
- **JSON-LD**: Định dạng dữ liệu có cấu trúc theo chuẩn Schema.org
- **Core_Web_Vitals**: Các chỉ số hiệu suất web của Google (LCP, FID, CLS)
- **Search_Engine**: Công cụ tìm kiếm (Google, Bing, etc.)
- **Social_Platform**: Nền tảng mạng xã hội (Facebook, LinkedIn, Twitter)

## Yêu cầu

### Yêu cầu 1: Metadata cho từng trang

**User Story:** Là khách hàng tiềm năng, tôi muốn thấy tiêu đề và mô tả rõ ràng khi tìm kiếm trên Google, để tôi biết trang web có cung cấp dịch vụ tôi cần hay không.

#### Tiêu chí chấp nhận

1. THE Metadata_Generator SHALL tạo unique title tag cho mỗi Page với độ dài 50-60 ký tự
2. THE Metadata_Generator SHALL tạo unique description tag cho mỗi Page với độ dài 150-160 ký tự
3. THE Metadata_Generator SHALL bao gồm từ khóa chính trong title và description một cách tự nhiên
4. WHEN một Page được truy cập, THE Metadata_Generator SHALL hiển thị metadata phù hợp với nội dung trang đó
5. THE Metadata_Generator SHALL sử dụng tiếng Việt cho tất cả metadata
6. THE Metadata_Generator SHALL bao gồm canonical URL cho mỗi Page

### Yêu cầu 2: Open Graph và Social Media Tags

**User Story:** Là người dùng mạng xã hội, tôi muốn thấy hình ảnh và mô tả đẹp mắt khi chia sẻ link website, để tôi có thể chia sẻ dễ dàng với đồng nghiệp.

#### Tiêu chí chấp nhận

1. THE Metadata_Generator SHALL tạo Open Graph tags (og:title, og:description, og:image, og:url) cho mỗi Page
2. THE Metadata_Generator SHALL tạo Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image) cho mỗi Page
3. THE Metadata_Generator SHALL sử dụng hình ảnh có kích thước tối thiểu 1200x630 pixels cho og:image
4. WHEN một Page được chia sẻ trên Social_Platform, THE Metadata_Generator SHALL hiển thị preview với đầy đủ thông tin
5. THE Metadata_Generator SHALL bao gồm og:type phù hợp cho từng loại Page (website, article, etc.)

### Yêu cầu 3: Structured Data (JSON-LD)

**User Story:** Là Search_Engine, tôi muốn hiểu rõ cấu trúc và nội dung của website, để tôi có thể hiển thị rich snippets trong kết quả tìm kiếm.

#### Tiêu chí chấp nhận

1. THE Structured_Data_Provider SHALL tạo Organization schema cho trang Home
2. THE Structured_Data_Provider SHALL tạo Service schema cho trang Services với danh sách 4 dịch vụ chính
3. THE Structured_Data_Provider SHALL tạo WebSite schema với search action cho trang Home
4. THE Structured_Data_Provider SHALL tạo BreadcrumbList schema cho các trang con
5. WHEN trang Blog có bài viết, THE Structured_Data_Provider SHALL tạo Article schema cho mỗi bài viết
6. THE Structured_Data_Provider SHALL tuân thủ chuẩn Schema.org version mới nhất
7. THE Structured_Data_Provider SHALL đảm bảo JSON-LD valid theo Google Rich Results Test

### Yêu cầu 4: Sitemap và Robots.txt

**User Story:** Là Search_Engine crawler, tôi muốn có sitemap rõ ràng và robots.txt hướng dẫn, để tôi có thể index website hiệu quả.

#### Tiêu chí chấp nhận

1. THE Sitemap_Generator SHALL tạo sitemap.xml bao gồm tất cả các Page công khai
2. THE Sitemap_Generator SHALL cập nhật lastmod timestamp cho mỗi URL trong sitemap
3. THE Sitemap_Generator SHALL đặt priority phù hợp cho từng loại Page (Home: 1.0, Services/Products: 0.8, Blog: 0.6, Others: 0.5)
4. THE SEO_System SHALL tạo robots.txt cho phép crawl tất cả các Page công khai
5. THE SEO_System SHALL bao gồm đường dẫn sitemap trong robots.txt
6. WHEN có Page mới được tạo, THE Sitemap_Generator SHALL tự động cập nhật sitemap.xml

### Yêu cầu 5: Cấu trúc Heading và Nội dung

**User Story:** Là khách hàng, tôi muốn nội dung trang web có cấu trúc rõ ràng với tiêu đề phân cấp hợp lý, để tôi dễ dàng tìm thông tin cần thiết.

#### Tiêu chí chấp nhận

1. THE SEO_System SHALL đảm bảo mỗi Page có duy nhất một H1 tag
2. THE SEO_System SHALL sử dụng heading tags theo thứ tự phân cấp (H1 → H2 → H3)
3. THE SEO_System SHALL bao gồm từ khóa chính trong H1 một cách tự nhiên
4. THE SEO_System SHALL sử dụng H2 cho các section chính và H3 cho subsection
5. THE SEO_System SHALL đảm bảo nội dung heading mô tả rõ ràng nội dung section

### Yêu cầu 6: Tối ưu Hiệu suất và Core Web Vitals

**User Story:** Là khách hàng truy cập website, tôi muốn trang web tải nhanh và mượt mà, để tôi không phải chờ đợi lâu.

#### Tiêu chí chấp nhận

1. THE Performance_Optimizer SHALL đảm bảo Largest Contentful Paint (LCP) dưới 2.5 giây
2. THE Performance_Optimizer SHALL đảm bảo First Input Delay (FID) dưới 100 milliseconds
3. THE Performance_Optimizer SHALL đảm bảo Cumulative Layout Shift (CLS) dưới 0.1
4. THE Performance_Optimizer SHALL tối ưu hình ảnh với format WebP hoặc AVIF
5. THE Performance_Optimizer SHALL implement lazy loading cho hình ảnh below the fold
6. THE Performance_Optimizer SHALL minify CSS và JavaScript trong production build
7. THE Performance_Optimizer SHALL sử dụng Next.js Image component cho tất cả hình ảnh
8. THE Performance_Optimizer SHALL enable compression (gzip hoặc brotli) cho static assets

### Yêu cầu 7: URL Structure và Internal Linking

**User Story:** Là Search_Engine, tôi muốn URL có cấu trúc rõ ràng và các trang liên kết với nhau hợp lý, để tôi hiểu được mối quan hệ giữa các trang.

#### Tiêu chí chấp nhận

1. THE SEO_System SHALL sử dụng URL structure có ý nghĩa và dễ đọc (e.g., /services, /products, /blog/[slug])
2. THE SEO_System SHALL sử dụng lowercase và dấu gạch ngang (-) cho URL
3. THE SEO_System SHALL tránh sử dụng query parameters không cần thiết trong URL
4. THE SEO_System SHALL tạo internal links giữa các Page liên quan
5. THE SEO_System SHALL đảm bảo tất cả internal links sử dụng relative paths
6. WHEN một Page có nội dung liên quan, THE SEO_System SHALL bao gồm contextual links đến Page đó

### Yêu cầu 8: Mobile Optimization

**User Story:** Là khách hàng sử dụng điện thoại, tôi muốn website hiển thị tốt và dễ sử dụng trên mobile, để tôi có thể xem thông tin mọi lúc mọi nơi.

#### Tiêu chí chấp nhận

1. THE SEO_System SHALL đảm bảo website responsive trên tất cả kích thước màn hình
2. THE SEO_System SHALL sử dụng viewport meta tag phù hợp
3. THE SEO_System SHALL đảm bảo font size tối thiểu 16px cho nội dung chính trên mobile
4. THE SEO_System SHALL đảm bảo touch targets có kích thước tối thiểu 48x48 pixels
5. THE SEO_System SHALL tránh sử dụng horizontal scrolling trên mobile
6. WHEN website được truy cập từ mobile device, THE Performance_Optimizer SHALL đảm bảo Core_Web_Vitals đạt chuẩn

### Yêu cầu 9: Từ khóa và Nội dung SEO-friendly

**User Story:** Là khách hàng tìm kiếm dịch vụ, tôi muốn tìm thấy website khi search các từ khóa liên quan đến dịch vụ, để tôi có thể liên hệ với công ty phù hợp.

#### Tiêu chí chấp nhận

1. THE SEO_System SHALL tối ưu cho các từ khóa chính: "phát triển phần mềm", "giải pháp ERP", "phát triển web app", "phát triển ứng dụng di động"
2. THE SEO_System SHALL sử dụng từ khóa một cách tự nhiên trong nội dung (keyword density 1-2%)
3. THE SEO_System SHALL bao gồm từ khóa trong các vị trí quan trọng (title, H1, first paragraph, alt text)
4. THE SEO_System SHALL sử dụng LSI keywords (từ khóa liên quan) để tăng tính tự nhiên
5. THE SEO_System SHALL tránh keyword stuffing
6. THE SEO_System SHALL tạo nội dung có giá trị, tập trung vào lợi ích khách hàng nhận được

### Yêu cầu 10: Image Optimization và Alt Text

**User Story:** Là Search_Engine, tôi muốn hiểu nội dung hình ảnh thông qua alt text, để tôi có thể index hình ảnh và cải thiện accessibility.

#### Tiêu chí chấp nhận

1. THE SEO_System SHALL cung cấp alt text mô tả rõ ràng cho tất cả hình ảnh có nội dung
2. THE SEO_System SHALL bao gồm từ khóa trong alt text một cách tự nhiên khi phù hợp
3. THE SEO_System SHALL sử dụng descriptive file names cho hình ảnh (e.g., phat-trien-web-app.jpg thay vì img001.jpg)
4. THE Performance_Optimizer SHALL tối ưu kích thước file hình ảnh mà không làm giảm chất lượng đáng kể
5. THE Performance_Optimizer SHALL sử dụng responsive images với srcset cho các kích thước màn hình khác nhau
6. THE SEO_System SHALL để trống alt text cho hình ảnh decorative

### Yêu cầu 11: Analytics và Monitoring

**User Story:** Là quản trị viên website, tôi muốn theo dõi hiệu quả SEO và hành vi người dùng, để tôi có thể cải thiện liên tục.

#### Tiêu chí chấp nhận

1. THE SEO_System SHALL tích hợp Google Analytics 4 tracking
2. THE SEO_System SHALL tích hợp Google Search Console verification
3. THE SEO_System SHALL track các sự kiện quan trọng (page views, button clicks, form submissions)
4. THE SEO_System SHALL không ảnh hưởng đến Core_Web_Vitals khi load analytics scripts
5. THE SEO_System SHALL tuân thủ GDPR và privacy regulations khi thu thập dữ liệu
6. WHEN có lỗi SEO được phát hiện, THE SEO_System SHALL log error để dễ dàng debug

### Yêu cầu 12: Local SEO (Optional)

**User Story:** Là khách hàng tại Việt Nam, tôi muốn tìm thấy công ty khi tìm kiếm dịch vụ trong khu vực, để tôi có thể làm việc với đối tác địa phương.

#### Tiêu chí chấp nhận

1. WHERE địa chỉ văn phòng có sẵn, THE Structured_Data_Provider SHALL tạo LocalBusiness schema
2. WHERE số điện thoại liên hệ có sẵn, THE Structured_Data_Provider SHALL bao gồm telephone trong schema
3. WHERE địa chỉ có sẵn, THE Structured_Data_Provider SHALL bao gồm address với đầy đủ thông tin (street, city, country, postalCode)
4. WHERE giờ làm việc có sẵn, THE Structured_Data_Provider SHALL bao gồm openingHours trong schema
5. THE SEO_System SHALL sử dụng hreflang tag nếu có phiên bản đa ngôn ngữ trong tương lai

## Ghi chú kỹ thuật

- Website sử dụng Next.js 14 với App Router
- Metadata API của Next.js 14 sẽ được sử dụng cho việc quản lý meta tags
- Structured data sẽ được implement bằng JSON-LD scripts
- Performance optimization sẽ tận dụng các tính năng built-in của Next.js (Image optimization, automatic code splitting)
- Sitemap sẽ được generate tự động sử dụng Next.js sitemap API
