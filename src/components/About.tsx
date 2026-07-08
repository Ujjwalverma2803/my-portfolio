"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconCode,
  IconBrain,
  IconRocket,
  IconMail,
  IconServer,
  IconDatabase,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function About() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 17.385, lng: 78.4867 }, // Hyderabad
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const EmailCard = () => {
    const [copied, setCopied] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText("vermaujjwal922@gmail.com");
      setCopied(true);
      setShowConfetti(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setShowConfetti(false), 800);
    };

    return (
      <div className="relative w-full">
        <p className="text-lg font-semibold text-white mb-2">
          Open to opportunities
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Targeting a backend engineering role in late 2026. Let us connect.
        </p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-3 bg-indigo-700 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-lg"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Email Copied!" : "Copy my Email"}
        </button>

        <AnimatePresence>
          {showConfetti && (
            <motion.div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: [
                      "#f87171",
                      "#facc15",
                      "#4ade80",
                      "#60a5fa",
                      "#c084fc",
                    ][i % 5],
                    top: "50%",
                    right: "50%",
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, (Math.random() - 0.5) * 100],
                    opacity: [1, 0],
                  }}
                  transition={{ duration: 0.8 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const items = [
    {
      title: "Backend Engineer",
      description:
        "1.5+ years building production-grade Python backend systems from scratch. Specialized in Flask, FastAPI, GraphQL APIs, JWT/RBAC authentication, and microservices architecture at a B2B SaaS startup.",
      icon: <IconServer className="h-4 w-4 text-blue-400" />,
    },
    {
      title: "AI & RAG Systems",
      description:
        "Hands-on experience building distributed RAG pipelines with vector databases (Qdrant), semantic caching with Redis, and LLM orchestration using the Gemini API.",
      icon: <IconBrain className="h-4 w-4 text-purple-400" />,
    },
    {
      title: "Database & Caching",
      description:
        "Designed normalized PostgreSQL schemas, Firestore collections, and Redis caching strategies for high-frequency reads. Optimized query performance through indexing and efficient data modeling.",
      icon: <IconDatabase className="h-4 w-4 text-green-400" />,
    },
    {
      title: "Shipped to Production",
      description:
        "Deployed containerized microservices on GCP using Docker. Built and shipped 3 Flutter apps to Google Play Store and a live URL shortener with real-time analytics on Render.",
      icon: <IconRocket className="h-4 w-4 text-orange-400" />,
    },
    {
      title: "Strong Problem Solver",
      description:
        "500+ DSA problems solved across LeetCode and GFG. CodeChef 3★ rated. Finalist at Smart India Hackathon 2023. Graduate of IIITDM Kurnool (B.Tech CSE, 2025).",
      icon: <IconCode className="h-4 w-4 text-yellow-400" />,
    },
    {
      title: <EmailCard />,
      description: "",
      icon: <IconMail className="h-4 w-4 text-indigo-400" />,
    },
  ];

  const sampleArcs = [
    {
      order: 1,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.5,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 4,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.4,
      color: colors[0],
    },
    {
      order: 5,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.4,
      color: colors[1],
    },
    {
      order: 6,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.5,
      color: colors[2],
    },
    {
      order: 7,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.6,
      color: colors[0],
    },
    {
      order: 8,
      startLat: 17.385,
      startLng: 78.4867,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 9,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 17.385,
      endLng: 78.4867,
      arcAlt: 0.1,
      color: colors[2],
    },
    {
      order: 10,
      startLat: 19.076,
      startLng: 72.8777,
      endLat: 17.385,
      endLng: 78.4867,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 11,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 17.385,
      endLng: 78.4867,
      arcAlt: 0.1,
      color: colors[1],
    },
    {
      order: 12,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 13,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[0],
    },
    {
      order: 14,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[1],
    },
  ];

  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-black py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6">
        <h2 className="text-3xl font-bold text-white mb-12">About Me</h2>
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[16rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="cursor-pointer backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]"
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
