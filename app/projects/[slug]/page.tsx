import ProjectDetailClient from './client'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A modern web application',
    slug: 'project-1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Full-stack solution',
    slug: 'project-2',
  },
]

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string }
}) {
  return <ProjectDetailClient params={params} />
}
