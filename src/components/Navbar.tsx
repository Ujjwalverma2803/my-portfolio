"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar"; // update path accordingly
import {
  IconUser,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

export default function Navbar() {
  // Flatten the nav items, including submenu items as normal links
  // Since FloatingNav doesn't support dropdowns, treat all as main links
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div>
      <FloatingNav navItems={navItems} className="fixed  w-full" />
    </div>
  );
}
