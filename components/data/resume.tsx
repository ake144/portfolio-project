import { Icons } from "@/components/Icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { BookOpen, User, Phone, Star, Briefcase, Menu, X, Sun, Moon } from 'lucide-react'

export const DATA = {
  name: "Dillion Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#projects", icon: Briefcase, label: "Projects" },
    { href: "#contact", icon: Phone, label: "Contact" },
    {href:"#testimonials", icon:Star, label:"Testimonials"},

  ],
  contact: {
    email: "tamiratake@example.com",
    tel: "+251954234576",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ake144",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akeja/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AkeTamirat94397",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "tamiratgedi1@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

}