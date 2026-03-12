import { motion } from 'framer-motion'
import { FiCopy, FiMail, FiPhone } from 'react-icons/fi'
import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { portfolio } from '../data/portfolio'

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // ignore
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 dark:border-zinc-800/70 dark:bg-zinc-950/20">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-800 shadow-sm backdrop-blur transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-900"
        aria-label={`Copy ${label}`}
        title={copied ? 'Copied!' : 'Copy'}
      >
        <FiCopy />
      </button>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          description="If you have an opportunity or a project idea, I’d love to connect."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <Card className="h-full">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Reach me directly
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    Email is best for detailed messages. You can also connect on GitHub / LinkedIn.
                  </p>
                </div>

                <SocialLinks
                  github={portfolio.links.github}
                  linkedin={portfolio.links.linkedin}
                  email={portfolio.email}
                />

                <div className="flex flex-col gap-3">
                  <CopyRow label="Email" value={portfolio.email} />
                  <CopyRow label="Phone" value={portfolio.phone} />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={`mailto:${portfolio.email}`} className="w-full sm:w-auto">
                    <FiMail />
                    Email
                  </Button>
                  <Button href={`tel:${portfolio.phone.replaceAll(' ', '')}`} variant="secondary" className="w-full sm:w-auto">
                    <FiPhone />
                    Call
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <Card className="h-full">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                What I’m looking for
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                A software development role where I can apply my skills in full-stack development and Python programming to build impactful applications, collaborate with experienced developers, and continuously improve through real-world problem solving.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 dark:border-zinc-800/70 dark:bg-zinc-950/20">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Preferred work
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-50">
                    Building Web Applications, Backend APIs, Data Science Solutions & Cloud-Based Systems
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-5 dark:border-zinc-800/70 dark:bg-zinc-950/20">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Strength
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    Building and Delivering Practical Software Solutions
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

