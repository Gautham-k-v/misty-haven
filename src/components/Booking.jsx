import { ChevronDown, Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { contact, stays } from "../data/content"
import { WhatsAppIcon } from "./Icons"
import Reveal from "./Reveal"

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  accommodation: "",
  message: "",
}

function localISO(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function addDays(iso, days) {
  const [year, month, day] = iso.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  date.setDate(date.getDate() + days)
  return localISO(date)
}

function validate(values, today) {
  const errors = {}
  const name = values.name.trim()
  if (name.length < 2) errors.name = "Please enter your full name."

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  const digits = values.phone.replace(/\D/g, "")
  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number."
  }

  if (!values.checkIn) {
    errors.checkIn = "Please choose a check-in date."
  } else if (values.checkIn < today) {
    errors.checkIn = "Check-in cannot be in the past."
  }

  if (!values.checkOut) {
    errors.checkOut = "Please choose a check-out date."
  } else if (values.checkIn && values.checkOut <= values.checkIn) {
    errors.checkOut = "Check-out must be after check-in."
  }

  const guests = Number(values.guests)
  if (!values.guests || !Number.isInteger(guests) || guests < 1 || guests > 8) {
    errors.guests = "Please choose between 1 and 8 guests."
  }

  if (!stays.some((stay) => stay.id === values.accommodation)) {
    errors.accommodation = "Please select an accommodation."
  }

  return errors
}

export default function Booking({ stayRequest }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [attempted, setAttempted] = useState(false)
  const [success, setSuccess] = useState(null)
  const today = localISO(new Date())
  const checkoutMin = form.checkIn ? addDays(form.checkIn, 1) : addDays(today, 1)

  useEffect(() => {
    if (!stayRequest?.id) return
    setForm((current) => ({ ...current, accommodation: stayRequest.id }))
    setSuccess(null)
    setAttempted(false)
    setErrors({})
  }, [stayRequest])

  function update(field, value) {
    const next = { ...form, [field]: value }
    setForm(next)
    if (attempted) setErrors(validate(next, today))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(form, today)
    setErrors(nextErrors)
    setAttempted(true)
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0]
      document.getElementById(first)?.focus()
      return
    }
    setSuccess({ name: form.name.trim(), email: form.email.trim() })
  }

  function reset() {
    setForm(emptyForm)
    setErrors({})
    setAttempted(false)
    setSuccess(null)
  }

  return (
    <section id="contact" className="bg-cream">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive">
              <span className="h-px w-8 bg-earth" aria-hidden="true" />
              Say Hello
            </p>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-[1.02] text-forest sm:text-[3.4rem]">
              Every Great Escape Begins With a Hello.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-ink/75">
              Tell us when you would like to arrive. We will confirm
              availability personally. This inquiry does not reserve the room
              until we write back.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-forest">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-earth" aria-hidden="true" />
                <span>{contact.place}</span>
              </li>
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-earth">
                  <Phone size={16} className="text-earth" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="flex items-center gap-3 hover:text-earth">
                  <Mail size={16} className="text-earth" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-forest-deep"
            >
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {success ? (
            <div
              role="status"
              className="border border-line bg-white px-6 py-12 sm:px-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
                Inquiry received
              </p>
              <h3 className="mt-3 font-serif text-4xl font-medium text-forest">
                Thank you, {success.name}.
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-ink/75">
                Your stay inquiry is with us. We will write to {success.email}{" "}
                to confirm dates and availability.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 text-[12px] font-medium uppercase tracking-[0.16em] text-earth"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              {attempted && Object.keys(errors).length > 0 && (
                <p role="alert" className="sm:col-span-2 text-sm text-[#8c3a32]">
                  Please correct the highlighted fields before sending.
                </p>
              )}
              <Field
                id="name"
                label="Full name"
                value={form.name}
                error={errors.name}
                autoComplete="name"
                onChange={(value) => update("name", value)}
              />
              <Field
                id="email"
                label="Email address"
                type="email"
                value={form.email}
                error={errors.email}
                autoComplete="email"
                onChange={(value) => update("email", value)}
              />
              <Field
                id="phone"
                label="Phone number"
                type="tel"
                value={form.phone}
                error={errors.phone}
                autoComplete="tel"
                placeholder="+91 98765 43210"
                onChange={(value) => update("phone", value)}
              />
              <Field
                id="guests"
                label="Guests"
                type="number"
                value={form.guests}
                error={errors.guests}
                min="1"
                max="8"
                step="1"
                inputMode="numeric"
                onChange={(value) => update("guests", value)}
              />
              <Field
                id="checkIn"
                label="Check-in"
                type="date"
                value={form.checkIn}
                error={errors.checkIn}
                min={today}
                onChange={(value) => update("checkIn", value)}
              />
              <Field
                id="checkOut"
                label="Check-out"
                type="date"
                value={form.checkOut}
                error={errors.checkOut}
                min={checkoutMin}
                onChange={(value) => update("checkOut", value)}
              />
              <div className="min-w-0 sm:col-span-2">
                <label htmlFor="accommodation" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-olive">
                  Accommodation
                </label>
                <div className="relative">
                  <select
                    id="accommodation"
                    value={form.accommodation}
                    onChange={(event) => update("accommodation", event.target.value)}
                    aria-invalid={errors.accommodation ? "true" : "false"}
                    aria-describedby={errors.accommodation ? "accommodation-error" : undefined}
                    className={`w-full appearance-none border bg-white px-4 py-3.5 pr-10 text-base text-forest outline-none focus:border-forest ${
                      errors.accommodation ? "border-[#8c3a32]" : "border-line"
                    }`}
                  >
                    <option value="">Select a stay</option>
                    {stays.map((stay) => (
                      <option key={stay.id} value={stay.id}>
                        {stay.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-olive"
                  />
                </div>
                {errors.accommodation && (
                  <p id="accommodation-error" className="mt-1.5 text-sm text-[#8c3a32]">
                    {errors.accommodation}
                  </p>
                )}
              </div>
              <div className="min-w-0 sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-olive">
                  Message <span className="font-normal normal-case tracking-normal text-olive/80">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  className="w-full resize-y border border-line bg-white px-4 py-3.5 text-base text-forest outline-none focus:border-forest"
                  placeholder="Tell us about the occasion, arrival time, or anything we should know."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-forest px-6 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-forest-deep"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
  ...props
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-olive">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        required
        className={`w-full border bg-white px-4 py-3.5 text-base text-forest outline-none focus:border-forest ${
          error ? "border-[#8c3a32]" : "border-line"
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-[#8c3a32]">
          {error}
        </p>
      )}
    </div>
  )
}
