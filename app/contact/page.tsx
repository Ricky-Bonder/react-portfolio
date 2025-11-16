'use client'

import { Navbar } from '@/components/layout/navbar'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-12">Get in Touch</h1>

            <form className="max-w-2xl space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg bg-background"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg bg-background"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg bg-background"
                  rows={6}
                  placeholder="Your message"
                />
              </div>

              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  )
}
