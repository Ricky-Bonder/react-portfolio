import ProjectsClient from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Experiences | Riccardo Ossola",
  description: "A showcase of my recent work, embedded systems, and web applications.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}