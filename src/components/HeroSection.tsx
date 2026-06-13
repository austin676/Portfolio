"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Fixed at 1 for now — when sessionStorage logic is re-enabled,
  // convert back to state: const [delayMultiplier, setDelayMultiplier] = useState(1);
  const delayMultiplier = 1;

  return (
    <section className="noise-overlay relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* ─── Background Image ─── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 * delayMultiplier, duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.jpg"
          alt="Bokeh Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </motion.div>

      {/* ─── Spotlight Blobs ─── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 * delayMultiplier, duration: 2 }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen"
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
      <div className="relative z-10 flex h-full w-full items-center justify-center -translate-y-12 md:-translate-y-20">
        <div className="relative select-none text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7 * delayMultiplier, duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.04em] text-[#dfdcd6]"
            style={{
              fontSize: "clamp(6rem, 21vw, 20vw)",
              lineHeight: "0.7",
            }}
          >
            <span className="block">Austin</span>
            <span className="block">Sharma</span>
          </motion.h1>

          {/* ─── Floating Avatar Card ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 3.9 * delayMultiplier, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 flex flex-col items-center"
            style={{
              top: "78%", 
              left: "60%",
              x: "-85%",
              marginTop: "0px",
            }}
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
              <div className="group relative h-[220px] w-[220px] cursor-pointer rounded-[20px] bg-[#2a2a2a] transition-colors duration-[400ms] ease-[ease] hover:bg-[#7B5CF0] shadow-2xl shadow-black/80 md:h-[260px] md:w-[260px] lg:h-[280px] lg:w-[280px] border-[1px] border-white/10">
                
                {/* Image Mask (crops image but lets badge overflow parent) */}
                <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                  <Image
                    src="/avatar.png"
                    alt="Austin Sharma — Developer Portrait"
                    fill
                    className="object-cover grayscale brightness-[0.85] transition-all duration-[400ms] ease-[ease] group-hover:grayscale-0 group-hover:brightness-100"
                    sizes="(max-width: 768px) 220px, 280px"
                    priority
                  />
                </div>

                {/* Hover Status Badge */}
                <div className="absolute bottom-[30%] -left-[15%] md:-left-[20%] flex items-center gap-2 rounded-full bg-[#111111]/85 p-1 pr-4 text-[13px] text-white opacity-0 -translate-x-[10px] pointer-events-none transition-all duration-[400ms] ease-[ease] group-hover:opacity-100 group-hover:translate-x-0 shadow-xl border border-white/10 whitespace-nowrap z-20">
                  <div className="flex items-center gap-2 rounded-full bg-[#b5f23d] px-3 py-1.5 text-[#111] font-semibold tracking-tight">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-800"></span>
                    </span>
                    Open to Internships
                  </div>
                  <span className="font-medium text-neutral-300">— DM or call</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── Split Footnote Context Grid ─── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.1 * delayMultiplier, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:px-12 md:py-10 lg:px-16 lg:py-12"
      >
        {/* Bottom-Left */}
        <p className="max-w-[320px] text-[14px] font-medium leading-relaxed text-neutral-300 md:max-w-[400px] md:text-[15px] lg:max-w-[520px] lg:text-[27px]">
          I am currently looking for opportunities to grow and showcase my skills.
        </p>

        {/* Bottom-Right */}
        <p className="max-w-[320px] text-[14px] font-medium leading-relaxed text-neutral-300 md:max-w-[400px] md:text-right md:text-[15px] lg:max-w-[520px] lg:text-[27px]">
          Focused on interfaces and experiences, working remotely from Mumbai, India.
        </p>
      </motion.div>
    </section>
  );
}
