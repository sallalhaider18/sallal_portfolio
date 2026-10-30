import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV = [['/', 'Home'], ['/projects', 'Projects'], ['/experience', 'Experience'], ['/skills', 'Skills'], ['/contact', 'Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'dark')
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    if (next === 'light') document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
    try { localStorage.setItem('theme', next) } catch (e) { /* storage unavailable */ }
    setTheme(next)
  }

  return (
    <header className={'top' + (scrolled ? ' scrolled' : '')}>
      <Link className="mark" to="/" aria-label="Sallal Haider, home">SH</Link>
      <nav id="nav" aria-label="Main" className={open ? 'open' : ''}>
        {NAV.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
        ))}
      </nav>
      <div className="top-right">
        <button className="theme" type="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <button className="menu" type="button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
