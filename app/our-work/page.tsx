"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurWorkPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div>
      <section className="bg-[#f5f1eb] py-10">
        <div className="container">
          <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-3xl font-bold text-[#405862]">Our Work So Far</h1>
            <p className="text-[#405862]/80 mt-3 max-w-2xl mx-auto">
              Discover the impact we've made in inspiring the next generation of healthcare professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-xl font-bold text-[#405862] flex items-center">
                Competitions
                <div className="w-10 h-1 bg-[#4ecdc4] ml-3"></div>
              </h2>
              <p className="text-[#405862]/80 text-sm">
                We provide students with unique opportunities to engage in research, writing, and academic exploration.
                From creative competitions to collaborative projects, our members gain hands-on experience with
                real-world applications in healthcare and STEM fields.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Research Poster Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Creative Arts & Writing Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Mentorship from within the club</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="relative h-[250px] rounded-lg overflow-hidden shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <Image
                src="/competition.png"
                alt="Competitions"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Initiatives */}
      <section className="py-10 bg-[#f5f1eb]/30">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="order-2 md:order-1 relative h-[250px] rounded-lg overflow-hidden shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <Image
                src="/research.png"
                alt="Research Initiatives"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              className="order-1 md:order-2 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <h2 className="text-xl font-bold text-[#405862] flex items-center">
                Research Initiatives
                <div className="w-10 h-1 bg-[#4ecdc4] ml-3"></div>
              </h2>
              <p className="text-[#405862]/80 text-sm">
                At Dr. Interested, we empower students to explore cutting-edge medical research through hands-on
                initiatives. Our programs provide opportunities to develop research skills, collaborate with mentors,
                and contribute to meaningful projects in the healthcare field.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Interactive Q&A sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Research Internship Program</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Networking opportunities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Building */}
      <section className="py-10 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-xl font-bold text-[#405862] flex items-center">
                Community Building
                <div className="w-10 h-1 bg-[#4ecdc4] ml-3"></div>
              </h2>
              <p className="text-[#405862]/80 text-sm">
                Dr Interested fosters a supportive community where students can connect, share resources, and
                collaborate on projects related to healthcare and medicine.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Peer mentorship opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Collaborative learning environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4ecdc4] font-bold">•</span>
                  <span className="text-[#405862]/80">Leadership skill development</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="relative h-[250px] rounded-lg overflow-hidden shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <Image
                src="/collaboration.png"
                alt="Community Building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-10 bg-[#f5f1eb]/30">
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-xl font-bold text-[#405862] inline-flex flex-col items-center">
              Our Impact
              <div className="w-16 h-1 bg-[#4ecdc4] mt-2"></div>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-[#405862]/10 hover:border-[#4ecdc4]/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                <div className="text-2xl font-bold text-[#4ecdc4] mb-1">55,000+</div>
                <div className="text-[#405862]/80 text-sm">Students Engaged</div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-[#405862]/10 hover:border-[#4ecdc4]/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-2xl font-bold text-[#4ecdc4] mb-1">65+</div>
                <div className="text-[#405862]/80 text-sm">Countries Reached</div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-[#405862]/10 hover:border-[#4ecdc4]/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-2xl font-bold text-[#4ecdc4] mb-1">350k+</div>
                <div className="text-[#405862]/80 text-sm">Marketing Reach</div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-[#405862]/10 hover:border-[#4ecdc4]/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-2xl font-bold text-[#4ecdc4] mb-1">550+</div>
                <div className="text-[#405862]/80 text-sm">Members</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
