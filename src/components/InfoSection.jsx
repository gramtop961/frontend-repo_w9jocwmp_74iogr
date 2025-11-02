function InfoSection() {
  return (
    <section className="mt-10 rounded-xl p-6 border border-black/10 dark:border-white/10 bg-gradient-to-br from-fuchsia-50 to-indigo-50 dark:from-fuchsia-950/30 dark:to-indigo-950/30">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">How it works</h3>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <li>Set an intention or question in your mind.</li>
        <li>Draw three cards to explore Past, Present, and Future influences.</li>
        <li>Meanings are shown upright or reversed—use them as prompts for reflection.</li>
      </ul>
      <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
        Tarot is a mirror. There are no predictions here—only perspectives to consider as you navigate your path.
      </p>
    </section>
  )
}

export default InfoSection
