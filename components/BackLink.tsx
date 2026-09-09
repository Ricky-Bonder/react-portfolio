"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/**
 * Goes back in history when the visitor arrived from inside the site,
 * otherwise falls back to the projects list.
 */
export function BackLink({ fallback = "/projects" }: { fallback?: string }) {
  const router = useRouter();

  const goBack = () => {
    const cameFromSite =
      typeof document !== "undefined" &&
      document.referrer.startsWith(window.location.origin) &&
      window.history.length > 1;
    if (cameFromSite) router.back();
    else router.push(fallback);
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center text-primary/80 hover:text-primary mb-8 transition-colors"
    >
      <ArrowLeft className="w-4 h-4 mr-2" /> Back
    </button>
  );
}
