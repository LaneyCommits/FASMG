/**
 * April J. — Virtual Gallery profile + artwork in `img/AprilJVirtualGallery/`.
 */
const BASE = import.meta.env.BASE_URL
const G = `${BASE}img/AprilJVirtualGallery/`

export const aprilJVirtualGalleryPieces = [
  {
    id: 'book-cover',
    imageUrl: `${G}AJBookCover.avif`,
    title: 'Book cover',
    meta: 'Digital illustration • cover design',
  },
  {
    id: 'elise-final',
    imageUrl: `${G}AJEliseFinal.avif`,
    title: 'Elise',
    meta: 'Digital illustration • character art',
  },
  {
    id: 'end-scene-final',
    imageUrl: `${G}AJEndSceneFinal.avif`,
    title: 'End scene',
    meta: 'Digital illustration',
  },
  {
    id: 'fanfic-cover',
    imageUrl: `${G}AJFanficCover.avif`,
    title: 'Fanfiction cover',
    meta: 'Digital illustration • cover design',
  },
  {
    id: 'isilme-ref-sheet',
    imageUrl: `${G}AJIsilmeRefSheetLoRez.avif`,
    title: 'Isílme reference sheet',
    meta: 'Digital illustration • character reference',
  },
  {
    id: 'studio-logo',
    imageUrl: `${G}AJLogo.avif`,
    title: "Tiger's Tale Studios — logo",
    meta: 'Digital design • branding',
  },
  {
    id: 'raven-doodles',
    imageUrl: `${G}AJRavenDoodles.avif`,
    title: 'Raven doodles',
    meta: 'Digital illustration',
  },
  {
    id: 'season-3-book-cover',
    imageUrl: `${G}AJS3BookCover.avif`,
    title: 'Season 3 book cover',
    meta: 'Digital illustration • cover design',
  },
  {
    id: 'season-2-book-cover',
    imageUrl: `${G}AJSeason2BookCover.avif`,
    title: 'Season 2 book cover',
    meta: 'Digital illustration • cover design',
  },
  {
    id: 'tigers-tale-prices',
    imageUrl: `${G}AJTigersTaleStudiosPrices.avif`,
    title: "Tiger's Tale Studios — commission sheet",
    meta: 'Digital design • pricing & info sheet',
  },
  {
    id: 'tori-stream',
    imageUrl: `${G}AJToriStream.avif`,
    title: 'Tori',
    meta: 'Digital illustration',
  },
  {
    id: 'touch-starved',
    imageUrl: `${G}AJTouchStarved.avif`,
    title: 'Touch starved',
    meta: 'Digital illustration',
  },
  {
    id: 'vi-and-raven',
    imageUrl: `${G}AJViAndRaven.avif`,
    title: 'Vi and Raven',
    meta: 'Digital illustration • character art',
  },
]

export const aprilJVirtualGalleryProfile = {
  slug: 'april-j',
  name: 'April J.',
  mediumHeadline: 'Digital art, voice, writing & streaming',
  portraitUrl: `${G}AprilJ.avif`,
  portraitAlt: 'April J.',
  hometown: 'Middle Georgia',
  studioLine: 'Digital art & design, voice acting, ambient audio, writing, gaming, and streaming',
  memberLine: 'Fine Arts Society of Middle Georgia',
  bioParagraphs: [
    "April's work in their studio covers digital art and design, voice acting, ambient audio, writing, gaming, and streaming.",
    'You can find the studio through YouTube, Patreon, Twitch, and multiple social media accounts.',
  ],
  quote: '',
  socialLinks: [],
}
