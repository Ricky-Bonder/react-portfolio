import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import ExperienceDetailClient from "./client";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default function ExperienceDetail({ params }: { params: Params }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ExperienceDetailClient project={project} />;
}
