import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/data'

export const metadata: Metadata = {
  title: { default: "Projects", template: `%s | ${SITE_NAME}` },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
