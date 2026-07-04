"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, SearchCheck, ShieldCheck } from "lucide-react"
import { Reveal } from "./reveal"

const faqs = [
  {
    q: "DCodex có phải là một kèo đầu tư lợi nhuận cao không?",
    a: "Không nên. DCodex nên được nhìn như một hệ sinh thái tài chính ứng dụng AI, CME, on-chain, arbitrage và DPay. Người dùng cần hiểu mô hình, công cụ và dữ liệu trước khi quyết định.",
  },
  {
    q: "Điểm khác biệt chính của DCodex là gì?",
    a: "Điểm cần chú ý là CME — lõi thực thi trong hệ sinh thái DCodex. AI hỗ trợ phân tích, on-chain hỗ trợ đối chiếu dữ liệu, còn CME là phần cần hiểu rõ về cách vận hành.",
  },
  {
    q: "On-chain có làm nền tảng an toàn tuyệt đối không?",
    a: "Không. On-chain không loại bỏ rủi ro. Nhưng dữ liệu on-chain có thể giúp người dùng có thêm cơ sở để đối chiếu, thay vì chỉ dựa vào lời giới thiệu hoặc dashboard.",
  },
  {
    q: "Có nên chỉ nhìn vào lợi nhuận để quyết định không?",
    a: "Không nên. Lợi nhuận chỉ là một phần của bức tranh. Nhà đầu tư cần xem cả công ty, công cụ, dữ liệu, cơ chế vận hành và rủi ro.",
  },
  {
    q: "Thông tin pháp lý có phải là bảo chứng lợi nhuận không?",
    a: "Không. Pháp lý là một lớp đánh giá nền tảng, không phải cam kết lợi nhuận, bảo lãnh đầu tư hoặc bảo đảm an toàn tuyệt đối.",
  },
  {
    q: "Người mới nên bắt đầu từ đâu?",
    a: "Bắt đầu từ 4 câu hỏi: công ty là ai, công cụ tạo giá trị là gì, dữ liệu nào có thể đối chiếu và rủi ro nằm ở đâu.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="dc-grid-bg absolute inset-0 opacity-20" aria-hidden />

      <div
        className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>

          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Những câu hỏi nên đặt ra trước khi tìm hiểu DCodex.
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Câu hỏi đúng giúp nhà đầu tư tránh quyết định bằng cảm xúc.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <Reveal key={item.q} delay={(index % 3) * 70}>
                <div
                  className={[
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-card hover:border-primary/30",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <div
                      className={[
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/15 text-primary",
                      ].join(" ")}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </div>

                    <h3 className="flex-1 font-serif text-base font-semibold leading-snug sm:text-lg">
                      {item.q}
                    </h3>

                    <ChevronDown
                      className={[
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>

                  <div
                    className={[
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="ml-0 border-t border-border pt-4 sm:ml-[60px]">
                          <p className="leading-relaxed text-muted-foreground">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6">
              <SearchCheck className="h-7 w-7 text-primary" />

              <h3 className="mt-4 font-serif text-xl font-semibold">
                Nguyên tắc số 1
              </h3>

              <p className="mt-2 leading-relaxed text-muted-foreground">
                Điều gì không thể kiểm chứng thì không nên tin quá nhanh.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <ShieldCheck className="h-7 w-7 text-primary" />

              <h3 className="mt-4 font-serif text-xl font-semibold">
                Nguyên tắc số 2
              </h3>

              <p className="mt-2 leading-relaxed text-muted-foreground">
                Minh bạch không làm nhà đầu tư liều hơn. Minh bạch giúp nhà đầu tư tỉnh hơn.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}