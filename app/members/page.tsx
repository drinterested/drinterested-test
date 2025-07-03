"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, Mail, Globe, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { leadership, teamMembers, advisors, type Member, type Advisor } from "@/data/members"

interface MemberCardProps {
  member: Member | Advisor
  isExpanded: boolean
  onToggle: () => void
}

function MemberCard({ member, isExpanded, onToggle }: MemberCardProps) {
  return (
    <Card className="hover-card-effect bg-white border-[#405862]/10">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="rounded-full object-cover border-4 border-[#4ecdc4]/20"
            />
          </div>
          <h3 className="text-xl font-bold text-[#405862] mb-1">{member.name}</h3>
          <p className="text-[#4ecdc4] font-medium mb-2">{member.role}</p>
          {"institution" in member && member.institution && (
            <p className="text-[#405862]/60 text-sm mb-3">{member.institution}</p>
          )}

          <div className="w-full">
            <Button
              variant="ghost"
              onClick={onToggle}
              className="text-[#405862] hover:text-[#4ecdc4] p-0 h-auto font-normal text-sm mb-3"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Read Bio <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>

            {isExpanded && (
              <div className="mb-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-[#405862]/80 text-sm leading-relaxed">{member.bio}</p>
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {member.twitter && (
              <Link
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {member.email && (
              <Link href={`mailto:${member.email}`} className="text-[#405862] hover:text-[#4ecdc4] transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            )}
            {member.website && (
              <Link
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#405862] hover:text-[#4ecdc4] transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MembersPage() {
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set())

  const toggleMemberExpansion = (memberId: string) => {
    setExpandedMembers((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(memberId)) {
        newSet.delete(memberId)
      } else {
        newSet.add(memberId)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#405862] to-[#4a6570] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Passionate students and dedicated advisors working together to inspire the next generation of healthcare
            professionals
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white border border-[#405862]/10">
              <TabsTrigger
                value="leadership"
                className="data-[state=active]:bg-[#4ecdc4] data-[state=active]:text-white"
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-[#4ecdc4] data-[state=active]:text-white">
                Team Members
              </TabsTrigger>
              <TabsTrigger value="advisors" className="data-[state=active]:bg-[#4ecdc4] data-[state=active]:text-white">
                Advisors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="leadership">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#405862] mb-4">Leadership Team</h2>
                <p className="text-[#405862]/80 max-w-2xl mx-auto">
                  Meet the visionary leaders who founded and guide Dr. Interested's mission to empower future healthcare
                  professionals.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    isExpanded={expandedMembers.has(member.id)}
                    onToggle={() => toggleMemberExpansion(member.id)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#405862] mb-4">Team Members</h2>
                <p className="text-[#405862]/80 max-w-2xl mx-auto">
                  Our dedicated team of student leaders who work tirelessly to create opportunities and support for
                  their peers.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    isExpanded={expandedMembers.has(member.id)}
                    onToggle={() => toggleMemberExpansion(member.id)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisors">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#405862] mb-4">Medical Student Advisors</h2>
                <p className="text-[#405862]/80 max-w-2xl mx-auto">
                  Experienced medical students who provide mentorship, guidance, and real-world insights to help high
                  school students navigate their healthcare career journey.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advisors.map((advisor) => (
                  <MemberCard
                    key={advisor.id}
                    member={advisor}
                    isExpanded={expandedMembers.has(advisor.id)}
                    onToggle={() => toggleMemberExpansion(advisor.id)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#405862] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students who want to make a difference in healthcare education.
          </p>
          <Link href="/contact">
            <Button className="bg-[#4ecdc4] hover:bg-[#3dbdb5] text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
