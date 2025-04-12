import { generateSeoMetadata } from "@/lib/seo-utils"
import BlogClientPage from "./BlogClientPage"

export const metadata = generateSeoMetadata({
  title: "Blog | Dr. Interested - Healthcare Education Resources",
  description:
    "Explore articles on healthcare careers, medical advancements, and educational opportunities for high school students interested in medicine.",
  url: "https://drinterested.tech/blog",
})

export default function BlogPage() {
  return <BlogClientPage />
}
