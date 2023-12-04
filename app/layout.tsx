import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pure Typescript',
  description: 'An online resource for typescript developers and enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div style={{ margin: "auto", width: "70%", padding: "20px" }}>
      <body className={inter.className}>{children}</body>
      </div>
    </html>
  )
}
