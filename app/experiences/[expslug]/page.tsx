'use client'

import { Navbar } from '@/components/layout/navbar'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ExperienceDetail({
  params,
}: {
  params: { expslug: string }
}) {
  const [experienceData, setExperienceData] = useState<{ title: string; description: string, fullDescription: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('experienceData')
    if (stored) {
      setExperienceData(JSON.parse(stored))
    }
  }, [])

  const fallbackTitle = params.expslug.replace(/-/g, ' ').replace(/\b\w/g, (char: string) => char.toUpperCase())
  const title = experienceData?.title || fallbackTitle
  const description = experienceData?.description || 'No description available'
  const fullDescription = experienceData?.fullDescription || ''

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
              {title}
            </h1>
            <p className="text-xl text-foreground/70">
              {description}
            </p>
            <p className="text-lg text-foreground/60 mt-4">
              {fullDescription}
            </p>
          </motion.div>
        </div>
      </main>
    </>
  )
}
