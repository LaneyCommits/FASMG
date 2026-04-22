import { useState } from 'react'
import Section from '../components/Section'
import styles from './ContactPage.module.css'

const BASE = import.meta.env.BASE_URL
const CONTACT_API = '/api/contact/'

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  website: '',
}

export default function ContactPage() {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState({ type: null, message: '' })
  const [pending, setPending] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: null, message: '' })
    setPending(true)
    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          website: values.website,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus({
          type: 'error',
          message: typeof data.detail === 'string' ? data.detail : 'Something went wrong. Please try again.',
        })
        return
      }
      setValues(initial)
      setStatus({
        type: 'ok',
        message: 'Thank you! Your message was sent. We will get back to you soon.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not reach the server. Make sure the site backend is running, or try again later.',
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <>
      <section
        className={styles.hero}
        style={{ '--contact-hero-image': `url('${BASE}img/hero-3.avif')` }}
        aria-labelledby="contact-hero-heading"
      >
        <div className={styles.heroInner}>
          <h1 id="contact-hero-heading" className={styles.heroTitle}>
            Get in touch
          </h1>
          <p className={styles.heroLede}>
            Send us a note about classes, membership, events, or anything else—we read every message.
          </p>
        </div>
      </section>

      <Section className={styles.contactBand} tight>
        <div className={styles.shell}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-first">
                  First name<span className={styles.required} aria-hidden>*</span>
                </label>
                <input
                  id="contact-first"
                  name="firstName"
                  className={styles.input}
                  type="text"
                  autoComplete="given-name"
                  required
                  value={values.firstName}
                  onChange={onChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-last">
                  Last name
                </label>
                <input
                  id="contact-last"
                  name="lastName"
                  className={styles.input}
                  type="text"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-email">
                Email<span className={styles.required} aria-hidden>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                className={styles.input}
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={onChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-phone">
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                className={styles.input}
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={onChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-message">
                Write a message<span className={styles.required} aria-hidden>*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={styles.textarea}
                required
                rows={5}
                value={values.message}
                onChange={onChange}
              />
            </div>

            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="contact-website">Company</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={onChange}
              />
            </div>

            {status.type === 'error' && (
              <p className={styles.feedbackError} role="alert">
                {status.message}
              </p>
            )}
            {status.type === 'ok' && (
              <p className={styles.feedbackOk} role="status">
                {status.message}
              </p>
            )}

            <button type="submit" className={styles.submit} disabled={pending}>
              {pending ? 'Sending…' : 'Submit'}
            </button>
          </form>
        </div>
      </Section>
    </>
  )
}
