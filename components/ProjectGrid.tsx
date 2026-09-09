"use client";

import { motion } from "framer-motion";
import { personalProjects, workProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

/**
 * Work and personal projects, split into two labelled groups.
 * Shared by the home page and /projects.
 */
export function ProjectGrid() {
  return (
    <div className="space-y-16">
      <section aria-labelledby="work-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 id="work-heading" className="text-4xl sm:text-5xl font-bold mb-3">
            Work
          </h2>
          <p className="text-foreground/70 text-lg">
            Products I have built and maintained as a software engineer, newest
            first.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="personal-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 id="personal-heading" className="text-3xl sm:text-4xl font-bold mb-3">
            Personal Project
          </h2>
          <p className="text-foreground/70 text-lg">
            What I run and tinker with outside of work.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} wide />
          ))}
        </div>
      </section>
    </div>
  );
}
