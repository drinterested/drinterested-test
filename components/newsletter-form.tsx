"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsletterForm({
  className = "",
  darkMode = false,
  showFirstName = false,
  compact = false,
}: {
  className?: string
  darkMode?: boolean
  showFirstName?: boolean
  compact?: boolean
}) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      // Submit to ConvertKit
      const response = await fetch("https://app.kit.com/forms/7869628/subscriptions", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        e.currentTarget.reset()
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
  }

  const textColor = darkMode ? "text-white" : "text-[#405862]"
  const inputBgColor = darkMode ? "bg-[#4f6b75]" : "bg-white"
  const inputBorderColor = darkMode ? "border-[#5a7682]" : "border-[#405862]"
  const inputTextColor = darkMode ? "text-white" : "text-[#405862]"
  const inputPlaceholderColor = darkMode ? "placeholder:text-gray-300" : "placeholder:text-gray-500"
  const linkColor = darkMode ? "text-white hover:text-[#4ecdc4]" : "text-[#405862] hover:text-[#4ecdc4]"

  // Adjust heading sizes for compact mode
  const headingClass = compact
    ? `text-xl font-bold mb-2 text-center ${textColor}`
    : `text-3xl font-bold mb-4 text-center ${textColor}`

  const descriptionClass = compact ? `text-center mb-4 text-sm ${textColor}` : `text-center mb-8 text-lg ${textColor}`

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto">
        {!compact && (
          <>
            <h2 className={headingClass}>Stay Updated</h2>
            <p className={descriptionClass}>
              Stay updated on Dr. Interested and other exciting healthcare opportunities for high schoolers!
            </p>
          </>
        )}

        {isSubmitted ? (
          <div className="text-center p-4 bg-[#4ecdc4]/10 rounded-lg border border-[#4ecdc4]">
            <h3 className={`text-lg font-bold mb-2 ${textColor}`}>Thank You!</h3>
            <p className={`mb-4 text-sm ${textColor}`}>Check your email to confirm your subscription.</p>
            <Button onClick={resetForm} className="bg-[#4ecdc4] hover:bg-[#3dbdb5] text-white text-sm py-2">
              Subscribe Another Email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            {showFirstName && (
              <div className="formkit-field">
                <input
                  className={`px-4 py-3 rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full`}
                  aria-label="First Name"
                  name="fields[first_name]"
                  placeholder="First Name"
                  type="text"
                />
              </div>
            )}
            <div className="formkit-field">
              <input
                className={`px-4 py-3 rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full`}
                name="email_address"
                aria-label="Email Address"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#4ecdc4] hover:bg-[#3dbdb5] text-white px-6 py-3 rounded-md font-medium w-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                <span>Subscribe</span>
              )}
            </Button>
            <p className={`text-center text-sm mt-2 ${textColor}/70`}>
              By subscribing, you agree to our{" "}
              <Link href="/terms" className={`${linkColor} transition-colors underline`}>
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className={`${linkColor} transition-colors underline`}>
                Privacy Policy
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

