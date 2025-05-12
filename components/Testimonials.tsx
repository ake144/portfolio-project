"use client"

import React from "react"
import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Marquee } from "./ui/marquee"

const testimonials = [
  {
    name: "Lidya Mekonnen",
    username: "@lidya.dev",
    body: "Aklilu transformed our old website into a blazing-fast, modern platform with Next.js and Tailwind. Truly impressive!",
    img: "/images/testimonials/lidya.png",
    role: "Frontend Developer"
  },
  {
    name: "Kalkidan Tesfaye",
    username: "@kal_tes",
    body: "We needed a CMS with analytics, user roles, and blog publishing – he delivered exactly what we imagined, and more.",
    img: "/images/testimonials/kalkidan.png",
    role: "Startup Co-founder"
  },
  {
    name: "Eyob Abera",
    username: "@eyobtech",
    body: "Aklilu's UI/UX design sense is amazing. The job platform he built for us looks professional and is easy to use.",
    img: "/images/testimonials/eyob.png",
    role: "Product Designer"
  },
  {
    name: "Helina Tadesse",
    username: "@helina_codes",
    body: "His integration of AI tools into our e-learning platform saved us weeks of manual work. Highly skilled developer!",
    img: "/images/testimonials/helina.png",
    role: "Tech Lead"
  },
  {
    name: "Biniam Yohannes",
    username: "@biniam_ui",
    body: "He’s always up-to-date with modern tools like Shadcn, Prisma, and Clerk. Working with him felt like working with a senior dev.",
    img: "/images/testimonials/biniam.png",
    role: "UI Engineer"
  },
  {
    name: "Meron Alemu",
    username: "@meronwrites",
    body: "Aklilu helped me build a clean blog site with SEO features and amazing performance. Couldn’t ask for better!",
    img: "/images/testimonials/meron.png",
    role: "Content Strategist"
  },
];


const firstRow = testimonials.slice(0, testimonials.length / 2)
const secondRow = testimonials.slice(testimonials.length / 2)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
  role,
}: {
  img: string
  name: string
  username: string
  body: string
  role: string
}) => {
  return (
    <Card className="w-[350px] mx-4 my-6 bg-background/80 backdrop-blur-sm hover:bg-accent transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
          <Badge variant="secondary" className="ml-auto">
            {role}
          </Badge>
        </div>
        <blockquote className="text-sm italic">{body}</blockquote>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What People Say
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Discover how my work has positively impacted clients and collaborators alike.
        </p>
        <div className="relative w-full overflow-hidden">
          <Marquee className="py-4" pauseOnHover speed={20}>
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <Marquee className="py-4" pauseOnHover speed={20} reverse>
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.username} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  )
}