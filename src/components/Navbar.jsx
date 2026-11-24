import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navLinks } from "../data/content"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const solid = scrolled || open
  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "bg-cream shadow-[0_1px_0_rgba(24,61,50,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#home"
            onClick={close}
            className={`font-serif text-[1.7rem] leading-none tracking-wide transition-colors ${
              solid ? "text-forest" : "text-white"
            }`}
          >
            Misty Haven
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] tracking-[0.08em] transition-colors hover:text-earth ${
                  solid ? "text-forest/80" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={close}
              className={`inline-flex items-center rounded-md px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors sm:px-5 ${
                solid
                  ? "bg-forest text-cream hover:bg-forest-deep"
                  : "bg-white text-forest hover:bg-cream"
              }`}
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book Your Stay</span>
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${
                solid ? "text-forest" : "text-white"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-20 z-[60] overflow-y-auto bg-cream lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-line py-4 font-serif text-4xl text-forest"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-forest px-5 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-cream"
            >
              Book Your Stay
            </a>
          </div>
        </nav>
      ) : null}
    </>
  )
}
