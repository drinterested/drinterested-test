"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, ArrowUp, FileText } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#405862] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="Dr. Interested Logo" width={150} height={150} className="mb-2" />
            </div>
            <p className="text-sm mb-4">
              Inspiring the next generation of healthcare professionals through education, collaboration, and meaningful
              experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/dr.interested/"
                className="text-white hover:text-[#4ecdc4] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dr-interested"
                className="text-white hover:text-[#4ecdc4] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://discord.gg/pzbGRgsGXY"
                className="text-white hover:text-[#4ecdc4] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  className="lucide lucide-discord"
                >
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                  <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
              <div className="w-12 h-1 bg-[#4ecdc4] mt-2"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-[#4ecdc4] transition-colors flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-[#4ecdc4] transition-colors flex items-center gap-1"
                >
                  <FileText className="h-3 w-3" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
              <div className="w-12 h-1 bg-[#4ecdc4] mt-2"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="text-[#4ecdc4] font-medium text-sm">Administration</div>
                <a href="mailto:admin@drinterested.tech" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  admin@drinterested.tech
                </a>
              </li>
              <li>
                <div className="text-[#4ecdc4] font-medium text-sm">Human Resources</div>
                <a href="mailto:hr@drinterested.tech" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  hr@drinterested.tech
                </a>
              </li>
              <li>
                <div className="text-[#4ecdc4] font-medium text-sm">Outreach</div>
                <a href="mailto:outreach@drinterested.tech" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  outreach@drinterested.tech
                </a>
              </li>
              <li>
                <div className="text-[#4ecdc4] font-medium text-sm">Technology</div>
                <a href="mailto:tech@drinterested.tech" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  tech@drinterested.tech
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Stay Updated
              <div className="w-12 h-1 bg-[#4ecdc4] mt-2"></div>
            </h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest events and opportunities.</p>

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
                      className="w-full px-4 py-2 rounded-md bg-[#4f6b75] border-none text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Your email address"
                      required
                      type="email"
                    />
                  </div>
                  <button
                    data-element="submit"
                    className="w-full bg-[#4ecdc4] text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-[#3dbdb5] transition-colors mt-2"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Sign Up</span>
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
                </div>
                {/* Added text-center to the success message container */}
                <div
                  className="formkit-alert formkit-alert-success text-center"
                  data-element="success"
                  data-group="alert"
                >
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
              <Link href="/terms" className="text-white hover:text-[#4ecdc4] transition-colors underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-white hover:text-[#4ecdc4] transition-colors underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#4f6b75] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© 2025 Dr. Interested. All rights reserved.</div>
          <div className="flex items-center gap-4">© 2025 Dr. Interested. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-white hover:text-[#4ecdc4] transition-colors flex items-center gap-1 bg-[#4f6b75] px-3 py-1 rounded-md"
            >
              <FileText className="h-4 w-4" />
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="text-white hover:text-[#4ecdc4] transition-colors bg-[#4f6b75] p-2 rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

