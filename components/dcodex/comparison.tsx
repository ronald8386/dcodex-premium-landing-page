import { Check, X } from "lucide-react"
import { Reveal } from "./reveal"

const rows = [
  { label: "Cam kết lợi nhuận cố định", scam: true, dcodex: false, invert: true },
  { label: "Tài sản lưu ký tách bạch", scam: false, dcodex: true },
  { label: "Kiểm toán bởi bên thứ ba", scam: false, dcodex: true },
  { label: "Giao dịch kiểm chứng on-chain", scam: false, dcodex: true },
  { label: "Rút tiền tự do, không điều kiện ẩn", scam: false, dcodex: true },
  { label: '"Robot AI" sinh lời tự động', scam: true, dcodex: false, invert: true },
  { label: "Đội ngũ &amp; pháp lý công khai", scam: false, dcodex: true },
]

function Mark({ value, desired }: { value: boolean; desired: boolean }) {
  const good = value === desired
  return (
    <span
      className={
        good
          ? "inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent"
          : "inline-flex h-7 w-7 items-center justify-center rounded-full bg-destructive/15 text-destructive"
      }
    >
      {value ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
    </span>
  )
}

export function Comparison() {
  return (
    <section id="comparison" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            So sánh
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            DCodex khác gì với các nền tảng lừa đảo?
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border bg-secondary/40 px-5 py-4 text-sm font-semibold sm:px-8">
              <span>Tiêu chí</span>
              <span className="w-24 text-center text-muted-foreground sm:w-32">Sàn lừa đảo</span>
              <span className="w-20 text-center text-primary sm:w-32">DCodex</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-5 py-4 last:border-0 sm:px-8"
              >
                <span
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: row.label }}
                />
                <span className="flex w-24 justify-center sm:w-32">
                  <Mark value={row.scam} desired={row.invert ? false : true} />
                </span>
                <span className="flex w-20 justify-center sm:w-32">
                  <Mark value={row.dcodex} desired={row.invert ? false : true} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
