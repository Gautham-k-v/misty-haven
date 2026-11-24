import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src="images/mist-tea.jpg"
        alt="Mist rolling over green tea hills in the Western Ghats"
        className="kenburns absolute inset-0 h-full w-full object-cover object-[center_55%]"
        width="1800"
        height="1201"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest-deep/28 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-forest-deep/10 to-forest-deep/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <motion.p
          {...rise(0.1)}
          className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-sm"
        >
          <MapPin size={13} aria-hidden="true" />
          Wayanad, Kerala, India
        </motion.p>

        <motion.h1
          {...rise(0.22)}
          className="mt-6 max-w-[12ch] font-serif text-[3.15rem] font-medium leading-[0.95] text-white sm:max-w-3xl sm:text-6xl lg:text-[4.8rem] [text-shadow:0_8px_30px_rgba(16,41,32,0.35)]"
        >
          Escape the Ordinary.
          <span className="mt-1 block">Embrace the Serenity.</span>
        </motion.h1>

        <motion.p
          {...rise(0.36)}
          className="mt-6 max-w-md text-[15px] leading-7 text-white/85 sm:text-base"
        >
          Discover a peaceful sanctuary nestled in the heart of Wayanad, where
          nature, comfort, and unforgettable experiences come together.
        </motion.p>

        <motion.div {...rise(0.48)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#stay"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-forest transition hover:bg-cream"
          >
            Explore Our Stay
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-white"
          >
            Book Your Escape
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
