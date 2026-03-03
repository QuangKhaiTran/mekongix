import { StructuredData } from '@/components/seo/structured-data'
import { getBreadcrumbSchema } from '@/lib/seo/schemas'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Hotel, 
  Calendar, 
  Users, 
  CreditCard, 
  ClipboardList,
  Sparkles,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function HotelSolutionPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Trang chủ', url: 'https://mekongix.com' },
    { name: 'Giải pháp', url: 'https://mekongix.com/solutions' },
    { name: 'Khách sạn & Resort', url: 'https://mekongix.com/solutions/hotel' },
  ])

  const features = [
    {
      icon: Calendar,
      title: 'Quản lý đặt phòng',
      description: 'Hệ thống đặt phòng online, quản lý booking từ nhiều kênh (OTA, website, điện thoại). Cập nhật tình trạng phòng realtime.',
    },
    {
      icon: Users,
      title: 'Check-in/Check-out nhanh',
      description: 'Quy trình check-in/out tự động, quét CCCD, in key card. Giảm thời gian chờ đợi cho khách.',
    },
    {
      icon: ClipboardList,
      title: 'Quản lý Housekeeping',
      description: 'Theo dõi tình trạng dọn phòng, phân công công việc cho nhân viên. Thông báo realtime khi phòng sẵn sàng.',
    },
    {
      icon: CreditCard,
      title: 'Quản lý thanh toán',
      description: 'Tích hợp nhiều phương thức thanh toán, quản lý minibar, dịch vụ phát sinh. Xuất hóa đơn tự động.',
    },
    {
      icon: Sparkles,
      title: 'Quản lý dịch vụ',
      description: 'Quản lý spa, nhà hàng, giặt ủi, tour du lịch. Tích hợp vào hóa đơn phòng.',
    },
    {
      icon: BarChart3,
      title: 'Báo cáo & Phân tích',
      description: 'Báo cáo doanh thu, tỷ lệ lấp đầy, RevPAR, ADR. Phân tích xu hướng đặt phòng và tối ưu giá.',
    },
  ]

  const benefits = [
    'Tăng tỷ lệ lấp đầy phòng 20-30%',
    'Giảm thời gian check-in/out 50%',
    'Tối ưu giá phòng theo mùa',
    'Nâng cao trải nghiệm khách hàng',
    'Quản lý tập trung nhiều chi nhánh',
    'Tích hợp OTA (Booking.com, Agoda, Traveloka)',
  ]

  const suitableFor = [
    'Khách sạn 3-5 sao',
    'Resort nghỉ dưỡng',
    'Homestay, villa',
    'Khách sạn boutique',
    'Chuỗi khách sạn',
  ]

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Hotel className="w-4 h-4 mr-2" />
            Giải pháp khách sạn
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Phần mềm quản lý khách sạn & Resort
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Giải pháp PMS (Property Management System) toàn diện giúp khách sạn, resort tối ưu vận hành, 
            tăng doanh thu và nâng cao trải nghiệm khách hàng.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Đăng ký dùng thử
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Tư vấn miễn phí</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tính năng nổi bật
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 bg-muted/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Lợi ích khi sử dụng
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suitable For Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Phù hợp cho
          </h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            {suitableFor.map((item, index) => (
              <Badge key={index} variant="outline" className="text-base py-2 px-4">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn sàng chuyển đổi số cho khách sạn của bạn?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Đăng ký ngay để nhận tư vấn miễn phí và dùng thử phần mềm trong 30 ngày
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Liên hệ ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
