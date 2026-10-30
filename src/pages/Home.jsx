import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Pipeline from '../components/Pipeline.jsx'
import Counter from '../components/Counter.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { PROFILE, STATS, STACK, PRINCIPLES, PROJECTS } from '../data/content.js'

function SplitName({ text }) {
  let i = 0
  return (
    <h1 className="split" aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w}>
          {w > 0 ? ' ' : null}
          <span aria-hidden="true">
            {word.split('').map(ch => {
              const d = w * 0.25 + (i++) * 0.045
              return (
                <motion.span key={d} style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, y: '0.5em', rotate: 4 }} animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.7, delay: d, ease: [0.2, 0.7, 0.2, 1] }}>{ch}</motion.span>
              )
            })}
          </span>
        </span>
      ))}
    </h1>
  )
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
})

export default function Home() {
  const featured = PROJECTS.filter(p => p.featured)
  return (
    <>
      <div className="hero-bg" aria-hidden="true" />
      <section className="hero wrap">
        <div className="hero-text">
          <SplitName text={PROFILE.name} />
          <motion.p className="role" {...fadeUp(0.6)}>{PROFILE.role}</motion.p>
          <motion.p className="lede" {...fadeUp(0.75)}>{PROFILE.intro}</motion.p>
          <motion.div className="actions" {...fadeUp(0.9)}>
            <Link className="btn primary" to="/projects">See my projects</Link>
            <a className="btn" href={PROFILE.cv} download>Download CV</a>
          </motion.div>
          <motion.p className="where" {...fadeUp(1)}>{PROFILE.location}</motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}>
          <Pipeline />
        </motion.div>
      </section>

      <section className="stats wrap" aria-label="Highlights">
        {STATS.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 0.08}>
            <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            <span>{s.label}</span>
          </Reveal>
        ))}
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">{[...STACK, ...STACK].map((t, i) => <span key={i}>{t}</span>)}</div>
      </div>

      <section className="wrap block">
        <div className="block-head">
          <Reveal as="h2">Selected work</Reveal>
          <Link className="textlink" to="/projects">All {PROJECTS.length} projects</Link>
        </div>
        <div className="pgrid">
          {featured.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
        </div>
      </section>

      <section className="wrap block approach">
        <Reveal as="h2">How I work</Reveal>
        <div className="principles">
          {PRINCIPLES.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.1}><h3>{x.title}</h3><p>{x.text}</p></Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="wrap cta">
        <h2>Hiring for a software or AI role?</h2>
        <p>I’m open to Software Engineer, Backend and AI Engineer roles, remote or on-site.</p>
        <Link className="btn light" to="/contact">Get in touch</Link>
      </Reveal>
    </>
  )
}
