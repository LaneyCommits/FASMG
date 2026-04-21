import { Link } from 'react-router-dom'
import Button from './Button'
import DonateBrushPanel from './DonateBrushPanel'
import styles from './JoinDonateSplit.module.css'

export default function JoinDonateSplit() {
  return (
    <div className={styles.row}>
      <div className={styles.join}>
        <h2 className={styles.title}>Join the Society</h2>
        <p className={styles.text}>
          Membership opens doors to critiques, openings, and a statewide network of artists who share your passion.
        </p>
        <Button as={Link} to="/join" variant="primary">
          Become a Member
        </Button>
      </div>
      <DonateBrushPanel />
    </div>
  )
}
