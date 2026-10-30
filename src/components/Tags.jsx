import { motion } from 'framer-motion'

export default function Tags({ items }) {
  return (
    <motion.ul
      className="tags"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.03 } } }}
    >
      {items.map(t => (
        <motion.li key={t} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>{t}</motion.li>
      ))}
    </motion.ul>
  )
}
