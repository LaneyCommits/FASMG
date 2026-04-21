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
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={`${styles.hero} ${styles.heroNoAnim}`} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.mediaCol}>
          <div className={styles.mediaViewport}>
            <HeroBackgroundCarousel
              onActivePieceChange={setActiveArt}
              onIndexChange={setActiveIndex}
            />
            <div className={styles.mediaOverlay} aria-hidden />
          </div>
        </div>
        <div className={styles.copyCol}>
          <div className={styles.copy}>
            <h1 id="hero-heading" className={styles.headline}>
              All Artists Welcome
            </h1>
            <p className={styles.tagline}>Celebrating Great Works</p>
            <p className={styles.lede}>
              The Fine Arts Society of Middle Georgia brings together artists and neighbors to learn, exhibit,
              and celebrate the arts across our region.
            </p>
            <div className={styles.actions}>
              <Button as={Link} to="/gallery" variant="primary" className={styles.heroCta}>
                Explore Gallery →
              </Button>
              <Button as={Link} to="/join" variant="secondary" className={styles.heroCta}>
                Join the Society
              </Button>
            </div>
          </div>
          {heroBackgroundArt.length > 1 && (
            <div className={styles.dots} aria-hidden>
              {heroBackgroundArt.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles.quoteAnchor}>
          <HeroQuoteCard artistName={activeArt.artistName} title={activeArt.title} />
        </div>
      </div>
    </section>
  )
}
