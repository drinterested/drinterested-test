"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react"
import SeoSchema from "@/components/seo-schema"
import Head from "next/head"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false) // New state for form submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the data for submission
    const formDataToSend = new FormData()
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("subject", formData.subject)
    formDataToSend.append("message", formData.message)

    // Send the data to Formspree endpoint
    try {
      const response = await fetch("https://formspree.io/f/mnnpgkee", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      // Check if the form submission was successful
      if (response.ok) {
        console.log("Form submitted successfully")
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 5000) // Hide success message after 5 seconds
      } else {
        console.error("Form submission failed")
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting the form. Please try again.")
    }
  }

  // SEO schema for contact page
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Dr. Interested",
    description:
      "Get in touch with Dr. Interested for questions about our events, collaborations, or joining our team.",
    url: "https://drinterested.tech/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Dr. Interested",
      email: "admin@drinterested.tech",
      url: "https://drinterested.tech",
      sameAs: ["https://www.instagram.com/dr.interested/", "https://www.linkedin.com/company/dr-interested"],
    },
  }

  return (
    <div>
      <Head>
        <title>Contact Us | Dr. Interested - Healthcare Education</title>
        <meta
          name="description"
          content="Have questions or want to get involved? Contact Dr. Interested for information about our events, collaborations, or joining our team."
        />
        <meta
          name="keywords"
          content="contact, healthcare education, high school students, medical careers, Dr. Interested"
        />
        <link rel="canonical" href="https://drinterested.tech/contact" />
      </Head>

      <SeoSchema schema={contactPageSchema} />

      <section className="bg-slate-100 py-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
          <p className="text-center text-slate-600 mt-4">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Whether you have questions about our events, want to collaborate, or are interested in joining our team,
                we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-600">admin@drinterested.tech</p>
                    <p className="text-sm text-slate-500">We'll respond within 48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-slate-600">Connect with our community</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://www.instagram.com/dr.interested/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-primary"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/dr-interested"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>

              {/* Show success message */}
              {isSubmitted && (
                <div className="mt-4 text-center text-green-600">
                  <p>Form submitted successfully! We will get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How can I join Dr. Interested?</h3>
                <p className="text-slate-600">
                  Join our Discord to become a regular member, follow us on Instagram, and stay active on Discord to be 
                  the first to know when executive applications open!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do I need to be pre-med to join?</h3>
                <p className="text-slate-600">
                  Not at all! We welcome all high school students interested in healthcare, regardless of their future
                  career plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Are your events only for members?</h3>
                <p className="text-slate-600">
                  Most of our webinars and educational events are open to all interested students. Some special events
                  may be member-exclusive (meaning they would only be offered to the people on our Discord).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How many schools collaborate with Dr. Interested?</h3>
                <p className="text-slate-600">
                  We're always open to school partnerships and currently work with several high schools. Contact our
                  Outreach Department for potential collaborations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
