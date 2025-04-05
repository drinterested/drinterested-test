import Image from "next/image"

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

      {/* Competitions */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Competitions</h2>
              <p className="text-slate-600">
                We provide students with unique opportunities to engage in research, writing, and academic exploration.
                From creative competitions to collaborative projects, our members gain hands-on experience with
                real-world applications in healthcare and STEM fields.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Research Poster Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Creative Arts & Writing Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Mentorship from within the club</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/competition.png" alt="Competitions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Initiatives */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/research.png" alt="Research Initiatives" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-2xl font-bold">Research Initiatives</h2>
              <p className="text-slate-600">
                At Dr. Interested, we empower students to explore cutting-edge medical research through hands-on
                initiatives. Our programs provide opportunities to develop research skills, collaborate with mentors,
                and contribute to meaningful projects in the healthcare field.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Interactive Q&A sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-slate-600">Research Internship Program</span>
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
              <Image src="/collaboration.png" alt="Community Building" fill className="object-cover" />
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
              <div className="text-3xl font-bold text-primary mb-2">20,000+</div>
              <div className="text-slate-600">Students Engaged</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-slate-600">Webinars Hosted</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">11+</div>
              <div className="text-slate-600">Research Projects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-slate-600">Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

