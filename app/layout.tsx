import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cognitive Sovereignty Foundation',
  description: 'Who owns the way you think?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
