"use client"

import { ArrowRight, Building2, Database, LineChart, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const checkpoints = [
  { icon: Building2, label: "Công ty" },
  { icon: Wrench, label: "Công cụ" },
  { icon: Database, label: "Dữ liệu" },
  { icon: LineChart, label: "Mô hình tạo giá trị" },
]

const questions = [
  "Lợi nhuận đến từ đâu?",
  "Công cụ tạo lợi nhuận là gì?",
  "Dữ liệu có thể kiểm chứng không?",
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
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 [animation:dc-pulse-ring_2s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Dành cho nhà đầu tư muốn hiểu trước khi quyết định
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Điều khiến nhiều nhà đầu tư mất tiền{" "}
              <span className="text-primary">không phải vì thiếu cơ hội.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mà vì đặt niềm tin vào những điều không thể kiểm chứng: AI không rõ cách hoạt động,
              bot không thấy giao dịch thật, dashboard đẹp nhưng không biết dữ liệu đến từ đâu.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#solution" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full">
                  Khám phá DCodex
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#pain" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border bg-transparent"
                >
                  Vì sao cần kiểm chứng?
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              {checkpoints.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5"
                >
                  <item.icon className="h-3.5 w-3.5 text-accent" />
                  {item.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="mt-16">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {questions.map((question) => (
              <div key={question} className="bg-card p-6 text-center sm:p-8">
                <ShieldCheck className="mx-auto h-7 w-7 text-primary" />
                <div className="mt-4 text-base font-semibold text-foreground">
                  {question}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Đây là câu hỏi nên được đặt ra trước khi nhìn vào bất kỳ con số lợi nhuận nào.
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}