import type { Metadata } from "next"
import { generateSeoMetadata } from "@/lib/seo-utils"
import BlogClientPage from "./BlogClientPage"
import { supabase } from "@/lib/supabase-client"

export const revalidate = 300; // Revalidate blogs every 5 minutes (ISR)

export const metadata: Metadata = generateSeoMetadata({
  title: "Blog",
  description:
    "Explore articles on healthcare careers, medical advancements, and educational opportunities for high school students interested in medicine. Find resources for volunteer hours and healthcare education.",
  url: "https://www.drinterested.org/blog",
  keywords: [
    "healthcare blog",
    "medical education",
    "high school healthcare",
    "volunteer opportunities",
    "healthcare careers",
    "medical research",
    "student healthcare resources",
  ],
})

export default async function BlogPage() {

  const { data: blogsData, error: blogsError } = await supabase
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

  let formattedBlogs: any[] = []
  
  if (!blogsError && blogsData) {
    // Map database shape to the shape expected by BlogClientPage
    formattedBlogs = blogsData.map(blog => {
      let authorData = blog.author || {}
      if (Array.isArray(authorData)) authorData = authorData[0] || {}

      // Priority: joined member name > manual author_name field > "Unknown Author"
      const resolvedAuthorName = authorData.name || blog.author_name || "Unknown Author"

      return {
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        coverImage: blog.cover_image,
        topic: blog.topic,
        readingTime: blog.reading_time,
        featured: blog.featured,
        date: new Date(blog.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author: {
          name: resolvedAuthorName,
          image: authorData.image || "/logo.png",
          bio: authorData.bio || "",
          linkedIn:  authorData.socials?.linkedin || "",
          twitter:   authorData.socials?.twitter   || "",
          instagram: authorData.socials?.instagram || "",
        }
      }
    })
  } else if (blogsError) {
    console.error("Error fetching blogs:", blogsError)
  }

  return <BlogClientPage initialBlogs={formattedBlogs} />
}
