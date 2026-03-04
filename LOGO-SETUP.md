# Hướng dẫn thiết lập Logo cho Mekongix

## Logo đã được thêm vào dự án

File logo gốc: `public/logo.png`

## Các bước tiếp theo để hoàn thiện

### 1. Tạo Favicon và Icons

Bạn cần tạo các phiên bản icon từ logo gốc với các kích thước sau:

#### Favicon cơ bản:
- `public/favicon.ico` - 32x32px (format ICO)
- `public/icon-light-32x32.png` - 32x32px (cho light mode)
- `public/icon-dark-32x32.png` - 32x32px (cho dark mode)
- `public/icon.svg` - Vector format (nếu có)

#### Apple Touch Icon:
- `public/apple-icon.png` - 180x180px

#### Open Graph Image:
- `public/og-image.jpg` - 1200x630px (để hiển thị khi share trên mạng xã hội)

### 2. Công cụ đề xuất để tạo icons

#### Online Tools (Miễn phí):
1. **Favicon.io** (https://favicon.io/)
   - Upload logo PNG
   - Tự động tạo tất cả kích thước cần thiết
   - Download và giải nén vào thư mục `public/`

2. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Upload logo
   - Tùy chỉnh cho từng platform
   - Download package hoàn chỉnh

#### Desktop Tools:
- **GIMP** (miễn phí) - Resize và export
- **Adobe Photoshop** - Professional editing
- **Figma** (miễn phí) - Design và export

### 3. Tạo OG Image

Tạo một hình ảnh 1200x630px với:
- Logo Mekongix
- Slogan: "Giải pháp phần mềm doanh nghiệp"
- Background gradient hoặc màu brand
- Lưu thành `public/og-image.jpg`

### 4. Cấu trúc thư mục đề xuất

```
public/
├── logo.png                    # Logo chính (đã có)
├── favicon.ico                 # Favicon 32x32
├── icon-light-32x32.png       # Icon cho light mode
├── icon-dark-32x32.png        # Icon cho dark mode
├── icon.svg                    # Vector icon (optional)
├── apple-icon.png             # Apple touch icon 180x180
├── og-image.jpg               # Open Graph image 1200x630
└── images/
    └── ... (các hình ảnh khác)
```

### 5. Kiểm tra sau khi thêm icons

1. Khởi động dev server:
   ```bash
   npm run dev
   ```

2. Kiểm tra:
   - Logo hiển thị đúng trên header
   - Favicon hiển thị trên browser tab
   - Logo hiển thị trên mobile menu
   - OG image khi share link

### 6. Tối ưu hóa hình ảnh

Sau khi tạo các file, nên tối ưu hóa để giảm dung lượng:

```bash
# Cài đặt sharp (nếu chưa có)
npm install sharp

# Hoặc sử dụng online tools:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
```

## Logo hiện tại

Logo đã được thêm vào:
- ✅ Header desktop (48x48px)
- ✅ Mobile menu (40x40px)
- ✅ Import Next.js Image component

## Cần làm thêm

- [ ] Tạo favicon.ico
- [ ] Tạo icon-light-32x32.png
- [ ] Tạo icon-dark-32x32.png
- [ ] Tạo apple-icon.png
- [ ] Tạo og-image.jpg
- [ ] Tối ưu hóa tất cả hình ảnh
- [ ] Test trên các thiết bị khác nhau

## Lưu ý

- Logo gốc có background trong suốt (Photoroom) nên phù hợp cho cả light và dark mode
- Kích thước logo có thể điều chỉnh trong `components/header.tsx`
- Metadata đã được cấu hình trong `app/layout.tsx`
