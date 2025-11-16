"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur border-b border-primary/10 bg-background/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/gifs/porygon_sprite.gif`}
                alt="Home"
                className="w-10 h-10"
              />
          </Link>

          <div className="flex gap-4 md:gap-10 md:font-md items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary text-lg transition-colors ${
                    isActive ? "font-bold underline text-green-500" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-primary/10"
            >
              {mounted && theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
