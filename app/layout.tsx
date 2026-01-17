import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SiteHeader from "@/components/SiteHeader"
import HyperspeedBackground from "@/components/HyperspeedBackground"
import "./globals.css"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Data Visualization Challenge - ACM Student Chapter",
  description:
    "A 24-hour competitive data visualization challenge for students. Analyze real datasets, create compelling visualizations, and tell data-backed stories.",
  generator: "AJ",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <HyperspeedBackground />
        <SiteHeader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
