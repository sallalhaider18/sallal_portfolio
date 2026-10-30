import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { EXPERIENCE } from '../data/content.js'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <>
      <section className="wrap pagehead">
        <Reveal as="h1">Experience</Reveal>
        <Reveal as="p" className="lede" delay={0.1}>Four years of building software, from React front ends to enterprise integrations to live AI systems, plus a Master’s in AI in London.</Reveal>
      </section>
      <section className="wrap block">
        <ol className="timeline tl-react" ref={ref}>
          <motion.span className="tl-fill" style={{ height }} aria-hidden="true" />
          {EXPERIENCE.map(e => (
            <Reveal as="li" key={e.title}>
              <p className="when">{e.when}</p>
              <div>
                <h2>{e.title}</h2>
                <p className="org">{e.org}</p>
                <ul>{e.points.map(t => <li key={t}>{t}</li>)}</ul>
                {e.link && <Link className="textlink" to={`/projects/${e.link[0]}`}>{e.link[1]}</Link>}
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  )
}
