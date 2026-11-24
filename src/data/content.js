export const contact = {
  place: "Wayanad, Kerala, India",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@mistyhaven.in",
  emailHref: "mailto:hello@mistyhaven.in",
  instagram: "https://www.instagram.com/mistyhaven",
  facebook: "https://www.facebook.com/mistyhaven",
  whatsapp:
    "https://wa.me/919876543210?text=" +
    encodeURIComponent(
      "Hello Misty Haven, I would like to enquire about a stay in Wayanad.",
    ),
}

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#stay", label: "Stay" },
  { href: "#experiences", label: "Experiences" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export const stays = [
  {
    id: "forest-suite",
    name: "The Forest Suite",
    price: 4500,
    image: "images/bedroom-3.jpg",
    imageAlt:
      "A warm wooden bedroom opening onto a balcony surrounded by dense green forest",
    summary:
      "A spacious room with a private balcony, where the hills sit just beyond the railing.",
    description:
      "Wake inside warm wood and linen, then step onto a private balcony as the mist lifts off the trees. The Forest Suite is our quiet room for two, with mountain light, an ensuite bath, and the sound of birds as the morning clock.",
    amenities: ["Spacious luxury room", "Private balcony", "Mountain views"],
    details: ["King bed", "Ensuite bath", "For two guests"],
    guests: "2 guests",
  },
  {
    id: "misty-cottage",
    name: "The Misty Cottage",
    price: 6500,
    image: "images/bungalow.jpg",
    imageAlt:
      "A thatched wooden cottage with linen curtains, set among tropical greenery",
    summary:
      "A private cottage with a wide view of the valley and a fireplace for cool evenings.",
    description:
      "Set a little apart from the main house, the cottage is yours alone. Panoramic views open across the plantation, and a fireplace takes the edge off Wayanad’s cooler nights. Mornings here begin slowly, with coffee and birdsong.",
    amenities: ["Private cottage", "Panoramic nature views", "Cozy fireplace"],
    details: ["Separate sit-out", "Ensuite bath", "Up to 3 guests"],
    guests: "Up to 3 guests",
  },
  {
    id: "valley-villa",
    name: "The Valley Villa",
    price: 9000,
    image: "images/cabin.jpg",
    imageAlt:
      "A glass-and-timber villa with a private deck and pool, surrounded by lush forest",
    summary:
      "Our most secluded stay, with a private outdoor space and room to gather.",
    description:
      "The Valley Villa is for guests who want the forest close and the days unhurried. A private outdoor space, a generous living area, and quiet luxury amenities make it the stay we keep for longer visits and small celebrations.",
    amenities: ["Premium villa", "Private outdoor space", "Luxury amenities"],
    details: ["Living area", "Ensuite bath", "Up to 4 guests"],
    guests: "Up to 4 guests",
  },
]

export const experiences = [
  {
    title: "Plantation Walks",
    text: "Coffee, pepper, and cardamom, walked slowly at first light.",
    icon: "trees",
  },
  {
    title: "Campfire Nights",
    text: "A small fire, hill air, and stories after the valley goes quiet.",
    icon: "flame",
  },
  {
    title: "Traditional Kerala Cuisine",
    text: "Estate spices, banana-leaf meals, and cooking that tastes of home.",
    icon: "utensils",
  },
  {
    title: "Nature Trails",
    text: "Forest paths, streams, and birdsong without a schedule attached.",
    icon: "footprints",
  },
  {
    title: "Sunrise Viewpoints",
    text: "Watch the mist thin until the hills turn gold.",
    icon: "sunrise",
  },
  {
    title: "Local Cultural Experiences",
    text: "Temple towns, craft, and the unhurried rhythm of Wayanad.",
    icon: "landmark",
  },
]

export const gallery = [
  {
    src: "images/mist-tea-2.jpg",
    alt: "Bright green tea hills climbing toward a cloud-covered mountain in Kerala",
    className: "col-span-2 aspect-[16/11] md:col-span-2 md:row-span-2 md:aspect-auto",
  },
  {
    src: "images/bedroom.jpg",
    alt: "A bed beside tall windows looking into a wall of tropical trees",
    className: "col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    src: "images/house-2.jpg",
    alt: "A traditional Kerala house with a clay-tiled roof beside a lily pond",
    className: "col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    src: "images/bedroom-2.jpg",
    alt: "A warm cottage bedroom with linen, woven lamps, and a view of palms",
    className: "col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    src: "images/sadya.jpg",
    alt: "A Kerala sadya served on a banana leaf with rice, thoran, and pickles",
    className: "col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    src: "images/kerala.jpg",
    alt: "A canoe gliding through palm-lined backwaters in Kerala",
    className: "col-span-2 aspect-[16/10] md:col-span-2 md:aspect-auto",
  },
  {
    src: "images/campfire.jpg",
    alt: "A campfire burning at night beside a small cottage in the hills",
    className: "col-span-2 aspect-[16/10] md:col-span-2 md:aspect-auto",
  },
]

export const testimonials = [
  {
    name: "Ananya Krishnan",
    place: "Bengaluru",
    initials: "AK",
    quote:
      "An unforgettable escape. The views, hospitality, and peaceful atmosphere made this stay truly special.",
  },
  {
    name: "Rohan Mehta",
    place: "Mumbai",
    initials: "RM",
    quote:
      "We woke to mist in the valley and coffee from the estate. Misty Haven feels like a secret the hills have been keeping.",
  },
  {
    name: "Meera Nair",
    place: "Kochi",
    initials: "MN",
    quote:
      "The food, the fireplace, and the quiet made us stay an extra night. We left slower than we arrived.",
  },
]

export function formatPrice(amount) {
  return `₹${amount.toLocaleString("en-IN")}`
}
