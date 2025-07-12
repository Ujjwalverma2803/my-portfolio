"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

const skills = [
  "/logos/react.png",
  "/logos/Nodejs.png",
  "/logos/Javascript.png",
  "/logos/Tailwind.png",
  "/logos/Python.png",
  "/logos/GCP.png",
  "/logos/Redux.png",
  "/logos/Next.jpeg",
  "/logos/MongoDB.png",
  // Add more paths as needed
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="scroll-mt-28 h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      {/* Infinite Carousel */}
      <div className="relative z-20 w-full overflow-hidden py-10">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
          {skills.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Skill ${index}`}
              className="h-20 w-auto object-contain"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Skill ${index}`}
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Sparkles Background */}
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles Effect */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient Mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
