'use client'

import { Navbar } from '@/components/layout/navbar'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A modern web application',
    slug: 'project-1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Full-stack solution',
    slug: 'project-2',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-12">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="border border-primary/20 rounded-lg p-6 cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-foreground/70">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
