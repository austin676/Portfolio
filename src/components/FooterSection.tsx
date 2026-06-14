"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative w-full pt-24 pb-8 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-footer)" }}
    >
      
      {/* ─── Climax Typographic Headline ─── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center gap-5 md:gap-10"
      >
        <div
          role="img"
          aria-label="Austin Sharma — let's collaborate"
          className="h-[20vw] w-[20vw] max-h-[280px] max-w-[280px] min-h-[90px] min-w-[90px] flex-shrink-0 rounded-full border border-neutral-700 shadow-xl bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Pic2.jpg')", backgroundSize: "135%" }}
        />
        <h2 className="font-black tracking-tighter text-[#e8e2d5] text-[clamp(96px,18vw,260px)] leading-none select-none">
          LET&apos;S TALK
        </h2>
      </motion.div>

      {/* ─── Two-Column Conversion Funnel Grid ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1400px] mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Left Column (CTA Cluster) */}
        <div className="flex flex-col">
          <p className="text-xs md:text-sm text-neutral-400 tracking-wider mb-6 uppercase font-medium">
            Got an internship opportunity, project idea, or want to collaborate?
          </p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=austinsharma47@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase font-bold tracking-wide underline underline-offset-4 hover:text-neutral-300 transition-colors"
            >
              Send Me An Email
            </a>
            <a
              href="/Austin_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase font-bold tracking-wide underline underline-offset-4 hover:text-neutral-300 transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Column (Social Matrix Network) */}
        <div className="flex flex-wrap md:justify-end gap-8 md:gap-12 mt-8 md:mt-0">
          <a
            href="https://linkedin.com/in/austin-sharma-029297300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white uppercase tracking-wider text-sm md:text-base font-semibold transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Austin_Sharma22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white uppercase tracking-wider text-sm md:text-base font-semibold transition-colors duration-300"
          >
            X
          </a>
        </div>
      </motion.div>

      {/* ─── Absolute Bottom Footer Bar ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mx-auto max-w-[1400px] border-t border-neutral-900 pt-8 mt-16 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-neutral-600 tracking-widest gap-4 sm:gap-0"
      >
        <span>COPYRIGHT &copy; 2026 &middot; AUSTIN SHARMA</span>
      </motion.div>

    </footer>
  );
}
