"use client";

import { Navbar } from "@/components/layout/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Rileviamo se il dispositivo è touch/mobile
  useEffect(() => {
    const checkMobile = () => {
      // Controlla se lo schermo è < 768px (tablet/mobile standard)
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile(); // Check iniziale
    window.addEventListener("resize", checkMobile); // Check al resize
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Definiamo le varianti per orchestrare l'animazione "Attiva"
  const cardVariants = {
    idle: { scale: 1, y: 0 },
    active: { scale: 1.02, y: -5 },
  };
  const glowVariants = {
    idle: { opacity: 0.2 }, // Leggermente visibile di base o 0 se preferisci
    active: { opacity: 1 },
  };

  const readMoreVariants = {
    idle: { opacity: 0, x: -10 },
    active: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-foreground/70 text-lg mb-12">
              A collection of my work in embedded systems, full-stack
              development, and digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                initial="idle"
                whileHover={!isMobile ? "active" : undefined}
                whileInView={isMobile ? "active" : undefined}
                // Viewport setting per mobile: si attiva quando il 50% della card è visibile
                viewport={{ amount: 0.5, margin: "0px 0px -100px 0px" }}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="relative group rounded-xl cursor-pointer"
                onClick={() =>
                  localStorage.setItem(
                    "experienceData",
                    JSON.stringify(experience),
                  )
                }
              >
                {/* --- Livello Bagliore Gradiente (Gestito da Variants) --- */}
                <motion.div
                  variants={glowVariants}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur -z-10"
                />

                <motion.div
                  className="relative h-full w-full bg-background/95 backdrop-blur-sm p-6 rounded-xl border transition-colors"
                  animate={isMobile ? "active" : undefined}
                  style={{ borderWidth: 1 }}
                >
                  <Link
                    href={`/experiences/${experience.expslug}`}
                    className="block h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {/* Icona ID */}
                        <motion.span
                          className="font-bold"
                        >
                          {experience.id}
                        </motion.span>
                      </div>

                      {/* Titolo */}
                      <motion.h3
                        className="text-xl font-bold"
                      >
                        {experience.title}
                      </motion.h3>
                    </div>

                    <p className="text-foreground/70">
                      {experience.description}
                    </p>
                    <p className="text-foreground/60 mt-2 line-clamp-3 text-sm">
                      {experience.fullDescription}
                    </p>

                    {/* Indicatore Read More */}
                    <motion.div
                      variants={readMoreVariants}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-primary font-medium flex items-center gap-1"
                    >
                      Read more <span>→</span>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
