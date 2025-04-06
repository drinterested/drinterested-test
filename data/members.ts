// Types for our data
export type MemberType = {
  id: string
  name: string
  role: string
  image: string
  bio: string
  socialLinks?: {
    linkedin?: string
    instagram?: string
    website?: string
    other?: string
  }
}

export type DepartmentType = {
  id: string
  name: string
  description: string
  director: MemberType | MemberType[]
  members: MemberType[]
}

// President data
export const president: MemberType = {
  id: "president",
  name: "Adil Mukhi",
  role: "President",
  image: "/adil.png", // Updated image path
  bio: "Adil Mukhi is a Grade 10 student and Vice President of both the French Club and STEM Fellowship Chapter at Glenforest Secondary School. He founded Dr. Interested, a club hosting webinars on medical pathways and a research proposal competition since he saw a lack of knowledge of different medical pathways and opportunities to develop basic skills. Adil has also been very involved in his community and has also been working to publish research on stress and memory, showcasing his passion for education, science, and community impact.",
  socialLinks: {
    website: "https://adilmukhi.vercel.app/",
    linkedin: "https://www.linkedin.com/in/adil-mukhi-6aba27246/",
    instagram: "https://www.instagram.com/adilm.0/",
  },
}

// Vice Presidents data
export const vicePresidents: MemberType[] = [
  {
    id: "vp1",
    name: "VP Name 1",
    role: "Vice President",
    image: "/logo.png",
    bio: "Supporting the mission of Dr. Interested through strategic leadership and innovation. Focused on expanding our reach and impact in the high school community.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "vp2",
    name: "VP Name 2",
    role: "Vice President",
    image: "/logo.png",
    bio: "Dedicated to creating meaningful experiences for students interested in healthcare. Brings expertise in event planning and educational programming.",
    socialLinks: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
]

// Departments data
export const departments: DepartmentType[] = [
  {
    id: "tech",
    name: "Technology Department",
    description:
      "The Technology Department manages our digital presence, website development, and technical infrastructure to ensure seamless communication and engagement with our community.",
    director: [
      {
        id: "tech-dir1",
        name: "Kishan Suhirthan",
        role: "Director of Technology",
        image: "/kishan-headshot.jpg", // Updated path
        bio: "Kishan Suhirthan is a Grade 10 Student in the IB Program at Glenforest Secondary School. With a passion for Engineering and Technology, he delivers 100% effort to all his interactions and projects. He is also a proven leader in his skills as a Sergeant in the Royal Air Cadet Program. He shows teamwork and collaboration through his time with Innovire. Proficient in Development and Electrical work, he shows that he is a well rounded individual set for any task at hand.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/kishansuhirthan",
        },
      },
      {
        id: "tech-dir2",
        name: "Arghya Vyas",
        role: "Director of Technology",
        image: "/arghya.jpg", // Updated path
        bio: "An aspiring tech innovator and Grade 10 MYP IB student at Glenforest Secondary School, Arghya brings 2-3 years of robotics experience along with a strong understanding of programming languages such as JavaScript and TypeScript. Arghya's experience extends to working with libraries like discord.py and Next.js through personal projects and organizational development initiatives. As the founder of CalcIB, Arghya maintains a 95%+ average while leading collaborative efforts, including UX and graphic design, as well as the web development team at FutureMD. Arghya also actively competes in the Vex Robotics Competition as a member of team 31331. Proficient in Microsoft Office and Google Workspace, Arghya is driven by a passion for technology and a commitment to excelling in every endeavor.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
    members: [
      {
        id: "tech-mem1",
        name: "Bhavish Mehta",
        role: "Technology Member",
        image: "/logo.png",
        bio: "Supporting the technology team with expertise in frontend development and user experience design.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "outreach",
    name: "Outreach Department",
    description:
      "The Outreach Department builds partnerships with schools, organizations, and healthcare professionals to expand our network and create valuable opportunities for our members.",
    director: {
      id: "outreach-dir",
      name: "Ali Salman",
      role: "Director of Outreach",
      image: "/ali-salman.jpeg", // Updated path
      bio: "Ali Salman is a Grade 10 student at Glenforest Secondary School pursuing the IB program. He is deeply passionate about engineering, robotics, and computer science, demonstrated through his involvement in school and external initiatives. At school, he serves as the Secretary and Trainer of the Computer Science Club and was part of the pit-crew team for the FRC Robotics Club before it disbanded. Outside of school, he is a logistics member at a STEM nonprofit, writes for prominent student-led science journals, and is part of the mechanical sub-team for one of Ontario's top 10 ranked FRC robotics teams. His most prominent achievements include being recognized as a global finalist at the prestigious New York Academy of Sciences Junior Academy Ethical AI competition.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/ali-salman-569975294/",
      },
    },
    members: [
      {
        id: "outreach-mem1",
        name: "Keenan Johnson",
        role: "Outreach Member",
        image: "/logo.png",
        bio: "Working to establish connections with healthcare organizations and educational institutions.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "outreach-mem2",
        name: "Ganesh Kartik Nagasubramanian",
        role: "Outreach Member",
        image: "/logo.png",
        bio: "Developing strategies to increase our presence in high schools across the region.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "research",
    name: "Research Department",
    description:
      "The Research Department coordinates our research proposal competition, mentorship programs, and collaborations with academic institutions to provide hands-on research experience.",
    director: {
      id: "research-dir",
      name: "Velan Mangai Sivakumar",
      role: "Director of Research",
      image: "/velan.png", // Updated path
      bio: "Velan Mangai Sivakumar is a Grade 10 student in Glenforest Secondary School. He is extremely passionate about STEM and biological sciences in particular. He has volunteered for many STEM organizations such as the Rosalind Franklin Institute. He is a trainer for HOSA (Health Occupation Students of America). His best result in STEM contests would be getting top 25 nationally and qualifying for the national camp in the Junior Science Olympiad of Canada. He also plays chess and his best results include qualifying for the Canadian Youth Chess Championship U16 twice and getting 4th in the Canadian Chess League Twice.",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    members: [
      {
        id: "research-mem1",
        name: "Gaeun Lee",
        role: "Research Member",
        image: "/logo.png",
        bio: "Supporting research projects and mentorship programs for aspiring medical researchers.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "research-mem2",
        name: "Dabosmita Parial",
        role: "Research Member",
        image: "/logo.png",
        bio: "Facilitating connections between students and research mentors in various medical fields.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "research-mem3",
        name: "Prithi Balaji",
        role: "Research Member",
        image: "/logo.png",
        bio: "Coordinating the research proposal competition and providing guidance to participants.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "research-mem4",
        name: "Brittany Ha",
        role: "Research Member",
        image: "/logo.png",
        bio: "Developing resources to help students understand and engage in medical research.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "research-mem5",
        name: "Aaron Sethi",
        role: "Research Member",
        image: "/logo.png",
        bio: "Developing resources to help students understand and engage in medical research.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Department",
    description:
      "The Marketing Department creates engaging content, manages our social media presence, and develops promotional materials to increase awareness of our mission and events.",
    director: [
      {
        id: "marketing-dir1",
        name: "Hasaan Qidwai",
        role: "Director of Marketing",
        image: "/hasaan.png", // Updated path
        bio: "Hasaan is a dedicated Grade 10 student enrolled in the IB MYP Programme at Glenforest Secondary School, where he excels in academics with an overall average of 95%+. Passionate about mathematics and design, Hasaan combines his enthusiasm with leadership skills through active participation as a COY Peer Helper, supporting Grade 9 and 10 students in mastering mathematics. Proficient in both Office 365 and Google Suite software, he demonstrates strong technical skills that complement his academic and mentoring pursuits.",
        socialLinks: {
          linkedin: "https://www.linkedin.com/in/hasaan-ahmed-qidwai-890478346/",
        },
      },
      {
        id: "marketing-dir2",
        name: "Manmeet Singh",
        role: "Director of Marketing",
        image: "/manmeet.png", // Updated path
        bio: "Manmeet Singh is a highly motivated highschool student currently enrolled in the IB program at Glenforest Secondary School. Through hands-on learning experiences in the IBT and IB programs, Manmeet has developed a strong foundation in science and mathematics allowing for critical thinking and complex problem solving skills. Manmeet's creative and entrepreneurial mindset has led to the development of two business models showcasing his ability to innovate and adapt. Overall, Manmeet's dedication to both academics and sports has driven Manmeet to excel in various leadership roles, demonstrating perseverance, discipline, and commitment.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
    members: [
      {
        id: "marketing-mem1",
        name: "Adam Alchihneh",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Creating engaging visual content for our social media platforms and promotional materials.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "marketing-mem2",
        name: "David Santoso",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Developing marketing strategies to increase engagement with our target audience.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "marketing-mem3",
        name: "Hasnain Ali",
        role: "Marketing Member",
        image: "/logo.png",
        bio: "Managing our social media presence and creating content that resonates with high school students.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "publications",
    name: "Publications Department",
    description:
      "The Publications Department produces educational content, newsletters, and research publications to share knowledge and showcase the work of our members.",
    director: {
      id: "publications-dir",
      name: "Muhammad Ibrahim Lari",
      role: "Director of Publications",
      image: "/lari.png", // Updated path
      bio: "Muhammad Lari is a dedicated high school student currently enrolled at Glenforest Secondary School. With a strong academic background, particularly in science and mathematics, Muhammad has honed critical thinking and problem-solving skills through both independent learning and hands-on experiences. Their organizational and leadership abilities are evident through their involvement in managing logistics for school events and tutoring peers in mathematics. Additionally, Muhammad  is passionate about astronomy and health education, contributing to student initiatives that empower the community with valuable wellness insights. Their commitment to academics, extracurriculars, and personal growth highlights their perseverance, adaptability, and drive for excellence.",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    members: [
      {
        id: "publications-mem1",
        name: "Shaza Ali",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Shaza is a 9th grade student who has a deep interest in STEM. She is also interested in neurology and cardiology and is very interested for future careers in these fields. She has taken part (and won) in many STEM competitions held at her school and is a viable member of the schools green initiative club. She also has an interest in true crime and has made a podcast all about it (The Killer Instinct). She hopes she can make a true impact in the world and be known for her diligent work ethics.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "publications-mem2",
        name: "Maliha Metla",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Developing educational resources to help students understand medical concepts and career paths.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "publications-mem3",
        name: "Andrew Nguyen",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Creating content that highlights the achievements and experiences of our members.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "publications-mem2",
        name: "Manha",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Developing educational resources to help students understand medical concepts and career paths.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "publications-mem3",
        name: "Ellie Williams",
        role: "Publications Member",
        image: "/logo.png",
        bio: "Creating content that highlights the achievements and experiences of our members.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "hr",
    name: "Human Resources Department",
    description:
      "The Human Resources Department manages recruitment, onboarding, and member engagement to foster a collaborative and supportive community.",
    director: {
      id: "hr-dir",
      name: "Aayan Shivji",
      role: "Director of Human Resources",
      image: "/logo.png", // Updated path
      bio: "Aayan Shivji is a hardworking high school student at St. Francis Xavier Secondary School with a passion for learning and community involvement. He enjoys exploring science and mathematics, constantly challenging himself with new concepts and problem-solving opportunities. Beyond academics, Aayan is deeply involved in extracurricular activities and loves volunteering. Whether organizing school events, mentoring younger students, or participating in community service, he is always eager to make a positive impact. His enthusiasm extends to sports, where he really enjoys table tennis and tennis, embracing both the competitive and team aspects of the game. With a strong work ethic and a drive to grow, Aayan continues to seek new experiences that shape his skills and character. He is truly looking forward to working with Dr. Interested and having a meaningful learning experience that will help him grow both academically and professionally.",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    members: [
      {
        id: "hr-mem1",
        name: "Yumeth Wickramasinghe",
        role: "HR Member",
        image: "/logo.png",
        bio: "Coordinating recruitment efforts and developing strategies to enhance member engagement.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "hr-mem2",
        name: "Hamsini Punukollu",
        role: "HR Member",
        image: "/logo.png",
        bio: "Supporting the onboarding process and creating resources for new members.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "events",
    name: "Events Department",
    description:
      "The Events Department plans and executes webinars, workshops, and networking events to provide valuable learning experiences for our members.",
    director: {
      id: "events-dir",
      name: "Aarav Kumar",
      role: "Director of Events",
      image: "/aarav.png", // Updated path
      bio: "Aarav Kumar is a passionate director with a strong interest in technology, math, and the evolving field of medical innovations. Currently working on a patent in the medical sector, Aarav is deeply involved with advanced genome-editing tools like CRISPR, contributing to cutting-edge research and development. With a natural flair for leadership and collaboration, Aarav thrives in team environments and has proven skills in managing complex projects.",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    members: [
      {
        id: "events-mem1",
        name: "Katlyn Lindsy Tendoh",
        role: "Events Member",
        image: "/logo.png",
        bio: "Coordinating webinars and virtual events to connect students with healthcare professionals.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "events-mem2",
        name: "Andrew Wang",
        role: "Events Member",
        image: "/logo.png",
        bio: "Planning and executing workshops that provide hands-on learning experiences.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "events-mem3",
        name: "Soham Somani",
        role: "Events Member",
        image: "/soham.png", // Updated path
        bio: "Developing networking opportunities to help students build connections in the healthcare field.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  {
    id: "grants",
    name: "Grant Writing Department",
    description:
      "The Grant Writing Department secures funding through grants and sponsorships to support our initiatives and expand our impact.",
    director: {
      id: "grants-dir",
      name: "Govardhan Challa Kandru",
      role: "Director of Grant Writing",
      image: "/Govardhan.png", // Updated path
      bio: "Govardhan Govi Kandru (11th) is a diligent student at The Frazer School. Govi, who is passionate about scientific research, data science, and biotechnology, focuses on machine learning applications in genomics. His independent research focuses on gene expression profiling and tailored cancer vaccine formulation, merging AI-driven techniques with network medicine. Furthermore, he has investigated comparative genome analysis using machine learning and whole genome SNPs. Govi has raised funds for various STEM nonprofit organizations, utilizing his analytical and strategic skills to push creative projects. Aside from academia, he is a successful international competitive golfer.",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    members: [
      {
        id: "grants-mem1",
        name: "Akeer Kuol Malual Nyok",
        role: "Grant Writing Member",
        image: "/logo.png",
        bio: "Researching grant opportunities and developing compelling proposals.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "grants-mem2",
        name: "Danish Akhtar",
        role: "Grant Writing Member",
        image: "/logo.png",
        bio: "Danish Akhtar: An ambitious Grade 9 student with a 96% average who is aiming to get into one of the Oxbridge Universities. Planning on going in several AP courses next summer for Strathcona Composite High School, with amazing academic performances in all four core subjects (ELA, Science, Social Studies and Mathematics) and a passion for the fields of medicine and astrophysics/astronomy (both of which I hope to pursue as a career). In possession of several great qualities and skills in several different fields (including Leadership), all of which are listed in my CV.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "grants-mem3",
        name: "Adya Mishra",
        role: "Grant Writing Member",
        image: "/logo.png",
        bio: "Creating budgets and financial plans for grant proposals.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
      {
        id: "grants-mem4",
        name: "Daniel Solo",
        role: "Grant Writing Member",
        image: "/logo.png",
        bio: "Tracking grant applications and reporting on funding outcomes.",
        socialLinks: {
          linkedin: "https://linkedin.com",
          instagram: "https://instagram.com",
        },
      },
    ],
  },
]

