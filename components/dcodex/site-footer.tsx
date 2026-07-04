import { ArrowRight, ShieldCheck } from "lucide-react"

const footerLinks = [
  {
    title: "Khám phá",
    links: [
      {
        label: "Vấn đề nhà đầu tư",
        href: "#pain",
      },
      {
        label: "4 lớp kiểm chứng",
        href: "#solution",
      },
      {
        label: "Hệ sinh thái DCodex",
        href: "#features",
      },
      {
        label: "Khả năng kiểm chứng",
        href: "#transparency",
      },
    ],
  },
  {
    title: "Nền tảng",
    links: [
      {
        label: "AI",
        href: "#features",
      },
      {
        label: "CME",
        href: "#features",
      },
      {
        label: "On-chain",
        href: "#features",
      },
      {
        label: "DPay",
        href: "#features",
      },
    ],
  },
  {
    title: "Thông tin",
    links: [
      {
        label: "Công ty",
        href: "#company",
      },
      {
        label: "Leadership",
        href: "#company",
      },
      {
        label: "Legal",
        href: "#company",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_34px_rgba(255,122,0,0.28)]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div className="leading-none">
                <p className="font-serif text-2xl font-bold tracking-tight">DCodex</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Verify First
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Hệ sinh thái tài chính ứng dụng AI, CME, on-chain và DPay,
              dành cho nhà đầu tư ưu tiên khả năng kiểm chứng trước khi ra quyết định.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
            >
              Tìm hiểu DCodex
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card/70 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Nội dung trên website chỉ nhằm mục đích cung cấp thông tin tham khảo về hệ sinh thái DCodex.
            Đây không phải là lời khuyên đầu tư, không phải lời mời chào mua bán tài sản tài chính,
            không cam kết lợi nhuận và không bảo đảm an toàn tuyệt đối. Người dùng nên tự tìm hiểu,
            đối chiếu dữ liệu, đánh giá rủi ro và đưa ra quyết định độc lập.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DCodex. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#faq" className="transition-colors hover:text-primary">
              FAQ
            </a>
            <a href="#company" className="transition-colors hover:text-primary">
              Company
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}