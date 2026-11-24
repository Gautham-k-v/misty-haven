import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"

export default function Introduction() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden">
            <img
              src="images/deck.jpg"
              alt="An open wooden veranda with seating, warm lamps, and palms at dusk"
              className="aspect-[4/5] w-full object-cover object-[center_60%] sm:aspect-[5/4] lg:aspect-[4/5]"
              width="1600"
              height="1200"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
            <span className="h-px w-8 bg-earth" aria-hidden="true" />
            Est. 2024 · Wayanad
          </p>
          <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.02] text-forest sm:text-6xl">
            Where Nature Meets Comfort
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-8 text-ink/80">
            Wake up to the sound of birds, breathe in the fresh mountain air,
            and experience the warmth of Kerala hospitality. Misty Haven is your
            perfect escape from the everyday.
          </p>
          <ul className="mt-8 space-y-3 text-sm tracking-wide text-forest">
            <li className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-earth" aria-hidden="true" />
              Birdsong and mountain air at dawn
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-earth" aria-hidden="true" />
              The warmth of Kerala hospitality
            </li>
          </ul>
          <a
            href="#gallery"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-earth transition hover:text-forest"
          >
            Discover the Story
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
