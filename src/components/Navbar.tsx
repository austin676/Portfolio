"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed top-0 left-0 w-full z-50 bg-transparent"
    >
      <div className="flex w-full items-center justify-between p-6 md:p-12">
        {/* ─── Left: Resume Capsule ─── */}
        <a
          href="/Austin_Sharma_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-2xl border border-white px-5 py-2 text-[27px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
        >
          Resume
        </a>

        {/* ─── Right: Social Connectivity Matrix ─── */}
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="https://github.com/austin676"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-2xl border border-white px-5 py-2 text-[25px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/austin-sharma-029297300"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-2xl border border-white px-5 py-2 text-[25px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Austin_Sharma22"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto rounded-2xl border border-white px-5 py-2 text-[25px] font-medium uppercase tracking-widest text-neutral-200 transition-all duration-300 hover:bg-white hover:text-black"
          >
            X
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
