import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const actions = [
  {
    icon: SearchCheck,
    title: "Tìm hiểu hệ sinh thái",
    desc: "Hiểu AI, CME, on-chain, arbitrage và DPay trước khi ra quyết định.",
  },
  {
    icon: ShieldCheck,
    title: "Kiểm chứng thông tin",
    desc: "Đối chiếu công ty, công cụ, dữ liệu và cách nền tảng vận hành.",
  },
  {
    icon: MessageCircle,
    title: "Trao đổi với cộng đồng",
    desc: "Đặt câu hỏi, xem tài liệu và được hướng dẫn theo từng bước.",
  },
]

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-10 lg:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <CalendarCheck className="h-7 w-7" />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-balance font-serif text-3xl font-bold tracking-tight sm:text-5xl">
              Đừng vội tin DCodex.
              <br />
              Hãy bắt đầu bằng việc kiểm chứng.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
              Một quyết định tài chính tốt không bắt đầu từ cảm xúc.
              Nó bắt đầu từ việc hiểu công ty, công cụ, dữ liệu và rủi ro.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://t.me/dcodex_community"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="group w-full">
                  Tham gia cộng đồng DCodex
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#company" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border bg-transparent"
                >
                  Kiểm tra thông tin nền tảng
                </Button>
              </a>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Nội dung trên website nhằm mục đích cung cấp thông tin tham khảo.
              Người dùng nên tự tìm hiểu, đối chiếu dữ liệu và cân nhắc rủi ro trước khi ra quyết định.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {actions.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 font-serif text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}