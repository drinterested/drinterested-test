import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { generateOrganizationSchema } from "@/lib/seo-utils"
import SeoSchema from "@/components/seo-schema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dr. Interested - Inspiring Future Healthcare Professionals",
    template: "%s | Dr. Interested",
  },
  description:
    "Dr. Interested empowers high school students to explore careers in healthcare through education, research, and mentorship. Join our community today for volunteer hours and leadership opportunities!",
  keywords: [
    "healthcare education",
    "medical careers",
    "high school students",
    "healthcare mentorship",
    "medical research",
    "Dr. Interested",
    "healthcare internships",
    "medical technology",
    "high school club",
    "volunteer hours",
    "healthcare volunteer",
    "student-led organization",
    "healthcare leadership",
    "medical podcast",
    "healthcare blog",
    "healthcare community",
    "healthcare workshops",
    "healthcare research",
    "highschool research",
    "doctor interested",
    "doctor interest",
    "dr interested",
    "dr interest",
    "Adil Mukhi",
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
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship. Earn volunteer hours while building your future!",
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
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship. Earn volunteer hours while building your future!",
    images: ["/circle-logo.png"],
    creator: "@DrInterested",
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
  generator: "Next.js",
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
    <html lang="en" className="scroll-smooth">
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SeoSchema schema={generateOrganizationSchema()} />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
        <Script id="accessibility-widget" strategy="afterInteractive">
          {`
            window.addEventListener("load", (event) => {
              setTimeout(() => {
                let aioa_script_tag = document.createElement("script");
                aioa_script_tag.src = "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#4ecdc4&token=&position=bottom_right";
                aioa_script_tag.id = "aioa-adawidget";
                document.getElementsByTagName("body")[0].appendChild(aioa_script_tag);
              }, 3000);
            });
          `}
        </Script>
      </body>
    </html>
  )
}
