import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ROWS = 8
function widths() {
  return Array.from({ length: ROWS * 2 }, (_, n) => {
    const r = n % ROWS
    const base = r === 0 || r === ROWS - 1 ? 55 : 25
    return Math.round(base + Math.random() * 45)
  })
}

// Decorative illustration of a live order book (random values, not real data).
export default function OrderBook() {
  const reduce = useReducedMotion()
  const [w, setW] = useState(widths)
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setW(widths()), 1400)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <figure className="book" aria-label="Illustration of a live order book">
      <figcaption>
        <strong>A live order book, illustrated</strong>
        <span>Bids and asks shift every second. MarketMind watches what happens at your level.</span>
      </figcaption>
      <div className="book-grid">
        <div className="side asks">
          {w.slice(0, ROWS).map((x, i) => <motion.i key={i} animate={{ width: x + '%' }} transition={{ duration: 0.8 }} />)}
        </div>
        <div className="mid"><span>Your level</span></div>
        <div className="side bids">
          {w.slice(ROWS).map((x, i) => <motion.i key={i} animate={{ width: x + '%' }} transition={{ duration: 0.8 }} />)}
        </div>
      </div>
    </figure>
  )
}
