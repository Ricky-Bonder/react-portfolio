"use client";

import { Navbar } from "@/components/layout/navbar";
import { motion } from "framer-motion";
import ClickSpark from "@/components/ClickSpark";
import ThemedParticles from "@/components/ThemedParticles";
import { useRouter } from "next/navigation";
import { useRef } from "react";
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
import { ProjectGrid } from "@/components/ProjectGrid";

const toolsTechs = [
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiGo />, title: "Go", href: "https://golang.org" },
  { node: <SiSpringboot />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiStorybook />, title: "Storybook", href: "https://storybook.js.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGitlab />, title: "GitLab", href: "https://gitlab.com" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
];

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

export default function Home() {
  const router = useRouter();
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={20} sparkCount={8} duration={400}>
      <Navbar />
      <main className="relative overflow-hidden bg-background">
        <ThemedParticles count={300} speed={0.1} baseSize={100} />

        {/* HERO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10"
        >
          <div className="mb-8 flex flex-col justify-center items-start min-h-[120px] sm:min-h-[160px]">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
              Hi, I&apos;m <span className="text-primary">Riccardo Ossola</span>.
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-2xl sm:text-4xl md:text-5xl font-bold">
              <span className="opacity-90 whitespace-nowrap">I build</span>

              <motion.div
                layout
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
                className="px-3 sm:px-4 md:px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 sm:py-3 rounded-xl shadow-lg flex items-center justify-center"
              >
                <RotatingText
                  texts={["Web Apps", "Embedded Systems", "Go & Java Solutions"]}
                  mainClassName="overflow-hidden justify-center text-center min-w-max leading-tight"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1 md:pb-2"
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
            I bridge resource-constrained <strong className="text-foreground/90">Embedded Linux</strong> systems
            and modern <strong className="text-foreground/90">web</strong> interfaces, and own the product
            from requirements to release.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
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

          <motion.div variants={itemVariants} className="mt-16">
            <p className="text-sm text-foreground/60 mb-4">
              Backend, Frontend & DevOps tools I work with:
            </p>
            <div style={{ height: "100px", position: "relative", overflow: "hidden" }}>
              <LogoLoop
                logos={toolsTechs}
                speed={50}
                direction="left"
                logoHeight={48}
                gap={80}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Tools and DevOps stack"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* WORK + PERSONAL */}
        <section ref={projectsRef} className="relative z-10 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <ProjectGrid />
          </div>
        </section>
      </main>
    </ClickSpark>
  );
}
