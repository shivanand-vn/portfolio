import type { ReactNode } from 'react'

export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300">
      {children}
    </span>
  )
}

