import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { PROJECTS } from '../data/content.js'

const FILTERS = [['all', 'All'], ['ai', 'AI and ML'], ['backend', 'Backend and integration'], ['web', 'Web and apps']]

export default function Projects() {
  const [f, setF] = useState('all')
  const list = PROJECTS.filter(p => f === 'all' || p.cats.includes(f))
  return (
    <>
      <section className="wrap pagehead">
        <Reveal as="h1">Projects</Reveal>
        <Reveal as="p" className="lede" delay={0.1}>
          Eight projects across AI, backend, enterprise integration and web. Choose one to read how it works, what I did and what went wrong along the way.
        </Reveal>
        <Reveal className="filters" delay={0.2} role="group" aria-label="Filter projects">
          {FILTERS.map(([k, label]) => (
            <button key={k} type="button" className={'chip' + (f === k ? ' on' : '')} aria-pressed={f === k} onClick={() => setF(k)}>
              {label}
            </button>
          ))}
        </Reveal>
      </section>
      <section className="wrap block">
        <motion.div layout className="pgrid">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  )
}
