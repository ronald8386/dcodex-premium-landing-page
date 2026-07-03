"use client"

import { ArrowRight, ShieldCheck, Lock, FileCheck2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const stats = [
  { value: "100%", label: "Tài sản lưu ký độc lập" },
  { value: "24/7", label: "Giám sát bảo mật" },
  { value: "0", label: "Cam kết lợi nhuận ảo" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="dc-grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 [animation:dc-pulse-ring_2s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Kiểm toán độc lập &amp; lưu ký minh bạch
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              Đầu tư crypto một cách{" "}
              <span className="text-primary">minh bạch</span> và an toàn
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              DCodex được xây dựng cho những nhà đầu tư từng mất niềm tin vì sàn lừa đảo và
              hệ thống &quot;AI sinh lời&quot; giả mạo. Không hứa hẹn viển vông — chỉ có dữ liệu
              thật, kiểm toán thật và quyền kiểm soát tài sản thuộc về bạn.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group w-full sm:w-auto"
                nativeButton={false}
                render={<a href="#cta" />}
              >
                Mở tài khoản miễn phí
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-border bg-transparent sm:w-auto"
                nativeButton={false}
                render={<a href="#transparency" />}
              >
                Xem báo cáo minh bạch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" /> Tài sản tách bạch
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-accent" /> Bảo mật cấp ngân hàng
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="h-4 w-4 text-accent" /> Báo cáo kiểm toán công khai
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-16">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card p-6 text-center sm:p-8">
                <div className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
