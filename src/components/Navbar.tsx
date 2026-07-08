"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconUser,
  IconBriefcase,
  IconCode,
  IconMail,
  IconTimeline,
} from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <IconTimeline className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#about",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} className="fixed w-full" />
    </div>
  );
}
