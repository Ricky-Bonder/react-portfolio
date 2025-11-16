'use client'
import { Navbar } from '@/components/layout/navbar'
import { motion } from 'framer-motion'


export default function AboutDetails({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <>
      <Navbar />
       <main className="min-h-screen">
        <h1>About Page</h1>
        <p>Determined figure, versatile in problem solving, always open to improve and learn new technologies, and dedicated to meeting clients’ needs. Inclined to teamwork, and adept at collaborating with cross-functional teams. Strong motivation and desire for professional growth in the IT field are a driving factor towards personal objectives.</p>
        </main>
    </>
  )
}