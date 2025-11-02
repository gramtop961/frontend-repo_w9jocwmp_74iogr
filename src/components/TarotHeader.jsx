import { Moon, Sun, Shuffle } from 'lucide-react'

function TarotHeader({ onDraw, isDark, toggleDark }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow ring-1 ring-black/10" />
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Arcana</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Tarot readings for guidance</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onDraw} className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:shadow-md transition-shadow active:scale-[.98]">
            <Shuffle className="h-4 w-4" /> Draw 3
          </button>
          <button
            aria-label="Toggle theme"
            onClick={toggleDark}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800 shadow-sm"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default TarotHeader
