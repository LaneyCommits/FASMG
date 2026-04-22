import { useEffect } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import {
  rigbysSpringMarketFlierUrl,
  rigbysSpringMarketTitle,
  rigbysSpringMarketParagraphs,
  rigbysSpringMarketLocation,
} from '../data/rigbysSpringMarket'
import styles from './RigbyFineArtExhibitModal.module.css'

export default function RigbysSpringMarketModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const flier = rigbysSpringMarketFlierUrl()

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rigby-spring-market-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" className={styles.closeIcon} aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={styles.layout}>
          <div className={styles.mediaCol}>
            <img
              src={flier}
              alt="Rigby's Spring Exhibit flier from the Fine Art Society of Middle Georgia"
              className={styles.flier}
            />
          </div>
          <div className={styles.copyCol}>
            <h2 id="rigby-spring-market-modal-title" className={styles.heading}>
              {rigbysSpringMarketTitle}
            </h2>
            {rigbysSpringMarketParagraphs.map((p, i) => (
              <p key={i} className={styles.para}>
                {p}
              </p>
            ))}
            <div className={styles.location}>
              <MapPinIcon className={styles.locationIcon} aria-hidden />
              <div>
                <span className={styles.locationLabel}>Location</span>
                <p className={styles.locationVenue}>{rigbysSpringMarketLocation.venue}</p>
                {rigbysSpringMarketLocation.lines.map((line) => (
                  <p key={line} className={styles.locationLine}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <button type="button" className={styles.doneBtn} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
