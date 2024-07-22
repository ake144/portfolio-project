'use client'

import React, { useState, useRef } from "react";
import ProjectCard from "./projectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 0,
    title: "CMS",
    description: "A modern CMS dashboard built with Next.js 14 and Prisma ORM. Features include content management, user and category statistics, and a professional UI using Shadcn component",
    image: "/images/createPost.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/Nextjs_CMS",
    previewUrl: "https://nextjs-cms1.vercel.app/",
  },
  {
    id: 1,
    title: "Tv network",
    description: "A TV network site built with Next.js, material Ui. it contains an admin panel to control programs of tv. It fetches data from the TV backend API.",
    image: "/images/mb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/T-Movies",
    previewUrl: "https://tm-movie.vercel.app/",
  },
  {
    id: 2,
    title: "AI health",
    description: "let's elevate your health, and fitness to another level of stability with ai recommendation, current status of your health, schedule for exercise and get email notifications within scheduled dates",
    image: "/images/health.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ake144/AI-health",
    previewUrl: "https://ai-health1.vercel.app/",
  },
  {
    id: 3,
    title: "Crypto market",
    description: "latest cryto market updates, get whole info about the crypto price, market cap and 24 changes within prices of crypto.",
    image: "/images/crypto.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://crypto-info-xz8k.vercel.app/",
  },
  {
    id: 4,
    title: "Nextjs animated Portfolio Website",
    description: "personal portfolio site built by Nextjs, Framer motion, shadcn, and tailwindcss.",
    image: "images//portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://akejadev.vercel.app/",
  },
  {
    id: 5,
    title: "url shortener",
    description: "A URL shortener web application built with Next.js, Redis Upstash for database storage, and Shadcn for UI components.",
    image: "/images/urlShortener.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://gtly.vercel.app/",
  },
  {
    id: 6,
    title: "React Portfolio project",
    description: "personal site built by  React, prisma, and tailwind",
    image: "/images/portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://akeja.vercel.app/  ",
  },
  {
    id: 7,
    title: "Wordpress site",
    description: "wordpress site customized by Elementor and other plugins. seo first ",
    image: "/images/coinged.png",
    tag: ["All", "WordPress"],
    gitUrl: "/",
    previewUrl: "coinged.com",
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
