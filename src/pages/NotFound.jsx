import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="wrap pagehead">
      <h1>Page not found</h1>
      <p className="lede">This page doesn’t exist. Try the projects page instead.</p>
      <div className="actions"><Link className="btn primary" to="/projects">Go to projects</Link></div>
    </section>
  )
}
