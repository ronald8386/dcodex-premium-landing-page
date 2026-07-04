import {
  Bot,
  CircleAlert,
  DatabaseZap,
  EyeOff,
  FileQuestion,
  MessageSquareWarning,
  TrendingDown,
} from "lucide-react"
import { Reveal } from "./reveal"

const pains = [
  {
    icon: CircleAlert,
    title: "Từng tin nhầm một nền tảng",
    desc: "Lúc đầu mọi thứ nghe rất thuyết phục. Đến khi hệ thống gặp vấn đề, bạn mới nhận ra mình chưa từng hiểu mô hình thật sự vận hành ra sao.",
  },
  {
    icon: Bot,
    title: "Nghe nói có AI, nhưng không thấy AI làm gì",
    desc: "AI có thể là công nghệ thật. Nhưng nếu chỉ xuất hiện trong lời giới thiệu, nó rất dễ trở thành một chiếc nhãn marketing.",
  },
  {
    icon: FileQuestion,
    title: "Không biết công cụ tạo ra kết quả",
    desc: "Dashboard có thể đẹp. Con số có thể hấp dẫn. Nhưng câu hỏi quan trọng vẫn là: công cụ nào đang tạo ra kết quả đó?",
  },
  {
    icon: DatabaseZap,
    title: "Không kiểm tra được dữ liệu",
    desc: "Nếu mọi thứ chỉ nằm trong ảnh chụp, báo cáo nội bộ hoặc lời nói của người giới thiệu, nhà đầu tư buộc phải tin thay vì có cơ sở đối chiếu.",
  },
  {
    icon: MessageSquareWarning,
    title: "Tin leader nhiều hơn tin dữ liệu",
    desc: "Cộng đồng đông, người nói hay, câu chuyện hấp dẫn. Nhưng nếu thiếu tiêu chí kiểm chứng, niềm tin vẫn rất mong manh.",
  },
  {
    icon: TrendingDown,
    title: "Chỉ hỏi lợi nhuận, quên hỏi rủi ro",
    desc: "Nhiều người bước vào thị trường bằng câu hỏi 'được bao nhiêu', nhưng lại quên hỏi 'lợi nhuận đến từ đâu' và 'rủi ro nằm ở đâu'.",
  },
  {
    icon: EyeOff,
    title: "Chỉ khi có vấn đề mới bắt đầu đặt câu hỏi",
    desc: "Điều nguy hiểm không phải là đặt câu hỏi quá nhiều. Điều nguy hiểm là chỉ đặt câu hỏi sau khi tiền đã rời khỏi tay mình.",
  },
]

export function Pain() {
  return (
    <section id="pain" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nỗi đau của nhà đầu tư
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Bạn không cần đầu tư ngay.
            <br />
            Nhưng nên biết những dấu hiệu này trước.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Trong crypto, mất tiền không chỉ đến từ thị trường giảm. Nó còn đến từ việc
            đặt niềm tin vào một hệ thống mà mình chưa đủ dữ liệu để kiểm chứng.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <pain.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pain.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:p-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Một quyết định đầu tư tốt không bắt đầu bằng
            </p>
            <p className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
              “Lợi nhuận bao nhiêu?”
            </p>
            <p className="mt-4 text-muted-foreground">Mà nên bắt đầu bằng:</p>
            <p className="mt-2 font-serif text-2xl font-bold text-primary sm:text-3xl">
              “Tôi có thể kiểm chứng điều này không?”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}