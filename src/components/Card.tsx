import type { ReactNode } from 'react'

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 shadow-sm backdrop-blur',
        'transition-colors dark:border-zinc-800/70 dark:bg-zinc-950/30',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/15 to-fuchsia-400/10 blur-2xl dark:from-indigo-500/20 dark:to-fuchsia-500/10" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400/10 to-sky-400/10 blur-2xl dark:from-emerald-500/10 dark:to-sky-500/10" />
      </div>
      <div className="relative p-6">{children}</div>
    </div>
  )
}

