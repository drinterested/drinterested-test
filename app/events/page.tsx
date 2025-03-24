"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

const upcomingEvents = [
  {
    id: 1,
    title: "Pathways to Medicine Webinar",
    date: "Apr 15",
    time: "4:00 PM EST",
    location: "Virtual Event",
    description: "Learn about the different pathways to medical professions and current trends in healthcare.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Medical School Application Workshop",
    date: "May 10",
    time: "5:30 PM EST",
    location: "Virtual Event",
    description: "Get insider tips on preparing medical school applications from admissions experts.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Healthcare Career Panel",
    date: "Jun 05",
    time: "6:00 PM EST",
    location: "Virtual Event",
    description: "Explore diverse healthcare careers beyond medicine with professionals from various specialties.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Research Proposal Competition",
    date: "Feb 20",
    description:
      "Students worked with mentors to create impactful research proposals, with the top submissions developed into full papers.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function EventsPage() {
  return (
    <div>
      <section className="bg-[#f5f1eb] py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-center text-[#405862]">Events</h1>
          <p className="text-center text-[#405862] mt-4">
            Join us for engaging events designed to educate and inspire the next generation of healthcare professionals.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#ffffff]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#405862]">Upcoming Events</h2>
          <p className="text-center text-[#405862] mb-12">
            Stay informed about our upcoming events, designed to educate and inspire.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-[#405862]">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-[#405862]">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-[#405862]">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-[#405862]">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-[#405862]">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-sm text-[#405862]">{event.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button className="w-full bg-[#405862] hover:bg-[#334852]" size="sm">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-[#f5f1eb]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#405862]">Past Events</h2>
          <p className="text-center text-[#405862] mb-12">
            Take a look at some of the amazing events we've hosted so far!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm border border-[#405862]"
              >
                <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-lg font-semibold mb-2 text-[#405862]">{event.title}</h3>
                  <div className="flex items-center text-sm text-[#405862] mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <p className="text-sm text-[#405862] mb-4">{event.description}</p>
                  <Button
                    variant="outline"
                    className="border-[#405862] text-[#405862] hover:bg-[#405862] hover:text-white"
                    size="sm"
                  >
                    View Recap
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/events/archive" className="text-[#405862] hover:underline">
              View all past events
            </Link>
          </div>
        </div>
      </section>

      {/* Don't Miss Our Next Event */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}

