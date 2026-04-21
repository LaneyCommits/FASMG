import { Link } from 'react-router-dom'
import styles from './AboutPreview.module.css'

const aboutImage = `${import.meta.env.BASE_URL}img/fas-gallery-storefront.png`

export default function AboutPreview() {
  return (
    <div className={styles.row}>
      <div className={styles.imageCol}>
        <img
          src={aboutImage}
          alt="Fine Art Society gallery storefront"
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.textCol}>
        <h2 className={styles.title}>About Our Society</h2>
        <p className={styles.text}>
          Founded in 2000, we are a nonprofit community of artists dedicated to promoting the fine arts and
          supporting creativity across Middle Georgia.
        </p>
        <Link to="/about" className={styles.more}>
          Learn More →
        </Link>
      </div>
    </div>
  )
}
