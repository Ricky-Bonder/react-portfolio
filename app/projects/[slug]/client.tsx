"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import Particles from "@/components/Particles"; 
import Link from "next/link";

// Dati completi per la visualizzazione
const experiences = [
  {
    id: 1,
    title: "Modern Full-Stack Platform",
    description: "Go, SvelteKit & Product Architecture",
    fullDescription: "Lead Developer for a cross-platform migration...",
    expslug: "go-svelte-web-app",
  },
  {
    id: 2,
    title: "Embedded Linux HMI",
    description: "Java 17, JavaFX & MQTT",
    fullDescription: "Developed the primary HMI and control logic...",
    expslug: "java-embedded-app",
  },
  // ... assicurati di copiare tutti gli oggetti dal file precedente ...
  {
    id: 3,
    title: "Reactive IoT Middleware",
    description: "Scala, Akka & Concurrency",
    fullDescription: "Engineered a fault-tolerant data acquisition service...",
    expslug: "scala-backend",
  },
  {
    id: 4,
    title: "Legacy IoT Gateway",
    description: "Java 8, Serial & Web Protocols",
    fullDescription: "Maintained critical gateway middleware...",
    expslug: "gateway-backend",
  },
  {
    id: 5,
    title: "Sensor Data Automation",
    description: "Python & Hardware Interfacing",
    fullDescription: "Built automated Python scripts...",
    expslug: "ev-monitor-backend",
  },
  {
    id: 6,
    title: "Self-Hosted Private Cloud",
    description: "Proxmox, Docker & Hybrid Networking",
    fullDescription: "Architected a production-grade home environment...",
    expslug: "homelab-infrastructure",
  },
];

export default function ProjectDetailClient({ params }: { params: { slug: string } }) {
  // Troviamo il progetto corrente in base allo slug nell'URL
  const currentProject = experiences.find(e => e.expslug === params.slug);

  if (!currentProject) {
    return <div className="text-center py-20">Project not found</div>;
  }

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

        {/* --- DETTAGLIO PROGETTO CORRENTE --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-5xl font-bold mb-6">{currentProject.title}</h1>
            <p className="text-2xl text-primary mb-6">{currentProject.description}</p>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-foreground/80 leading-relaxed">
                {currentProject.fullDescription}
              </p>
              {/* Qui potresti aggiungere altro contenuto specifico del dettaglio se ne hai */}
            </div>
          </motion.div>

          {/* --- ALTRI PROGETTI (GRIGLIA) --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-primary/20 pt-12"
          >
            <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences
                .filter(exp => exp.expslug !== params.slug) // Nasconde il progetto che stai già guardando
                .map((experience) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer bg-background/50 backdrop-blur-sm"
                  onClick={() =>
                    localStorage.setItem(
                      "experienceData",
                      JSON.stringify(experience)
                    )
                  }
                >
                  <Link href={`/projects/${experience.expslug}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{experience.id}</span>
                      </div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                    </div>
                    <p className="text-foreground/70 text-sm line-clamp-3">
                      {experience.fullDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}