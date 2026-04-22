import { Link } from 'react-router-dom'
import { UserGroupIcon, HeartIcon } from '@heroicons/react/24/solid'
import styles from './JoinDonateSplit.module.css'

export default function JoinDonateSplit() {
  return (
    <div className={styles.row}>
      <Link to="/membership" className={`${styles.card} ${styles.joinCard}`}>
        <span className={`${styles.iconWrap} ${styles.iconJoin}`}>
          <UserGroupIcon className={styles.icon} />
        </span>
        <div className={styles.cardBody}>
          <h3 className={styles.title}>Join the Society</h3>
          <p className={styles.desc}>Become a member and be part of our creative community.</p>
        </div>
        <span className={styles.arrow}>›</span>
      </Link>
      <Link to="/donate" className={`${styles.card} ${styles.donateCard}`}>
        <span className={`${styles.iconWrap} ${styles.iconDonate}`}>
          <HeartIcon className={styles.icon} />
        </span>
        <div className={styles.cardBody}>
          <h3 className={styles.title}>Support the Arts</h3>
          <p className={styles.desc}>Your donation helps us inspire and give back.</p>
        </div>
        <span className={styles.arrow}>›</span>
      </Link>
    </div>
  )
}
