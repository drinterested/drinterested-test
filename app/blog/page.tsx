import type { Metadata } from "next"
import { generateSeoMetadata } from "@/lib/seo-utils"
import BlogClientPage from "./BlogClientPage"
import SeoSchema from "@/components/seo-schema"

export const metadata: Metadata = generateSeoMetadata({
  title: "Blog | Dr. Interested - Healthcare Education Resources",
  description:
    "Explore articles on healthcare careers, medical advancements, and educational opportunities for high school students interested in medicine. Find resources for volunteer hours and healthcare education.",
  url: "https://drinterested.tech/blog",
  tags: [
    "healthcare blog",
    "medical education",
    "high school healthcare",
    "volunteer opportunities",
    "healthcare careers",
    "medical research",
    "student healthcare resources",
  ],
})

export default function BlogPage() {
  return (
    <>
      <SeoSchema
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          headline: "Dr. Interested Healthcare Blog",
          description:
            "Articles on healthcare careers, medical advancements, and educational opportunities for high school students",
          url: "https://drinterested.tech/blog",
          image: "https://drinterested.tech/logo.png",
          author: {
            "@type": "Organization",
            name: "Dr. Interested",
            url: "https://drinterested.tech",
          },
          keywords: "healthcare blog, medical education, high school healthcare, volunteer opportunities",
        }}
      />
      <BlogClientPage />
    </>
  )
}
