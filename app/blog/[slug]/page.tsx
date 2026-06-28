import { supabase } from "@/lib/supabase-client"
import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"
import { Metadata } from "next"

export const revalidate = 3600; // Revalidate blog posts every hour — they rarely change after publish

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data: blog } = await supabase
    .from("blogs")
    .select("title, excerpt, cover_image")
    .eq("slug", slug)
    .single()

  if (!blog) {
    return { title: "Post Not Found" }
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      images: blog.cover_image ? [blog.cover_image] : ["/websitebanner.jpg"],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: post, error } = await supabase
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
    .eq("slug", slug)
    .single()

  if (error || !post) {
    notFound()
  }

  // Fetch related posts (same topic, excluding current)
  const { data: relatedData } = await supabase
    .from("blogs")
    .select(`
      slug, title, excerpt, cover_image, topic, reading_time, created_at
    `)
    .eq("topic", post.topic)
    .neq("slug", post.slug)
    .limit(3)

  let authorData = post.author || {}
  if (Array.isArray(authorData)) authorData = authorData[0] || {}

  // Priority: joined member name > manual author_name field > "Unknown Author"
  const resolvedAuthorName = authorData.name || post.author_name || "Unknown Author"

  const formattedPost = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.cover_image,
    topic: post.topic,
    readingTime: post.reading_time,
    date: new Date(post.created_at).toLocaleDateString("en-US", {
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
      github: authorData.socials?.github || "",
    }
  }

  const formattedRelated = (relatedData || []).map(r => ({
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    coverImage: r.cover_image,
    topic: r.topic,
    readingTime: r.reading_time,
    date: new Date(r.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }))

  return <BlogPostClient post={formattedPost} relatedPosts={formattedRelated} />
}
