'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
    {
      name: "Dr. Iftikhar Ahmed",
      role: "CEO & Founder",
    //   image: "https://i.pravatar.cc/300?img=1.."
    // image: "/statics/picture1.png",
    image: "/statics/DrIftikhar.png",
    bio: 'E-Triangle Automation',
    social: {
      linkedin: "https://www.linkedin.com/in/iftikhar-ahmad-phd-a1053b106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: '#',
      github: '#',
    },
    },
    {
      name: "Dr. Mian Ilyas Ahmed",
      role: "CTO",
      bio: "E-Triangle Automation",
    image: "/statics/dr_ilyas.jpg",
    social: {
        linkedin: "https://www.linkedin.com/in/mian-ilyas-ahmad-0a86a567?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Engr Jihad Sallah Khan",
      role: "COO & Co-Founder",
      bio: "E-Triangle Automation",
    image: "/statics/jihadbhai.jpg",
    social: {
        linkedin: "https://www.linkedin.com/in/sallah-khan94?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Mr. Tetsuya Wada",
      role: "CEO",
      bio: "E-Triangle Automation",
    image: "/statics/Picture21.jpg",
    social: {
        linkedin: "#",
        twitter: '#',
        github: '#',
      },
    
    },
    {
      name: "Mr. Masroor A. Khan",
      role: "President",
      bio: "E-Triangle Automation",
    image: "/statics/Picture22.jpg",
    social: {
        linkedin: "#",
        twitter: '#',
        github: '#',
      },
    },

    {
      name: "Amber Imtiaz",
      role: "Manager Finance",
      bio: "E-Triangle Automation",
    image: "/statics/amber.png",
    social: {
        linkedin: "#",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Engr Ahmad Raza",
      role: "Embedded System Design Engineer",
      bio: "E-Triangle Automation",
    image: "/statics/Picture20.jpg",
    social: {
        linkedin: "#",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Engr Abdul Hakeem Khan",
      role: "System Design Engineer",
      bio: "E-Triangle Automation",
    image: "/statics/hakeem.jpg",
    social: {
        linkedin: "#",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Mr. Jianbin Han",
      role: "PhD Scholar, Automation Engineer",
      bio: "E-Triangle Automation",
    image: "/statics/jian.jpg",
    social: {
        linkedin: "#",
        twitter: '#',
        github: '#',
      },
    },
    // {
    //   name: "Engr Sardar Shahrukh",
    //   role: "IT Expert",
    //   bio: "Describe Yourself here",
    // image: "/statics/Picture8.jpg",
    // },
    {
      name: "Engr Junaid Khattak",
      role: "Technical Advisor & Product Development Lead",
      bio: "E-Triangle Automation",
    image: "/statics/Profile23.jpeg",
    social: {
        linkedin: "https://www.linkedin.com/in/sallah-khan94?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Engr Aleena Zulfiqar",
      role: "Technical Product manager",
      bio: "E-Triangle Automation",
    image: "/statics/aleena1.jpg",
    social: {
        linkedin: "https://www.linkedin.com/in/sallah-khan94?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: '#',
        github: '#',
      },
    },
    {
      name: "Ms. Maryam Shabbir ",
      role: "Research and Data Analyst",
      bio: "E-Triangle Automation",
    image: "/statics/maryam1.png",
    social: {
        linkedin: "https://www.linkedin.com/in/sallah-khan94?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: '#',
        github: '#',
      },
    },
    // {
    //   name: "Alex Johnson",
    //   role: "Chief Technology Officer",
    //   description: "Alex leads our tech initiatives with over 15 years of experience in software architecture and AI.",
    //   image: "https://i.pravatar.cc/300?img=1"
    // },
    // {
    //   name: "Samantha Lee",
    //   title: "Head of Product Design",
    //   description: "Samantha brings user-centric design principles to life in our products, with a keen eye for detail.",
    //   image: "https://i.pravatar.cc/300?img=5"
    // },
    // {
    //   name: "Michael Chen",
    //   title: "Lead Data Scientist",
    //   description: "Michael's expertise in machine learning algorithms drives our predictive maintenance solutions.",
    //   image: "https://i.pravatar.cc/300?img=3"
    // },
    // {
    //   name: "Emily Rodriguez",
    //   title: "Senior Software Engineer",
    //   description: "Emily's innovative coding solutions form the backbone of our robust software infrastructure.",
    //   image: "https://i.pravatar.cc/300?img=10"
    // },
    // {
    //   name: "David Kim",
    //   title: "UX Research Lead",
    //   description: "David's user insights shape our product strategy, ensuring we meet real-world needs effectively.",
    //   image: "https://i.pravatar.cc/300?img=8"
    // }
  ]

// const teamMembers = [
//   {
//     name: 'Dr. Sarah Chen',
//     role: 'Chief Technology Officer',
//     image: '/placeholder.svg?height=400&width=400',
//     bio: 'Expert in AI and Machine Learning with 15+ years of experience in energy optimization.',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Mark Rodriguez',
//     role: 'Lead Data Scientist',
//     image: '/placeholder.svg?height=400&width=400',
//     bio: 'Specializes in predictive analytics and big data processing for industrial applications.',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Dr. Emily Watson',
//     role: 'Research Director',
//     image: '/placeholder.svg?height=400&width=400',
//     bio: 'PhD in Industrial Engineering with focus on energy efficiency and process optimization.',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'James Wilson',
//     role: 'Senior Engineer',
//     image: '/placeholder.svg?height=400&width=400',
//     bio: 'Expert in IoT systems and industrial automation with 10+ years of experience.',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
//   {
//     name: 'Lisa Chang',
//     role: 'Product Manager',
//     image: '/placeholder.svg?height=400&width=400',
//     bio: 'Experienced in leading complex technical projects and product development.',
//     social: {
//       linkedin: '#',
//       twitter: '#',
//       github: '#',
//     },
//   },
// ]

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 3 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 3 ? 0 : prev + 1))
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Team
          </h2>
          <p className="text-lg text-gray-400">
            Meet the experts behind EnergEyer's innovative solutions
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="w-full min-w-[33.333%] px-4"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <Card className={`overflow-hidden border-0 bg-white/10 transition-all duration-300 ${
                    hoveredMember === index ? 'scale-105 ring-2 ring-blue-400' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="mt-1 text-blue-400">{member.role}</p>
                        <p className="mt-4 text-gray-400">{member.bio}</p>
                        <div className="mt-6 flex justify-center space-x-4">
                          <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                            <Twitter className="h-5 w-5" />
                          </a>
                          <a href={member.social.github} className="text-gray-400 hover:text-blue-400">
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border-blue-500/30 bg-gray-900/90 p-2 text-blue-400 hover:bg-blue-500/10"
            onClick={showPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border-blue-500/30 bg-gray-900/90 p-2 text-blue-400 hover:bg-blue-500/10"
            onClick={showNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}

