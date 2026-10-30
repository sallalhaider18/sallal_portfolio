import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, value, { duration: 1.4, ease: [0.2, 0.7, 0.2, 1], onUpdate: v => setN(v) })
    return () => c.stop()
  }, [inView, value, reduce])

  return <span ref={ref} className="num">{n.toFixed(decimals)}{suffix}</span>
}
