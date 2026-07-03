import { ShieldCheck } from "lucide-react"

const columns = [
  {
    title: "Sản phẩm",
    links: ["Tính năng", "Bảo mật", "Bằng chứng dự trữ", "Bảng phí"],
  },
  {
    title: "Minh bạch",
    links: ["Báo cáo kiểm toán", "Trạng thái hệ thống", "Pháp lý", "Cảnh báo lừa đảo"],
  },
  {
    title: "Hỗ trợ",
    links: ["Trung tâm trợ giúp", "Liên hệ", "Hướng dẫn bảo mật", "Cộng đồng"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-serif text-lg font-bold tracking-tight">DCodex</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Nền tảng đầu tư crypto minh bạch, được xây dựng cho những nhà đầu tư
              đặt sự an toàn và niềm tin lên hàng đầu.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DCodex. Bảo lưu mọi quyền.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            Cảnh báo rủi ro: Đầu tư tài sản mã hóa có mức độ rủi ro cao và có thể dẫn đến
            mất toàn bộ vốn. Nội dung trên trang không phải là lời khuyên đầu tư.
          </p>
        </div>
      </div>
    </footer>
  )
}
