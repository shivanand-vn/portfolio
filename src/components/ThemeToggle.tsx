import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({
  theme,
  toggle,
}: {
  theme: 'light' | 'dark'
  toggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-800 shadow-sm backdrop-blur transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-900"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}

