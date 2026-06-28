import type { Metadata } from "next"
import EventsClientPage from "./EventsClientPage"
import { supabase } from "@/lib/supabase-client"

export const revalidate = 60; // Revalidate events every 60 seconds (ISR)

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Dr. Interested's engaging events and initiatives designed to educate and inspire future healthcare professionals. From webinars to research competitions, find opportunities to grow.",
  keywords: [
    "healthcare events",
    "medical webinars",
    "student research competitions",
    "healthcare workshops",
    "medical education events",
    "volunteer opportunities",
  ],
  openGraph: {
    title: "Events | Dr. Interested",
    description:
      "Join Dr. Interested's engaging events and initiatives designed to educate and inspire future healthcare professionals.",
    url: "https://www.drinterested.org/events",
    siteName: "Dr. Interested",
    type: "website",
    images: [
      {
        url: "/websitebanner.jpg",
        width: 1920,
        height: 1080,
        alt: "Dr. Interested Events",
      },
    ],
  },
  alternates: {
    canonical: "https://www.drinterested.org/events",
  },
}

export default async function EventsPage() {

  const { data: allEventsData } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })

  const sortEvents = (eventsList: any[], ascending = true) => {
    return [...eventsList].sort((a, b) => {
      const dateA = new Date(a.date).getTime() || 0
      const dateB = new Date(b.date).getTime() || 0
      return ascending ? dateA - dateB : dateB - dateA
    })
  }

  const rawUpcoming = allEventsData?.filter(e => !e.is_past) || []
  const rawPast = allEventsData?.filter(e => e.is_past) || []

  const upcomingEvents = sortEvents(rawUpcoming, true)
  const pastEvents = sortEvents(rawPast, false)

  return <EventsClientPage upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
}
