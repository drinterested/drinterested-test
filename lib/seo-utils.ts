export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr. Interested",
    alternateName: "Dr Interested",
    url: "https://drinterested.tech",
    logo: "https://drinterested.tech/android-chrome-512x512.png",
    description:
      "Dr. Interested empowers high school students to explore careers in healthcare through education, research, and mentorship. Join our community for volunteer hours and leadership opportunities!",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Adil Mukhi",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      email: "contact@drinterested.tech",
    },
    sameAs: [
      "https://twitter.com/DrInterested",
      "https://linkedin.com/company/dr-interested",
      "https://instagram.com/dr.interested",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "High School Students",
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
  datePublished: string
  dateModified?: string
  url: string
  image?: string
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
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    url: article.url,
    image: article.image || "https://drinterested.tech/android-chrome-512x512.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  }
}

export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location
      ? {
          "@type": "Place",
          name: event.location,
        }
      : undefined,
    url: event.url,
    image: event.image || "https://drinterested.tech/android-chrome-512x512.png",
    organizer: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: "https://drinterested.tech",
    },
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Interested",
    url: "https://drinterested.tech",
    description:
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship.",
    publisher: {
      "@type": "Organization",
      name: "Dr. Interested",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://drinterested.tech/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}
