import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Card from './Card'
import Chip from './Chip'
import Button from './Button'

export type Project = {
  title: string
  tech: readonly string[]
  description: string
  highlights: readonly string[]
  links?: { github?: string; live?: string }
  images?: readonly { src: string; alt: string }[]
  appreciationBadge?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
      <Card className="h-full">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400 dark:bg-zinc-600" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.links?.github ? (
              <Button href={project.links.github} variant="secondary" ariaLabel="Open GitHub repository">
                <FiGithub />
                GitHub
              </Button>
            ) : null}
            {project.links?.live ? (
              <Button href={project.links.live} variant="ghost" ariaLabel="Open live site">
                <FiExternalLink />
                Live
              </Button>
            ) : null}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

