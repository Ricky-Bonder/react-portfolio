import type { Metadata } from "next";
import Link from "next/link";
import { getProject, projects } from "@/lib/data";
import { RedirectClient } from "@/components/RedirectClient";

// Legacy URLs. Project details moved to /projects/<slug>; these stubs
// forward visitors who still hold an old link.

type Params = { expslug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return projects.map((p) => ({ expslug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProject(params.expslug);
  return { title: project?.title ?? "Moved", robots: { index: false } };
}

export default function LegacyExperienceRedirect({ params }: { params: Params }) {
  const target = `/projects/${params.expslug}/`;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <meta httpEquiv="refresh" content={`0;url=${base}${target}`} />
      <RedirectClient to={target} />
      <p>
        This page moved. <Link href={target} className="text-primary underline">Continue to the project</Link>.
      </p>
    </main>
  );
}
