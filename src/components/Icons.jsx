export function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.4 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3C7.3 3 3.46 6.8 3.46 11.5c0 1.5.4 2.96 1.16 4.24L3.4 21l5.4-1.18a8.7 8.7 0 0 0 3.24.62h.01c4.74 0 8.58-3.8 8.58-8.5S16.78 3 12.04 3zm0 15.5h-.01a7.2 7.2 0 0 1-3.66-.99l-.26-.15-3.2.7.68-3.1-.17-.27a7.05 7.05 0 0 1-1.1-3.79c0-3.9 3.2-7.07 7.14-7.07 3.93 0 7.13 3.17 7.13 7.07 0 3.9-3.2 7.6-7.13 7.6zm3.92-5.3c-.21-.1-1.27-.62-1.46-.69-.2-.07-.34-.1-.48.1-.14.21-.55.69-.68.83-.12.14-.25.16-.46.05-.21-.1-.9-.33-1.71-1.05-.63-.56-1.06-1.24-1.18-1.45-.12-.21-.01-.33.09-.43.1-.1.21-.25.32-.37.1-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.48-1.15-.66-1.58-.17-.41-.35-.36-.48-.36h-.41c-.14 0-.37.05-.56.26-.2.21-.74.72-.74 1.76s.76 2.04.86 2.18c.1.14 1.49 2.27 3.61 3.18.5.22.9.35 1.2.45.51.16.97.14 1.33.08.4-.06 1.27-.52 1.45-1.02.18-.5.18-.93.12-1.02-.05-.1-.19-.14-.4-.24z" />
    </svg>
  )
}
