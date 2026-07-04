import { BrainCircuit, CreditCard, Database, Eye, Network, Wrench } from "lucide-react"
import { Reveal } from "./reveal"

const features = [
  {
    icon: BrainCircuit,
    title: "AI chỉ có ý nghĩa khi giải quyết vấn đề thật",
    desc: "Không phải cứ có AI là tốt. Điều quan trọng là AI đang hỗ trợ phân tích, lọc dữ liệu và phục vụ quá trình thực thi như thế nào.",
  },
  {
    icon: Wrench,
    title: "CME là công cụ cần được hiểu rõ",
    desc: "Theo định hướng của DCodex, CME là một mảnh ghép quan trọng trong hệ sinh thái. Nhà đầu tư nên tìm hiểu công cụ này được phát triển, vận hành và kiểm chứng ra sao.",
  },
  {
    icon: Database,
    title: "On-chain tạo thêm lớp dữ liệu để đối chiếu",
    desc: "Minh bạch không loại bỏ toàn bộ rủi ro. Nhưng dữ liệu on-chain giúp nhiều hoạt động có thêm dấu vết để nhà đầu tư kiểm tra và đánh giá.",
  },
  {
    icon: Network,
    title: "Arbitrage không phụ thuộc hoàn toàn vào việc đoán giá",
    desc: "Thay vì chỉ chờ tài sản tăng, arbitrage tập trung vào việc tìm kiếm chênh lệch và cơ hội thực thi trong thị trường.",
  },
  {
    icon: CreditCard,
    title: "DPay kết nối tài sản số với đời sống",
    desc: "Dòng tiền chỉ thật sự có ý nghĩa khi không chỉ nằm trên màn hình. DPay là mảnh ghép giúp mở rộng khả năng sử dụng tài sản số trong thực tế.",
  },
  {
    icon: Eye,
    title: "Đừng tin DCodex chỉ vì website này",
    desc: "Hãy tự đặt câu hỏi, tự tìm hiểu và tự kiểm chứng. Một nền tảng đáng để tìm hiểu nên giúp nhà đầu tư có thêm cơ sở để đánh giá, không chỉ yêu cầu niềm tin.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="dc-grid-bg absolute inset-0 opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Hệ sinh thái DCodex
          </span>

          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Một nền tảng không thể chỉ nói “hãy tin chúng tôi”.
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            DCodex nên được nhìn như một hệ sinh thái gồm nhiều mảnh ghép: AI, CME,
            on-chain, arbitrage và DPay. Giá trị không nằm ở từng từ khóa riêng lẻ,
            mà ở cách các mảnh ghép này hỗ trợ người dùng đánh giá cơ hội tài chính rõ ràng hơn.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-serif text-lg font-semibold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}