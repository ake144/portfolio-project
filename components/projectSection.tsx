'use client'

import React, { useState, useRef } from "react";
import ProjectCard from "./projectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projectsData =  [
  {
    id: 0,
    title: "UIforest",
    description: "A design tool site offering free and premium Tailwind CSS components, built with Next.js, Shadcn UI, and advanced filtering/search capabilities.",
    image: "/images/uiforest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/ui-forest",
    previewUrl: "https://uiforest.dev/",
  },
  {
    id: 1,
    title: "E-learning Platform",
    description: "A feature-rich e-learning web app allowing users to take quizzes, track progress, view stories, and improve learning. Built with Next.js 14, Clerk, Prisma, and Tailwind CSS.",
    image: "/images/e-learning.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/E-LEARNING-FRONT",
    previewUrl: "https://brightethiopia.vercel.app/",
  },
  {
    id: 2,
    title: "Church platform",
    description: "A church platform to track attendance, register, and follow up memebers using QR-Scanner physical machine with generated Qr code",
    image: "/images/church1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/attendance-with-QRCode",
    previewUrl: "https://www.brightethiopia.com/",
  },
  {
    id: 3,
    title: "CMS",
    description: "A modern CMS dashboard built with Next.js 14 and Prisma ORM. Features include content management, user and category statistics, and a professional UI using Shadcn component.",
    image: "/images/createPost.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/Nextjs_CMS",
    previewUrl: "https://nextjs-cms1.vercel.app/",
  },
  {
    id: 4,
    title: "HypoGo",
    description: "A site to maximize the productivity of students. It includes job searching, scholarships, AI tools, and other features.",
    image: "/home1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/hypoGoo",
    previewUrl: "https://hypogo.vercel.app/",
  },
  {
    id: 5,
    title: "Tv network",
    description: "A TV network site built with Next.js and Material UI. It includes an admin panel to control programs and fetches data from a backend API.",
    image: "/images/mb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/T-Movies",
    previewUrl: "https://tm-movie.vercel.app/",
  },
  {
    id: 6,
    title: "Crypto market",
    description: "Latest crypto market updates including real-time data on prices, market caps, and 24-hour changes.",
    image: "/images/crypto.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://crypto-info-xz8k.vercel.app/",
  },
  {
    id: 7,
    title: "Audio Transcription",
    description: "A user-friendly app to convert audio files into text using React, Next.js, and OpenAI APIs.",
    image: "/images/audio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/next.js-transcription",
    previewUrl: "https://transcription-murex.vercel.app/",
  },
  {
    id: 8,
    title: "Church-platform",
    description: "A church platform to stay spiritually connected and access Bible stories, sermons, and events.",
    image: "/images/church.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/Church-platform",
    previewUrl: "https://apo-church.vercel.app/",
  },
  {
    id: 9,
    title: "WordPress site",
    description: "Custom WordPress site designed with Elementor, optimized for SEO and performance.",
    image: "/images/coinged.png",
    tag: ["All", "WordPress"],
    gitUrl: "/",
    previewUrl: "https://www.upwork.com/freelancers/aklilutamirate?p=1748312443210293248",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => { // Explicitly type newTag as string
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
       <div className="inline-block">
      <h2 className="text-center justify-center text-4xl font-bold dark:text-white mt-4 ">
        My Projects
      </h2>
      <div className="w-full h-2 bg-green-500 rounded-full -rotate-6"></div>
        <div className="w-full h-2 bg-indigo-500 rounded-full -rotate-6"></div>
    </div>
      <div className="dark:text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WordPress"
          isSelected={tag === "WordPress"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
