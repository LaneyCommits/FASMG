import { useEffect } from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import {
  artSupplySwapShopFlierUrl,
  artSupplySwapShopTitle,
  artSupplySwapShopParagraphs,
  artSupplySwapShopWhen,
} from '../data/artSupplySwapShop'
import styles from './ArtSupplySwapShopModal.module.css'

export default function ArtSupplySwapShopModal({ open, onClose }) {
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

  const flier = artSupplySwapShopFlierUrl()

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="swap-shop-modal-title"
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
              alt="Art Supply Swap and Shop event flier"
              className={styles.flier}
            />
          </div>
          <div className={styles.copyCol}>
            <h2 id="swap-shop-modal-title" className={styles.heading}>
              {artSupplySwapShopTitle}
            </h2>
            {artSupplySwapShopParagraphs.map((p, i) => (
              <p key={i} className={styles.para}>
                {p}
              </p>
            ))}
            <div className={styles.whenBox}>
              <CalendarDaysIcon className={styles.whenIcon} aria-hidden />
              <div>
                <span className={styles.whenLabel}>When &amp; where</span>
                <p className={styles.whenPrimary}>{artSupplySwapShopWhen.dateLine}</p>
                <p className={styles.whenLine}>{artSupplySwapShopWhen.timeLine}</p>
                <p className={styles.whenVenue}>{artSupplySwapShopWhen.venue}</p>
                <p className={styles.whenLine}>{artSupplySwapShopWhen.area}</p>
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
