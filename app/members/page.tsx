import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter, Mail, GraduationCap } from "lucide-react"
import { leadership, departments, advisors } from "@/data/members"
import { generateSeoMetadata } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Our Team - Dr. Interested",
  description:
    "Meet the dedicated team behind Dr. Interested - passionate leaders, researchers, and medical student advisors committed to empowering the next generation of healthcare professionals.",
  keywords: [
    "Dr. Interested team",
    "healthcare education leaders",
    "medical student advisors",
    "healthcare mentors",
    "student organization leadership",
    "medical education team",
  ],
  url: "https://drinterested.tech/members",
})

function MemberCard({ member }: { member: any }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-4">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
          <AvatarFallback className="text-lg font-semibold bg-[#4ecdc4] text-white">
            {member.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <Badge variant="secondary" className="mx-auto">
          {member.role}
        </Badge>
        {member.institution && (
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-2">
            <GraduationCap className="h-4 w-4" />
            <span>{member.institution}</span>
            {member.year && <span>• {member.year}</span>}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        {member.bio && <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>}
        <div className="flex justify-center gap-2">
          {member.linkedin && (
            <Button variant="outline" size="sm" asChild>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {member.twitter && (
            <Button variant="outline" size="sm" asChild>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          )}
          {member.email && (
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${member.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function MembersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate leaders, researchers, and medical professionals dedicated to empowering the next generation of
          healthcare professionals through education and mentorship.
        </p>
      </div>

      <Tabs defaultValue="leadership" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="advisors">Advisors</TabsTrigger>
        </TabsList>

        <TabsContent value="leadership" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-8">
          {departments.map((department) => (
            <div key={department.name}>
              <h2 className="text-2xl font-semibold mb-6 text-center">{department.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.members.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="advisors" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Medical Student Advisors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current medical students who provide guidance, mentorship, and real-world insights to our high school
              members pursuing healthcare careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <MemberCard key={advisor.id} member={advisor} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
