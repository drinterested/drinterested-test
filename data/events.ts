// Types for our events data
export type EventType = {
    id: number
    title: string
    date: string
    time?: string
    location: string
    description: string
    image: string
    status: "open" | "full" | "completed"
    link: string
    featured?: boolean
  }
  
  // Upcoming events data
  export const upcomingEvents: EventType[] = [
    {
      id: 1,
      title: "Healthcare Media Promotion Event",
      date: "March 2025 - Ongoing",
      time: "Ongoing",
      location: "Virtual & Social Media Platforms",
      description: "Promoting healthcare-related media to spread awareness on medical topics and innovations.",
      image: "/media-event.png",
      status: "open",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfx4SmOt6v3zgsgTunvjzLd8kwZUqV6RywEpkYekYPPFfw36A/viewform",
      featured: true,
    },
    {
      id: 2,
      title: "Dr. Interested Medical-Technological Internship",
      date: "March 2025 - Ongoing",
      time: "Ongoing",
      location: "Virtual Event",
      description:
        "Participants work on research projects and technological innovations in medicine, culminating in final presentations.",
      image: "/research.png",
      status: "full",
      link: "https://empty-link.com",
      featured: false,
    },
  ]
  
  // Past events data
  export const pastEvents: EventType[] = [
    {
      id: 3,
      title: "Dr. Interested Creative Contest",
      date: "February 2025",
      location: "Virtual Event",
      description:
        "Encouraged students to creatively express their passion for healthcare through art, writing, and multimedia projects.",
      image: "/competition.png",
      status: "completed",
      link: "/our-work/creative-contest-2025",
    },
    {
      id: 4,
      title: "Virtual Cards for Nurses",
      date: "January 2025 - February 2025",
      location: "Virtual Event",
      description:
        "Participants created over 375 virtual appreciation cards for nurses to recognize their dedication and hard work.",
      image: "/cards.png",
      status: "completed",
      link: "/our-work/nurse-appreciation-2025",
    },
  ]
  
  // Helper function to get the latest ongoing event
  export const getLatestOngoingEvent = (): EventType | undefined => {
    return upcomingEvents.find(
      (event) =>
        event.featured &&
        (event.date.toLowerCase().includes("ongoing") ||
          new Date(event.date.split(" - ")[1] || event.date) >= new Date()),
    )
  }
  
  