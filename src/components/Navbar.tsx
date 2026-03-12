import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { scrollToId } from '../lib/scroll'
import ThemeToggle from './ThemeToggle'

export type NavItem = { id: string; label: string }

export default function Navbar({
  items,
  theme,
  onToggleTheme,
}: {
  items: NavItem[]
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const shellCls = useMemo(
    () =>
      [
        'fixed inset-x-0 top-0 z-50',
        'transition-all',
        scrolled
          ? 'border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40'
          : 'bg-transparent',
      ].join(' '),
    [scrolled],
  )

  const go = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      scrollToId(id)
    }, 50)
  }

  return (
    <header className={shellCls}>
      <div className="container-shell flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => go('top')}
          className="group inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-900"
          aria-label="Go to top"
        >
          <span className="inline-flex items-baseline gap-1">
            <span className="text-xs font-semibold text-indigo-500/90 dark:text-indigo-300/90">
              &lt;
            </span>
            <span>Shivanand VN</span>
            <span className="text-xs font-semibold text-indigo-500/90 dark:text-indigo-300/90">
              /&gt;
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => go(it.id)}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={onToggleTheme} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-800 shadow-sm backdrop-blur transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-900 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/60 md:hidden overflow-hidden"
          >
            <div className="container-shell py-3">
              <div className="grid gap-1">
                {items.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => go(it.id)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
                  >
                    {it.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

