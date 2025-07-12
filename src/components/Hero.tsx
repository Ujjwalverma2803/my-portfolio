"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Hero() {
  return (
    <BackgroundLines className="relative flex items-center justify-center h-screen">
      <div className="text-center z-10 px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Transforming concepts into
          <br />
          seemless <span className="text-purple-600">user experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300"
        >
          Hi, I&apos;m Ujjwal Verma, Software Developer based in India
        </motion.p>
      </div>
    </BackgroundLines>
  );
}