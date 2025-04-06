"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

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
  const isMobile = useIsMobile()

  // Add useEffect to load ConvertKit script
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.getElementById("ck-script")) {
      const script = document.createElement("script")
      script.id = "ck-script"
      script.src = "https://f.convertkit.com/ckjs/ck.5.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const textColor = darkMode ? "text-white" : "text-[#405862]"
  const inputBgColor = darkMode ? "bg-[#4f6b75]" : "bg-white"
  const inputBorderColor = darkMode ? "border-[#5a7682]" : "border-[#405862]"
  const inputTextColor = darkMode ? "text-white" : "text-[#405862]"
  const inputPlaceholderColor = darkMode ? "placeholder:text-gray-300" : "placeholder:text-gray-500"
  const linkColor = darkMode ? "text-white hover:text-[#4ecdc4]" : "text-[#405862] hover:text-[#4ecdc4]"

  // Adjust heading sizes for compact mode
  const headingClass = compact
    ? `text-xl font-bold mb-2 text-center ${textColor}`
    : `text-3xl md:text-3xl font-bold mb-4 text-center ${textColor}`

  const descriptionClass = compact
    ? `text-center mb-4 text-sm ${textColor}`
    : `text-center mb-6 md:mb-8 text-base md:text-lg ${textColor}`

  // Adjust input padding for mobile
  const inputPadding = isMobile ? "px-3 py-2.5" : "px-4 py-3"
  const buttonPadding = isMobile ? "px-4 py-2.5" : "px-6 py-3"

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto max-w-md">
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
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#4ecdc4] hover:bg-[#3dbdb5] text-white text-sm py-2"
            >
              Subscribe Another Email
            </Button>
          </div>
        ) : (
          <form
            action="https://app.kit.com/forms/7869628/subscriptions"
            className="seva-form formkit-form space-y-2"
            method="post"
            data-sv-form="7869628"
            data-uid="fc097f686e"
            data-format="inline"
            data-version="5"
          >
            <div data-style="clean">
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="false" className="formkit-fields space-y-2">
                {showFirstName && (
                  <div className="formkit-field">
                    <input
                      className={`${inputPadding} rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full text-base`}
                      aria-label="First Name"
                      name="fields[first_name]"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                )}
                <div className="formkit-field">
                  <input
                    className={`${inputPadding} rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} ${inputPlaceholderColor} focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full text-base`}
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    required
                    type="email"
                  />
                </div>
                <button
                  data-element="submit"
                  className={`formkit-submit formkit-submit bg-[#4ecdc4] hover:bg-[#3dbdb5] text-white ${buttonPadding} rounded-md font-medium w-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 text-base`}
                >
                  <div className="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
            <p className={`text-center text-xs md:text-sm mt-2 ${textColor}/70`}>
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

