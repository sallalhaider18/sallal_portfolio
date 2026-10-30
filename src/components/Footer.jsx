import { PROFILE } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <p>Sallal Haider, Software &amp; AI Engineer. Lahore, Pakistan.</p>
        <p>
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> &nbsp;|&nbsp; <a href={PROFILE.linkedin}>LinkedIn</a> &nbsp;|&nbsp; <a href={PROFILE.github}>GitHub</a>
        </p>
      </div>
    </footer>
  )
}
