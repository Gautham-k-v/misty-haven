import { Star } from "lucide-react"
import { testimonials } from "../data/content"
import Reveal from "./Reveal"

export default function Testimonials() {
  return (
    <section className="bg-[#f3eee4]" aria-labelledby="stories-heading">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
            Guest Stories
          </p>
          <h2
            id="stories-heading"
            className="mx-auto mt-4 max-w-xl font-serif text-5xl font-medium leading-[1.02] text-forest sm:text-6xl"
          >
            Moments That Stay With You
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col bg-cream px-6 py-8 sm:px-7">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} size={14} className="fill-earth text-earth" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-[1.45rem] font-medium italic leading-snug text-forest">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-xs tracking-wide text-cream"
                    aria-hidden="true"
                  >
                    {item.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-medium tracking-wide text-forest">
                      {item.name}
                    </span>
                    <span className="block text-xs tracking-wide text-olive">{item.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
