import { TrendingDown, UserX, EyeOff, Bot } from "lucide-react"
import { Reveal } from "./reveal"

const pains = [
  {
    icon: Bot,
    title: '"AI sinh lời" giả mạo',
    desc: "Những hệ thống hứa hẹn robot AI sinh lời 5-10% mỗi ngày, nhưng thực chất chỉ là mô hình lấy tiền người sau trả người trước.",
  },
  {
    icon: UserX,
    title: "Sàn ôm tiền bỏ trốn",
    desc: "Nạp tiền thì dễ, rút tiền thì khó. Đến một ngày website biến mất, admin chặn liên lạc và tài sản của bạn cũng biến mất theo.",
  },
  {
    icon: EyeOff,
    title: "Không có minh bạch",
    desc: "Bạn không biết tiền của mình đang ở đâu, ai đang giữ, và con số lợi nhuận hiển thị có thật hay chỉ là dữ liệu được vẽ ra.",
  },
  {
    icon: TrendingDown,
    title: "Cam kết lợi nhuận phi lý",
    desc: "Bất kỳ nền tảng nào cam kết lợi nhuận cố định, không rủi ro trong thị trường crypto đều là dấu hiệu cảnh báo rõ ràng nhất.",
  },
]

export function Pain() {
  return (
    <section id="pain" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Vấn đề
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Vì sao nhà đầu tư mất niềm tin?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Hàng triệu người đã mất tiền vì những chiêu trò tinh vi. Nếu bạn từng gặp
            một trong những tình huống dưới đây, bạn không hề đơn độc.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-destructive/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <pain.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pain.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
