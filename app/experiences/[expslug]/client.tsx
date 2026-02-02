// app/experiences/[expslug]/client.tsx
"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cpu, Layers, Users, Zap } from "lucide-react";

// Define the shape of your data
interface ProjectData {
  title: string;
  role: string;
  timeline: string;
  tagline: string;
  overview: string;
  techStack: Array<{ name: string; category: string }>;
  challenges?: Array<{ title: string; description: string }>;
  responsibilities?: string[];
}

export default function ExperienceDetailClient({
  data,
}: {
  data: ProjectData;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-primary/80 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-sm font-medium text-primary/60 uppercase tracking-wider">
              <span>{data.role}</span>
              <span className="hidden md:block">•</span>
              <span>{data.timeline}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {data.title}
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed">
              {data.tagline}
            </p>
          </motion.div>
        </section>

        {/* MAIN CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* LEFT COLUMN: NARRATIVE */}
            <div className="lg:col-span-2 space-y-16">
              {/* OVERVIEW */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-primary" />
                  The Overview
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                  {data.overview}
                </p>
              </motion.div>

              {/* CHALLENGES (Only render if they exist) */}
              {data.challenges && data.challenges.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary" />
                    Engineering Challenges
                  </h2>
                  <div className="grid gap-6">
                    {data.challenges.map((c, i) => (
                      <div
                        key={i}
                        className="bg-primary/5 border border-primary/10 p-6 rounded-xl"
                      >
                        <h3 className="font-bold text-lg mb-2 text-primary">
                          {c.title}
                        </h3>
                        <p className="text-foreground/70">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* RESPONSIBILITIES (Only render if they exist) */}
              {data.responsibilities && data.responsibilities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Key Responsibilities
                  </h2>
                  <ul className="space-y-4">
                    {data.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-lg text-foreground/80"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* RIGHT COLUMN: TECH STACK STICKY */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-24 p-6 border border-primary/20 rounded-2xl bg-background/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/10 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
