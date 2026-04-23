import { Link } from 'react-router-dom'
import styles from './FeatureCard.module.css'

import drawIcon from '@img/icons/draw.jpg.jpeg?url'
import galleryIcon from '@img/icons/gallery.jpg.jpeg?url'
import calIcon from '@img/icons/cal.jpg.jpeg?url'
import connectIcon from '@img/icons/connect.jpg.jpeg?url'

const accentClass = {
  orange: styles.accentOrange,
  blue: styles.accentBlue,
  gold: styles.accentGold,
  navy: styles.accentNavy,
}

const ICON_SRC = {
  classes: drawIcon,
  gallery: galleryIcon,
  events: calIcon,
  membership: connectIcon,
}

export default function FeatureCard({ id, title, description, imageUrl, to, accent }) {
  const iconSrc = ICON_SRC[id] ?? galleryIcon

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={imageUrl} alt="" className={styles.image} loading="lazy" />
        <span className={`${styles.iconBadge} ${accentClass[accent] || ''}`} aria-hidden="true">
          <img src={iconSrc} alt="" className={styles.iconImg} />
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <Link to={to} className={styles.more}>
          Learn More →
        </Link>
      </div>
    </article>
  )
}
