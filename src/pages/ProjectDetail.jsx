import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Tags from '../components/Tags.jsx'
import Pipeline from '../components/Pipeline.jsx'
import OrderBook from '../components/OrderBook.jsx'
import NotFound from './NotFound.jsx'
import { PROJECTS } from '../data/content.js'

function Bars({ rows }) {
  return (
    <motion.div className="bars" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }} aria-label="Bar chart of average accuracy by model">
      {rows.map(([name, , , , avg]) => (
        <div key={name} className={'bar' + (name === 'Deep Neural Network' ? ' best' : '')}>
          <span className="bl">{name}</span>
          <span className="bt">
            <motion.span className="bf"
              variants={{ hidden: { width: '0%' }, show: { width: `${((avg - 70) / 25) * 100}%`, transition: { duration: 1.1, ease: [0.2, 0.7, 0.2, 1] } } }} />
          </span>
          <span className="bv">{avg.toFixed(1)}%</span>
        </div>
      ))}
    </motion.div>
  )
}

function Section({ s }) {
  return (
    <Reveal>
      <h2>{s.title}</h2>
      {s.p && s.p.map((t, i) => <p key={i}>{t}</p>)}
      {s.flow && (
        <ol className="flow">
          {s.flow.map(([b, t], i) => (
            <motion.li key={b} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}>
              <strong>{b}.</strong> {t}
            </motion.li>
          ))}
        </ol>
      )}
      {s.checks && <ul className="checks">{s.checks.map(t => <li key={t}>{t}</li>)}</ul>}
      {s.incidents && (
        <div className="incidents">
          {s.incidents.map(([h, t], i) => (
            <motion.div key={h} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}>
              <h3>{h}</h3><p>{t}</p>
            </motion.div>
          ))}
        </div>
      )}
      {s.ledger && (
        <table className="ledger">
          <thead><tr><th scope="col">What I tested</th><th scope="col">Result</th></tr></thead>
          <tbody>{s.ledger.map(([t, ok]) => <tr key={t}><td>{t}</td><td className={ok ? 'yes' : 'no'}>{ok ? 'Works' : 'No edge'}</td></tr>)}</tbody>
        </table>
      )}
      {s.bars && (<><Bars rows={s.bars} /><p className="note">Bars start at 70% so the differences are easier to see.</p></>)}
      {s.table && (
        <div className="tablewrap">
          <table className="ledger wide">
            <thead><tr><th scope="col">Model</th><th scope="col">Breast cancer</th><th scope="col">Heart disease</th><th scope="col">Diabetes</th><th scope="col">Average</th></tr></thead>
            <tbody>{s.table.map(([m, a, b, c, d]) => (
              <tr key={m} className={m === 'Deep Neural Network' ? 'best' : ''}><td>{m}</td><td>{a.toFixed(1)}%</td><td>{b.toFixed(1)}%</td><td>{c.toFixed(1)}%</td><td><strong>{d.toFixed(1)}%</strong></td></tr>
            ))}</tbody>
          </table>
        </div>
      )}
      {s.after && <p>{s.after}</p>}
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const i = PROJECTS.findIndex(p => p.slug === slug)
  if (i < 0) return <NotFound />
  const p = PROJECTS[i]
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(i + 1) % PROJECTS.length]
  const facts = [['What', p.kind], ['For', p.ctx], ['My role', p.role]]
  if (p.when) facts.push(['When', p.when])

  return (
    <article className="case">
      <section className="wrap casehead">
        <Link className="back" to="/projects">All projects</Link>
        <Reveal as="h1">{p.name}</Reveal>
        <Reveal as="p" className="lede" delay={0.08}>{p.blurb}</Reveal>
        <Reveal as="dl" className="facts" delay={0.16}>
          {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </Reveal>
        {p.link && <Reveal className="actions" delay={0.22}><a className="btn" href={p.link}>{p.linkLabel}</a></Reveal>}
      </section>
      {p.showPipeline && <section className="wrap"><Reveal><Pipeline /></Reveal></section>}
      {p.showBook && <section className="wrap"><Reveal><OrderBook /></Reveal></section>}
      <section className="wrap casebody">
        {p.sections.map(s => <Section key={s.title} s={s} />)}
        <Reveal><h2>Built with</h2><Tags items={p.tags} /></Reveal>
      </section>
      <nav className="wrap pager" aria-label="More projects">
        <Link to={`/projects/${prev.slug}`}><span>Previous project</span>{prev.name}</Link>
        <Link to={`/projects/${next.slug}`} className="next"><span>Next project</span>{next.name}</Link>
      </nav>
    </article>
  )
}
