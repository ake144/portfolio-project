"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent } from "@/components/ui/card";
import { TAB_DATA } from "./aboutData";

const AboutSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/about-image.png"
                alt="About me"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
          </div>

          {/* Content Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-foreground"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8"
            >
              I am a passionate full stack web developer with a knack for creating interactive and
              responsive web applications. My journey in tech is driven by curiosity and a constant
              desire to learn. I thrive in collaborative environments and am always excited to work
              with others to bring innovative ideas to life.
            </motion.p>

            {/* Tabs Section */}
            <Tabs defaultValue={TAB_DATA[0].id}>
              {/* Tabs List */}
              <TabsList className="flex space-x-4 mb-8">
                {TAB_DATA.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-4 py-2 rounded-full font-medium transition-colors bg-muted text-muted-foreground hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {TAB_DATA.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <Card>
                    <CardContent className="p-6">{tab.content}</CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
