import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  right?: ReactNode
}

export default function SectionHeading({ eyebrow, title, description, right }: Props) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        ) : null}
      </div>
      {right ? <div className="hidden sm:block">{right}</div> : null}
    </div>
  )
}

