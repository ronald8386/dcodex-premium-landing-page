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

const companyFacts = [
  {
    icon: Building2,
    label: "Company",
    value: "DCodex Ltd",
    desc: "Pháp nhân vận hành hệ sinh thái DCodex.",
  },
  {
    icon: Landmark,
    label: "Jurisdiction",
    value: "California, USA",
    desc: "Khu vực đăng ký doanh nghiệp.",
  },
  {
    icon: ShieldCheck,
    label: "Registered Capital",
    value: "10,000,000 USD",
    desc: "Vốn đăng ký trong tài liệu công bố.",
  },
  {
    icon: FileCheck2,
    label: "FinCEN MSB",
    value: "31000310586622",
    desc: "Registration Date: 09/18/2025.",
  },
]

const leaders = [
  {
    role: "CEO DCodex",
    name: "Robert Reichenbach Richard",
    image: "/leaders/robert-reichenbach-richard.jpg",
    desc: "Phụ trách định hướng chiến lược, tài chính định lượng, quản lý rủi ro và phát triển hệ sinh thái DCodex.",
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
    desc: "Phụ trách vận hành, quản trị tổ chức, hợp tác xuyên biên giới và triển khai chiến lược.",
    points: [
      "Vận hành tổ chức",
      "Quản trị & cố vấn",
      "Hợp tác xuyên biên giới",
    ],
  },
]

const timeline = [
  {
    time: "Giai đoạn 1",
    title: "CME & Lõi thực thi",
    desc: "Xây dựng công cụ thực thi trung tâm của hệ sinh thái.",
  },
  {
    time: "Giai đoạn 2",
    title: "Ví & Hệ sinh thái người dùng",
    desc: "Mở rộng trải nghiệm lưu trữ, sử dụng và kết nối tài sản số.",
  },
  {
    time: "Giai đoạn 3",
    title: "DPay",
    desc: "Kết nối thanh toán, chi tiêu và chuyển đổi giá trị.",
  },
  {
    time: "Giai đoạn 4",
    title: "Hạ tầng thanh toán",
    desc: "Mở rộng hệ sinh thái ứng dụng và kết nối thương mại.",
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
            Điều quan trọng hơn là pháp nhân, đội ngũ điều hành, hồ sơ hoạt động
            và dữ liệu có thể đối chiếu.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 rounded-3xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Company & Legal Snapshot
                </span>

                <h3 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                  Thông tin nền tảng để đánh giá DCodex.
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Các thông tin về pháp nhân, khu vực đăng ký, vốn đăng ký và MSB
                  giúp người xem có cơ sở ban đầu để đánh giá nền tảng trước khi
                  tìm hiểu sâu hơn.
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-background/60 p-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-serif text-lg font-semibold">
                        Hiểu đúng vai trò pháp lý
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Pháp lý là một lớp đánh giá nền tảng, không phải cam kết
                        lợi nhuận hay bảo đảm an toàn tuyệt đối.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card/80 p-5 sm:p-6">
                <div className="grid gap-4">
                  {companyFacts.map((item) => (
                    <FactRow key={item.label} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
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
                  Đội ngũ điều hành DCodex
                </h3>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {leaders.map((leader, index) => (
                <Reveal key={leader.name} delay={index * 100}>
                  <div className="h-full rounded-3xl border border-border bg-background/60 p-5 transition-all hover:-translate-y-1 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-secondary shadow-[0_0_34px_rgba(255,122,0,0.16)]">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="128px"
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
                  </div>
                </Reveal>
              ))}
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
                  Lộ trình phát triển hệ sinh thái
                </p>

                <h3 className="font-serif text-2xl font-bold">
                  Từ lõi thực thi đến hạ tầng tài chính số
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
              Từng bước mở rộng từ công cụ thực thi đến hạ tầng tài chính số.
              DCodex nên được đánh giá như một hệ sinh thái đang hoàn thiện,
              không chỉ như một sản phẩm đơn lẻ.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FactRow({
  icon: Icon,
  label,
  value,
  desc,
}: {
  icon: ElementType
  label: string
  value: string
  desc: string
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>

        <h4 className="mt-1 font-serif text-xl font-semibold">{value}</h4>

        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>
      </div>
    </div>
  )
}