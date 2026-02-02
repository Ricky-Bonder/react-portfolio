"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import Particles from "@/components/Particles"; // Adjust import path if needed
import Link from "next/link";

// The data array (same as homepage)
const experiences = [
  {
    id: 1,
    title: "Modern Full-Stack Platform",
    description: "Go, SvelteKit & Product Architecture",
    fullDescription:
      "Lead Developer for a cross-platform migration. Bridging UX design with a lightweight Go backend and reactive Svelte frontend to deliver high-performance architecture under total autonomy.",
    expslug: "go-svelte-web-app",
  },
  {
    id: 2,
    title: "Embedded Linux HMI",
    description: "Java 17, JavaFX & MQTT",
    fullDescription:
      "Developed the primary HMI and control logic using JavaFX on Embedded Linux. Ensured responsive UI performance while handling background API integration and telemetry.",
    expslug: "java-embedded-app",
  },
  {
    id: 3,
    title: "Reactive IoT Middleware",
    description: "Scala, Akka & Concurrency",
    fullDescription:
      "Engineered a fault-tolerant data acquisition service using Scala and Akka Actors. Focused on concurrency and reliability for buffering and forwarding sensor streams via MQTT.",
    expslug: "scala-backend",
  },
  {
    id: 4,
    title: "Legacy IoT Gateway",
    description: "Java 8, Serial & Web Protocols",
    fullDescription:
      "Maintained critical gateway middleware bridging legacy Serial devices with modern web interfaces. Optimized data transmission algorithms within a Java 8 environment.",
    expslug: "gateway-backend",
  },
  {
    id: 5,
    title: "Sensor Data Automation",
    description: "Python & Hardware Interfacing",
    fullDescription:
      "Built automated Python scripts for direct hardware interfacing and environmental monitoring. Streamlined sensor data retrieval and parsing for field performance verification.",
    expslug: "ev-monitor-backend",
  },
  {
    id: 6,
    title: "Self-Hosted Private Cloud",
    description: "Proxmox, Docker & Hybrid Networking",
    fullDescription:
      "Architected a production-grade home environment on Proxmox. Features Split-DNS networking, VPN tunneling for traffic isolation, and automated cold-storage backups via hardware integration.",
    expslug: "homelab-infrastructure",
  },
];

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.expslug, // "slug" deve corrispondere al nome della cartella [slug]
  }));
}

export default function ProjectsClient() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        
        {/* Background Particles */}
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

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 mt-10"
          >
            <h1 className="text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-foreground/70 text-lg max-w-2xl">
              A collection of my work in embedded systems, full-stack development, and digital experiences.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Animates only once when page loads
                transition={{ duration: 0.5, delay: experience.id * 0.1 }}
                whileHover={{ y: -5 }}
                className="border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer bg-background/50 backdrop-blur-sm"
                onClick={() =>
                  localStorage.setItem(
                    "experienceData",
                    JSON.stringify({
                      title: experience.title,
                      description: experience.description,
                      fullDescription: experience.fullDescription,
                    })
                  )
                }
              >
                <Link href={`/experiences/${experience.expslug}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {experience.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70">
                    {experience.description}
                  </p>
                  <p className="text-foreground/60 mt-2 line-clamp-3 text-sm">
                    {experience.fullDescription}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}