"use client";

import { Navbar } from "@/components/layout/navbar";
// import TextType from "@/components/TextType";
import { motion } from "framer-motion";
import ClickSpark from "@/components/ClickSpark";
import Particles from "@/components/Particles";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiSvelte,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiHtml5,
  SiAngular,
  SiCss3,
  SiStorybook,
  SiMysql,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiJavascript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import RotatingText from "@/components/RotatingText";

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

const toolsTechs = [
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiGo />, title: "Go", href: "https://golang.org" },
  {
    node: <SiSpringboot />,
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiStorybook />,
    title: "Storybook",
    href: "https://storybook.js.org",
  },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGitlab />, title: "GitLab", href: "https://gitlab.com" },
  {
    node: <SiJira />,
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
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

  // ... import e setup rimangono uguali ...

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
        <main className="min-h-screen relative overflow-hidden bg-background">
          {" "}
          {/* Aggiunto bg-background esplicito se serve */}
          {/* Sfondo Particles */}
          <div className="absolute inset-0 z-0">
            <div
              style={{ width: "100%", height: "100%", position: "absolute" }}
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]} // Assicurati che si vedano sul tuo sfondo (se è scuro va bene bianco)
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
            <div className="mb-8 flex flex-col justify-center items-start min-h-[120px] sm:min-h-[160px]">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
                Hi, I'm <span className="text-primary">Riccardo Ossola</span>.
              </h1>

              <div className="flex items-center text-2xl sm:text-4xl md:text-6xl font-bold">
                <span className="mr-3 opacity-90">I build</span>
                <motion.div
                  layout
                  transition={{ type: "spring", damping: 25, stiffness: 100 }}
                  className="px-3 sm:px-4 md:px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 sm:py-3 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <RotatingText
                    texts={[
                      "Web Apps",
                      "Embedded Systems",
                      "Go & Java Solutions",
                      "AI Workflows",
                    ]}
                    mainClassName="overflow-hidden justify-center text-center min-w-max"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-2"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                  />
                </motion.div>
              </div>
            </div>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
            >
              Building beautiful and functional web and embedded experiences
              with modern technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-3 border border-primary/20 bg-background/50 backdrop-blur-sm rounded-lg hover:border-primary/40 transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 space-y-12">
              <div>
                <p className="text-sm text-foreground/60 mb-4">
                  Backend, Frontend & DevOps Tools I Work With:
                </p>
                <div
                  style={{
                    height: "100px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <LogoLoop
                    logos={toolsTechs}
                    speed={50}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOutColor="rgb(0, 0, 0)"
                    ariaLabel="Tools and DevOps stack"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <section
            ref={projectsRef}
            className="min-h-screen bg-background relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <div
                style={{ width: "100%", height: "100%", position: "absolute" }}
              >
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
                    onClick={() =>
                      localStorage.setItem(
                        "experienceData",
                        JSON.stringify({
                          title: experience.title,
                          description: experience.description,
                          fullDescription: experience.fullDescription,
                        }),
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
                      <p className="text-foreground/60 mt-2">
                        {experience.fullDescription}
                      </p>
                    </Link>
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
