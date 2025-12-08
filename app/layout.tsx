import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GenXora — Full-Stack Web & AI Automation",
  description:
    "GenXora builds websites and automation pipelines that run themselves — n8n workflows, AI summarizers, API pipelines, and lead capture systems.",
  keywords: [
    "automation",
    "n8n",
    "AI",
    "web development",
    "API integration",
    "Google Sheets",
    "lead capture",
  ],
  authors: [{ name: "GenXora" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genxora.com",
    title: "GenXora — Full-Stack Web & AI Automation",
    description:
      "We build websites and automation pipelines that run themselves.",
    siteName: "GenXora",
    images: [
      {
        url: "/assets/logo.svg",
        width: 200,
        height: 200,
        alt: "GenXora Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenXora — Full-Stack Web & AI Automation",
    description:
      "We build websites and automation pipelines that run themselves.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

