'use client'

import { Navbar } from '@/components/layout/navbar'
import { motion } from 'framer-motion'

export default function ProjectDetail({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              {params.slug.replace('-', ' ')}
            </h1>
            <p className="text-xl text-foreground/70">
              Project details for {params.slug}
            </p>
          </motion.div>
        </div>
      </main>
    </>
  )
}
