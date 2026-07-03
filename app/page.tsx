import { SiteHeader } from "@/components/dcodex/site-header"
import { Hero } from "@/components/dcodex/hero"
import { Pain } from "@/components/dcodex/pain"
import { Solution } from "@/components/dcodex/solution"
import { Features } from "@/components/dcodex/features"
import { Comparison } from "@/components/dcodex/comparison"
import { Transparency } from "@/components/dcodex/transparency"
import { Faq } from "@/components/dcodex/faq"
import { Cta } from "@/components/dcodex/cta"
import { SiteFooter } from "@/components/dcodex/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Features />
        <Comparison />
        <Transparency />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
