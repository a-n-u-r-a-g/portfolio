import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import AnimatedBackground from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anurag Gupta | Portfolio",
  description: "Personal portfolio website of Anurag Gupta",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["dark", "blue"]}>
          <AnimatedBackground />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6 md:p-10 relative">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
