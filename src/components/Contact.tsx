"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SmartInput } from "@/components/ui/input";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconBrandX,
} from "@tabler/icons-react";
import { MotionButton } from "@/components/ui/motion-button";   // ⬅️ new import

/* -------------------------------------------------------------------------- */
/*                    --- simple gradient‑border button ---                   */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                              --- Contact ---                               */
/* -------------------------------------------------------------------------- */

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u1yccs9",
        "template_yycfzkb",
        form.current!,
        "eLriQrPSBKKgZJL8f"
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-400 dark:text-neutral-300" />
      ),
      href: "https://github.com/Ujjwalverma2803",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-400 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ujjwal-verma-160640200/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-400 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/verma_ujjwal2310/",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-400 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/ujjwal.verma.900388",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-400 dark:text-neutral-300" />
      ),
      href: "https://x.com/UjjwalV71",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-400 dark:text-neutral-300" />
      ),
      href: "mailto:vermaujjwal922@gmail.com",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-black text-white w-full pt-20 pb-12 px-4 lg:px-20 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-3xl font-bold mb-8 text-center">
        Feel free to reach out through the form or connect with me on social
        media
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl bg-neutral-900 p-6 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Your Email</label>
          <SmartInput
            name="user_email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Message</label>
          <SmartInput
            as="textarea"
            name="message"
            required
            placeholder="Write your message here..."
          />
        </div>

        {/* ⬇️  just replace the old component with this one  */}
        <MotionButton type="submit" duration={4000}>
          Submit
        </MotionButton>
      </form>

      <FloatingDock desktopClassName=" translate-y-10" items={links} />
    </div>
  );
}
