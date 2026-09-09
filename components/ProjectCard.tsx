"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/data";
import { ProjectIcon } from "@/components/ProjectIcon";

/** True below the md breakpoint, where hover is not available. */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

const cardVariants = {
  idle: { scale: 1, y: 0 },
  active: { scale: 1.02, y: -5 },
};
const glowVariants = {
  idle: { opacity: 0.2 },
  active: { opacity: 1 },
};
const readMoreVariants = {
  idle: { opacity: 0, x: -10 },
  active: { opacity: 1, x: 0 },
};

interface ProjectCardProps {
  project: Project;
  /** Wide layout used for the single personal project. */
  wide?: boolean;
}

export function ProjectCard({ project, wide = false }: ProjectCardProps) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial="idle"
      whileHover={!isMobile ? "active" : undefined}
      whileInView={isMobile ? "active" : undefined}
      viewport={{ amount: 0.5, margin: "0px 0px -100px 0px" }}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className={`relative group rounded-xl ${wide ? "md:col-span-2 lg:col-span-3" : ""}`}
    >
      <motion.div
        variants={glowVariants}
        transition={{ duration: 0.3 }}
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur -z-10"
      />

      <div className="relative h-full w-full bg-background/95 backdrop-blur-sm p-6 rounded-xl border">
        <Link
          href={`/projects/${project.slug}`}
          className={`block h-full ${wide ? "md:grid md:grid-cols-[auto_1fr] md:gap-8 md:items-start" : ""}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ProjectIcon name={project.icon} className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
              <p className="text-xs uppercase tracking-wider text-foreground/50 mt-0.5">
                {project.role} · {project.timeline}
              </p>
            </div>
          </div>

          <div>
            <p className="text-foreground/70">{project.stack}</p>
            <p className="text-foreground/60 mt-2 line-clamp-3 text-sm">
              {project.summary}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <motion.div
              variants={readMoreVariants}
              transition={{ duration: 0.3 }}
              className="mt-4 text-primary font-medium flex items-center gap-1"
            >
              Read more <span aria-hidden>→</span>
            </motion.div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
