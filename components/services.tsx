'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from './data/services';
import { PinContainer } from "@/components/ui/3d-pin";
import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [isClient, setIsClient] = useState(false);

 
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 
  
  return (
    <>
     {/* Section Title */}
     <div className="text-start  justify-start w-[200px] ">
        <motion.h1
          className="text-4xl items-start  font-bold text-gray-800 dark:text-white mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Services
    
        <div className="w-full h-2 bg-green-500 rounded-full rotate-6"></div>
        <div className="w-full h-2 bg-indigo-500 rounded-full -transition-x-8 rotate-7 "></div>
        </motion.h1>

      </div>
    
   
    <motion.section
      className="py-16 relative overflow-hidden"
      id="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      
      {/* Background Design */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 opacity-30" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-green-400 to-teal-400 rounded-full filter blur-3xl opacity-20 -z-10" />

     

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <PinContainer title={service.title} >
              <Card className="bg-white/90 dark:bg-gray-900/90   backdrop-blur-lg shadow-lg rounded-lg hover:shadow-2xl transform transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <motion.div
                    className="text-green-500 text-3xl"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </PinContainer>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    </>
  );
}
