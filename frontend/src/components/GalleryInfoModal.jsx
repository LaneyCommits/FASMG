import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './GalleryInfoModal.module.css'

export default function GalleryInfoModal({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
    >
      <div
        id="virtual-gallery-member-dialog"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="virtual-gallery-info-title"
      >
        <div className={styles.modalToolbar}>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className={styles.closeIcon} aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          <h2 id="virtual-gallery-info-title" className={styles.welcomeTitle}>
            Welcome to the Fine Arts Society of Middle Georgia Virtual Gallery!
          </h2>
          <p className={styles.prose}>
            We are thrilled to present this digital showcase celebrating the diverse talent and creativity of the Fine
            Arts Society of Middle Georgia members. Our Virtual Gallery allows art lovers from anywhere to view,
            appreciate, and connect with the stunning works created by local artists across our region.
          </p>

          <h3 className={styles.subsectionTitle}>Information for exhibiting members</h3>
          <p className={styles.prose}>
            If you are a member of the Fine Arts Society of Middle Georgia, this virtual space is an affordable and
            dynamic way to share your portfolio and gain visibility with a wider audience.
          </p>
          <p className={styles.prose}>
            For submission guidelines and to arrange display of your work, please{' '}
            <Link to="/contact" className={styles.textLink} onClick={onClose}>
              use our contact form
            </Link>{' '}
            or reach out to{' '}
            <Link to="/boardmembers" className={styles.textLink} onClick={onClose}>
              our board members
            </Link>
            .
          </p>

          <p className={styles.optionsIntro}>We offer two simple options for displaying your work:</p>

          <div className={styles.optionsGrid}>
            <article className={styles.optionCard} aria-labelledby="gallery-opt-quarterly">
              <h4 id="gallery-opt-quarterly" className={styles.optionName}>
                1. Quarterly display option
              </h4>
              <p className={styles.optionPrice}>$30</p>
              <ul className={styles.optionList}>
                <li>
                  <strong>Duration:</strong> Three months (one quarter)
                </li>
                <li>
                  <strong>Content:</strong> Display up to 5 images of your current artwork
                </li>
              </ul>
            </article>

            <article
              className={`${styles.optionCard} ${styles.optionCardFeatured}`}
              aria-labelledby="gallery-opt-annual"
            >
              <span className={styles.badge}>Best value</span>
              <h4 id="gallery-opt-annual" className={styles.optionName}>
                2. Annual display option
              </h4>
              <p className={styles.optionPrice}>$50</p>
              <ul className={styles.optionList}>
                <li>
                  <strong>Duration:</strong> One full year (12 months)
                </li>
                <li>
                  <strong>Content:</strong> Display up to 20 images of your current artwork
                </li>
              </ul>
            </article>
          </div>

          <p className={styles.memberNote}>
            <strong>Members:</strong> To submit your work and take advantage of these display rates, please contact our{' '}
            <Link to="/boardmembers" className={styles.textLink} onClick={onClose}>
              board members
            </Link>{' '}
            for guidelines. We look forward to seeing your art online!
          </p>
        </div>
      </div>
    </div>
  )
}
