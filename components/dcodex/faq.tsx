import { HelpCircle, SearchCheck, ShieldCheck } from "lucide-react"
import { Reveal } from "./reveal"

const faqs = [
  {
    q: "DCodex có phải là một kèo đầu tư lợi nhuận cao không?",
    a: "Không nên nhìn DCodex theo cách đó. Website này định vị DCodex như một hệ sinh thái tài chính ứng dụng AI, CME, on-chain, arbitrage và DPay. Người dùng cần tìm hiểu mô hình, công cụ và dữ liệu trước khi ra quyết định.",
  },
  {
    q: "Điểm khác biệt chính của DCodex là gì?",
    a: "Điểm cần chú ý là CME — mảnh ghép lõi trong quá trình thực thi. AI có thể hỗ trợ phân tích, on-chain hỗ trợ đối chiếu dữ liệu, còn CME là phần cần được tìm hiểu kỹ về cách vận hành.",
  },
  {
    q: "On-chain có làm nền tảng an toàn tuyệt đối không?",
    a: "Không. Minh bạch không loại bỏ rủi ro. Nhưng on-chain có thể giúp người dùng có thêm dữ liệu để đối chiếu, thay vì chỉ dựa vào lời giới thiệu hoặc hình ảnh dashboard.",
  },
  {
    q: "Có nên chỉ nhìn vào lợi nhuận để quyết định không?",
    a: "Không nên. Một nhà đầu tư tỉnh táo cần nhìn cả công ty, pháp lý, đội ngũ, công cụ, dữ liệu, cơ chế vận hành và rủi ro.",
  },
  {
    q: "Thông tin pháp lý có phải là bảo chứng lợi nhuận không?",
    a: "Không. Pháp lý và hồ sơ doanh nghiệp là một phần để đánh giá nền tảng, nhưng không đồng nghĩa với cam kết lợi nhuận, bảo lãnh đầu tư hoặc an toàn tuyệt đối.",
  },
  {
    q: "Người mới nên bắt đầu từ đâu?",
    a: "Bắt đầu bằng 4 câu hỏi: công ty là ai, công cụ tạo giá trị là gì, dữ liệu nào có thể kiểm chứng, và rủi ro nằm ở đâu.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="dc-grid-bg absolute inset-0 opacity-20" aria-hidden />

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

        <div className="mt-12 grid gap-4">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={(index % 3) * 70}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <HelpCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-semibold">
                      {item.q}
                    </h3>

                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
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