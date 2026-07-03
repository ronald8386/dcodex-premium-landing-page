import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

export function Cta() {
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="dc-grid-bg absolute inset-0 opacity-30" aria-hidden />
            <div
              className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Bắt đầu với sự an tâm
              </span>
              <h2 className="mt-6 text-balance font-serif text-3xl font-bold tracking-tight sm:text-5xl">
                Đầu tư lại từ đầu — lần này với sự minh bạch
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Mở tài khoản DCodex miễn phí. Không cam kết lợi nhuận ảo, không robot thần kỳ —
                chỉ có một nền tảng bạn có thể tự mình kiểm chứng.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto"
                  nativeButton={false}
                  render={<a href="#top" />}
                >
                  Mở tài khoản miễn phí
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border bg-transparent sm:w-auto"
                  nativeButton={false}
                  render={<a href="#faq" />}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Đầu tư crypto có rủi ro mất vốn. Hãy cân nhắc kỹ và chỉ đầu tư số tiền bạn có thể chấp nhận rủi ro.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
