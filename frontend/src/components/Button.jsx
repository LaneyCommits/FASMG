import styles from './Button.module.css'

export default function Button({ children, variant = 'primary', as, className, ...props }) {
  const Tag = as || 'button'
  return (
    <Tag className={[styles.btn, styles[variant], className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Tag>
  )
}
