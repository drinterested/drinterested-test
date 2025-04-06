"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, AlertCircle, CheckCircle, ExternalLink } from "lucide-react"
import { upcomingEvents, pastEvents } from "@/data/events"
import NewsletterForm from "@/components/newsletter-form"

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
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden border-[#405862] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  {event.status === "closed" && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Registration Closed
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-[#405862]">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-[#405862]">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    {event.time && (
                      <div className="flex items-center text-sm text-[#405862]">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                    )}
                    <div className="flex items-center text-sm text-[#405862]">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-sm text-[#405862]">{event.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  {event.status === "open" ? (
                    <Button className="w-full bg-[#405862] hover:bg-[#334852]" size="sm" asChild>
                      <Link href={event.link} target="_blank" rel="noopener noreferrer">
                        Register Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : event.status === "full" ? (
                    <Button className="w-full bg-gray-500 hover:bg-gray-600 cursor-not-allowed" size="sm" disabled>
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Registration Full
                    </Button>
                  ) : event.status === "closed" ? (
                    <Button
                      className="w-full bg-[#405862] hover:bg-[#334852] opacity-75 cursor-not-allowed"
                      size="sm"
                      disabled
                    >
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Registration Closed
                    </Button>
                  ) : (
                    <Button className="w-full bg-[#4ecdc4] hover:bg-[#3dbdb5]" size="sm" asChild>
                      <Link href={event.link}>
                        See Impact
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
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
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm border border-[#405862] hover:shadow-lg transition-all duration-300"
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
                    asChild
                  >
                    {event.title === "Dr. Interested Medical-Technological Internship" ? (
                      <Link href="/events/internship-recap">
                        View Recap
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <Link href={event.link} target="_blank" rel="noopener noreferrer">
                        View Recap
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container">
          <NewsletterForm darkMode={true} showFirstName={false} />
        </div>
      </section>
    </div>
  )
}

