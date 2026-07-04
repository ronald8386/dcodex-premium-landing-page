"use client"

import {
  ArrowRight,
  BrainCircuit,
  CreditCard,
  Database,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const checks = [
  "Không chỉ nhìn lợi nhuận",
  "Hiểu công cụ tạo giá trị",
  "Có dữ liệu để đối chiếu",
]

const ecosystemFlow = [
  {
    icon: BrainCircuit,
    label: "AI",
    desc: "Phân tích",
  },
  {
    icon: Wrench,
    label: "CME",
    desc: "Thực thi",
    highlight: true,
  },
  {
    icon: Database,
    label: "On-chain",
    desc: "Đối chiếu",
  },
  {
    icon: CreditCard,
    label: "DPay",
    desc: "Ứng dụng",
  },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="dc-grid-bg absolute inset-0 opacity-50" aria-hidden />

      <div
        className="absolute -top-44 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute right-[-120px] top-32 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 [animation:dc-pulse-ring_2s_ease-out_infinite]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                AI + CME + On-chain + DPay
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Đừng đầu tư vào điều{" "}
                <span className="text-primary">bạn không thể kiểm chứng.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Trong tài chính, lợi nhuận không nên là câu hỏi đầu tiên.
                Điều quan trọng hơn là công cụ nào tạo ra kết quả, dữ liệu nào có thể đối chiếu,
                và hệ sinh thái đó vận hành ra sao.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <a href="#features" className="w-full sm:w-auto">
                  <Button size="lg" className="group w-full">
                    Xem hệ sinh thái DCodex
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>

                <a href="#solution" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-border bg-transparent"
                  >
                    4 lớp cần kiểm chứng
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {checks.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <SearchCheck className="mb-2 h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="relative mx-auto w-full max-w-lg">
              <div
                className="absolute inset-8 rounded-full bg-primary/20 blur-[90px]"
                aria-hidden
              />

              <div className="relative rounded-3xl border border-border bg-card/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      DCodex Ecosystem
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold">
                      CME là lõi thực thi
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {ecosystemFlow.map((item, index) => (
                    <div key={item.label}>
                      <div
                        className={[
                          "flex items-center gap-4 rounded-2xl border p-4",
                          item.highlight
                            ? "border-primary/40 bg-primary/10"
                            : "border-border bg-secondary/35",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                            item.highlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-primary/10 text-primary",
                          ].join(" ")}
                        >
                          <item.icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="font-serif text-lg font-semibold">
                              {item.label}
                            </h4>
                            <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                              {item.desc}
                            </span>
                          </div>
                          {item.highlight ? (
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              Công cụ trung tâm cần được tìm hiểu, đánh giá và kiểm chứng.
                            </p>
                          ) : null}
                        </div>
                      </div>

                      {index < ecosystemFlow.length - 1 ? (
                        <div className="mx-auto h-5 w-px bg-border" />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                    <Network className="h-5 w-5 text-primary" />
                    <p className="mt-2 text-sm font-medium">Arbitrage</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Cơ hội chênh lệch
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <p className="mt-2 text-sm font-medium">Kiểm chứng</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Dữ liệu & cơ sở
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}