import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OurWorkPage() {
  return (
    <div>
      <section className="bg-slate-100 py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-center">Our Work So Far</h1>
          <p className="text-center text-slate-600 mt-4">
            Discover the impact we've made in inspiring the next generation of healthcare professionals.
          </p>
        </div>
      </section>

      {/* Research Initiatives */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Research Initiatives</h2>
              <p className="text-slate-600">
                Our research proposal competition allows students to work with mentors to develop impactful research
                proposals. Students collaborate with the guidance of educators and experienced medical students.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Hands-on research experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Opportunity to publish papers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Mentorship from healthcare researchers</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Research Initiatives"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Webinars */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Educational Webinars"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-2xl font-bold">Educational Webinars</h2>
              <p className="text-slate-600">
                We host engaging webinars featuring healthcare professionals who share insights about different medical
                specialties, career paths, and the realities of working in healthcare.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Interactive Q&A sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Diverse medical topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Networking opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Building */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Community Building</h2>
              <p className="text-slate-600">
                Dr Interested fosters a supportive community where students can connect, share resources, and
                collaborate on projects related to healthcare and medicine.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Peer mentorship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Collaborative learning environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Leadership skill development</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Community Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-slate-600">Students Engaged</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-slate-600">Webinars Hosted</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-slate-600">Research Projects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-slate-600">Schools Represented</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/our-work/impact">See Our Full Impact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

