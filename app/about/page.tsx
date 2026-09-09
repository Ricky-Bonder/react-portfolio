'use client'

import { Navbar } from '@/components/layout/navbar'
import { Server, Cpu, Code2, Globe, Terminal, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemedParticles from '@/components/ThemedParticles'
import { yearsOfExperience } from '@/lib/data'

const arsenal = [
  { icon: Code2, title: 'Languages', items: ['Go (Golang)', 'TypeScript / JS', 'Java (8/11/17)', 'Scala', 'Python'] },
  { icon: Globe, title: 'Web & UI', items: ['Svelte & SvelteKit', 'Tailwind CSS', 'HTML5 / CSS3', 'Playwright', 'Storybook'] },
  { icon: Server, title: 'Backend', items: ['Gin & Gorm', 'PostgreSQL / SQL', 'MQTT & Serial', 'RESTful APIs', 'Akka Actors'] },
  { icon: Terminal, title: 'DevOps', items: ['Docker & Compose', 'Linux (Debian/Ubuntu)', 'Proxmox VE', 'CI/CD Pipelines', 'Git (GitHub/GitLab)'] },
]

export default function AboutPage() {
  const years = yearsOfExperience()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <ThemedParticles />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-20 md:px-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* HERO */}
            <section className="mb-16">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Product-Minded <span className="text-primary">Software Engineer.</span>
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
                I bridge the gap between resource-constrained <strong>Embedded Linux</strong> systems and
                high-performance <strong>Modern Web</strong> interfaces. With {years}+ years of experience,
                I own the full product lifecycle: from vague business requirements to concrete,
                scalable technical architectures.
              </p>
            </section>

            {/* CORE PHILOSOPHY */}
            <section className="mb-20 grid gap-10 md:grid-cols-2">
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Full-Stack Ownership</h3>
                <p className="text-foreground/70">
                  Currently building complex applications with <strong>Go</strong> and <strong>SvelteKit</strong>,
                  as the technical counterpart to the Product Owner and the UX designer.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Embedded Roots</h3>
                <p className="text-foreground/70">
                  My background is not only web. I have deep experience with <strong>Java/Scala</strong> on
                  embedded gateways: tuning JVM parameters, speaking Serial and MQTT, and keeping data
                  flowing on unstable networks.
                </p>
              </motion.div>
            </section>

            {/* TECH ARSENAL */}
            <section className="mb-20">
              <h2 className="mb-8 text-3xl font-bold text-foreground">Technical Arsenal</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {arsenal.map(({ icon: Icon, title, items }) => (
                  <div
                    key={title}
                    className="group rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-5 transition-all hover:border-primary/50"
                  >
                    <div className="mb-3 flex items-center gap-2 text-foreground">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{title}</span>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground/70">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* PERSONAL */}
            <section className="rounded-3xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Beyond the Code</h2>
              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
                I am a continuous learner with a passion for self-hosting. I run a
                <strong> homelab</strong> on Proxmox and Docker with 20+ services, handling everything from
                network security (split DNS, VPNs) to automated backups and home automation.
              </p>
              <div className="flex flex-wrap gap-3">
                {['System Admin', 'Astronomy', 'Hiking', 'International Travel'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </>
  )
}
