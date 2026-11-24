import { Mail, MapPin, Phone } from "lucide-react"
import { contact, navLinks } from "../data/content"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons"

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-4xl font-medium">Misty Haven</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/70">
            A boutique homestay in the mist-covered hills of Wayanad, where
            slow mornings, plantation walks, and Kerala hospitality come
            together.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream/80 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cream/50">
            Visit
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
              {contact.place}
            </li>
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone size={15} aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="flex items-center gap-2 hover:text-white">
                <Mail size={15} aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <SocialLink href={contact.instagram} label="Misty Haven on Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={contact.facebook} label="Misty Haven on Facebook">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={contact.whatsapp} label="Message Misty Haven on WhatsApp">
              <WhatsAppIcon />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1180px] px-5 py-5 text-xs tracking-wide text-cream/50 sm:px-8">
          © {new Date().getFullYear()} Misty Haven. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-cream transition hover:border-white/40 hover:bg-white/10"
    >
      {children}
    </a>
  )
}
