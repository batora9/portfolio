import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Favicon from '../public/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ばとらの部屋',
  description: 'batora\'s portfolio',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
