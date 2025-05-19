import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Interested",
    short_name: "Dr. Interested",
    description:
      "Empowering high school students to explore careers in healthcare through education, research, and mentorship.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#405862",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
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
