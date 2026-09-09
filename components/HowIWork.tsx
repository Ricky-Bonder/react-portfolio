"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { aiWorkflow } from "@/lib/data";
import { ProjectIcon } from "@/components/ProjectIcon";

/** The AI-assisted way of working. Shared by the home page and About. */
export function HowIWork() {
  return (
    <section aria-labelledby="how-i-work-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-primary/60 mb-2">
          {aiWorkflow.kicker}
        </p>
        <h2 id="how-i-work-heading" className="text-4xl sm:text-5xl font-bold mb-4">
          {aiWorkflow.title}
        </h2>
        <p className="text-foreground/70 text-lg max-w-3xl leading-relaxed">{aiWorkflow.intro}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiWorkflow.points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ProjectIcon name={point.icon} className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>

      {aiWorkflow.certifications.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70">
            <Award className="h-4 w-4 text-primary" /> Anthropic certifications
          </span>
          {aiWorkflow.certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {cert}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
