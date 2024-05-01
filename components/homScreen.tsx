"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="  bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Aklilu",
                1000,
                "Web Developer",
                1000,
                "ML enthusiast",
                1000,
                "UI/UX Designer",
                1000,
                "competitive programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-700 dark:text-white text-base sm:text-lg mb-6 lg:text-xl">
          As a web developer, I specialize in designing and developing web applications to solve real-world problems using digital technologies.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block ">

              <div >
                 <h1  className="md:text-3xl font-bold hover:text-green-400 transition-all">   Hire Me</h1>
                 <div className="w-full h-2 bg-green-500 rounded-full"></div>
                 <div className="w-full h-2 bg-indigo-500 rounded-full transition-x-2"></div>
              </div>
            </Link>
            <Link
              href="/ake's_cv.pdf"
              className="inline-block mx-8 py-1  sm:w-fit rounded-full"
            >
              <span className="md:text-3xl  font-bold hover:text-green-400 transition-all">
                Download CV
              </span>
              <div className="h-2 bg-green-500 rounded-full"></div>
              <div className="h-2 bg-indigo-500 rounded-full transition-y-6"></div>
       
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-72 h-72 space-y-3 -rotate-[30degree]">
               <div className="flex gap-3 translate-x-8">
                   <div className="w-32 h-32 rounded-full bg-green-500"></div>
                   <div className="w-32 h-32 rounded-3xl bg-indigo-500"></div>
               </div>
              <div  className="flex gap-3 -translate-x-8">
                  <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                  <div  className="w-32 h-32 rounded-full bg-green-500"></div>
              </div>
              <div  className="glow absolute top-[80%] right-1/4 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection