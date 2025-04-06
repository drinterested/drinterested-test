// SEO utility functions for structured data and metadata
import type { Metadata } from "next"

type SeoProps = {
  title: string
  description: string
  url: string
  ogImage?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export function generateSeoMetadata({
  title,
  description,
  url,
  ogImage = "https://drinterested.tech/logo.png",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: SeoProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Dr. Interested",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
      ...(type === "article" && {
        article: {
          publishedTime,
          modifiedTime,
          authors: authors?.map((author) => `https://drinterested.tech/members#${author}`),
          tags,
        },
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@DrInterested",
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://drinterested.tech",
    logo: "https://drinterested.tech/logo.png",
    sameAs: [
      "https://www.instagram.com/dr.interested/",
      "https://www.linkedin.com/company/dr-interested",
      "https://discord.gg/pzbGRgsGXY",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@drinterested.tech",
      contactType: "customer service",
    },
  }
}

export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  url: string
  image?: string
  organizer?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    location: {
      "@type": "Place",
      name: event.location,
      ...(event.location.toLowerCase().includes("virtual") && {
        "@type": "VirtualLocation",
      }),
    },
    organizer: {
      "@type": "Organization",
      name: event.organizer || "Dr. Interested",
      url: "https://drinterested.tech",
    },
    image: event.image || "https://drinterested.tech/logo.png",
    url: event.url,
  }
}

export function generateArticleSchema(article: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  publisherName?: string
  publisherLogo?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.authorName,
      url:
        article.authorUrl ||
        `https://drinterested.tech/members#${article.authorName.toLowerCase().replace(/\s+/g, "-")}`,
    },
    publisher: {
      "@type": "Organization",
      name: article.publisherName || "Dr. Interested",
      logo: {
        "@type": "ImageObject",
        url: article.publisherLogo || "https://drinterested.tech/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  }
}

