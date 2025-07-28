"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "NewsFox",
      desc: "Real-time news web app with categories and the ability to save your favorite articles.",
      link: "https://newsfox-next.vercel.app",
      image: "/logos/p1-logo.png",
    },
    {
      title: "Polling System",
      desc: "Real-time polling system with socket-powered voting and result visualization.",
      link: "https://polling-system-04hi.onrender.com",
      image: "/logos/chat.png", // Add a logo to your public/logos folder
    },
  ];

  return (
    <section id="projects" className="pt-10 pb-20 px-6 bg-black text-center">
      <div className="grid md:grid-cols-3 gap-10 justify-center">
        {projects.map((project, idx) => (
          <PinContainer key={idx} title={project.title} href={project.link}>
            <div className="w-72">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover"
              />
              <p className="text-white text-sm">{project.desc}</p>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}
