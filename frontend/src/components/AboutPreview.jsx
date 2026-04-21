import { Link } from 'react-router-dom'
import Button from './Button'
import styles from './AboutPreview.module.css'

const aboutImage = `${import.meta.env.BASE_URL}img/fas-gallery-storefront.png`

export default function AboutPreview() {
  return (
    <div className={styles.row}>
      <div className={styles.imageCol}>
        <img
          src={aboutImage}
          alt="Fine Art Society gallery storefront at night, with art classes and gallery signage"
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.textCol}>
        <h2 className={styles.title}>Our Mission</h2>
        <div className={styles.copy}>
          <p className={styles.text}>
            We exist to grow and support the arts in Middle Georgia by creating a space where artists can share their
            work, learn from one another, and build real connections.
          </p>
          <p className={styles.text}>
            Through classes, workshops, exhibitions, and community events, we encourage creativity at every level
            while giving back through service and outreach.
          </p>
        </div>
        <Button as={Link} to="/about" variant="secondary">
          Learn More
        </Button>
      </div>
    </div>
  )
}
