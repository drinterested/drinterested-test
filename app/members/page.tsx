"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp, Linkedin, Instagram, Globe, ExternalLink } from "lucide-react"
import { president, vicePresidents, advisors, departments } from "@/data/members"
import type { MemberType } from "@/data/members"

export default function MembersPage() {
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set())

  const toggleMemberExpansion = (memberId: string) => {
    const newExpanded = new Set(expandedMembers)
    if (newExpanded.has(memberId)) {
      newExpanded.delete(memberId)
    } else {
      newExpanded.add(memberId)
    }
    setExpandedMembers(newExpanded)
  }

  const renderSocialLinks = (socialLinks?: MemberType["socialLinks"]) => {
    if (!socialLinks) return null

    return (
      <div className="flex gap-2 mt-3">
        {socialLinks.linkedin && (
          <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
        )}
        {socialLinks.instagram && (
          <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
              <Instagram className="h-4 w-4" />
            </Button>
          </Link>
        )}
        {socialLinks.website && (
          <Link href={socialLinks.website} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
              <Globe className="h-4 w-4" />
            </Button>
          </Link>
        )}
        {socialLinks.other && (
          <Link href={socialLinks.other} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    )
  }

  const renderMemberCard = (member: MemberType, isLeadership = false) => {
    const isExpanded = expandedMembers.has(member.id)
    const bioPreview = member.bio.length > 150 ? member.bio.substring(0, 150) + "..." : member.bio

    return (
      <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
              <Badge variant={isLeadership ? "default" : "secondary"} className="text-xs">
                {member.role}
              </Badge>
            </div>

            <div className="w-full">
              <p className="text-sm text-gray-600 leading-relaxed">{isExpanded ? member.bio : bioPreview}</p>

              {member.bio.length > 150 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleMemberExpansion(member.id)}
                  className="mt-2 h-8 px-2 text-xs"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="ml-1 h-3 w-3" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="ml-1 h-3 w-3" />
                    </>
                  )}
                </Button>
              )}
            </div>

            {renderSocialLinks(member.socialLinks)}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who make Dr. Interested possible. Our diverse team of students, educators,
            and healthcare professionals work together to inspire the next generation of medical leaders.
          </p>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="advisors">Advisors</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
          </TabsList>

          <TabsContent value="leadership" className="space-y-12">
            {/* President */}
            <section>
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">President</h2>
              <div className="flex justify-center">
                <div className="w-full max-w-md">{renderMemberCard(president, true)}</div>
              </div>
            </section>

            {/* Vice Presidents */}
            <section>
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Vice Presidents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {vicePresidents.map((vp) => renderMemberCard(vp, true))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="advisors" className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Medical Student Advisors</h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Our medical student advisors provide valuable guidance and mentorship, sharing their experiences and
                insights to help high school students navigate their path to healthcare careers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advisors.map((advisor) => renderMemberCard(advisor))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="departments" className="space-y-12">
            {departments.map((department) => (
              <section key={department.id} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{department.name}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{department.description}</p>
                </div>

                {/* Department Director(s) */}
                <div>
                  <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
                    {Array.isArray(department.director) ? "Directors" : "Director"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {Array.isArray(department.director)
                      ? department.director.map((director) => renderMemberCard(director))
                      : [renderMemberCard(department.director)]}
                  </div>
                </div>

                {/* Department Members */}
                {department.members.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">Team Members</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {department.members.map((member) => renderMemberCard(member))}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
