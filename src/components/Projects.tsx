"use client";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Projects() {
  const projects = [
    {
      title: "AI RAG System",
      desc: "Distributed RAG pipeline with independent microservices for document ingestion, vector retrieval via Qdrant, Redis semantic caching, and LLM response orchestration using Gemini API.",
      link: "https://github.com/Ujjwalverma2803",
      emoji: "🤖",
      tags: ["Flask", "Qdrant", "Redis", "Docker", "Gemini API"],
    },
    {
      title: "URL Shortener — Microservices",
      desc: "Production-grade URL shortening service with FastAPI microservices, JWT auth, Redis caching, Base62 slug generation, rate limiting, and real-time click analytics.",
      link: "https://url-shortener-service-vend.onrender.com/docs",
      emoji: "🔗",
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Render"],
    },
    {
      title: "Interview Integrity Studio",
      desc: "AI-based proctoring platform with client-side gaze tracking, audio monitoring, and object detection using TensorFlow.js — zero server-side video processing.",
      link: "https://interview-proctoring-flame.vercel.app/",
      emoji: "👁️",
      tags: ["Python", "Next.js", "PostgreSQL", "TensorFlow.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative pt-20 pb-24 px-6 bg-black text-center overflow-visible"
    >
      <h2 className="relative z-30 text-3xl font-bold text-white mb-16">
        Projects
      </h2>

      <div className="relative z-10 grid md:grid-cols-3 gap-10 justify-center items-start mt-8">
        {projects.map((project, idx) => (
          <div key={idx} className="mt-6">
            <PinContainer title={project.title} href={project.link}>
              <div className="w-72">
                <div className="w-full h-40 rounded-lg mb-4 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                  <span className="text-7xl">{project.emoji}</span>
                </div>

                <p className="text-white text-sm mb-4 text-left">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs bg-indigo-900 text-indigo-200 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
