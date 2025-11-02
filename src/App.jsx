import { useEffect, useState } from 'react'
import TarotHeader from './components/TarotHeader'
import TarotDeck from './components/TarotDeck'
import ReadingPanel from './components/ReadingPanel'
import InfoSection from './components/InfoSection'

function App() {
  const [cards, setCards] = useState([])
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('arcana-theme') : null
    const prefers = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
    const dark = stored ? stored === 'dark' : prefers
    setIsDark(dark)
    if (dark) document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('arcana-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('arcana-theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <TarotHeader onDraw={(picks) => setCards(picks)} isDark={isDark} toggleDark={() => setIsDark((v) => !v)} />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Daily Tarot</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Shuffle the deck, draw three cards, and reflect on the story they tell.</p>
        </div>

        <TarotDeck onDraw={(picks) => setCards(picks)} cards={cards} />

        <div className="mt-8">
          <ReadingPanel cards={cards} />
        </div>

        <InfoSection />
      </main>

      <footer className="border-t border-black/5 dark:border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-4 text-xs text-gray-500 dark:text-gray-400">
          For entertainment and reflection only.
        </div>
      </footer>
    </div>
  )
}

export default App
