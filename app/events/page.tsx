"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, AlertCircle, CheckCircle, ExternalLink } from "lucide-react"
import { upcomingEvents, pastEvents } from "@/data/events"

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

      {/* Don't Miss Our Next Event */}
      <section className="py-16 bg-[#405862] text-white">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
            <p className="text-center mb-8 text-lg">
              Stay updated on Dr. Interested and other exciting healthcare opportunities for high schoolers!
            </p>

            <form
              action="https://app.kit.com/forms/7869628/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form="7869628"
              data-uid="fc097f686e"
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"false","scroll_percentage":null,"timer":null,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"hide","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"false","scroll_percentage":null,"timer":null,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"false","scroll_percentage":null,"timer":null,"devices":"all","show_once_every":15}},"version":"5"}'
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input
                      className="formkit-input px-4 py-3 rounded-md border border-white bg-[#4f6b75] text-white placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full"
                      aria-label="First Name"
                      name="fields[first_name]"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="formkit-field mt-2">
                    <input
                      className="formkit-input px-4 py-3 rounded-md border border-white bg-[#4f6b75] text-white placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Email Address"
                      required
                      type="email"
                    />
                  </div>
                  <button
                    data-element="submit"
                    className="formkit-submit formkit-submit bg-[#4ecdc4] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-[#3dbdb5] transition-colors shadow-md hover:shadow-lg w-full mt-2 transform hover:scale-105 duration-300"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Subscribe</span>
                  </button>
                </div>
                {/* Added text-center to the success message container */}
                <div
                  className="formkit-alert formkit-alert-success text-center"
                  data-element="success"
                  data-group="alert"
                >
                  <div className="formkit-alert-inner" style={{ maxWidth: "100%" }}>
                    <div className="formkit-alert-content">
                      <div className="formkit-alert-message"></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p className="text-center text-sm mt-2">
              By subscribing, you agree to our{" "}
              <Link href="/terms" className="text-[#4ecdc4] hover:text-white transition-colors font-medium underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-[#4ecdc4] hover:text-white transition-colors font-medium underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

