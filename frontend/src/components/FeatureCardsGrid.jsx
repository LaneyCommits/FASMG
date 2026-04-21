import FeatureCard from './FeatureCard'
import { featureCards } from '../data/featureCards'
import styles from './FeatureCardsGrid.module.css'

export default function FeatureCardsGrid() {
  return (
    <div className={styles.grid}>
      {featureCards.map((card) => (
        <FeatureCard key={card.id} {...card} />
      ))}
    </div>
  )
}
