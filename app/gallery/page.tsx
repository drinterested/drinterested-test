import Image from "next/image"
import { Button } from "@/components/ui/button"

const galleryCategories = [
  {
    id: "events",
    title: "Event Highlights",
    images: Array.from({ length: 6 }, (_, i) => ({
      id: `event-${i + 1}`,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Event highlight ${i + 1}`,
    })),
  },
  {
    id: "research",
    title: "Research Showcase",
    images: Array.from({ length: 6 }, (_, i) => ({
      id: `research-${i + 1}`,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Research showcase ${i + 1}`,
    })),
  },
  {
    id: "team",
    title: "Team Building",
    images: Array.from({ length: 6 }, (_, i) => ({
      id: `team-${i + 1}`,
      src: "/placeholder.svg?height=400&width=600",
      alt: `Team building ${i + 1}`,
    })),
  },
]

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-slate-100 py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-center">Gallery</h1>
          <p className="text-center text-slate-600 mt-4">Images of our work, events, and community in action.</p>
        </div>
      </section>

      {galleryCategories.map((category) => (
        <section key={category.id} className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image) => (
                <div key={image.id} className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      View Larger
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Have photos from our events? We'd love to feature them in our gallery!
          </p>
          <Button variant="secondary">Submit Photos</Button>
        </div>
      </section>
    </div>
  )
}

