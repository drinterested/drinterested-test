import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Interested - Inspiring Future Healthcare Professionals",
  description:
    "Dr. Interested empowers high school students to explore careers in healthcare through education, research, and mentorship. Join our community today!",
  keywords: [
    "healthcare education",
    "medical careers",
    "high school students",
    "healthcare mentorship",
    "medical research",
    "Dr. Interested",
    "healthcare internships",
    "medical technology",
  ],
  authors: [{ name: "Dr. Interested Team" }],
  creator: "Dr. Interested",
  publisher: "Dr. Interested",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drinterested.tech",
    title: "Dr. Interested - Inspiring Future Healthcare Professionals",
    description:
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship.",
    siteName: "Dr. Interested",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Dr. Interested Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Interested - Inspiring Future Healthcare Professionals",
    description:
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship.",
    images: ["/circle-logo.png"],
  },
  alternates: {
    canonical: "https://drinterested.tech",
    languages: {
      "en-US": "https://drinterested.tech",
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/circle-logo.png" },
  ],
  generator: "v0.dev",
  metadataBase: new URL("https://drinterested.tech"),
  verification: {
    google: "google-site-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: "#405862",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MYCRFPPGE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MYCRFPPGE');
          `}
        </Script>
        <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />
        <link rel="canonical" href="https://drinterested.tech" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"
