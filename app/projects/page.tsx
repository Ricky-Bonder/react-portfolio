"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import ThemedParticles from "@/components/ThemedParticles";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <ThemedParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-foreground/70 text-lg max-w-2xl">
              Embedded systems, backend services and web applications from my
              professional work, plus the infrastructure I run at home.
            </p>
          </motion.div>

          <ProjectGrid />
        </div>
      </main>
    </>
  );
}
