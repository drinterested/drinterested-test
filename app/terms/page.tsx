"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function TermsPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container py-16 max-w-4xl">
      <ScrollToTop />
      <div className="bg-[#405862] text-white p-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-center">Terms and Conditions</h1>
        <p className="text-center mb-0">Please read these terms carefully before using our services.</p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">1. Introduction</h2>
          <p className="text-slate-600">
            Welcome to Dr Interested. These Terms and Conditions govern your use of our website and services. By
            accessing or using our website, you agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">2. Use of Our Services</h2>
          <p className="text-slate-600">
            Dr Interested provides educational content, webinars, and resources for high school students interested in
            healthcare careers. Our services are for educational purposes only and do not constitute professional
            medical advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">3. User Accounts</h2>
          <p className="text-slate-600">
            When you create an account with us, you must provide accurate and complete information. You are responsible
            for maintaining the confidentiality of your account and password and for restricting access to your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">4. Privacy Policy</h2>
          <p className="text-slate-600">
            Your privacy is important to us. Our{" "}
            <Link href="/privacy-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Privacy Policy
            </Link>{" "}
            explains how we collect, use, and protect your personal information. By using our services, you consent to
            the collection and use of your data as described in our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">5. Email Communications</h2>
          <p className="text-slate-600">
            By providing your email address, you consent to receive communications from us. These may include updates,
            event announcements, and educational content. You can unsubscribe at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">6. Intellectual Property</h2>
          <p className="text-slate-600">
            All content on our website, including text, graphics, logos, and images, is the property of Dr Interested
            and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without
            our permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">7. User Conduct</h2>
          <p className="text-slate-600">When using our services, you agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Submit false or misleading information</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use our services for commercial purposes without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">8. Disclaimer of Warranties</h2>
          <p className="text-slate-600">
            Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our
            services will be error-free or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">9. Limitation of Liability</h2>
          <p className="text-slate-600">
            Dr Interested shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            arising out of your use or inability to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">10. Changes to Terms</h2>
          <p className="text-slate-600">
            We reserve the right to modify these Terms at any time. We will notify users of significant changes to our
            Terms. Your continued use of our services constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">11. Contact Us</h2>
          <p className="text-slate-600">
            If you have any questions about these Terms, please contact us at admin@drinterested.tech.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors">
          <FileText className="h-4 w-4 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  )
}
