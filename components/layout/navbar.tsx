"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", mobile: false },
  { label: "Projects", href: "/projects", mobile: true },
  { label: "About", href: "/about", mobile: true },
  { label: "Contact", href: "/contact", mobile: true },
];

/** Strip a trailing slash so "/about/" and "/about" compare equal. */
function normalize(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = normalize(usePathname() ?? "/");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur border-b border-primary/10 bg-background/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl" aria-label="Home">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/gifs/porygon_sprite.gif`}
              alt=""
              className="w-10 h-10"
            />
          </Link>

          <div className="flex gap-4 md:gap-10 items-center">
            {navItems.map((item) => {
              const isActive = pathname === normalize(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors text-lg ${item.mobile ? "" : "hidden sm:inline-block"} ${
                    isActive
                      ? "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg px-2 py-1"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Toggle Theme"
            >
              {mounted ? (resolvedTheme === "dark" ? "🌙" : "☀️") : <div className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
