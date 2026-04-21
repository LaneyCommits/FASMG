import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Button from '../components/Button'
import styles from './PlaceholderPage.module.css'

export default function PlaceholderPage({ title, children }) {
  return (
    <Section className={styles.page}>
      <div className={styles.box}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lede}>{children}</p>
        <Button as={Link} to="/" variant="primary">
          ← Back to Home
        </Button>
      </div>
    </Section>
  )
}
