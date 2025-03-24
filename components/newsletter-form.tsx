"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    // Add your subscription logic here
    setEmail("")
    alert("Thank you for subscribing!")
  }

  return (
    <div className="w-full">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
        <p className="text-center mb-8 text-lg">
          Stay updated on Dr. Interested and other exciting healthcare opportunities for high schoolers!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#405862] text-black"
            required
          />
          <button
            type="submit"
            className="bg-[#4ecdc4] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-[#3dbdb5] transition-colors shadow-md hover:shadow-lg"
          >
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </form>
        <p className="text-center text-sm">
          By subscribing, you agree to our{" "}
          <Link
            href="/terms"
            className="text-white hover:text-[#4ecdc4] transition-colors font-medium underline flex items-center gap-1 inline-flex"
          >
            <FileText className="h-3 w-3" />
            Terms & Conditions
          </Link>
        </p>
      </div>
    </div>
  )
}

