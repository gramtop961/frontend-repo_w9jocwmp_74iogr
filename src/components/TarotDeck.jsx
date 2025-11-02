import { useMemo } from 'react'
import { motion } from 'framer-motion'

// Minimal major arcana selection with upright/reversed meanings
const TAROT = [
  { key: 'the-fool', name: 'The Fool', emoji: '🎒', upright: 'New beginnings, spontaneity, free spirit', reversed: 'Recklessness, holding back, risk without plan' },
  { key: 'the-magician', name: 'The Magician', emoji: '🪄', upright: 'Manifestation, resourcefulness, power', reversed: 'Manipulation, untapped talents' },
  { key: 'the-high-priestess', name: 'The High Priestess', emoji: '🌙', upright: 'Intuition, inner voice, mystery', reversed: 'Secrets, disconnected from intuition' },
  { key: 'the-empress', name: 'The Empress', emoji: '🌿', upright: 'Abundance, nurturing, creation', reversed: 'Creative block, dependency' },
  { key: 'the-emperor', name: 'The Emperor', emoji: '🛡️', upright: 'Authority, structure, stability', reversed: 'Rigidity, domination' },
  { key: 'the-hierophant', name: 'The Hierophant', emoji: '📜', upright: 'Tradition, learning, guidance', reversed: 'Rebel, personal beliefs' },
  { key: 'the-lovers', name: 'The Lovers', emoji: '💞', upright: 'Love, harmony, values alignment', reversed: 'Imbalance, difficult choices' },
  { key: 'the-chariot', name: 'The Chariot', emoji: '🚀', upright: 'Willpower, determination, success', reversed: 'Self-doubt, lack of direction' },
  { key: 'strength', name: 'Strength', emoji: '🦁', upright: 'Courage, compassion, resilience', reversed: 'Self-doubt, raw emotion' },
  { key: 'the-hermit', name: 'The Hermit', emoji: '🏔️', upright: 'Soul-searching, introspection', reversed: 'Isolation, withdrawal' },
  { key: 'wheel-of-fortune', name: 'Wheel of Fortune', emoji: '🎡', upright: 'Change, cycles, fate', reversed: 'Resistance to change, setbacks' },
  { key: 'justice', name: 'Justice', emoji: '⚖️', upright: 'Fairness, truth, law', reversed: 'Dishonesty, unfairness' },
  { key: 'the-hanged-man', name: 'The Hanged Man', emoji: '🪢', upright: 'Surrender, new perspective', reversed: 'Stalling, needless sacrifice' },
  { key: 'death', name: 'Death', emoji: '🦋', upright: 'Endings, transformation, transition', reversed: 'Resistance to change, stagnation' },
  { key: 'temperance', name: 'Temperance', emoji: '🏺', upright: 'Balance, patience, purpose', reversed: 'Extremes, discord' },
  { key: 'the-devil', name: 'The Devil', emoji: '🔥', upright: 'Attachment, temptation, shadow', reversed: 'Reclaiming power, freedom' },
  { key: 'the-tower', name: 'The Tower', emoji: '⚡', upright: 'Sudden change, upheaval, awakening', reversed: 'Averting disaster, fear of change' },
  { key: 'the-star', name: 'The Star', emoji: '✨', upright: 'Hope, renewal, serenity', reversed: 'Disconnection, doubt' },
  { key: 'the-moon', name: 'The Moon', emoji: '🌘', upright: 'Illusion, intuition, dreams', reversed: 'Confusion lifting, clarity' },
  { key: 'the-sun', name: 'The Sun', emoji: '🌞', upright: 'Joy, vitality, success', reversed: 'Temporary sadness, doubt' },
  { key: 'judgement', name: 'Judgement', emoji: '🎺', upright: 'Rebirth, inner calling, absolution', reversed: 'Self-doubt, ignoring the call' },
  { key: 'the-world', name: 'The World', emoji: '🌍', upright: 'Completion, wholeness, achievement', reversed: 'Delay, lack of closure' },
]

function pickThree() {
  const pool = [...TAROT]
  const picks = []
  for (let i = 0; i < 3; i++) {
    const idx = Math.floor(Math.random() * pool.length)
    const card = pool.splice(idx, 1)[0]
    const reversed = Math.random() < 0.45
    picks.push({ ...card, reversed })
  }
  return picks
}

function TarotDeck({ onDraw, cards }) {
  const placeholders = useMemo(() => Array.from({ length: 12 }), [])

  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none select-none opacity-60 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
        <div className="-z-0 h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {placeholders.map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: (Math.random() - 0.5) * 6, y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.02 }}
            className="aspect-[3/5] rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 shadow-inner border border-black/5 dark:border-white/10"
          >
            <div className="h-full w-full flex items-center justify-center text-2xl">🔮</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          onClick={() => onDraw(pickThree())}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow hover:shadow-md transition-shadow active:scale-[.98]"
        >
          Draw Past • Present • Future
        </button>
        <p className="text-xs text-gray-600 dark:text-gray-400">Readings are for reflection and insight — take what resonates.</p>
      </div>

      {cards && cards.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((c, idx) => (
            <motion.div
              key={c.key}
              initial={{ rotate: c.reversed ? 180 : 0, y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: idx * 0.05 }}
              className="relative aspect-[3/5] rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10" />
              <div className="relative h-full w-full p-4 flex flex-col">
                <div className="text-4xl mb-2 select-none">{c.emoji}</div>
                <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {['Past','Present','Future'][idx]}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {c.name} {c.reversed ? '(Reversed)' : ''}
                </h3>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {c.reversed ? c.reversed : c.upright}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default TarotDeck
