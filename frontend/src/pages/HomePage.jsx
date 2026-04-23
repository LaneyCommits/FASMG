import Hero from '../components/Hero'
import Section from '../components/Section'
import ExploreCards from '../components/FeatureCardsGrid'
import FeaturesAndEvents from '../components/FeaturesAndEvents'
import AboutPreview from '../components/AboutPreview'
import JoinDonateSplit from '../components/JoinDonateSplit'
import styles from './HomePage.module.css'

const COMMUNITY_PAPER = `${import.meta.env.BASE_URL}img/home-community-paper.png`

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={styles.stack}>
        <Section
          className={styles.communityPaper}
          style={{
            backgroundColor: 'var(--home-cream, #fdf8ee)',
            backgroundImage: `linear-gradient(
              180deg,
              rgba(250, 249, 246, 0) 0%,
              rgba(250, 249, 246, 0) 82%,
              rgba(253, 248, 238, 0.55) 91%,
              rgba(253, 248, 238, 0.92) 96%,
              var(--home-cream, #fdf8ee) 100%
            ),
            url('${COMMUNITY_PAPER}')`,
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: '100% 100%, min(520px, 100vw) auto',
          }}
        >
          <ExploreCards />
        </Section>
        <Section>
          <FeaturesAndEvents />
        </Section>
        <Section>
          <AboutPreview />
        </Section>
        <Section tight>
          <JoinDonateSplit />
        </Section>
      </div>
    </>
  )
}
