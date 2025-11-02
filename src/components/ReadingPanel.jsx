import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

function Item({ title, text }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-3 bg-white/70 dark:bg-zinc-900/60">
      <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{title}</div>
      <p className="text-sm text-gray-800 dark:text-gray-200">{text}</p>
    </div>
  )
}

function ReadingPanel({ cards }) {
  if (!cards || cards.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-black/10 dark:border-white/10 p-6 text-center text-gray-600 dark:text-gray-400 bg-white/40 dark:bg-zinc-900/40">
        <div className="flex items-center justify-center gap-2">
          <Info className="h-4 w-4" />
          <span>Draw three cards to reveal your reading.</span>
        </div>
      </div>
    )
  }

  const [past, present, future] = cards

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/70 dark:bg-zinc-900/60"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Your Reading</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        <Item title={`${past.name} — Past`} text={past.reversed ? past.reversed : past.upright} />
        <Item title={`${present.name} — Present`} text={present.reversed ? present.reversed : present.upright} />
        <Item title={`${future.name} — Future`} text={future.reversed ? future.reversed : future.upright} />
      </div>
      <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
        This spread offers reflections, not certainties. Trust your intuition and personal context.
      </p>
    </motion.section>
  )
}

export default ReadingPanel
