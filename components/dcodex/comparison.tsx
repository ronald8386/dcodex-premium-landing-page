import { CheckCircle2, HelpCircle, SearchCheck, XCircle } from "lucide-react"
import { Reveal } from "./reveal"

const comparisons = [
  {
    criteria: "Câu hỏi đầu tiên",
    emotional: "Lợi nhuận bao nhiêu?",
    verified: "Lợi nhuận đến từ đâu?",
  },
  {
    criteria: "Công ty",
    emotional: "Nghe qua lời giới thiệu",
    verified: "Tìm hiểu pháp nhân, đội ngũ và trách nhiệm vận hành",
  },
  {
    criteria: "Công cụ",
    emotional: "Tin rằng hệ thống có AI hoặc bot",
    verified: "Hỏi rõ công cụ tạo kết quả là gì và có thể kiểm chứng ra sao",
  },
  {
    criteria: "Dữ liệu",
    emotional: "Xem dashboard, ảnh chụp hoặc báo cáo nội bộ",
    verified: "Tìm dữ liệu có thể đối chiếu độc lập khi có thể",
  },
  {
    criteria: "Rủi ro",
    emotional: "Chỉ nhìn kết quả tốt",
    verified: "Hỏi rủi ro nằm ở đâu và điều gì xảy ra khi thị trường bất lợi",
  },
]

export function Comparison() {
  return (
    <section id="comparison" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cách so sánh
          </span>

          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Đừng so sánh bằng lời hứa.
            <br />
            Hãy so sánh bằng khả năng kiểm chứng.
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Một nhà đầu tư tỉnh táo không chỉ hỏi “được bao nhiêu”, mà còn hỏi
            “điều đó được tạo ra như thế nào, bởi công cụ nào và có dữ liệu nào để đối chiếu không”.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid grid-cols-3 border-b border-border bg-secondary/40 px-4 py-4 text-sm font-semibold sm:px-6">
              <div>Tiêu chí</div>
              <div className="text-muted-foreground">Chỉ nhìn lợi nhuận</div>
              <div className="text-primary">Nhà đầu tư có kiểm chứng</div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={item.criteria}
                className="grid grid-cols-3 gap-3 border-b border-border px-4 py-5 text-sm last:border-b-0 sm:px-6"
              >
                <div className="font-medium text-foreground">{item.criteria}</div>

                <div className="flex gap-2 text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{item.emotional}</span>
                </div>

                <div className="flex gap-2 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item.verified}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-lg font-semibold">
                  DCodex không nên được nhìn như một lời hứa lợi nhuận
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Cách tiếp cận đúng là xem DCodex như một hệ sinh thái cần được tìm hiểu:
                AI hỗ trợ điều gì, CME vận hành như thế nào, dữ liệu on-chain giúp đối chiếu ra sao
                và DPay đóng vai trò gì trong trải nghiệm tài chính thực tế.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-3">
                <SearchCheck className="h-5 w-5 text-accent" />
                <h3 className="font-serif text-lg font-semibold">
                  Mục tiêu là giúp nhà đầu tư đặt đúng câu hỏi
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Khi biết cách đặt câu hỏi, bạn sẽ bớt phụ thuộc vào cảm xúc, cộng đồng
                hoặc lời giới thiệu. Đó là nền tảng của một quyết định đầu tư tỉnh táo hơn.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}