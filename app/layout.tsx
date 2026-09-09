import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import '@/app/globals.css'
import { SITE_NAME as siteName } from '@/lib/data'
const description =
  'Software engineer bridging resource-constrained Embedded Linux systems and modern web interfaces. Go, SvelteKit, Java and Scala on real hardware.'

export const metadata: Metadata = {
  metadataBase: new URL('https://ricky-bonder.github.io'),
  title: {
    default: `${siteName} | Software Engineer`,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    type: 'website',
    siteName,
    title: `${siteName} | Software Engineer`,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Software Engineer`,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
