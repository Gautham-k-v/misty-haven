import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { formatPrice, stays } from "../data/content"
import Reveal from "./Reveal"

export default function Accommodation({ onBook }) {
  const [active, setActive] = useState(null)

  return (
    <section id="stay" className="bg-cream">
      <div className="mx-auto max-w-[1180px] px-5 py-8 pb-20 sm:px-8 md:pb-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
            <span className="h-px w-8 bg-earth" aria-hidden="true" />
            The Rooms
          </p>
          <h2 className="mt-4 font-serif text-5xl font-medium leading-none text-forest sm:text-6xl">
            Find Your Perfect Stay
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-ink/70">
            Three quiet places to sleep, each opening onto the hills.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {stays.map((stay, index) => (
            <Reveal key={stay.id} delay={index * 0.08}>
              <article className="group">
                <button
                  type="button"
                  onClick={() => setActive(stay)}
                  className="block w-full overflow-hidden text-left"
                  aria-label={`View details for ${stay.name}`}
                >
                  <img
                    src={stay.image}
                    alt={stay.imageAlt}
                    className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    width="1400"
                    height="1050"
                    loading="lazy"
                  />
                </button>
                <h3 className="mt-5 font-serif text-[2rem] font-medium leading-none text-forest">
                  {stay.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{stay.summary}</p>
                <p className="mt-3 text-[13px] leading-6 text-olive">
                  {stay.amenities.join(" · ")}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-sm text-earth">
                    <span className="font-medium">{formatPrice(stay.price)}</span>
                    <span className="text-ink/50"> / night</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => setActive(stay)}
                    className="text-[11px] font-medium uppercase tracking-[0.16em] text-forest transition hover:text-earth"
                  >
                    View Details
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <StayModal
        stay={active}
        onClose={() => setActive(null)}
        onBook={(id) => {
          setActive(null)
          onBook(id)
        }}
      />
    </section>
  )
}

function StayModal({ stay, onClose, onBook }) {
  const reduce = useReducedMotion()
  const titleId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!stay) return undefined
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [stay, onClose])

  return (
    <AnimatePresence>
      {stay && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-forest-deep/70 p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[92svh] w-full max-w-3xl overflow-y-auto bg-cream shadow-2xl sm:max-h-[88svh]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={stay.image}
                alt=""
                className="h-56 w-full object-cover sm:h-72"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-7 sm:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
                {stay.guests}
              </p>
              <h3 id={titleId} className="mt-2 font-serif text-4xl font-medium text-forest">
                {stay.name}
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink/80">
                {stay.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[...stay.amenities, ...stay.details].map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-white px-3 py-1.5 text-[12px] tracking-wide text-forest"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="font-serif text-3xl text-forest">
                  {formatPrice(stay.price)}
                  <span className="ml-2 font-sans text-sm text-ink/50">/ night</span>
                </p>
                <button
                  type="button"
                  onClick={() => onBook(stay.id)}
                  className="inline-flex items-center justify-center rounded-md bg-forest px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-forest-deep"
                >
                  Book This Stay
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
