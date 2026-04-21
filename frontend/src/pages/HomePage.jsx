import Hero from '../components/Hero'
import Section from '../components/Section'
import FeaturesAndEvents from '../components/FeaturesAndEvents'
import FeatureCardsGrid from '../components/FeatureCardsGrid'
import AboutPreview from '../components/AboutPreview'
import JoinDonateSplit from '../components/JoinDonateSplit'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className={styles.stack}>
        <Section>
          <FeaturesAndEvents />
        </Section>
        <Section>
          <AboutPreview />
        </Section>
        <Section tight>
          <JoinDonateSplit />
        </Section>
        <Section>
          <FeatureCardsGrid />
        </Section>
      </div>
    </>
  )
}
