"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Hero() {
  return (
    <BackgroundLines className="relative flex items-center justify-center h-screen">
      <div className="text-center z-10 px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-widest text-purple-400 font-semibold mb-4"
        >
          Backend Engineer · Python · AI Systems
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Building scalable backends
          <br />
          and <span className="text-purple-600">AI-powered systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300"
        >
          Hi, I&apos;m Ujjwal Verma — Backend Engineer based in Hyderabad, India
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-3 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
        >
          Specializing in Flask · FastAPI · GraphQL · Redis · PostgreSQL ·
          Docker · GCP
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            View Projects
          </a>
          <a
            href="https://github.com/Ujjwalverma2803"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </BackgroundLines>
  );
}
