import { Link } from 'react-router-dom'
import styles from './DonateBrushPanel.module.css'

export default function DonateBrushPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.logoRing} aria-hidden>
        <img
          src={`${import.meta.env.BASE_URL}logo.avif`}
          alt=""
          className={styles.logoImg}
          width={34}
          height={34}
        />
      </span>
      <h3 className={styles.title}>Support the Arts</h3>
      <p className={styles.text}>
        Your donation helps us inspire creativity, fund scholarships, and keep the arts accessible in our
        communities.
      </p>
      <Link to="/donate" className={styles.cta}>
        Donate Now →
      </Link>
    </div>
  )
}
