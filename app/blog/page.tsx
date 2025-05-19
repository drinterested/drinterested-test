import type { Metadata } from "next"
import { generateSeoMetadata } from "@/lib/seo-utils"
import BlogClientPage from "./BlogClientPage"

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
  return <BlogClientPage />
}
