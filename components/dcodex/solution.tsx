import { ShieldCheck, Wallet, ScrollText, CheckCircle2 } from "lucide-react"
import { Reveal } from "./reveal"

const points = [
  "Tài sản của bạn được lưu ký tại đơn vị độc lập, tách bạch khỏi tài khoản vận hành của DCodex.",
  "Mọi giao dịch có thể kiểm chứng on-chain — bạn luôn biết tiền của mình đang ở đâu.",
  "Không có robot AI thần thánh. Chúng tôi chỉ cung cấp công cụ và dữ liệu để bạn tự quyết định.",
  "Báo cáo kiểm toán được công bố định kỳ bởi bên thứ ba độc lập.",
]

export function Solution() {
  return (
    <section id="solution" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Giải pháp
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              DCodex đặt sự minh bạch lên hàng đầu
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Chúng tôi không cố thuyết phục bạn bằng những lời hứa lợi nhuận. Thay vào đó,
              DCodex xây dựng một hệ thống mà ở đó bạn có thể tự mình kiểm chứng mọi thứ —
              từ nơi lưu giữ tài sản đến từng giao dịch được thực hiện.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point, i) => (
                <Reveal as="li" key={i} delay={i * 70} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl"
                aria-hidden
              />
              <div className="relative space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Wallet className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold">Lưu ký tách bạch</div>
                      <div className="text-xs text-muted-foreground">Ví lạnh &amp; đối tác lưu ký được cấp phép</div>
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-full rounded-full bg-accent" />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>Tài sản người dùng được bảo vệ</span>
                    <span className="text-accent">100%</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <ScrollText className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold">Sổ cái công khai</div>
                      <div className="text-xs text-muted-foreground">Kiểm chứng on-chain theo thời gian thực</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["Nạp", "Giao dịch", "Rút"].map((s) => (
                      <div key={s} className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
                        <div className="text-xs text-muted-foreground">{s}</div>
                        <div className="mt-1 text-sm font-semibold text-accent">Đã xác minh</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/5 p-5">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                  <p className="text-sm text-muted-foreground">
                    Không cam kết lợi nhuận cố định. Đầu tư crypto luôn có rủi ro — chúng tôi
                    minh bạch về điều đó.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
