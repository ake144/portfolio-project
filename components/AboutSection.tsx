'use client'


import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li   className="inline-block mx-8 py-1  sm:w-fit rounded-full">Coursera deep learning certification</li>
        <li>
        <Link
              href="/fundamentals.pdf"
              className="inline-block mx-8 py-1  sm:w-fit rounded-full"
            >
              Programming Fundamentals, Udacity
          </Link>
          </li>
          <li>
          <Link
              href="/debugging.pdf"
              className="inline-block mx-8 py-1  sm:w-fit rounded-full"
            >
              Debugging, Udemy
          </Link>
          </li>

        <li  className="inline-block mx-8 py-1  sm:w-fit rounded-full">  FreeCode Camp front-end certification</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Addis Ababa University, Computer Science</li>
        <li>Coursera</li>
        <li>Youtube Academy</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("Education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Check if the tab exists in TAB_DATA, if not, default to the first tab
  const selectedTab = TAB_DATA.find((t) => t.id === tab);
  const defaultTab = TAB_DATA[0];

  return (
    <section className="dark:text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="💻" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold black:text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg dark:text-white">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
          
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTab ? selectedTab.content : defaultTab.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
