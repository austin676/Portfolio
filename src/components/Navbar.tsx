"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed top-0 left-0 w-full z-50 bg-transparent"
    >
      <div className="flex w-full items-center justify-between p-4 md:px-8 md:py-5">
        {/* ─── Left: Resume Capsule ─── */}
        <a
          href="/Austin_Sharma_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-2xl border border-white px-3 py-1.5 text-[13px] md:text-[16px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
        >
          Resume
        </a>

        {/* ─── Mobile Hamburger ─── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl border border-white/60 transition-all duration-300"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* ─── Desktop: Social Connectivity Matrix ─── */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          <a
            href="https://github.com/austin676"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-2xl border border-white px-4 py-1.5 text-[16px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/austin-sharma-029297300"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-2xl border border-white px-4 py-1.5 text-[16px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Austin_Sharma22"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-2xl border border-white px-4 py-1.5 text-[16px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            X
          </a>
        </div>
      </div>

      {/* ─── Mobile Dropdown Menu ─── */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto md:hidden overflow-hidden mx-4"
      >
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-lg p-4">
          <a
            href="https://github.com/austin676"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-4 py-3 text-[14px] font-medium uppercase tracking-widest text-neutral-200 text-center transition-all duration-300 hover:bg-white hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/austin-sharma-029297300"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-4 py-3 text-[14px] font-medium uppercase tracking-widest text-neutral-200 text-center transition-all duration-300 hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Austin_Sharma22"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-4 py-3 text-[14px] font-medium uppercase tracking-widest text-neutral-200 text-center transition-all duration-300 hover:bg-white hover:text-black"
          >
            X
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
