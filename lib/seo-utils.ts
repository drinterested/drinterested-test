import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSeoMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/android-chrome-512x512.png",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author,
    section,
  } = config

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      type: type === "article" ? "article" : "website",
      url,
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
      siteName: "Dr. Interested",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@DrInterested",
    },
  }

  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
    }
  }

  if (url) {
    metadata.alternates = {
      canonical: url,
    }
  }

  return metadata
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr. Interested",
    description:
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship.",
    url: "https://drinterested.tech",
    logo: "https://drinterested.tech/android-chrome-512x512.png",
    foundingDate: "2020",
    sameAs: [
      "https://www.instagram.com/dr.interested/",
      "https://www.linkedin.com/company/dr-interested/",
      "https://twitter.com/DrInterested",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiry",
      email: "hello@drinterested.tech",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    memberOf: {
      "@type": "Organization",
      name: "Healthcare Education Community",
    },
    knowsAbout: [
      "Healthcare Education",
      "Medical Careers",
      "Student Mentorship",
      "Healthcare Research",
      "Medical Technology",
      "Healthcare Leadership",
    ],
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  publishedDate: string
  modifiedDate?: string
  image?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Interested",
      logo: {
        "@type": "ImageObject",
        url: "https://drinterested.tech/android-chrome-512x512.png",
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    image: article.image || "https://drinterested.tech/android-chrome-512x512.png",
    url: article.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
