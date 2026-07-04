import { Building2, Cpu, Database, HelpCircle, SearchCheck, Wrench } from "lucide-react"
import { Reveal } from "./reveal"

const questions = [
  "Ai xây dựng và vận hành nền tảng này?",
  "Công cụ tạo ra kết quả là gì?",
  "Có dữ liệu để kiểm chứng không?",
  "Mô hình tạo giá trị có hợp lý không?",
]

const layers = [
  {
    icon: Building2,
    title: "Công ty",
    desc: "Một công ty minh bạch không chỉ có website. Nhà đầu tư nên nhìn vào pháp nhân, đội ngũ, lịch sử vận hành và trách nhiệm rõ ràng.",
  },
  {
    icon: Cpu,
    title: "Công nghệ",
    desc: "AI không phải giá trị tự thân. Giá trị nằm ở việc AI đang giải quyết vấn đề gì và hỗ trợ hệ thống vận hành như thế nào.",
  },
  {
    icon: Wrench,
    title: "Công cụ",
    desc: "Một nền tảng đáng để tìm hiểu nên có công cụ thật, logic thật và khả năng giải thích rõ ràng, không chỉ là lời giới thiệu.",
  },
  {
    icon: Database,
    title: "Dữ liệu",
    desc: "Minh bạch không loại bỏ rủi ro. Nhưng minh bạch giúp nhà đầu tư có thêm cơ sở để đối chiếu, đánh giá và ra quyết định tỉnh táo hơn.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Cách tiếp cận
            </span>

            <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Một nền tảng đáng để tìm hiểu không bắt đầu bằng lợi nhuận.
            </h2>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Lợi nhuận là kết quả. Điều nên được tìm hiểu trước là: ai xây dựng,
              công cụ hoạt động thế nào, dữ liệu có thể kiểm chứng không và giá trị
              được tạo ra bằng cách nào.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-serif font-semibold">
                    Trước khi đầu tư, hãy tự trả lời 4 câu hỏi
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Đừng bắt đầu bằng kỳ vọng. Hãy bắt đầu bằng khả năng kiểm chứng.
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {questions.map((question, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <SearchCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {layers.map((layer, i) => (
              <Reveal key={layer.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <layer.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{layer.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {layer.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={160} className="mt-12">
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              Đó cũng là triết lý mà DCodex theo đuổi: thay vì chỉ nói về kết quả,
              hệ sinh thái được xây dựng xoay quanh AI, CME, on-chain và DPay để
              người dùng có thêm dữ liệu, công cụ và cơ sở trước khi đưa ra quyết định đầu tư.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}