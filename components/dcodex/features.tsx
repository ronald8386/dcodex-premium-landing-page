import {
  BrainCircuit,
  CreditCard,
  Database,
  Eye,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { Reveal } from "./reveal"

const ecosystemCards = [
  {
    icon: BrainCircuit,
    title: "AI",
    desc: "Hỗ trợ phân tích dữ liệu, lọc tín hiệu và cung cấp thêm góc nhìn cho quá trình đánh giá cơ hội.",
  },
  {
    icon: Wrench,
    title: "CME",
    desc: "Mảnh ghép trung tâm của DCodex. Nơi cần được hiểu rõ về cách vận hành: logic giao dịch và dữ liệu đánh giá.",
    highlight: true,
  },
  {
    icon: Database,
    title: "On-chain",
    desc: "Giúp nhiều hoạt động có thêm dấu vết dữ liệu để đối chiếu, thay vì chỉ dựa vào dashboard hoặc lời giới thiệu.",
  },
  {
    icon: Network,
    title: "Arbitrage",
    desc: "Tập trung vào cơ hội chênh lệch và logic thực thi, thay vì chỉ phụ thuộc vào việc dự đoán giá tăng hay giảm.",
  },
  {
    icon: CreditCard,
    title: "DPay",
    desc: "Mảnh ghép giúp kết nối tài sản số với nhu cầu sử dụng thực tế trong đời sống và thanh toán.",
  },
  {
    icon: Eye,
    title: "Tư duy đánh giá",
    desc: "Đừng tin DCodex chỉ vì website này. Hãy tự đặt câu hỏi, tự tìm hiểu và tự đánh giá trước khi ra quyết định.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      <div className="dc-grid-bg absolute inset-0 opacity-25" aria-hidden />
      <div
        className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Hệ sinh thái DCodex
          </span>

          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Không phải nhiều mảnh ghép.
            <br />
            Mà là cách các mảnh ghép cùng vận hành.
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            DCodex là hệ sinh thái kết hợp AI + CME + on-chain + arbitrage và DPay,
            trong đó CME đóng vai trò là lõi thực thi.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-border bg-card/80 p-6 backdrop-blur-xl sm:p-8">
            <div className="absolute inset-0 rounded-3xl bg-primary/5" aria-hidden />

            <div className="relative grid gap-5 md:grid-cols-3 md:grid-rows-3">
              <EcosystemNode
                className="md:col-start-2 md:row-start-1"
                icon={BrainCircuit}
                title="AI"
                desc="Phân tích"
              />

              <EcosystemNode
                className="md:col-start-1 md:row-start-2"
                icon={Database}
                title="On-chain"
                desc="Đối chiếu"
              />

              <EcosystemNode
                className="md:col-start-2 md:row-start-2"
                icon={Wrench}
                title="CME"
                desc="Lõi thực thi"
                highlight
              />

              <EcosystemNode
                className="md:col-start-3 md:row-start-2"
                icon={CreditCard}
                title="DPay"
                desc="Ứng dụng"
              />

              <EcosystemNode
                className="md:col-start-2 md:row-start-3"
                icon={Network}
                title="Arbitrage"
                desc="Cơ hội"
              />

              <div className="pointer-events-none absolute left-1/2 top-[22%] hidden h-[56%] w-px -translate-x-1/2 bg-primary/30 md:block" />
              <div className="pointer-events-none absolute left-[18%] top-1/2 hidden h-px w-[64%] -translate-y-1/2 bg-primary/30 md:block" />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemCards.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div
                className={[
                  "group h-full rounded-2xl border p-6 transition-all hover:-translate-y-1",
                  item.highlight
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-card",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-lg transition-colors",
                    item.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
                  ].join(" ")}
                >
                  <item.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-serif text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
            <ShieldCheck className="mx-auto h-9 w-9 text-primary" />
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Điểm đáng chú ý không phải là DCodex có nhiều công nghệ.
              Điểm đáng chú ý là các mảnh ghép này được đặt trong một hệ sinh thái
              hướng đến dữ liệu có thể đối chiếu, thay vì chỉ yêu cầu người dùng tin vào lời hứa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function EcosystemNode({
  icon: Icon,
  title,
  desc,
  highlight,
  className,
}: {
  icon: React.ElementType
  title: string
  desc: string
  highlight?: boolean
  className?: string
}) {
  return (
    <div
      className={[
        "relative z-10 rounded-2xl border p-5 text-center",
        highlight
          ? "border-primary/50 bg-primary/15 shadow-[0_0_50px_rgba(255,122,0,0.18)]"
          : "border-border bg-background/70",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex h-12 w-12 items-center justify-center rounded-xl",
          highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
        ].join(" ")}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}