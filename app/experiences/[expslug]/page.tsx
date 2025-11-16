import ExperienceDetailClient from './client'

const experiences = [
  {
    id: 1,
    title: "Go Svelte Web App",
    description: "Full-stack solution",
    fullDescription: "Design and development of a full-stack application supporting both embedded devices and web, using Go for a lightweight backend and Svelte for an optimized, responsive frontend.\nGo (Gin, Gorm) & Svelte (Svelte-Kit, Tailwind CSS, Playwright, Storybook)",
    expslug: "go-svelte-web-app",
  },
  {
    id: 2,
    title: "Java Embedded App",
    description: "Functional embedded full-stack application",
    expslug: "java-embedded-app-1",
  },
  {
    id: 3,
    title: "Experience 3",
    description: "Interactive design",
    expslug: "experience-3",
  },
];

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    expslug: experience.expslug,
  }))
}

export default function ExperienceDetail({
  params,
}: {
  params: { expslug: string }
}) {
  return <ExperienceDetailClient params={params} />
}
