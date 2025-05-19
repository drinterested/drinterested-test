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
      <section className="bg-[#f5f1eb] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-[#4ecdc4]/20 px-3 py-1 rounded-full text-[#405862] font-medium text-sm mb-2">
                Empowering Future Healthcare Leaders
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-[#405862]">
                Welcome to Dr.<span className="text-[#4ecdc4]">Interested</span>
              </h1>
              <p className="text-lg text-[#405862]/90 mt-2">
                Inspiring the Next Generation of Healthcare Professionals
              </p>
              <p className="text-[#405862]/80">
                Discover your pathway to a career in healthcare with Dr. Interested. From engaging webinars to hands-on
                research opportunities, we're here to help high school students explore the world of medicine.
              </p>
              <div className="flex flex-wrap gap-3 items-center mt-4">
                <Link
                  href="https://discord.gg/pzbGRgsGXY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#405862] text-white hover:bg-[#334852] px-5 py-2.5 rounded-md font-medium inline-flex items-center shadow-md hover:shadow-lg transition-all"
                >
                  Join Our Community
                </Link>

                <div className="flex items-center gap-3 flex-wrap mt-1">
                  <Link
                    href="https://discord.gg/pzbGRgsGXY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                    aria-label="Discord"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="12" r="1" />
                      <circle cx="15" cy="12" r="1" />
                      <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                      <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/dr.interested/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/dr-interested"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linktr.ee/dr.interested"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors gap-1"
                    aria-label="LinkTree"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[250px] md:h-[320px] flex items-center justify-center">
              <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-[#4ecdc4]/10 animate-pulse-slow"></div>
              <Image
                src="/logo.png"
                alt="Dr. Interested Logo"
                width={240}
                height={240}
                className="object-contain z-10 rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <div className="inline-block bg-[#405862]/10 px-3 py-1 rounded-full text-[#405862] font-medium text-sm">
                Our Mission
              </div>
              <h2 className="text-2xl font-bold text-[#405862]">About Dr. Interested</h2>
              <div className="w-16 h-1 bg-[#4ecdc4]"></div>
              <p className="text-[#405862]/90">
                Dr. Interested is a student-led organization empowering high school students to explore careers in
                healthcare and medical research. Through engaging events, leadership opportunities, and collaborative
                projects, we bridge the gap between passion and profession.
              </p>
              <p className="text-[#405862]/80">
                We're dedicated to providing students with the tools and resources they need to succeed in the medical
                field. From hosting expert-led webinars to offering volunteer opportunities and research initiatives,
                we're committed to making healthcare accessible and exciting for young minds.
              </p>
              <Link
                href="/our-work"
                className="inline-flex items-center mt-2 border border-[#405862] text-[#405862] hover:bg-[#405862] hover:text-white px-4 py-2 rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Learn More About Our Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center">
              <div className="relative h-[220px] w-[220px] md:h-[280px] md:w-[280px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#405862]/10 rounded-lg transform rotate-3"></div>
                <Image
                  src="/logo.png"
                  alt="About Dr. Interested"
                  fill
                  className="object-contain rounded-lg transform -rotate-3"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal, Mission, and Vision */}
      <section className="py-12 bg-[#f5f1eb]">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#405862] inline-flex flex-col items-center">
              Our Goal, Mission, and Vision
              <div className="w-20 h-1 bg-[#4ecdc4] mt-3"></div>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[#405862]/20 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="bg-[#4ecdc4]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ecdc4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 4v5h-9l1-1v-4"></path>
                  <path d="M15 4h6v5h-6"></path>
                  <path d="M4 13h5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M13 12v6"></path>
                  <path d="M4 7v12a2 2 0 0 0 2 2h12"></path>
                  <path d="M4 11V9a2 2 0 0 1 2-2h2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#405862]">Goal</h3>
              <p className="text-[#405862]/80 text-sm">
                To inspire, educate, and support high school students in their journey toward a career in healthcare by
                providing mentorship, resources, and hands-on opportunities.
              </p>
            </div>
            <div className="border border-[#405862]/20 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="bg-[#4ecdc4]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ecdc4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#405862]">Mission</h3>
              <p className="text-[#405862]/80 text-sm">
                To empower the next generation of healthcare professionals through education, collaboration, and
                meaningful experiences that build both skills and confidence.
              </p>
            </div>
            <div className="border border-[#405862]/20 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="bg-[#4ecdc4]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ecdc4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#405862]">Vision</h3>
              <p className="text-[#405862]/80 text-sm">
                A future where students are equipped with the knowledge and opportunities needed to excel in healthcare,
                contributing to a healthier, more informed society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Event Section */}
      {latestEvent && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#405862] flex items-center">
                Latest Event
                <div className="w-16 h-1 bg-[#4ecdc4] ml-3"></div>
              </h2>
              <Link href="/events" className="text-[#405862] hover:text-[#4ecdc4] text-sm flex items-center">
                View all events
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>

            <Card className="overflow-hidden border-[#405862]/20 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-56 md:h-auto">
                  <Image
                    src={latestEvent.image || "/logo.png"}
                    alt={latestEvent.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {latestEvent.status === "closed" && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-0.5 rounded-full text-xs font-bold">
                      Registration Closed
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                </div>
                <CardContent className="p-5 flex flex-col relative">
                  <div>
                    <div className="inline-block bg-[#405862]/10 px-2.5 py-0.5 rounded-full text-[#405862] font-medium text-xs mb-2">
                      {latestEvent.status === "open"
                        ? "Registration Open"
                        : latestEvent.status === "full"
                          ? "Registration Full"
                          : latestEvent.status === "closed"
                            ? "Registration Closed"
                            : "Completed"}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#405862]">{latestEvent.title}</h3>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center text-sm text-[#405862]/80">
                        <Calendar className="h-4 w-4 mr-2 text-[#4ecdc4]" />
                        {latestEvent.date}
                      </div>
                      {latestEvent.time && (
                        <div className="flex items-center text-sm text-[#405862]/80">
                          <Clock className="h-4 w-4 mr-2 text-[#4ecdc4]" />
                          {latestEvent.time}
                        </div>
                      )}
                      <div className="flex items-center text-sm text-[#405862]/80">
                        <MapPin className="h-4 w-4 mr-2 text-[#4ecdc4]" />
                        {latestEvent.location}
                      </div>
                    </div>
                    <p className="text-[#405862]/80 text-sm mb-5 line-clamp-3">{latestEvent.description}</p>
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
                      <Button className="w-full bg-[#405862] hover:bg-[#334852] opacity-75 cursor-not-allowed" disabled>
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Registration Closed
                      </Button>
                    ) : (
                      <Button className="w-full bg-[#4ecdc4] hover:bg-[#3dbdb5]" asChild>
                        <Link href={latestEvent.link}>See Impact</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Latest Blog Post Section */}
      {recentPost && (
        <section className="py-12 bg-[#f5f1eb]">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#405862] flex items-center">
                Latest from Our Blog
                <div className="w-16 h-1 bg-[#4ecdc4] ml-3"></div>
              </h2>
              <Link href="/blog" className="text-[#405862] hover:text-[#4ecdc4] text-sm flex items-center">
                View all posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>

            <Card className="overflow-hidden border-[#405862]/20 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="grid md:grid-cols-2">
                <div className="relative h-56 md:h-auto">
                  <Image
                    src={recentPost.coverImage || "/logo.png"}
                    alt={recentPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                </div>
                <CardContent className="p-5 flex flex-col">
                  <div>
                    <div className="flex items-center text-xs text-[#405862]/70 mb-2 flex-wrap gap-2">
                      <span className="bg-[#405862]/10 px-2.5 py-0.5 rounded-full">{recentPost.topic}</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {recentPost.readingTime}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {recentPost.date}
                      </span>
                    </div>
                    <Link href={`/blog/${recentPost.slug}`}>
                      <h3 className="text-xl font-bold mb-2 text-[#405862] group-hover:text-[#4ecdc4] transition-colors">
                        {recentPost.title}
                      </h3>
                    </Link>
                    <p className="text-[#405862]/80 mb-4 text-sm line-clamp-3">{recentPost.excerpt}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={recentPost.author.image || "/logo.png"}
                          alt={recentPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-[#405862] text-sm">{recentPost.author.name}</span>
                    </div>
                    <Button className="w-full bg-[#405862] hover:bg-[#334852]" asChild>
                      <Link href={`/blog/${recentPost.slug}`}>Read Full Article</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
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
