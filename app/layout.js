import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[hsl(240,10.2%,9.61%)] ${inter.className}`}>{children}</body>
    </html>
  )
}
