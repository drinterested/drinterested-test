export interface Member {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
  website?: string
}

export interface Advisor {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
  website?: string
  institution?: string
}

export const leadership: Member[] = [
  {
    id: "adil-mukhi",
    name: "Adil Mukhi",
    role: "Founder & President",
    bio: "Adil Mukhi is a passionate high school student dedicated to inspiring the next generation of healthcare professionals. As the founder of Dr. Interested, he has created a platform that empowers students to explore medical careers through education, research, and mentorship. Adil's vision is to make healthcare education accessible to all students, regardless of their background.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/adilmukhi",
    twitter: "https://twitter.com/adilmukhi",
    email: "adil@drinterested.tech",
  },
]

export const teamMembers: Member[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Vice President of Operations",
    bio: "Sarah is a dedicated student leader with a passion for healthcare administration and operations management. She oversees the day-to-day operations of Dr. Interested and ensures our programs run smoothly.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Director of Research",
    bio: "Michael leads our research initiatives and helps students get involved in meaningful healthcare research projects. He has a particular interest in biomedical engineering and medical technology.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/michaelchen",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Director of Outreach",
    bio: "Emily manages our community outreach programs and partnerships with healthcare organizations. She is passionate about making healthcare education accessible to underserved communities.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Director of Technology",
    bio: "David oversees our digital platforms and technology initiatives. He combines his interests in computer science and healthcare to create innovative solutions for medical education.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    id: "jessica-patel",
    name: "Jessica Patel",
    role: "Director of Events",
    bio: "Jessica coordinates our workshops, seminars, and networking events. She has a talent for bringing together students and healthcare professionals for meaningful educational experiences.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/jessicapatel",
  },
  {
    id: "alex-thompson",
    name: "Alex Thompson",
    role: "Director of Communications",
    bio: "Alex manages our social media presence and communications strategy. They are skilled at creating engaging content that resonates with our student audience.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/alexthompson",
  },
]

export const advisors: Advisor[] = [
  {
    id: "kate-tucker",
    name: "Kate Tucker",
    role: "Medical Student Advisor",
    bio: "Kate is a dedicated medical student with a passion for mentoring the next generation of healthcare professionals. She provides valuable insights into medical school preparation and career guidance for high school students interested in pursuing medicine.",
    image: "/placeholder.svg?height=300&width=300",
    institution: "Medical School",
    linkedin: "https://linkedin.com/in/katetucker",
  },
  {
    id: "akeer-kuol-malual",
    name: "Akeer Kuol Malual",
    role: "Medical Student Advisor",
    bio: "Akeer brings a unique perspective to healthcare education, focusing on diversity and inclusion in medicine. As a medical student, he mentors students from underrepresented backgrounds and helps them navigate their path to healthcare careers.",
    image: "/placeholder.svg?height=300&width=300",
    institution: "Medical School",
    linkedin: "https://linkedin.com/in/akeerkuolmalual",
  },
  {
    id: "muhammad-shamoon-umerani",
    name: "Muhammad Shamoon Umerani",
    role: "Medical Student Advisor",
    bio: "Muhammad is a medical student with expertise in research and clinical practice. He guides high school students through research opportunities and provides mentorship on academic excellence in healthcare fields.",
    image: "/placeholder.svg?height=300&width=300",
    institution: "Medical School",
    linkedin: "https://linkedin.com/in/muhammadshamoonumerani",
  },
]

export const getAllMembers = (): Member[] => {
  return [...leadership, ...teamMembers]
}

export const getAllAdvisors = (): Advisor[] => {
  return advisors
}
