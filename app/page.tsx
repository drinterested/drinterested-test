import type { Metadata } from "next"
import HomePage from "./home-page"

export const metadata: Metadata = {
  title: "Dr. Interested - Inspiring Future Healthcare Professionals",
  description:
    "Dr. Interested empowers high school students to explore healthcare careers through education, mentorship, and hands-on experiences. Join our community for volunteer hours and leadership opportunities!",
  alternates: {
    canonical: "https://drinterested.tech",
  },
  openGraph: {
    title: "Dr. Interested - Inspiring Future Healthcare Professionals",
    description:
      "Empowering high school students to explore healthcare careers through education, mentorship, and hands-on experiences. Earn volunteer hours while building your future!",
    url: "https://drinterested.tech",
    siteName: "Dr. Interested",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Dr. Interested Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return <HomePage />
}
