import type { Metadata } from "next"
import { generateSeoMetadata } from "@/lib/seo-utils"
import PublicationsClientPage from "./PublicationsClientPage"
import { supabase } from "@/lib/supabase-client"

export const revalidate = 300; // Revalidate every 5 minutes (ISR)

export const metadata: Metadata = generateSeoMetadata({
  title: "Publications",
  description:
    "Explore Dr. Interested's blog posts, op-eds, and policy work on healthcare education and medical advocacy.",
  url: "https://www.drinterested.org/publications",
  keywords: [
    "healthcare publications",
    "medical policy",
    "op-eds",
    "healthcare research",
    "advocacy",
    "policy statements",
  ],
})

export default async function PublicationsPage() {
  // Fetch all content: blogs, op-eds, and policy work
  const { data: allContentData, error: contentError } = await supabase
    .from("blogs")
    .select(`
      *,
      author:members (
        name,
        bio,
        image,
        socials
      )
    `)
    .order("created_at", { ascending: false })

  const formatContent = (contentData: any) => {
    let authorData = contentData.author || {}
    if (Array.isArray(authorData)) authorData = authorData[0] || {}

    const resolvedAuthorName = contentData.author_name || authorData.name || "Unknown Author"

    return {
      slug: contentData.slug,
      title: contentData.title,
      excerpt: contentData.excerpt,
      content: contentData.content,
      coverImage: contentData.cover_image,
      topic: contentData.topic,
      readingTime: contentData.reading_time,
      featured: contentData.featured,
      contentType: contentData.content_type || "blog",
      policyType: contentData.policy_type || null, // "report", "joint-statement", "input"
      date: new Date(contentData.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      author: {
        name: resolvedAuthorName,
        image: authorData.image || "/logo.png",
        bio: authorData.bio || "",
        linkedIn: authorData.socials?.linkedin || "",
        twitter: authorData.socials?.twitter || "",
        instagram: authorData.socials?.instagram || "",
      }
    }
  }

  let policyWork: any[] = []
  let opEds: any[] = []
  let blogs: any[] = []

  if (!contentError && allContentData && Array.isArray(allContentData)) {
    const formattedContent = allContentData.map(formatContent)
    policyWork = formattedContent.filter(c => c.contentType === "policy")
    opEds = formattedContent.filter(c => c.contentType === "op-ed")
    blogs = formattedContent.filter(c => c.contentType === "blog")
  } else if (contentError) {
    console.error("Error fetching publications:", contentError)
  }

  return <PublicationsClientPage policyWork={policyWork} opEds={opEds} blogs={blogs} />
}
