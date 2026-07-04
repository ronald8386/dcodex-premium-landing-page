import type { ElementType } from "react"
import Image from "next/image"
import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  FileCheck2,
  Globe2,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react"
import { Reveal } from "./reveal"

const companyHighlights = [
  {
    icon: Building2,
    label: "Company",
    title: "DCodex Ltd",
    desc: "Pháp nhân được giới thiệu trong hồ sơ công ty, định hướng phát triển hệ sinh thái tài chính ứng dụng AI và on-chain.",
  },
  {
    icon: Landmark,
    label: "Jurisdiction",
    title: "California, USA",
    desc: "Hồ sơ giới thiệu thể hiện DCodex Ltd được đăng ký tại bang California, Hoa Kỳ.",
  },
  {
    icon: ShieldCheck,
    label: "Registered Capital",
    title: "10,000,000 USD",
    desc: "Vốn đăng ký được trình bày trong tài liệu công ty. Thông tin này nên được đối chiếu khi đánh giá.",
  },
  {
    icon: FileCheck2,
    label: "Compliance",
    title: "FinCEN MSB",
    desc: "Tài liệu giới thiệu thể hiện thông tin đăng ký MSB với FinCEN Hoa Kỳ.",
  },
]

const leaders = [
  {
    role: "CEO DCodex",
    name: "Robert Reichenbach Richard",
    image: "/leaders/robert-reichenbach-richard.jpg",
    desc: "Được giới thiệu với nền tảng trong tài chính định lượng, quản lý rủi ro, chiến lược phái sinh và thị trường tài chính quốc tế.",
    points: [
      "Tài chính định lượng",
      "Quản lý rủi ro",
      "Chiến lược đa thị trường",
    ],
  },
  {
    role: "COO DCodex",
    name: "Dr. Udesh Chaskar",
    image: "/leaders/dr-udesh-chaskar.jpg",
    desc: "Được giới thiệu với kinh nghiệm trong quản trị tổ chức, vận hành, hợp tác xuyên biên giới và điều phối chiến lược.",
    points: [
      "Vận hành tổ chức",
      "Quản trị & cố vấn",
      "Hợp tác xuyên biên giới",
    ],
  },
]

const legalItems = [
  {
    icon: Building2,
    title: "Pháp nhân doanh nghiệp",
    desc: "DCodex Ltd được trình bày là công ty đăng ký tại California, Hoa Kỳ, với cơ cấu doanh nghiệp được giới thiệu trong hồ sơ.",
  },
  {
    icon: FileCheck2,
    title: "MSB Registration",
    desc: "Hồ sơ thể hiện MSB Registration Number: 31000310586622, ngày đăng ký 09/18/2025.",
  },
  {
    icon: ShieldCheck,
    title: "Lưu ý kiểm chứng",
    desc: "Đăng ký MSB không đồng nghĩa với bảo chứng lợi nhuận, bảo lãnh đầu tư hoặc cam kết an toàn tuyệt đối.",
  },
]

const timeline = [
  {
    time: "09/2025",
    title: "Hồ sơ pháp nhân",
    desc: "Tài liệu công ty thể hiện cấu trúc pháp nhân DCodex Ltd tại California, Hoa Kỳ.",
  },
  {
    time: "09/2025",
    title: "Thông tin MSB",
    desc: "Hồ sơ giới thiệu thể hiện thông tin đăng ký MSB với FinCEN Hoa Kỳ.",
  },
  {
    time: "2026",
    title: "Tài liệu thị trường Việt Nam",
    desc: "Bộ tài liệu tiếng Việt được xây dựng để giới thiệu hệ sinh thái, công nghệ và thông tin nền tảng.",
  },
  {
    time: "Next",
    title: "Mở rộng hệ sinh thái",
    desc: "Tập trung vào AI, CME, on-chain, arbitrage và DPay như các mảnh ghép vận hành cùng nhau.",
  },
]

export function Company() {
  return (
    <section id="company" className="relative overflow-hidden py-20 sm:py-28">
      <div className="dc-grid-bg absolute inset-0 opacity-20" aria-hidden />

      <div
        className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[110px]"
        aria-hidden
      />

      <div
        className="absolute right-[-160px] bottom-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Company - Leadership - Legal
          </span>

          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Một nền tảng tài chính cần được nhìn cả ở phía sau công nghệ.
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Với DCodex, nhà đầu tư không chỉ nên nhìn vào sản phẩm hay lợi nhuận.
            Điều quan trọng hơn là pháp nhân, đội ngũ, hồ sơ hoạt động và khả năng kiểm chứng thông tin.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companyHighlights.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 70}>
              <InfoCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 rounded-3xl border border-border bg-card/80 p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <UsersRound className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Leadership
                </p>

                <h3 className="font-serif text-2xl font-bold">
                  Đội ngũ được giới thiệu trong hồ sơ DCodex
                </h3>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {leaders.map((leader, index) => (
                <Reveal key={leader.name} delay={index * 100}>
                  <div className="h-full rounded-3xl border border-border bg-background/60 p-5 transition-all hover:-translate-y-1 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-secondary shadow-[0_0_34px_rgba(255,122,0,0.16)]">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                          {leader.role}
                        </p>

                        <h4 className="mt-2 font-serif text-2xl font-bold">
                          {leader.name}
                        </h4>

                        <p className="mt-3 leading-relaxed text-muted-foreground">
                          {leader.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {leader.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-border bg-secondary/35 px-4 py-3 text-sm text-muted-foreground"
                        >
                          <BadgeCheck className="mb-2 h-4 w-4 text-primary" />
                          {point}
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                      Thông tin leadership được trình bày theo hồ sơ giới thiệu DCodex.
                      Người xem nên tiếp tục đối chiếu thêm từ các nguồn chính thức khi đánh giá.
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Legal Verification
                </span>

                <h3 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                  Pháp lý không phải để khoe.
                  <br />
                  Pháp lý là thứ cần kiểm chứng.
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Website này không yêu cầu người xem tin ngay. Các thông tin pháp nhân,
                  đăng ký và hồ sơ doanh nghiệp nên được xem như điểm bắt đầu để tự đối chiếu.
                </p>
              </div>

              <div className="grid gap-4">
                {legalItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card/80 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="font-serif text-lg font-semibold">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <CalendarCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Timeline
                </p>

                <h3 className="font-serif text-2xl font-bold">
                  Các mốc thông tin chính
                </h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-border bg-card/80 p-5"
                >
                  <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.time}
                  </div>

                  <h4 className="font-serif text-lg font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>

                  {index < timeline.length - 1 ? (
                    <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-primary/40 md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card/70 p-6 text-center sm:p-8">
            <Globe2 className="mx-auto h-8 w-8 text-primary" />

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Một nhà đầu tư tỉnh táo không chỉ hỏi “lợi nhuận bao nhiêu?”.
              Họ hỏi: công ty là ai, đội ngũ vận hành thế nào, hồ sơ pháp lý ra sao
              và thông tin đó có thể kiểm chứng được không.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function InfoCard({
  icon: Icon,
  label,
  title,
  desc,
}: {
  icon: ElementType
  label: string
  title: string
  desc: string
}) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>

      <h3 className="mt-2 font-serif text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}