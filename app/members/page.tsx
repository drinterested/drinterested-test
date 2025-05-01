"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Globe, ChevronDown, ChevronUp, Clock } from "lucide-react"
import { president, departments, vicePresidents } from "@/data/members"
import ScrollToTop from "@/components/scroll-to-top"

export default function MembersPage() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({})
  const [visibleMembers, setVisibleMembers] = useState<Record<string, boolean>>({})

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const toggleMembers = (id: string) => {
    setVisibleMembers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const truncateBio = (bio: string, maxLength = 150) => {
    if (bio.length <= maxLength) return bio
    return bio.substring(0, maxLength) + "..."
  }

  return (
    <div>
      <ScrollToTop />
      <section className="bg-[#f5f1eb] py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#405862]">Our Team</h1>
          <p className="text-center text-[#405862] mb-8 max-w-2xl mx-auto">
            Meet the talented team behind Dr. Interested, dedicated to inspiring the next generation of healthcare
            professionals.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-[#ffffff]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center text-[#405862]">Leadership</h2>

          {/* President */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center text-[#405862]">President</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="overflow-hidden border-[#405862] shadow-md hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                    <div className="relative h-full w-full aspect-square">
                      <Image src="/adil.png" alt={president.name} fill className="object-cover" />
                    </div>
                  </div>
                  <CardContent className="md:col-span-2 p-6">
                    <h4 className="text-lg font-semibold text-[#405862]">{president.name}</h4>
                    <p className="text-sm text-[#405862] opacity-75 mb-3">{president.role}</p>
                    <p className="text-sm text-[#405862] mb-4">
                      {expandedBios[president.id] ? president.bio : truncateBio(president.bio)}
                    </p>
                    <button
                      onClick={() => toggleBio(president.id)}
                      className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-4 flex items-center"
                    >
                      {expandedBios[president.id] ? (
                        <>
                          Show Less <ChevronUp className="h-4 w-4 ml-1" />
                        </>
                      ) : (
                        <>
                          See More <ChevronDown className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </button>
                    <div className="flex space-x-3">
                      {president.socialLinks?.linkedin && (
                        <Link
                          href={president.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                        </Link>
                      )}
                      {president.socialLinks?.instagram && (
                        <Link
                          href={president.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                        >
                          <Instagram className="h-6 w-6" />
                        </Link>
                      )}
                      {president.socialLinks?.website && (
                        <Link
                          href={president.socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                        >
                          <Globe className="h-6 w-6" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>

          {/* Vice Presidents */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center text-[#405862]">Vice Presidents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {vicePresidents.map((vp) => (
                <Card key={vp.id} className="overflow-hidden border-[#405862] shadow-md hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1 bg-[#f5f1eb] flex items-center justify-center">
                      <div className="relative h-full w-full aspect-square">
                        <Image
                          src={vp.image || "/placeholder.svg"}
                          alt={vp.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <CardContent className="md:col-span-2 p-6">
                      <h4 className="text-lg font-semibold text-[#405862]">{vp.name}</h4>
                      <p className="text-sm text-[#405862] opacity-75 mb-3">{vp.role}</p>
                      <p className="text-sm text-[#405862] mb-4">
                        {expandedBios[vp.id] ? vp.bio : truncateBio(vp.bio, 150)}
                      </p>
                      {vp.bio.length > 150 && (
                        <button
                          onClick={() => toggleBio(vp.id)}
                          className="text-[#405862] text-sm font-medium hover:text-[#4ecdc4] transition-colors mb-4 flex items-center"
                        >
                          {expandedBios[vp.id] ? (
                            <>
                              Show Less <ChevronUp className="h-4 w-4 ml-1" />
                            </>
                          ) : (
                            <>
                              See More <ChevronDown className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </button>
                      )}
                      <div className="flex space-x-3">
                        {vp.socialLinks?.linkedin && (
                          <Link
                            href={vp.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                          >
                            <Linkedin className="h-6 w-6" />
                          </Link>
                        )}
                        {vp.socialLinks?.instagram && (
                          <Link
                            href={vp.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                          >
                            <Instagram className="h-6 w-6" />
                          </Link>
                        )}
                        {vp.socialLinks?.website && (
                          <Link
                            href={vp.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                          >
                            <Globe className="h-6 w-6" />
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-[#f5f1eb]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center text-[#405862]">Our Departments</h2>

          <div className="space-y-12">
            {departments.map((department) => (
              <div
                key={department.id}
                className="border rounded-lg overflow-hidden bg-white border-[#405862] shadow-md"
              >
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold text-[#405862]">{department.name}</h3>
                  <p className="text-[#405862] mt-2">{department.description}</p>
                </div>

                <div className="p-6 border-b">
                  <h4 className="text-lg font-semibold mb-4 text-[#405862]">Director</h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    {Array.isArray(department.director) ? (
                      department.director.map((director) => (
                        <Card
                          key={director.id}
                          className="overflow-hidden border-[#405862] shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="grid grid-cols-3">
                            <div className="col-span-1 bg-[#f5f1eb]">
                              <div className="relative h-full w-full aspect-square">
                                <Image
                                  src={director.image || "/placeholder.svg"}
                                  alt={director.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            <CardContent className="col-span-2 p-4">
                              <h5 className="font-semibold text-sm text-[#405862]">{director.name}</h5>
                              <p className="text-xs text-[#405862] opacity-75 mb-2">{director.role}</p>
                              <p className="text-xs text-[#405862] mb-2">
                                {expandedBios[director.id] ? director.bio : truncateBio(director.bio, 100)}
                              </p>
                              {director.bio.length > 100 && (
                                <button
                                  onClick={() => toggleBio(director.id)}
                                  className="text-[#405862] text-xs font-medium hover:text-[#4ecdc4] transition-colors mb-2 flex items-center"
                                >
                                  {expandedBios[director.id] ? (
                                    <>
                                      Show Less <ChevronUp className="h-3 w-3 ml-1" />
                                    </>
                                  ) : (
                                    <>
                                      See More <ChevronDown className="h-3 w-3 ml-1" />
                                    </>
                                  )}
                                </button>
                              )}
                              <div className="flex space-x-2">
                                {director.socialLinks?.linkedin && (
                                  <Link
                                    href={director.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Linkedin className="h-5 w-5" />
                                  </Link>
                                )}
                                {director.socialLinks?.instagram && (
                                  <Link
                                    href={director.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Instagram className="h-5 w-5" />
                                  </Link>
                                )}
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <Card className="overflow-hidden border-[#405862] shadow-sm hover:shadow-md transition-shadow">
                        <div className="grid grid-cols-3">
                          <div className="col-span-1 bg-[#f5f1eb]">
                            <div className="relative h-full w-full aspect-square">
                              <Image
                                src={department.director.image || "/placeholder.svg"}
                                alt={department.director.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <CardContent className="col-span-2 p-4">
                            <h5 className="font-semibold text-sm text-[#405862]">{department.director.name}</h5>
                            <p className="text-xs text-[#405862] opacity-75 mb-2">{department.director.role}</p>
                            <p className="text-xs text-[#405862] mb-2">
                              {expandedBios[department.director.id]
                                ? department.director.bio
                                : truncateBio(department.director.bio, 100)}
                            </p>
                            {department.director.bio.length > 100 && (
                              <button
                                onClick={() => toggleBio(department.director.id)}
                                className="text-[#405862] text-xs font-medium hover:text-[#4ecdc4] transition-colors mb-2 flex items-center"
                              >
                                {expandedBios[department.director.id] ? (
                                  <>
                                    Show Less <ChevronUp className="h-3 w-3 ml-1" />
                                  </>
                                ) : (
                                  <>
                                    See More <ChevronDown className="h-3 w-3 ml-1" />
                                  </>
                                )}
                              </button>
                            )}
                            <div className="flex space-x-2">
                              {department.director.socialLinks?.linkedin && (
                                <Link
                                  href={department.director.socialLinks.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                >
                                  <Linkedin className="h-5 w-5" />
                                </Link>
                              )}
                              {department.director.socialLinks?.instagram && (
                                <Link
                                  href={department.director.socialLinks.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                >
                                  <Instagram className="h-5 w-5" />
                                </Link>
                              )}
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#405862]">Members</h4>

                  {!visibleMembers[department.id] ? (
                    <Button
                      onClick={() => toggleMembers(department.id)}
                      className="bg-[#405862] hover:bg-[#334852] text-white shadow-sm hover:shadow-md transition-all"
                    >
                      Show Members
                    </Button>
                  ) : (
                    <>
                      <div className="grid gap-4 md:grid-cols-3">
                        {department.members.map((member) => (
                          <Card
                            key={member.id}
                            className="overflow-hidden border-[#405862] shadow-sm hover:shadow-md transition-shadow"
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                                  <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-sm text-[#405862]">{member.name}</h5>
                                  <p className="text-xs text-[#405862] opacity-75">{member.role}</p>
                                </div>
                              </div>
                              <p className="text-xs text-[#405862] mb-2">
                                {expandedBios[member.id] ? member.bio : truncateBio(member.bio, 80)}
                              </p>
                              {member.bio.length > 80 && (
                                <button
                                  onClick={() => toggleBio(member.id)}
                                  className="text-[#405862] text-xs font-medium hover:text-[#4ecdc4] transition-colors mb-2 flex items-center"
                                >
                                  {expandedBios[member.id] ? (
                                    <>
                                      Show Less <ChevronUp className="h-3 w-3 ml-1" />
                                    </>
                                  ) : (
                                    <>
                                      See More <ChevronDown className="h-3 w-3 ml-1" />
                                    </>
                                  )}
                                </button>
                              )}
                              <div className="flex space-x-2 mt-2">
                                {member.socialLinks?.linkedin && (
                                  <Link
                                    href={member.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Linkedin className="h-4 w-4" />
                                  </Link>
                                )}
                                {member.socialLinks?.instagram && (
                                  <Link
                                    href={member.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
                                  >
                                    <Instagram className="h-4 w-4" />
                                  </Link>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <Button
                        onClick={() => toggleMembers(department.id)}
                        className="bg-[#405862] hover:bg-[#334852] text-white mt-4 shadow-sm hover:shadow-md transition-all"
                      >
                        Hide Members
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Join Us</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Want to be part of the Dr. Interested team? We're always looking for passionate, driven students to join our
            community.
          </p>
          <Link
            href="https://forms.gle/i3Y6vazF5TErGBxG7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-[#405862] shadow-md hover:shadow-lg hover:bg-slate-100 transition-all"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}

