/**
 * Static hero art: add image files under `frontend/public/img/` and list their filenames here.
 * Those files are committed with the repo. Vite exposes them as `/img/<file>` in dev; this
 * project’s production build uses `base: '/static/'`, so built URLs are `/static/img/<file>`.
 */
const BASE = import.meta.env.BASE_URL

export const HERO_IMAGE_FILES = [
  'AllanCaryVirtualGallery/birdsmakingjoyfulnoiseAllanCarey.avif',
  'home-hero-heron.png',
  'home-hero-songbird.png',
  'AprilJVirtualGallery/AJEliseFinal.avif',
]

/** Optional artist (and title) per filename; carousel falls back to defaults below. */
const metaByFile = {
  'AllanCaryVirtualGallery/birdsmakingjoyfulnoiseAllanCarey.avif': {
    artistName: 'Allan Carey',
    title: 'Birds Making Joyful Noise',
  },
  'AprilJVirtualGallery/AJEliseFinal.avif': {
    artistName: 'April J.',
    title: 'Elise',
  },
  'home-hero-heron.png': {
    artistName: 'Cathy Compton',
    title: 'Heron',
    /** Prefer head/top of portrait heron in hero crop */
    objectPosition: 'center top',
  },
  'home-hero-songbird.png': {
    artistName: 'Cathy Compton',
    title: 'Songbird',
  },
}

export const heroBackgroundArt = HERO_IMAGE_FILES.map((file, i) => {
  const meta = metaByFile[file] ?? {}
  return {
    imageUrl: `${BASE}img/${file}`,
    title: meta.title ?? `Member artwork ${i + 1}`,
    artistName: meta.artistName ?? 'Fine Arts Society of Middle GA',
    ...(meta.objectPosition ? { objectPosition: meta.objectPosition } : {}),
  }
})
