import { Link } from 'react-router-dom'
import HeroQuoteCard from './HeroQuoteCard'
import styles from './Hero.module.css'

const heroBgUrl = `${import.meta.env.BASE_URL}img/home-hero-main.png`

export default function Hero() {
  return (
    <section className={`${styles.hero} ${styles.heroNoAnim}`} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div
          className={styles.bgLayer}
          style={{ backgroundImage: `url('${heroBgUrl}')` }}
          aria-hidden
        />
        <div className={styles.contentRow}>
          <div className={styles.copyPanel}>
            <div className={styles.copy}>
              <h1 id="hero-heading" className={styles.headline}>
                Art Connects Us All
              </h1>
              <p className={styles.tagline}>Celebrating Great Works</p>
              <p className={styles.lede}>
                The Fine Arts Society of Middle Georgia brings together artists to learn, exhibit, and celebrate the
                arts across our region.
              </p>
              <div className={styles.actions}>
                <Link to="/gallery" className={styles.ctaGold}>
                  Explore the Gallery →
                </Link>
                <Link to="/membership" className={styles.ctaOutline}>
                  Join the Society
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.quoteAnchor}>
            <HeroQuoteCard artistName="Cathy Compton" title="Heron" />
          </div>
        </div>
      </div>
    </section>
  )
}
