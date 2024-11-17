import { Briefcase, Code, Lightbulb, Palette, Search, Users } from "lucide-react";

export const services = [
    {
      title: "Website Development",
      description: "Creating responsive and dynamic websites tailored to your needs.",
      icon: <Code className="h-8 w-8 text-primary" />
    },
    {
      title: "Web Design",
      description: "Crafting visually appealing and user-friendly web interfaces.",
      icon: <Palette className="h-8 w-8 text-primary" />
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />
    },
    {
      title: "Mentorship",
      description: "Guiding aspiring developers through their learning journey.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Freelancing",
      description: "Offering flexible development services for various projects.",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility and search engine rankings.",
      icon: <Search className="h-8 w-8 text-primary" />
    }
  ]