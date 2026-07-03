import { FileCheck2, Landmark, Radar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const items = [
  {
    icon: FileCheck2,
    title: "Kiểm toán độc lập",
    desc: "Báo cáo tài chính và bằng chứng dự trữ được rà soát bởi đơn vị kiểm toán bên thứ ba và công bố công khai.",
    tag: "Cập nhật hàng quý",
  },
  {
    icon: Landmark,
    title: "Pháp lý rõ ràng",
    desc: "Pháp nhân vận hành, điều khoản dịch vụ và chính sách bảo vệ người dùng đều được minh bạch hóa.",
    tag: "Hồ sơ công khai",
  },
  {
    icon: Radar,
    title: "Giám sát thời gian thực",
    desc: "Trạng thái hệ thống, số dư dự trữ và lịch sử sự cố được theo dõi liên tục trên trang trạng thái.",
    tag: "Trực tuyến 24/7",
  },
]

export function Transparency() {
  return (
    <section id="transparency" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Minh bạch
              </span>
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Niềm tin phải được chứng minh, không phải được hứa hẹn
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Chúng tôi tin rằng một nền tảng đáng tin cậy phải sẵn sàng để bạn kiểm tra.
                Đó là lý do DCodex công khai dữ liệu quan trọng để bất kỳ ai cũng có thể
                tự xác minh.
              </p>
              <Button
                className="mt-6 border-border bg-transparent"
                variant="outline"
                nativeButton={false}
                render={<a href="#cta" />}
              >
                Truy cập trang minh bạch
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </Reveal>

            <div className="space-y-4">
              {items.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-background/60 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif font-semibold">{item.title}</h3>
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                          {item.tag}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
