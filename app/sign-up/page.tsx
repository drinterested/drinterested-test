import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SignUpPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center mb-12">
        <Image src="/images/logo.png" alt="Dr. Interested Logo" width={120} height={120} className="mb-6" />
        <h1 className="text-3xl font-bold mb-2 text-[#405862]">Join Dr. Interested</h1>
        <p className="text-center text-[#405862] max-w-2xl">
          Ready to start your journey into healthcare? Join our community of like-minded high school students interested
          in exploring medical careers.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto p-6 border-[#405862]">
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" className="mt-1" required />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1" required />
            </div>

            <div>
              <Label htmlFor="school">School</Label>
              <Input id="school" placeholder="Enter your school name" className="mt-1" required />
            </div>

            <div>
              <Label htmlFor="grade">Grade</Label>
              <select
                id="grade"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#405862] mt-1"
                required
              >
                <option value="" disabled selected>
                  Select your grade
                </option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>

            <div>
              <Label htmlFor="interests">Areas of Interest in Healthcare</Label>
              <Textarea
                id="interests"
                placeholder="Tell us what areas of healthcare interest you the most"
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="why">Why do you want to join Dr. Interested?</Label>
              <Textarea
                id="why"
                placeholder="Share your reasons for wanting to join our community"
                className="mt-1"
                rows={4}
                required
              />
            </div>

            <div className="text-sm text-[#405862]">
              By submitting this form, you agree to our{" "}
              <Link href="/terms" className="text-[#405862] font-medium underline">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#405862] hover:bg-[#334852]">
            Submit Application
          </Button>
        </form>
      </Card>
    </div>
  )
}

