"use client";

import { Navbar } from "@/components/layout/navbar";
import TextType from "@/components/TextType";
import { motion } from "framer-motion";
import ClickSpark from "@/components/ClickSpark";
import Particles from "@/components/Particles";

export default function Home() {
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
              style={{ width: "100%", height: "100%", position: "relative" }}
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
            <TextType
              text={[
                "Riccardo Ossola",
                "Welcome to my portfolio",
                "Let's create together!",
              ]}
              typingSpeed={80}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-2xl mb-8"
            >
              Building beautiful and functional web experiences with modern
              technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg">
                View My Work
              </button>
              <button className="px-8 py-3 border border-primary/20 rounded-lg">
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </main>
      </ClickSpark>
    </>
  );
}
