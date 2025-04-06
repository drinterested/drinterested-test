import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Interested - Inspiring Future Healthcare Professionals",
    short_name: "Dr. Interested",
    description:
      "Dr. Interested empowers high school students to explore careers in healthcare through education, research, and mentorship.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1eb",
    theme_color: "#405862",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

