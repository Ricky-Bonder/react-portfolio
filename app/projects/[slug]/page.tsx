import ProjectDetailClient from './client';

// Dati necessari al server per sapere QUALI pagine generare
const experiences = [
  { id: 1, expslug: "go-svelte-web-app" },
  { id: 2, expslug: "java-embedded-app" },
  { id: 3, expslug: "scala-backend" },
  { id: 4, expslug: "gateway-backend" },
  { id: 5, expslug: "ev-monitor-backend" },
  { id: 6, expslug: "homelab-infrastructure" },
];

// Funzione Server-Side obbligatoria per export statico
export async function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.expslug,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  return <ProjectDetailClient params={params} />;
}