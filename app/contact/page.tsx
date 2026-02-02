'use client'

import { Navbar } from '@/components/layout/navbar'
import { motion } from 'framer-motion'
import Particles from '@/components/Particles'
import { useState } from 'react'
import { Send, Mail, MapPin, Github, Linkedin, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Using Formspree for static site email handling
    // Ensure you have NEXT_PUBLIC_FORMSPREE_ID in your .env.local
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID; 
    
    if (!formId) {
      console.error("Formspree ID missing");
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        
        {/* --- PARTICLES BACKGROUND --- */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
          >
            
            {/* --- LEFT COLUMN: INFO --- */}
            <div>
              <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
                Have a project in mind or want to discuss embedded systems? 
                I'm always open to discussing new opportunities and interesting technical challenges.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-foreground/70">riccardo.ossola.work@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-foreground/70">Varese, Italy (Remote available)</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/20">
                  <h3 className="font-semibold text-lg mb-4">Connect</h3>
                  <div className="flex gap-4">
                    <Link 
                      href="https://github.com/Ricky-Bonder" 
                      target="_blank"
                      className="p-3 rounded-lg border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/riccardo-ossola/" 
                      target="_blank"
                      className="p-3 rounded-lg border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: FORM --- */}
            <div className="lg:mt-8">
              <div className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Insert your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Insert your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-center"
                    >
                      Something went wrong. Please try again or email directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>

          </motion.div>
        </div>
      </main>
    </>
  )
}