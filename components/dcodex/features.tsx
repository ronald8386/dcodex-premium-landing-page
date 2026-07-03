import { Fingerprint, LineChart, Bell, KeyRound, FileSearch, Headphones } from "lucide-react"
import { Reveal } from "./reveal"

const features = [
  {
    icon: KeyRound,
    title: "Bạn kiểm soát tài sản",
    desc: "Tùy chọn tự lưu ký hoặc dùng đối tác lưu ký được cấp phép. Khóa riêng tư luôn nằm trong tay bạn.",
  },
  {
    icon: FileSearch,
    title: "Bằng chứng dự trữ",
    desc: "Proof-of-Reserves được cập nhật định kỳ, cho phép bạn đối chiếu số dư nền tảng với tài sản thực tế.",
  },
  {
    icon: LineChart,
    title: "Dữ liệu thị trường thật",
    desc: "Giá và biểu đồ lấy trực tiếp từ các sàn thanh khoản lớn, không có con số được thao túng.",
  },
  {
    icon: Fingerprint,
    title: "Xác thực nhiều lớp",
    desc: "Đăng nhập sinh trắc học, 2FA và danh sách địa chỉ rút tiền tin cậy để bảo vệ tài khoản.",
  },
  {
    icon: Bell,
    title: "Cảnh báo rủi ro",
    desc: "Hệ thống chủ động cảnh báo các dấu hiệu bất thường và nhắc bạn về rủi ro trước mỗi quyết định.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ người thật",
    desc: "Đội ngũ hỗ trợ tiếng Việt 24/7, không chatbot vòng vo, không đại lý ẩn danh.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="dc-grid-bg absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Tính năng
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Công cụ được xây dựng dựa trên niềm tin
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Mọi tính năng đều hướng đến một mục tiêu: giúp bạn đầu tư an toàn hơn và
            luôn giữ quyền kiểm soát.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
