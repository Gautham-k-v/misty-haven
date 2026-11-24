import Reveal from "./Reveal"

export default function BookingCta() {
  return (
    <section className="relative flex min-h-[68svh] items-center justify-center overflow-hidden">
      <img
        src="images/mist-tea.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-deep/55" />
      <Reveal className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
          Reservations
        </p>
        <h2 className="mt-4 font-serif text-5xl font-medium leading-[1.02] text-white sm:text-6xl">
          Your Escape Is Waiting
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-7 text-white/85">
          Leave the noise behind and reconnect with nature.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-forest transition hover:bg-cream"
        >
          Reserve Your Stay
        </a>
      </Reveal>
    </section>
  )
}
