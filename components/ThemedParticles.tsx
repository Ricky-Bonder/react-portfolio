"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/Particles";

interface ThemedParticlesProps {
  count?: number;
  speed?: number;
  baseSize?: number;
}

/**
 * Full-bleed particle background that follows the active theme.
 * White particles on the dark theme, dark grey ones on the light theme,
 * so the effect is visible in both.
 */
export default function ThemedParticles({
  count = 200,
  speed = 0.05,
  baseSize = 80,
}: ThemedParticlesProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid a flash of wrong-colored particles before the theme is known.
  if (!mounted) return null;

  const color = resolvedTheme === "dark" ? "#ffffff" : "#3f3f46";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
      <Particles
        particleColors={[color, color]}
        particleCount={count}
        particleSpread={10}
        speed={speed}
        particleBaseSize={baseSize}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
