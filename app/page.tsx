"use client";

import { Navbar } from "@/components/layout/navbar";
import TextType from "@/components/TextType";
import { motion } from "framer-motion";
import ClickSpark from "@/components/ClickSpark";
import Particles from "@/components/Particles";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    title: "Go Svelte Web App",
    description: "Full-stack solution",
    slug: "go-svelte-web-app",
  },
  {
    id: 2,
    title: "Java Embedded App",
    description: "Functional embedded full-stack application",
    slug: "java-embedded-app-1",
  },
  {
    id: 3,
    title: "Experience 3",
    description: "Interactive design",
    slug: "experience-3",
  },
];

export default function Home() {
  const router = useRouter();
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <main className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              style={{ width: "100%", height: "100%", position: "absolute" }}
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
          >
            <div className="mb-8 h-20">
              <TextType
                text={[
                  "Riccardo Ossola",
                  "Welcome to my portfolio.",
                  "Let's create together!",
                ]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mb-8"
            >
              Building beautiful and functional web and embedded experiences
              with modern technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-3 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
          <section
            ref={projectsRef}
            className="min-h-screen bg-background relative"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-5xl font-bold mb-4">My Experience</h2>
                <p className="text-foreground/70 text-lg">
                  Here are some of the projects and experiences that showcase my
                  skills
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((experience) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: experience.id * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {experience.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                    </div>
                    <p className="text-foreground/70">
                      {experience.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </ClickSpark>
    </>
  );
}
