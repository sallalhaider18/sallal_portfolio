import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { PROFILE } from '../data/content.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  function copy() {
    if (!navigator.clipboard) return
    navigator.clipboard.writeText(PROFILE.email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000) })
  }
  const boxes = [
    ['Email', PROFILE.email, `mailto:${PROFILE.email}`],
    ['Phone and WhatsApp', PROFILE.phone, PROFILE.phoneHref],
    ['LinkedIn', 'sallal-haider', PROFILE.linkedin],
    ['GitHub', 'sallalhaider18', PROFILE.github],
  ]
  return (
    <>
      <section className="wrap pagehead">
        <Reveal as="h1">Let’s talk</Reveal>
        <Reveal as="p" className="lede" delay={0.1}>
          I’m looking for Software Engineer, Backend and AI Engineer roles, remote or on-site. I’m based in Lahore and open to relocating to the UAE, Saudi Arabia and Qatar. Email is the quickest way to reach me.
        </Reveal>
      </section>
      <section className="wrap block contact-grid">
        {boxes.map(([k, v, href], i) => (
          <motion.a key={k} className="cbox" href={href} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -4 }}>
            <span>{k}</span><strong>{v}</strong>
          </motion.a>
        ))}
        <motion.button type="button" className={'cbox' + (copied ? ' copied' : '')} onClick={copy}
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }} whileHover={{ y: -4 }}>
          <span>Copy email address</span><strong>{copied ? 'Copied' : 'Click to copy'}</strong>
        </motion.button>
        <motion.a className="cbox" href={PROFILE.cv} download initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ y: -4 }}>
          <span>CV</span><strong>Download PDF</strong>
        </motion.a>
      </section>
    </>
  )
}
