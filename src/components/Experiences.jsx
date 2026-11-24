import { Flame, Footprints, Landmark, Sunrise, TreePine, UtensilsCrossed } from "lucide-react"
import { experiences } from "../data/content"
import Reveal from "./Reveal"

const icons = {
  trees: TreePine,
  flame: Flame,
  utensils: UtensilsCrossed,
  footprints: Footprints,
  sunrise: Sunrise,
  landmark: Landmark,
}

export default function Experiences() {
  return (
    <section id="experiences" className="bg-forest text-cream">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/60">
              <span className="h-px w-8 bg-cream/40" aria-hidden="true" />
              The Wayanad Way
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-5xl font-medium leading-[1.02] sm:text-6xl">
              Experience the Magic of Wayanad
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-[15px] leading-7 text-cream/75 lg:justify-self-end">
              The hills ask for very little. Walk them, eat well, and let the
              evening arrive on its own.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="images/mist-tea-2.jpg"
                alt="Tea plantations covering the slopes beneath a misty Kerala mountain"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[680px]"
                width="1600"
                height="2000"
                loading="lazy"
              />
            </div>
          </Reveal>

          <ul className="divide-y divide-white/10">
            {experiences.map((item, index) => {
              const Icon = icons[item.icon]
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <li className="group flex gap-4 py-5 transition-colors hover:bg-white/[0.04]">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-cream/80">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-[1.7rem] font-medium leading-none text-cream">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-cream/70">{item.text}</p>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
