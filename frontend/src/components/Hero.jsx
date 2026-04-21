import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import HeroBackgroundCarousel from './HeroBackgroundCarousel'
import HeroQuoteCard from './HeroQuoteCard'
import { heroBackgroundArt } from '../data/heroImages'
import styles from './Hero.module.css'

export default function Hero() {
  const [activeArt, setActiveArt] = useState(
    () => heroBackgroundArt[0] ?? { title: '', artistName: '', imageUrl: '' },
  )

  return (
    <section className={`${styles.hero} ${styles.heroNoAnim}`} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.copyCol}>
          <div className={styles.copy}>
            <div className={styles.wash} aria-hidden />
            <p className={styles.tagline}>All Artists Welcome</p>
            <h1 id="hero-heading" className={styles.headline}>
              Celebrating Great Works
            </h1>
            <p className={styles.lede}>
              The Fine Arts Society of Middle Georgia brings together artists and neighbors to learn, exhibit,
              and celebrate the arts across our region.
            </p>
            <div className={styles.actions}>
              <Button as={Link} to="/gallery" variant="primary">
                Explore Gallery →
              </Button>
              <Button as={Link} to="/join" variant="secondary">
                Join the Society
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.mediaCol}>
          <div className={styles.mediaViewport}>
            <HeroBackgroundCarousel onActivePieceChange={setActiveArt} />
            <div className={styles.mediaOverlay} aria-hidden />
            <HeroQuoteCard artistName={activeArt.artistName} title={activeArt.title} />
          </div>
        </div>
      </div>
    </section>
  )
}
