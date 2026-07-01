import type { Metadata } from "next"
import { generateSeoMetadata } from "@/lib/seo-utils"
import { supabase } from "@/lib/supabase-client"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"
import NewsletterForm from "@/components/newsletter-form"
import ReactMarkdown from "react-markdown"
import SeoSchema from "@/components/seo-schema"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data: publication } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!publication) {
    return { title: "Publication Not Found" }
  }

  return generateSeoMetadata({
    title: publication.title,
    description: publication.excerpt,
    url: `https://www.drinterested.org/publications/${publication.slug}`,
    image: publication.cover_image || "/websitebanner.jpg",
  })
}

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: publication } = await supabase
    .from("blogs")
    .select(
      `
      *,
      author:members (
        id,
        name,
        image,
        bio,
        socials
      )
    `
    )
    .eq("slug", slug)
    .single()

  if (!publication) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#405862] mb-4">Publication Not Found</h1>
        <Link href="/publications" className="text-[#4ecdc4] hover:text-[#405862] underline">
          Back to Publications
        </Link>
      </div>
    )
  }

  let authorData = publication.author || {}
  if (Array.isArray(authorData)) authorData = authorData[0] || {}

  const resolvedAuthorName = publication.author_name || authorData.name || "Unknown Author"

  const publicationSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: publication.title,
    description: publication.excerpt,
    image: publication.cover_image,
    datePublished: publication.created_at,
    author: {
      "@type": "Person",
      name: resolvedAuthorName,
      image: authorData.image,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Interested",
      logo: {
        "@type": "ImageObject",
        url: "https://www.drinterested.org/logo.png",
      },
    },
  }

  const contentTypeLabel =
    publication.content_type === "op-ed"
      ? "Op-Ed"
      : publication.content_type === "policy"
        ? "Policy Work"
        : "Blog"

  return (
    <div>
      <ScrollToTop />
      <SeoSchema schema={publicationSchema} />

      {/* Article Header */}
      <section className="bg-[#f5f1eb] py-10 md:py-16">
        <div className="container max-w-3xl">
          <Link
            href="/publications"
            className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Publications
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-[#405862]/10 px-3 py-1 rounded-full text-sm font-medium text-[#405862]">
              {contentTypeLabel}
            </span>
            {publication.policy_type && (
              <span className="bg-[#e3f2fd] px-3 py-1 rounded-full text-sm font-medium text-[#1976d2]">
                {publication.policy_type.replace("-", " ")}
              </span>
            )}
            <span className="bg-[#405862]/10 px-3 py-1 rounded-full text-sm font-medium text-[#405862]">
              {publication.topic}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#405862] mb-6 leading-tight">
            {publication.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 pb-8 border-b border-[#405862]/20">
            <div className="flex items-center gap-3">
              {authorData.image && (
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={authorData.image}
                    alt={resolvedAuthorName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-[#405862]">{resolvedAuthorName}</p>
                {authorData.bio && <p className="text-sm text-[#405862]/70">{authorData.bio}</p>}
              </div>
            </div>

            <div className="flex gap-6 text-sm text-[#405862]/70 ml-auto">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(publication.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {publication.reading_time}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Cover Image */}
      {publication.cover_image && (
        <section className="bg-white">
          <div className="container max-w-3xl">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={publication.cover_image}
                alt={publication.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none prose-green">
            <ReactMarkdown>{publication.content}</ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Author Bio Section */}
      {authorData.name && (
        <section className="py-12 bg-[#f5f1eb]">
          <div className="container max-w-3xl">
            <div className="bg-white rounded-lg p-8 border border-[#405862]/10">
              <h3 className="text-xl font-bold text-[#405862] mb-4">About the Author</h3>
              <div className="flex gap-6">
                {authorData.image && (
                  <div className="relative h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={authorData.image}
                      alt={resolvedAuthorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-[#405862] mb-2">{resolvedAuthorName}</p>
                  <p className="text-[#405862]/80 text-sm mb-4">{authorData.bio}</p>
                  {(authorData.socials?.linkedin || authorData.socials?.instagram) && (
                    <div className="flex gap-4">
                      {authorData.socials?.linkedin && (
                        <Link
                          href={authorData.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#405862] hover:text-[#4ecdc4] transition-colors text-sm font-medium"
                        >
                          LinkedIn
                        </Link>
                      )}
                      {authorData.socials?.instagram && (
                        <Link
                          href={authorData.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#405862] hover:text-[#4ecdc4] transition-colors text-sm font-medium"
                        >
                          Instagram
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
          <p className="text-white/80 mb-8">
            Get the latest publications and insights delivered to your inbox.
          </p>
          <NewsletterForm darkMode={true} showFirstName={false} compact={true} />
        </div>
      </section>
    </div>
  )
}
