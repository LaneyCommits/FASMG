/**
 * Static hero art: add image files under `frontend/public/img/` and list their filenames here.
 * Those files are committed with the repo. Vite exposes them as `/img/<file>` in dev; this
 * project’s production build uses `base: '/static/'`, so built URLs are `/static/img/<file>`.
 */
const BASE = import.meta.env.BASE_URL

export const HERO_IMAGE_FILES = [
  'birdsmakingjoyfulnoiseAC.png',
  'cathycomptonbird.png',
  'cathycomptonherron.png',
]

/** Optional artist (and title) per filename; carousel falls back to defaults below. */
const metaByFile = {
  'birdsmakingjoyfulnoiseAC.png': {
    artistName: 'Allan Carey',
    title: 'Birds Making Joyful Noise',
  },
  'cathycomptonbird.png': {
    artistName: 'Cathy Compton',
    title: 'Songbird',
  },
  'cathycomptonherron.png': {
    artistName: 'Cathy Compton',
    title: 'Heron',
  },
}

export const heroBackgroundArt = HERO_IMAGE_FILES.map((file, i) => {
  const meta = metaByFile[file] ?? {}
  return {
    imageUrl: `${BASE}img/${file}`,
    title: meta.title ?? `Member artwork ${i + 1}`,
    artistName: meta.artistName ?? 'Fine Arts Society of Middle GA',
  }
})
