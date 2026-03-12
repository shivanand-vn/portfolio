import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

const items = [
  {
    icon: FiLayout,
    title: 'Frontend',
    text: 'Modern, responsive UIs with React and Tailwind.',
  },
  {
    icon: FiCode,
    title: 'Backend',
    text: 'APIs and full stack apps with Node.js + Express.',
  },
  {
    icon: FiDatabase,
    title: 'Databases',
    text: 'Reliable data with MongoDB and MySQL.',
  },
  {
    icon: FiCode,
    title: 'Automation',
    text: 'Python + Tkinter tools that save time and reduce errors.',
  },
] as const

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="A developer who ships practical solutions"
          description="I like building products that feel polished, load fast, and make workflows simpler."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="space-y-4">
              {portfolio.about.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {p}
                </p>
              ))}
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
                      <it.icon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {it.title}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{it.text}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

