import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Dev Portfolio',
  description: 'Personal portfolio of a developer',
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
