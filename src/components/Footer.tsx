"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left — Name */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-lg">Ujjwal Verma</p>
          <p className="text-gray-400 text-sm">
            Backend Engineer · Hyderabad, India
          </p>
        </div>

        {/* Center — Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Ujjwalverma2803"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ujjwal-verma-160640200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vermaujjwal922@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition text-sm"
          >
            Email
          </a>
        </div>

        {/* Right — Copyright */}
        <p className="text-gray-500 text-xs">
          © 2026 Ujjwal Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
