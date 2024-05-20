'use client'

import { HoverEffect } from "./ui/card-hover-effect";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IconType } from 'react-icons';

export function SkillCards() {
  return (
    <section className="dark:text-white" id="skills">
      <div className="inline-block">
      <h1 className="text-center justify-center text-4xl font-bold dark:text-white mt-4 ">
        Skills
      </h1>
      <div className="w-full h-2 bg-green-500 rounded-full rotate-6"></div>
        <div className="w-full h-2 bg-indigo-500 rounded-full -transition-x-8 rotate-7 "></div>
    </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    image: TbBrandNextjs,
    name: "Nextjs"
  },
  {
    image: RiReactjsFill,
    name: "React"
  },
  {
    image: FaNodeJs,
    name: "Node.js",
  },
  {
    image: SiDjango,
    name: "Django"
  },
  {
    image: RiSupabaseLine,
    name: "Supabase"
  },
  {
    image: BiLogoPostgresql,
    name: "PostgreSQL"
  },
  {
    image: SiMongodb,
    name: "MongoDB"
  },
  {
    image: RiSupabaseLine,
    name: "Supabase"
  },
  {
    image: SiTailwindcss,
    name: "TailwindCSS"
  },
];