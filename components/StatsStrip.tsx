"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

/** Career-wide numbers in one row. */
export function StatsStrip() {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          className="flex flex-col rounded-xl border border-primary/15 bg-background/60 backdrop-blur-sm px-5 py-4"
        >
          <dt className="order-last text-xs sm:text-sm text-foreground/60 leading-snug">{s.label}</dt>
          <dd className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {s.value}
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}
