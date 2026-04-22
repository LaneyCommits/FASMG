/**
 * Member spotlights for the Virtual Gallery page.
 * Paths use Vite `BASE_URL` (e.g. `/static/` in production).
 */
const BASE = import.meta.env.BASE_URL

export const virtualGalleryArtists = [
  {
    id: 'allan-carey',
    name: 'Allan Carey',
    mediumLabel: 'Oil & acrylic',
    mediumFilter: 'oil-acrylic',
    bio: 'Rich bright colors and smooth brush strokes for realistic paintings with an inspirational feel.',
    artworkUrl: `${BASE}img/birdsmakingjoyfulnoiseAC.png`,
    artworkAlt: 'Birds Making Joyful Noise — painting by Allan Carey',
    portraitUrl: `${BASE}img/boardmembers/AllanCarey.avif`,
    portraitAlt: 'Allan Carey',
    featured: true,
    profileTo: '/gallery/allan-carey',
  },
  {
    id: 'april-j',
    name: 'April J.',
    mediumLabel: 'Digital & illustration',
    mediumFilter: 'digital',
    bio: 'Digital art and design, voice acting and ambient audio, writing, gaming, and streaming—on YouTube, Patreon, Twitch, and social.',
    artworkUrl: `${BASE}img/AprilJVirtualGallery/AJEliseFinal.avif`,
    artworkAlt: 'Elise — illustration by April J.',
    portraitUrl: `${BASE}img/AprilJVirtualGallery/AprilJ.avif`,
    portraitAlt: 'April J.',
    featured: false,
    profileTo: '/gallery/april-j',
  },
]

export const galleryMediumFilters = [
  { value: 'all', label: 'All mediums' },
  { value: 'oil-acrylic', label: 'Oil & acrylic' },
  { value: 'painting', label: 'Painting' },
  { value: 'digital', label: 'Digital & illustration' },
]
