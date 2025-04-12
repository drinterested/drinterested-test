"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, ArrowUp, FileText } from "lucide-react"
import NewsletterForm from "./newsletter-form"

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
              <Image
                src="/circle-logo.png"
                alt="Dr. Interested Logo"
                width={150}
                height={150}
                className="mb-2 rounded-full"
                priority
              />
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
                <Link href="/blog" className="text-sm hover:text-[#4ecdc4] transition-colors">
                  Blog
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

            {/* Use our newsletter component with compact styling for the footer */}
            <div className="bg-[#405862] p-3 md:p-4 rounded">
              <NewsletterForm darkMode={true} showFirstName={false} compact={true} />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#4f6b75] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© 2025 Dr. Interested. All rights reserved.</div>
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
