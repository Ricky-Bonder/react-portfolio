"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import { Cpu, Layers, Users, Zap } from "lucide-react";
import type { Project } from "@/lib/data";
import { BackLink } from "@/components/BackLink";
import { ProjectIcon } from "@/components/ProjectIcon";

function TechStack({ project }: { project: Project }) {
  return (
    <>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Zap className="w-5 h-5 text-primary" />
        Tech Stack
      </h3>
      <ul className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech.name}
            title={tech.category}
            className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/10 hover:border-primary/30 transition-colors cursor-default"
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ExperienceDetailClient({ project }: { project: Project }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* HERO */}
        <section className="relative pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <BackLink />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm font-medium text-primary/60 uppercase tracking-wider">
              <span className="inline-flex items-center gap-2">
                <ProjectIcon name={project.icon} className="w-4 h-4" />
                {project.kind === "work" ? "Work" : "Personal project"}
              </span>
              <span aria-hidden>•</span>
              <span>{project.role}</span>
              <span aria-hidden>•</span>
              <span>{project.timeline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Tech stack: first on phones (right under the tagline), sticky sidebar on desktop */}
            <aside className="order-first lg:order-last lg:col-span-1">
              <motion.div
                className="lg:sticky lg:top-24 p-6 border border-primary/20 rounded-2xl bg-background/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <TechStack project={project} />
              </motion.div>
            </aside>

            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-primary" />
                  Overview
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                  {project.overview}
                </p>
              </motion.div>

              {project.challenges.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary" />
                    Engineering Challenges
                  </h2>
                  <div className="grid gap-6">
                    {project.challenges.map((c) => (
                      <div key={c.title} className="bg-primary/5 border border-primary/10 p-6 rounded-xl">
                        <h3 className="font-bold text-lg mb-2 text-primary">{c.title}</h3>
                        <p className="text-foreground/70">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.responsibilities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Key Responsibilities
                  </h2>
                  <ul className="space-y-4">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-lg text-foreground/80">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
