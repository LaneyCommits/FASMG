/**
 * Allan Carey — Virtual Gallery profile + artwork in `public/img/AllanCaryVirtualGallery/`.
 */
const BASE = import.meta.env.BASE_URL
const G = `${BASE}img/AllanCaryVirtualGallery/`

export const allanCareyVirtualGalleryPieces = [
  {
    id: 'birds-making-joyful-noise',
    imageUrl: `${G}birdsmakingjoyfulnoiseAllanCarey.avif`,
    title: 'Birds Making Joyful Noise',
    meta: 'Oil & acrylic on canvas • 2024',
  },
  {
    id: 'tiger-for-charles',
    imageUrl: `${G}ACTigerForCharles.avif`,
    title: 'Tiger for Charles',
    meta: 'Oil & acrylic on canvas',
  },
  {
    id: 'true-love',
    imageUrl: `${G}ACTrueLoveHonorableMentionWinterArts.avif`,
    title: 'True Love',
    meta: 'Oil & acrylic on canvas • Honorable mention, Winter Arts',
  },
]

export const allanCareyVirtualGalleryProfile = {
  slug: 'allan-carey',
  name: 'Allan Carey',
  mediumHeadline: 'Oil & acrylic painter',
  portraitUrl: `${G}AllanCareyPic.avif`,
  portraitAlt: 'Allan Carey in the studio',
  hometown: 'Fort Valley, Georgia',
  studioLine: 'Oils & acrylics on canvas',
  memberLine: 'Fine Arts Society of Middle Georgia',
  /** Shown as stacked paragraphs on the artist page */
  bioParagraphs: [
    'I use rich bright colors with smooth gentle brush strokes to create realistic paintings. Some have said that my work has an inspirational feeling.',
  ],
  quote: '',
  /** Icons under bio (reference layout) */
  socialLinks: [
    {
      label: 'Facebook group',
      href: 'https://www.facebook.com/groups/35360981908/',
    },
    {
      label: 'Email the society',
      href: 'mailto:fasmidga@gmail.com',
    },
  ],
}
