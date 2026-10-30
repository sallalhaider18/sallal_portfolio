import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ p, index = 0 }) {
  function track(e) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px')
    e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px')
  }
  const meta = p.ctx + (p.when ? `, ${p.when}` : '')
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -6 }}
    >
      <Link className="pcard" to={`/projects/${p.slug}`} onPointerMove={track}>
        <span className="pkind">{p.kind}</span>
        <h3>{p.name}</h3>
        <p className="pmeta">{meta}</p>
        <p>{p.blurb}</p>
        <span className="pmore">Read the case study</span>
      </Link>
    </motion.div>
  )
}
