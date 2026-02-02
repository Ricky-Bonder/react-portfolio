'use client'

import { Navbar } from '@/components/layout/navbar'
import { Server, Cpu, Code2, Globe, Terminal, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import Particles from '@/components/Particles' // Adjust path if needed

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        
        {/* --- BACKGROUND PARTICLES --- */}
        <div className="absolute inset-0 z-0">
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.05}
              particleBaseSize={80}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* --- HERO SECTION --- */}
            <section className="mb-16">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Product-Minded <span className="text-primary">Software Engineer.</span>
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-foreground/70">
                I bridge the gap between resource-constrained <strong>Embedded Linux</strong> systems and 
                high-performance <strong>Modern Web</strong> interfaces. With 5 years of experience, 
                I don't just write code - I own the full product lifecycle, translating vague business 
                requirements into concrete, scalable technical architectures.
              </p>
            </section>

            {/* --- CORE PHILOSOPHY --- */}
            <section className="mb-20 grid gap-10 md:grid-cols-2">
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Full-Stack Autonomy</h3>
                <p className="text-foreground/70">
                  Currently driving complex applications using <strong>Go</strong> and <strong>SvelteKit</strong>. 
                  I operate with total autonomy, acting as the primary technical stakeholder bridging 
                  Product Owners (PO) and User Experience (UX) designers.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Embedded Roots</h3>
                <p className="text-foreground/70">
                  My background isn't just web. I have deep experience with <strong>Java/Scala</strong> on 
                  embedded gateways, optimizing JVM parameters, managing Serial/MQTT protocols, and 
                  handling data in unstable network conditions.
                </p>
              </motion.div>
            </section>

            {/* --- TECH ARSENAL --- */}
            <section className="mb-20">
              <h2 className="mb-8 text-3xl font-bold text-foreground">Technical Arsenal</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                
                {/* Languages */}
                <div className="group rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-5 transition-all hover:border-primary/50">
                  <div className="mb-3 flex items-center gap-2 text-foreground">
                    <Code2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Languages</span>
                  </div>
                  <ul className="space-y-1 text-sm text-foreground/70">
                    <li>Go (Golang)</li>
                    <li>TypeScript / JS</li>
                    <li>Java (8/11/17)</li>
                    <li>Scala</li>
                    <li>Python</li>
                  </ul>
                </div>

                {/* Stack */}
                <div className="group rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-5 transition-all hover:border-primary/50">
                  <div className="mb-3 flex items-center gap-2 text-foreground">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Web & UI</span>
                  </div>
                  <ul className="space-y-1 text-sm text-foreground/70">
                    <li>Svelte & SvelteKit</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5 / CSS3</li>
                    <li>Playwright</li>
                    <li>Storybook</li>
                  </ul>
                </div>

                {/* Systems */}
                <div className="group rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-5 transition-all hover:border-primary/50">
                  <div className="mb-3 flex items-center gap-2 text-foreground">
                    <Server className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Backend</span>
                  </div>
                  <ul className="space-y-1 text-sm text-foreground/70">
                    <li>Gin & Gorm</li>
                    <li>PostgreSQL / SQL</li>
                    <li>MQTT & Serial</li>
                    <li>RESTful APIs</li>
                    <li>Akka Actors</li>
                  </ul>
                </div>

                {/* DevOps */}
                <div className="group rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-5 transition-all hover:border-primary/50">
                  <div className="mb-3 flex items-center gap-2 text-foreground">
                    <Terminal className="h-5 w-5 text-primary" />
                    <span className="font-semibold">DevOps</span>
                  </div>
                  <ul className="space-y-1 text-sm text-foreground/70">
                    <li>Docker & Compose</li>
                    <li>Linux (Debian/Ubuntu)</li>
                    <li>Proxmox VE</li>
                    <li>CI/CD Pipelines</li>
                    <li>Git (GitHub/GitLab)</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* --- PERSONAL / HOMELAB --- */}
            <section className="rounded-3xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Beyond the Code</h2>
              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
                I am a continuous learner with a passion for self-hosting. I architect and maintain 
                a production-grade <strong>Homelab</strong> running on Proxmox and Docker, managing everything from 
                networking security (Split DNS, VPNs) to automated backups and home automation.
              </p>
              <div className="flex flex-wrap gap-3">
                {['System Admin', 'Astronomy', 'Hiking', 'International Travel'].map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
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