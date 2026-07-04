"use client"

import { useState } from "react"
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    label: "Vấn đề",
    href: "#pain",
  },
  {
    label: "Cách kiểm chứng",
    href: "#solution",
  },
  {
    label: "Hệ sinh thái",
    href: "#features",
  },
  {
    label: "Công ty",
    href: "#company",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_34px_rgba(255,122,0,0.28)]">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div className="leading-none">
            <p className="font-serif text-xl font-bold tracking-tight">DCodex</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Verify First
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#transparency">
            <Button variant="outline" className="border-border bg-transparent">
              Kiểm chứng
            </Button>
          </a>

          <a href="#contact">
            <Button className="group">
              Tìm hiểu DCodex
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 grid gap-3">
              <a href="#transparency" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full border-border bg-transparent">
                  Kiểm chứng thông tin
                </Button>
              </a>

              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="group w-full">
                  Tìm hiểu DCodex
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}