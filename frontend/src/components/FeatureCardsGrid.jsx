import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import styles from './FeatureCardsGrid.module.css'

const BASE = import.meta.env.BASE_URL

const cards = [
  {
    id: 'classes',
    title: 'Classes &\nWorkshops',
    desc: 'Learn, grow, and create with others.',
    to: '/classes',
    accent: 'orange',
    image: `${BASE}img/artclass.png`,
    imageAlt: 'Paint palette and brushes for art classes',
  },
  {
    id: 'gallery',
    title: 'Exhibitions &\nGallery',
    desc: 'Showcasing local talent and inspiring creativity.',
    to: '/gallery',
    accent: 'blue',
    image: `${BASE}img/gallery-exhibit.png`,
    imageAlt: 'Framed exhibition artwork with first-place ribbon in the gallery',
  },
  {
    id: 'events',
    title: 'Events &\nPrograms',
    desc: "From demos to trips, there's always something happening.",
    to: '/events',
    accent: 'gold',
    image: `${BASE}img/art-supply-swap-event.png`,
    imageAlt:
      'Flyer for Art Supply Swap and Shop event on April 26, with partner logos and art icons',
  },
]

const accentClass = {
  orange: styles.accentOrange,
  blue: styles.accentBlue,
  gold: styles.accentGold,
  navy: styles.accentNavy,
}

export default function FeatureCardsGrid() {
  return (
    <div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <Link key={c.id} to={c.to} className={`${styles.card} ${accentClass[c.accent] || ''}`}>
            <div className={styles.cardImage}>
              <img src={c.image} alt={c.imageAlt} className={styles.cardImg} loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <span className={styles.cardArrow} aria-hidden="true">
                <ChevronRightIcon className={styles.arrowIcon} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
