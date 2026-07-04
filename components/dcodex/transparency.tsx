import { Building2, Database, SearchCheck, Wrench } from "lucide-react"
import { Reveal } from "./reveal"

const items = [
  {
    icon: Building2,
    title: "Công ty",
    desc: "Một nền tảng đáng để tìm hiểu nên có thông tin doanh nghiệp, đội ngũ và mô hình vận hành đủ rõ để người dùng chủ động đánh giá.",
  },
  {
    icon: Wrench,
    title: "Công cụ",
    desc: "Điều quan trọng không phải là nói có AI hay bot, mà là người dùng có thể hiểu công cụ đang làm gì và vai trò của nó trong hệ thống.",
  },
  {
    icon: Database,
    title: "Dữ liệu",
    desc: "Khi có thêm dữ liệu để đối chiếu, nhà đầu tư sẽ có nhiều cơ sở hơn để đưa ra quyết định thay vì chỉ dựa vào lời giới thiệu.",
  },
]

export function Transparency() {
  return (
    <section id="transparency" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Khả năng kiểm chứng
          </span>

          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Minh bạch không loại bỏ rủi ro.
            <br />
            Nhưng minh bạch giúp nhà đầu tư đánh giá tốt hơn.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Không có nền tảng nào hoàn toàn không có rủi ro.
            Điều quan trọng là người dùng có bao nhiêu thông tin,
            dữ liệu và cơ sở để tự đánh giá trước khi đưa ra quyết định.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mt-14 rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
            <SearchCheck className="mx-auto h-10 w-10 text-primary" />

            <h3 className="mt-5 font-serif text-2xl font-bold">
              DCodex không mong người dùng tin ngay.
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Điều DCodex hướng tới là giúp người dùng có thêm cơ sở để tìm hiểu,
              đặt câu hỏi và tự đánh giá hệ sinh thái.
              Một quyết định đầu tư tốt nên bắt đầu bằng sự hiểu biết,
              thay vì chỉ bắt đầu bằng kỳ vọng lợi nhuận.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}