"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function NewsletterForm() {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement("script")
    script.src = "https://f.convertkit.com/ckjs/ck.5.js"
    document.body.appendChild(script)

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
        <p className="text-center mb-8 text-lg">
          Stay updated on Dr. Interested and other exciting healthcare opportunities for high schoolers!
        </p>

        <form
          action="https://app.kit.com/forms/7869628/subscriptions"
          className="seva-form formkit-form"
          method="post"
          data-sv-form="7869628"
          data-uid="fc097f686e"
          data-format="inline"
          data-version="5"
          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"false","scroll_percentage":null,"timer":null,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"hide","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"false","scroll_percentage":null,"timer":null,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"false","scroll_percentage":null,"timer":null,"devices":"all","show_once_every":15}},"version":"5"}'
        >
          <div data-style="clean">
            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
            <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input px-4 py-3 rounded-md border border-[#405862] bg-white text-[#405862] focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full"
                  aria-label="First Name"
                  name="fields[first_name]"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div className="formkit-field mt-2">
                <input
                  className="formkit-input px-4 py-3 rounded-md border border-[#405862] bg-white text-[#405862] focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] w-full"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  required
                  type="email"
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit bg-[#4ecdc4] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-[#3dbdb5] transition-colors shadow-md hover:shadow-lg w-full mt-2"
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>Subscribe</span>
              </button>
            </div>
            {/* Added text-center to the success message container */}
            <div className="formkit-alert formkit-alert-success text-center" data-element="success" data-group="alert">
              <div className="formkit-alert-inner" style={{ maxWidth: "100%" }}>
                <div className="formkit-alert-content">
                  <div className="formkit-alert-message"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className="text-center text-sm mt-2">
          By subscribing, you agree to our{" "}
          <Link href="/terms" className="text-[#405862] hover:text-[#4ecdc4] transition-colors font-medium underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="text-[#405862] hover:text-[#4ecdc4] transition-colors font-medium underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}

