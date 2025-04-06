"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Calendar, Clock, MapPin, ExternalLink, AlertCircle } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getLatestOngoingEvent } from "@/data/events"
import { getFeaturedPosts, getRecentPosts } from "@/data/blog"
import NewsletterForm from "@/components/newsletter-form"

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get the latest ongoing event
  const latestEvent = getLatestOngoingEvent()
  // Get featured blog posts
  const featuredPosts = getFeaturedPosts().slice(0, 3)
  // Get the most recent blog post
  const recentPost = getRecentPosts(1)[0]

  // Rest of the component...

  // Add the most recent blog post section after the latest event section
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-[#f5f1eb] py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#405862]">
              Welcome to Dr.
              <br />
              Interested
            </h1>
            <p className="text-xl text-[#405862] mt-4">Inspiring the Next Generation of Healthcare Professionals</p>
            <p className="text-[#405862] mt-4">
              Discover your pathway to a career in healthcare with Dr. Interested. From engaging webinars to hands-on
              research opportunities, we're here to help high school students explore the world of medicine.
            </p>
            <div className="flex flex-wrap gap-4 items-center mt-6">
              <Link
                href="https://forms.gle/i3Y6vazF5TErGBxG7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#405862] text-white hover:bg-[#334852] px-6 py-3 rounded-md font-medium inline-flex items-center shadow-md hover:shadow-lg transition-all"
              >
                Sign Up Here
              </Link>

              <div className="flex items-center gap-4 flex-wrap mt-2">
                <Link
                  href="https://discord.gg/pzbGRgsGXY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-discord"
                  >
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                    <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
                  </svg>
                  <span className="hidden sm:inline">Discord</span>
                </Link>
                <Link
                  href="https://www.instagram.com/dr.interested/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="hidden sm:inline">Instagram</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/dr-interested"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </Link>
                <Link
                  href="https://linktr.ee/dr.interested"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-link"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span className="hidden sm:inline">LinkTree</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Dr. Interested Logo"
              width={300}
              height={300}
              className="object-contain animate-pulse-slow"
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#405862]">
            What We Are
            <div className="w-24 h-1 bg-[#4ecdc4] mx-auto mt-4"></div>
          </h2>
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-lg text-[#405862]">
              Dr. Interested is a student-led organization that empowers high school students to explore careers in
              healthcare and medical research. Through engaging events, leadership opportunities, and collaborative
              projects, we aim to bridge the gap between passion and profession.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-[#f5f1eb]">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg flex items-center justify-center">
            <Image src="/logo.png" alt="About Dr. Interested" width={250} height={250} className="object-contain" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#405862]">About Us</h2>
            <p className="text-[#405862]">
              We're dedicated to providing high school students with the tools and resources they need to succeed in the
              medical field. From hosting expert-led webinars to offering volunteer opportunities and research
              initiatives, Dr. Interested is committed to making healthcare accessible and exciting for young minds.
            </p>
            <Link
              href="/our-work"
              className="inline-flex items-center mt-4 border border-[#405862] text-[#405862] hover:bg-[#405862] hover:text-white px-4 py-2 rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Our Goal, Mission, and Vision */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#405862]">
            Our Goal, Mission, and Vision
            <div className="w-24 h-1 bg-[#4ecdc4] mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-[#405862] p-6 rounded-lg bg-[#f5f1eb] shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#405862]">Goal</h3>
              <p className="text-[#405862]">
                To inspire, educate, and support high school students in their journey toward a career in healthcare by
                providing mentorship, resources, and hands-on opportunities.
              </p>
            </div>
            <div className="border border-[#405862] p-6 rounded-lg bg-[#f5f1eb] shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#405862]">Mission</h3>
              <p className="text-[#405862]">
                To empower the next generation of healthcare professionals through education, collaboration, and
                meaningful experiences.
              </p>
            </div>
            <div className="border border-[#405862] p-6 rounded-lg bg-[#f5f1eb] shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#405862]">Vision</h3>
              <p className="text-[#405862]">
                A future where students are equipped with the knowledge and opportunities needed to excel in healthcare,
                contributing to a healthier, more informed society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Event Section */}
      {latestEvent && (
        <section className="py-16 bg-[#f5f1eb]">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#405862]">
              Latest Event
              <div className="w-24 h-1 bg-[#4ecdc4] mx-auto mt-4"></div>
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-[#405862] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={latestEvent.image || "/placeholder.svg"}
                      alt={latestEvent.title}
                      fill
                      className="object-cover"
                    />
                    {latestEvent.status === "closed" && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Registration Closed
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[#405862]">{latestEvent.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-[#405862]">
                          <Calendar className="h-4 w-4 mr-2" />
                          {latestEvent.date}
                        </div>
                        {latestEvent.time && (
                          <div className="flex items-center text-sm text-[#405862]">
                            <Clock className="h-4 w-4 mr-2" />
                            {latestEvent.time}
                          </div>
                        )}
                        <div className="flex items-center text-sm text-[#405862]">
                          <MapPin className="h-4 w-4 mr-2" />
                          {latestEvent.location}
                        </div>
                      </div>
                      <p className="text-[#405862] mb-6">{latestEvent.description}</p>
                    </div>
                    <div className="mt-auto">
                      {latestEvent.status === "open" ? (
                        <Button className="w-full bg-[#405862] hover:bg-[#334852]" asChild>
                          <Link href={latestEvent.link} target="_blank" rel="noopener noreferrer">
                            Register Now
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : latestEvent.status === "full" ? (
                        <Button className="w-full bg-gray-500 hover:bg-gray-600 cursor-not-allowed" disabled>
                          <AlertCircle className="mr-2 h-4 w-4" />
                          Registration Full
                        </Button>
                      ) : latestEvent.status === "closed" ? (
                        <Button
                          className="w-full bg-[#405862] hover:bg-[#334852] opacity-75 cursor-not-allowed"
                          disabled
                        >
                          <AlertCircle className="mr-2 h-4 w-4" />
                          Registration Closed
                        </Button>
                      ) : (
                        <Button className="w-full bg-[#4ecdc4] hover:bg-[#3dbdb5]" asChild>
                          <Link href={latestEvent.link}>See Impact</Link>
                        </Button>
                      )}
                      <div className="text-center mt-3">
                        <Link href="/events" className="text-[#405862] hover:text-[#4ecdc4] text-sm">
                          View all events
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Post Section */}
      {recentPost && (
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#405862]">
              Latest from Our Blog
              <div className="w-24 h-1 bg-[#4ecdc4] mx-auto mt-4"></div>
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-[#405862] shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={recentPost.coverImage || "/placeholder.svg"}
                      alt={recentPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <div>
                      <div className="text-sm text-[#405862]/70 mb-2 flex items-center flex-wrap">
                        <span className="bg-[#f5f1eb] px-2 py-1 rounded-full text-xs">{recentPost.topic}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {recentPost.readingTime}
                        </span>
                      </div>
                      <Link href={`/blog/${recentPost.slug}`}>
                        <h3 className="text-xl font-bold mb-3 text-[#405862] group-hover:text-[#4ecdc4] transition-colors">
                          {recentPost.title}
                        </h3>
                      </Link>
                      <p className="text-[#405862] mb-6 leading-relaxed">{recentPost.excerpt}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src={recentPost.author.image || "/placeholder.svg"}
                              alt={recentPost.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <span className="font-medium text-[#405862] block text-sm">{recentPost.author.name}</span>
                            <span className="text-xs text-[#405862]/70">{recentPost.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-[#405862] hover:bg-[#334852]" asChild>
                        <Link href={`/blog/${recentPost.slug}`}>Read Full Article</Link>
                      </Button>
                      <div className="text-center mt-3">
                        <Link href="/blog" className="text-[#405862] hover:text-[#4ecdc4] text-sm">
                          View all blog posts
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Stay Updated Section */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container">
          <NewsletterForm darkMode={true} />
        </div>
      </section>
    </div>
  )
}

