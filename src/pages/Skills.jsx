import Reveal from '../components/Reveal.jsx'
import Tags from '../components/Tags.jsx'
import { SKILLS } from '../data/content.js'

export default function Skills() {
  return (
    <>
      <section className="wrap pagehead">
        <Reveal as="h1">Skills</Reveal>
        <Reveal as="p" className="lede" delay={0.1}>The tools I’ve used on real projects. Each one shows up in the work on this site.</Reveal>
      </section>
      <section className="wrap block sgrid">
        {SKILLS.map(([g, items], i) => (
          <Reveal key={g} className="sgroup" delay={(i % 2) * 0.08}><h2>{g}</h2><Tags items={items} /></Reveal>
        ))}
      </section>
      <section className="wrap block">
        <Reveal className="learning"><h2>Learning now</h2><p>RAG and vector databases, AI agents and tool calling, Docker and Kubernetes.</p></Reveal>
      </section>
    </>
  )
}
