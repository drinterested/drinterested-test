"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts, blogTopics, getFeaturedPosts, getRecentPosts } from "@/data/blog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ChevronRight, Search } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"
import NewsletterForm from "@/components/newsletter-form"
import SeoSchema from "@/components/seo-schema"

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const featuredPosts = getFeaturedPosts()
  const recentPosts = getRecentPosts(4)

  useEffect(() => {
    let results = blogPosts

    if (searchTerm) {
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedTopic) {
      results = results.filter((post) => post.topic === selectedTopic)
    }

    setFilteredPosts(results)
  }, [searchTerm, selectedTopic])

  // SEO schema for blog listing page
  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dr. Interested Blog",
    description:
      "Explore the latest insights, research, and information about healthcare careers, medical advancements, and educational opportunities.",
    url: "https://drinterested.tech/blog",
    isPartOf: {
      "@type": "WebSite",
      name: "Dr. Interested",
      url: "https://drinterested.tech",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredPosts.slice(0, 10).map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://drinterested.tech/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <div>
      <ScrollToTop />
      <SeoSchema schema={blogListingSchema} />

      {/* Hero Section */}
      <section className="bg-[#f5f1eb] py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center text-[#405862] mb-4">Dr. Interested Blog</h1>
          <p className="text-center text-[#405862] max-w-2xl mx-auto mb-8">
            Explore the latest insights, research, and information about healthcare careers, medical advancements, and
            educational opportunities.
          </p>

          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#405862]/60" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-[#405862]/20 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-12 bg-[#f5f1eb]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-[#405862]">
            Browse by Topic
            <div className="w-24 h-1 bg-[#4ecdc4] mt-2"></div>
          </h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant={selectedTopic === null ? "default" : "outline"}
              className={
                selectedTopic === null
                  ? "bg-[#405862] hover:bg-[#334852]"
                  : "border-[#405862] text-[#405862] hover:bg-[#405862] hover:text-white"
              }
              onClick={() => setSelectedTopic(null)}
            >
              All Topics
            </Button>

            {blogTopics.map((topic, index) => (
              <Button
                key={index}
                variant={selectedTopic === topic.name ? "default" : "outline"}
                className={
                  selectedTopic === topic.name
                    ? "bg-[#405862] hover:bg-[#334852]"
                    : "border-[#405862] text-[#405862] hover:bg-[#405862] hover:text-white"
                }
                onClick={() => setSelectedTopic(topic.name)}
              >
                {topic.name}
              </Button>
            ))}
          </div>

          {selectedTopic && (
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-[#405862]">{selectedTopic}</h3>
              <p className="text-[#405862]/80">
                {blogTopics.find((topic) => topic.name === selectedTopic)?.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* All Posts / Filtered Posts */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-[#405862]">
            {searchTerm ? "Search Results" : selectedTopic ? `Articles on ${selectedTopic}` : "All Articles"}
            <div className="w-24 h-1 bg-[#4ecdc4] mt-2"></div>
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-[#405862] mb-2">No articles found</h3>
              <p className="text-[#405862]/70 mb-6">Try adjusting your search or browse all topics</p>
              <Button
                variant="outline"
                className="border-[#405862] text-[#405862] hover:bg-[#405862] hover:text-white"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedTopic(null)
                }}
              >
                View All Articles
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-[#405862]/20 hover:shadow-lg transition-all duration-300 hover:border-[#405862] flex flex-col h-full group"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index < 6} // Prioritize loading for first 6 posts
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div>
                      <div className="text-sm text-[#405862]/70 mb-2 flex items-center flex-wrap">
                        <span className="bg-[#f5f1eb] px-2 py-1 rounded-full text-xs">{post.topic}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readingTime}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#4ecdc4] transition-colors">
                        <h3 className="text-lg font-bold mb-2 text-[#405862] group-hover:text-[#4ecdc4] transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-[#405862]/80 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between pt-4 border-t border-[#405862]/10">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image
                              src={post.author.image || "/placeholder.svg"}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <span className="text-xs font-medium text-[#405862] block">{post.author.name}</span>
                            <span className="text-xs text-[#405862]/70">{post.date}</span>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[#4ecdc4] hover:text-[#405862] transition-colors text-sm font-medium"
                        >
                          Read
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Posts */}
      {!searchTerm && !selectedTopic && (
        <section className="py-16 bg-[#f5f1eb]">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-[#405862]">
              Recent Articles
              <div className="w-24 h-1 bg-[#4ecdc4] mt-2"></div>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-[#405862]/20 hover:shadow-lg transition-all duration-300 hover:border-[#405862] flex flex-col h-full group"
                >
                  <div className="relative h-40">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <div>
                      <div className="text-xs text-[#405862]/70 mb-1">{post.date}</div>
                      <h3 className="text-base font-bold mb-2 text-[#405862] group-hover:text-[#4ecdc4] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#4ecdc4] hover:text-[#405862] transition-colors text-xs font-medium flex items-center mt-2"
                      >
                        Read article
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container">
          <NewsletterForm darkMode={true} />
        </div>
      </section>
    </div>
  )
}
