"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

const faqs = [
  {
    q: "DCodex có cam kết lợi nhuận không?",
    a: "Không. Đầu tư crypto luôn đi kèm rủi ro và không ai có thể đảm bảo lợi nhuận. Bất kỳ nền tảng nào cam kết lợi nhuận cố định, không rủi ro đều là dấu hiệu lừa đảo. DCodex chỉ cung cấp công cụ, dữ liệu và sự minh bạch để bạn tự đưa ra quyết định.",
  },
  {
    q: "Làm sao tôi biết tài sản của mình an toàn?",
    a: "Tài sản người dùng được lưu ký tách bạch khỏi tài khoản vận hành của DCodex, thông qua ví lạnh và đối tác lưu ký được cấp phép. Chúng tôi công bố bằng chứng dự trữ (Proof-of-Reserves) định kỳ để bạn có thể tự đối chiếu.",
  },
  {
    q: "DCodex có dùng 'robot AI sinh lời' không?",
    a: "Tuyệt đối không. Chúng tôi không vận hành bất kỳ robot nào hứa hẹn sinh lời tự động. Đó là mô hình phổ biến của các dự án lừa đảo. DCodex tập trung vào công cụ phân tích và dữ liệu thị trường thật.",
  },
  {
    q: "Tôi có thể rút tiền bất cứ lúc nào không?",
    a: "Có. Bạn toàn quyền kiểm soát tài sản của mình và có thể rút bất cứ lúc nào, không có điều kiện ẩn hay yêu cầu 'nạp thêm để mở khóa rút tiền' như các sàn lừa đảo thường làm.",
  },
  {
    q: "DCodex có được kiểm toán không?",
    a: "Có. Báo cáo tài chính và bằng chứng dự trữ được rà soát bởi đơn vị kiểm toán bên thứ ba độc lập và công bố công khai trên trang minh bạch của chúng tôi.",
  },
  {
    q: "Tôi từng bị lừa trên sàn khác, làm sao tin được DCodex?",
    a: "Chúng tôi hiểu sự nghi ngờ đó là hoàn toàn hợp lý. Vì vậy, thay vì yêu cầu bạn tin, chúng tôi cung cấp mọi thứ để bạn kiểm chứng: giao dịch on-chain, bằng chứng dự trữ, kiểm toán độc lập và pháp nhân công khai. Hãy xác minh trước khi tin tưởng.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={open}
      >
        <span className="font-serif font-semibold">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180 text-primary",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Câu hỏi thường gặp
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Những điều bạn nên hỏi trước khi tin tưởng
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <FaqItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
