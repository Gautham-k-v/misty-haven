import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useCallback, useEffect, useId, useRef, useState } from "react"
import { gallery } from "../data/content"
import Reveal from "./Reveal"

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const show = useCallback((next) => {
    setIndex((next + gallery.length) % gallery.length)
  }, [])

  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
            <span className="h-px w-8 bg-earth" aria-hidden="true" />
            The Gallery
          </p>
          <h2 className="mt-4 font-serif text-5xl font-medium leading-none text-forest sm:text-6xl">
            A Place to Pause
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-ink/70">
            Mist, timber, banana leaf, and the hour after the fire is lit.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[168px] md:gap-4 lg:auto-rows-[190px]">
          {gallery.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={`group relative overflow-hidden bg-cream-deep ${image.className}`}
              aria-label={`Open photograph: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox index={open ? index : null} onClose={close} onShow={show} />
    </section>
  )
}

function Lightbox({ index, onClose, onShow }) {
  const reduce = useReducedMotion()
  const titleId = useId()
  const closeRef = useRef(null)
  const open = index !== null
  const image = open ? gallery[index] : null

  useEffect(() => {
    if (!open) return undefined
    const previouslyFocused = document.activeElement
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ""
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        onShow(index + 1)
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        onShow(index - 1)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, index, onClose, onShow])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-deep/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <p id={titleId} className="sr-only">
            {image.alt}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous photograph"
            onClick={(event) => {
              event.stopPropagation()
              onShow(index - 1)
            }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            aria-label="Next photograph"
            onClick={(event) => {
              event.stopPropagation()
              onShow(index + 1)
            }}
          >
            <ChevronRight size={22} />
          </button>
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="max-h-[78svh] max-w-[min(100%,920px)] object-contain"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          />
          <p className="absolute bottom-5 left-0 right-0 px-16 text-center text-xs tracking-wide text-white/75">
            {index + 1} / {gallery.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
