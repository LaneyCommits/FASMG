import { useId } from 'react'
import styles from './BrushstrokeDivider.module.css'

/**
 * Organic bottom edge for the hero — blends painting into the cream homepage stack.
 * Gradient fill + layered wrap background so the SVG viewport never shows a “white gap”.
 */
export default function BrushstrokeDivider({ className = '' }) {
  const rawId = useId()
  const gradId = `brush-${rawId.replace(/[^a-zA-Z0-9_-]/g, '_')}`

  return (
    <div className={`${styles.wrap} ${className}`.trim()} aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 72" preserveAspectRatio="none" className={styles.svg}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdf8ee" stopOpacity="0.35" />
            <stop offset="42%" stopColor="#fdf8ee" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#f5efe3" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradId})`}
          d="M0,48 L24,42 L48,50 L80,38 L120,46 L160,34 L200,44 L248,32 L300,46 L352,36 L400,48 L452,30 L500,44 L552,34 L600,50 L652,28 L708,46 L760,36 L812,50 L864,32 L920,48 L976,34 L1032,50 L1088,30 L1144,46 L1200,38 L1256,52 L1312,34 L1368,48 L1408,40 L1440,52 L1440,72 L0,72 Z"
        />
      </svg>
    </div>
  )
}
