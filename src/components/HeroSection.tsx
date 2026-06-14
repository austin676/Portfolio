"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIntro } from "./IntroProvider";

export default function HeroSection() {
  const { playIntro } = useIntro();
  // First visit: stagger entrances behind the loading intro. Repeat visits: no
  // intro plays, so reveal immediately instead of waiting on the old fixed delays.
  const delayMultiplier = playIntro ? 1 : 0;

  return (
    <section
      className="noise-overlay relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* ─── Background Image ─── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 * delayMultiplier, duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.jpg"
          alt="Bokeh Background"
          fill
          className="object-cover"
          style={{ opacity: "var(--hero-img-opacity)" }}
          priority
        />
      </motion.div>

      {/* ─── Spotlight Blobs ─── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 * delayMultiplier, duration: 2 }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen"
        style={{ opacity: "var(--spotlight-opacity)" }}
      >
        {/* Blob 1 — top-center dominant spotlight */}
        <div
          className="animate-spotlight-1 absolute -top-[30%] left-[10%] h-[80vh] w-[80vh] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          }}
        />
        {/* Blob 2 — right-center secondary */}
        <div
          className="animate-spotlight-2 absolute top-[10%] -right-[20%] h-[80vh] w-[80vh] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)",
          }}
        />
        {/* Blob 3 — bottom-left fill */}
        <div
          className="animate-spotlight-3 absolute -bottom-[30%] -left-[20%] h-[80vh] w-[80vh] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ─── Typography Layer (Center Focus) ─── */}
      <div className="relative z-10 flex h-full w-full items-center justify-center -translate-y-[6vh] md:-translate-y-20">
        <div className="relative select-none text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 120, clipPath: "inset(100% 0% -10% 0%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% -10% 0%)" }}
            transition={{ delay: 2.5 * delayMultiplier, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.04em] text-[clamp(5rem,28vw,12rem)] md:text-[clamp(3.5rem,min(20vw,32vh),12rem)]"
            style={{
              lineHeight: "0.82",
              color: "var(--text-hero)",
            }}
          >
            <span className="block">Austin</span>
            <span className="block">Sharma</span>
          </motion.h1>

          {/* ─── Floating Avatar Card ─── */}
          {/* Mobile: sits in flow below the name. Desktop: absolute, overlapping the name. */}
          <div className="relative z-30 mt-10 flex justify-center md:absolute md:left-[60%] md:top-[78%] md:mt-0 md:-translate-x-[85%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.1 * delayMultiplier, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              data-cursor-text="Open"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              {/* Avatar Card */}
              <div
                className="group relative h-[170px] w-[170px] cursor-pointer rounded-[20px] transition-colors duration-[400ms] ease-[ease] hover:bg-[#7B5CF0] shadow-2xl md:h-[200px] md:w-[200px] lg:h-[220px] lg:w-[220px]"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderWidth: "1px",
                  borderColor: "var(--border-main)",
                  boxShadow: `0 25px 50px -12px var(--shadow-color)`,
                }}
              >
                
                {/* Image Mask (crops image but lets badge overflow parent) */}
                <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                  <Image
                    src="/avatar.png"
                    alt="Austin Sharma — Developer Portrait"
                    fill
                    className="object-cover grayscale brightness-[0.85] transition-all duration-[400ms] ease-[ease] group-hover:grayscale-0 group-hover:brightness-100"
                    sizes="(max-width: 768px) 170px, 220px"
                    priority
                  />
                </div>

                {/* Hover Status Badge */}
                <div
                  className="absolute bottom-[30%] -left-[15%] md:-left-[20%] flex items-center gap-2 rounded-full p-1 pr-4 text-[13px] text-white opacity-0 -translate-x-[10px] pointer-events-none transition-all duration-[400ms] ease-[ease] group-hover:opacity-100 group-hover:translate-x-0 shadow-xl whitespace-nowrap z-20"
                  style={{
                    backgroundColor: "rgba(17, 17, 17, 0.85)",
                    borderWidth: "1px",
                    borderColor: "var(--border-main)",
                  }}
                >
                  <div className="flex items-center gap-2 rounded-full bg-[#b5f23d] px-3 py-1.5 text-[#111] font-semibold tracking-tight">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-800"></span>
                    </span>
                    Open to Internships
                  </div>
                  <span className="font-medium text-neutral-300">— Mail or call</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Split Footnote Context Grid ─── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 * delayMultiplier, duration: 1.5 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-4 px-6 pb-20 md:flex-row md:items-end md:justify-between md:gap-6 md:px-12 md:py-10 lg:px-16 lg:py-12"
      >
        {/* Mobile-only accent hairline */}
        <div
          className="h-px w-10 opacity-40 md:hidden"
          style={{ backgroundColor: "var(--text-body)" }}
        />

        {/* Bottom-Left */}
        <p
          className="max-w-[340px] text-[15px] font-medium leading-relaxed tracking-tight md:max-w-[400px] md:text-[15px] md:tracking-normal lg:max-w-[420px] lg:text-[25px]"
          style={{ color: "var(--text-body)" }}
        >
          Designing and shipping solutions that measurably move the needle.
        </p>

        {/* Mobile-only divider between the two lines */}
        <div
          className="h-px w-full opacity-10 md:hidden"
          style={{ backgroundColor: "var(--text-body)" }}
        />

        {/* Bottom-Right */}
        <p
          className="max-w-[340px] text-[15px] font-medium leading-relaxed tracking-tight md:max-w-[400px] md:text-right md:text-[15px] md:tracking-normal lg:max-w-[450px] lg:text-[25px]"
          style={{ color: "var(--text-body)" }}
        >
          Focused on interfaces and experiences, working remotely from Mumbai, India.
        </p>
      </motion.div>
    </section>
  );
}
