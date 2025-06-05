// Types for our events data
export type EventType = {
  title: string
  date: string
  time?: string
  location: string
  description: string
  image: string
  status: "open" | "full" | "completed" | "closed"
  link: string
  featured?: boolean
}

// Upcoming events data
export const upcomingEvents: EventType[] = [
  {
    title: "Podcast Collaboration with BioMedizone",
    date: "June 2025",
    location: "Virtual",
    description: "Join our exciting podcast collaboration with BioMedizone to explore cutting-edge topics in healthcare and medical innovation. Sign-ups to make the podcast with us are now open!",
    image: "/biomedpodcast.png",
    status: "open",
    link: "https://forms.gle/2Dxui6bq1Xdgpz5M8",
    featured: true,
  },
  {
    title: "Healthcare Media Promotion Event",
    date: "March 2025 - Ongoing",
    time: "Ongoing",
    location: "Virtual & Social Media Platforms",
    description: "Promoting healthcare-related media to spread awareness on medical topics and innovations.",
    image: "/media-event.png",
    status: "open",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfx4SmOt6v3zgsgTunvjzLd8kwZUqV6RywEpkYekYPPFfw36A/viewform",
    featured: false,
  },
]

// Past events data
export const pastEvents: EventType[] = [
    {
    title: "Podcast Collaboration with Health Beyond Borders",
    date: "May 2025",
    location: "Virtual",
    description:
      "A collaborative podcast with Health Beyond Borders, featuring discussions on youth engagement in global health equity. Check out the recap!",
    image: "/hbbpodcast.png",
    status: "completed",
    link: "https://www.instagram.com/p/DJzlI2ouJ8R/?img_index=1",
    featured: false,
  },
  {
    title: "The Resilient Minds Project",
    date: "April 27, 2025",
    time: "2:00 PM - 4:00 PM EST",
    location: "Virtual Event",
    description:
      "A virtual initiative aimed at empowering youth with practical strategies to improve mental, emotional, and physical well-being. Through engaging workshops, interactive activities, and expert insights, participants will gain valuable skills in stress management, resilience-building, and self-care.",
    image: "/mindsproject.png",
    status: "completed",
    link: "https://www.instagram.com/p/DI9yuL0u8SK/?img_index=1",
    featured: false,
  },
  {
    title: "Dr. Interested Medical-Technological Compitition",
    date: "March 2025",
    location: "Virtual Event",
    description:
      "Participants worked on research projects and technological innovations in medicine, culminating in final presentations.",
    image: "/research.png",
    status: "completed",
    link: "/events/internship-recap",
  },
  {
    title: "Dr. Interested Creative Contest",
    date: "February 2025",
    location: "Virtual Event",
    description:
      "Encouraged students to creatively express their passion for healthcare through art, writing, and multimedia projects.",
    image: "/competition.png",
    status: "completed",
    link: "https://www.instagram.com/p/DHBvw9WOyKj/?img_index=1",
  },
  {
    title: "Virtual Cards for Nurses",
    date: "January 2025 - February 2025",
    location: "Virtual Event",
    description:
      "Participants created over 375 virtual appreciation cards for nurses to recognize their dedication and hard work.",
    image: "/cards.png",
    status: "completed",
    link: "https://www.instagram.com/p/DGjvbTNup3c/",
  },
]

// Helper function to get the latest ongoing event
export const getLatestOngoingEvent = (): EventType | undefined => {
  return upcomingEvents.find(
    (event) =>
      event.featured ||
      event.date.toLowerCase().includes("ongoing") ||
      new Date(event.date.split(" - ")[1] || event.date) >= new Date(),
  )
}
