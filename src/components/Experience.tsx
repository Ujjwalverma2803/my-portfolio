"use client";
import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Product Engineer — Backend Systems",
      company: "Xenford Inc, Hyderabad",
      period: "Jul 2025 — Present",
      type: "Full-Time",
      bullets: [
        "Architected the entire backend from scratch for a B2B SaaS product using Flask, establishing GraphQL API design patterns and modular architecture.",
        "Built JWT authentication with RBAC, enforcing role-based permissions across GraphQL resolvers for multiple user roles.",
        "Implemented Redis session management and caching with Firebase FCM for real-time push notifications.",
        "Designed normalized PostgreSQL schemas and Firestore collections with indexing for efficient query performance.",
        "Containerized and deployed on GCP using Docker with versioned GraphQL API contracts.",
      ],
      tags: ["Flask", "GraphQL", "PostgreSQL", "Redis", "JWT", "Docker", "GCP"],
    },
    {
      role: "Software Engineer Intern — Backend & Web",
      company: "Xenford Inc, Remote",
      period: "Jan 2025 — Jun 2025",
      type: "Internship",
      bullets: [
        "Built the backend for Timewise — a scheduling platform for dual-role users using FastAPI, PostgreSQL, and Firestore.",
        "Eliminated double-booking using PostgreSQL transactions and atomic operations with real-time conflict alerts via Socket.IO across 1,000+ active users.",
        "Modeled personal and service-based appointments with configurable availability windows and conflict resolution.",
      ],
      tags: ["FastAPI", "PostgreSQL", "Firestore", "Socket.IO"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l-2 border-purple-600/40 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-8 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-purple-600 border-2 border-black" />

              {/* Card */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-600/40 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-purple-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-xs text-gray-400">{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-purple-500 mt-1">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
