import { useState } from "react"
import Accommodation from "./components/Accommodation"
import Booking from "./components/Booking"
import BookingCta from "./components/BookingCta"
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

export default function App() {
  const [stayRequest, setStayRequest] = useState({ id: "", n: 0 })

  function chooseStay(id) {
    setStayRequest((current) => ({ id, n: current.n + 1 }))
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Introduction />
        <Accommodation onBook={chooseStay} />
        <Experiences />
        <Gallery />
        <Testimonials />
        <BookingCta />
        <Booking stayRequest={stayRequest} />
      </main>
      <Footer />
    </>
  )
}
