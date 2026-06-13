"use client";

import { motion } from "framer-motion";

const skillDomains = [
  { category: "Languages", items: ["Java", "Python", "Solidity"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "Express"] },
  {
    category: "AI / ML",
    items: ["LLM Integration", "OCR", "Multi-Agent Architecture", "Retrieval-based Systems"],
  },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  {
    category: "Blockchain",
    items: ["Solidity", "Ethers.js", "MetaMask", "Ganache", "Thirdweb", "Polygon"],
  },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "PowerShell"] },
];

// GPU-friendly reveal — opacity + translateY only, NO filter:blur (expensive paint)
const lineReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Single stagger container for ALL skills — one observer instead of 7
const skillsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const skillGroupReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const pillReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#020813] overflow-hidden"
    >
      {/* ─── Thin Top Divider ─── */}
      <div className="mx-6 md:mx-16 border-t border-neutral-800/60" />

      <div className="relative py-28 px-6 md:px-16 lg:py-36">
        {/* ─── Giant Watermark — pure CSS, no scroll listener ─── */}
        <div className="pointer-events-none absolute -top-4 left-0 right-0 flex justify-center overflow-hidden select-none">
          <span className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black tracking-tighter text-white/[0.02] leading-none will-change-transform">
            ABOUT
          </span>
        </div>

        {/* ─── Content Grid ─── */}
        <div className="relative z-10 mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 md:gap-24">

          {/* ─── LEFT: Editorial Narrative (single observer) ─── */}
          <motion.div
            className="flex flex-col justify-start pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Section Label */}
            <motion.div
              custom={0}
              variants={lineReveal}
              className="mb-12 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-neutral-600" />
              <span className="text-[17px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                Who I Am
              </span>
            </motion.div>

            {/* Paragraph 1 — Technical Focus */}
            <motion.p
              custom={1}
              variants={lineReveal}
              className="mb-8 text-[23px] leading-[1.75] text-neutral-400 md:text-[26px] lg:text-[30px]"
            >
              I architect{" "}
              <span className="text-[#e8e2d5] font-semibold">
                multi-agent LLM systems
              </span>
              , build production-grade{" "}
              <span className="text-[#e8e2d5] font-semibold">
                RAG pipelines
              </span>
              , and engineer{" "}
              <span className="text-[#e8e2d5] font-semibold">
                decentralized blockchain supply chains
              </span>{" "}
              — bridging intelligence with on-chain transparency.
            </motion.p>

            {/* Paragraph 2 — Personal */}
            <motion.p
              custom={2}
              variants={lineReveal}
              className="mb-8 text-[24px] leading-[1.75] text-neutral-400 md:text-[26px] lg:text-[30px]"
            >
              Off-screen, I compete in{" "}
              <span className="text-[#e8e2d5] font-semibold">PUBG</span> &{" "}
              <span className="text-[#e8e2d5] font-semibold">Valorant</span>{" "}
              ranked lobbies and draw creative fuel from{" "}
              <span className="text-[#e8e2d5] font-semibold">
                anime subculture
              </span>
              .
            </motion.p>

            {/* Paragraph 3 — Academic Status */}
            <motion.p
              custom={3}
              variants={lineReveal}
              className="text-[24px] leading-[1.75] text-neutral-400 md:text-[26px] lg:text-[30px]"
            >
              Engineering student at{" "}
              <span className="text-[#e8e2d5] font-semibold">
                TSEC, Mumbai
              </span>
              , actively pursuing{" "}
              <span className="text-[#e8e2d5] font-semibold">
                research fellowships
              </span>{" "}
              and{" "}
              <span className="text-[#e8e2d5] font-semibold">
                high-impact technical roles
              </span>
              .
            </motion.p>
          </motion.div>

          {/* ─── RIGHT: Skill Cluster (single observer) ─── */}
          <motion.div
            className="flex flex-col justify-start pt-4"
            variants={skillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Section Label */}
            <motion.div
              variants={skillGroupReveal}
              className="mb-12 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-neutral-600" />
              <span className="text-[17px] font-medium uppercase tracking-[0.3em] text-neutral-500">
                Stack
              </span>
            </motion.div>

            {/* Skill Domains */}
            <div className="space-y-8">
              {skillDomains.map((domain) => (
                <motion.div
                  key={domain.category}
                  variants={skillGroupReveal}
                >
                  <h3 className="mb-3 text-[24px] font-bold uppercase tracking-[0.2em] text-[#e8e2d5] md:text-[20px]">
                    {domain.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item) => (
                      <motion.span
                        key={item}
                        variants={pillReveal}
                        className="inline-block rounded-full border border-neutral-700/60 bg-neutral-900/50 px-4 py-1.5 text-[17px] font-medium text-neutral-400 transition-colors duration-300 hover:border-neutral-500 hover:text-neutral-200 md:text-[18px]"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
