"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain, Eye, Bot, Search, Box, Globe, Sparkles, Shield, Code2, type LucideIcon,
} from "lucide-react";

/* ─── Brand logos via Simple Icons CDN (original colors) ─── */
const brandIcons: Record<string, string> = {
  Java: "https://cdn.simpleicons.org/openjdk/ED8B00",
  Python: "https://cdn.simpleicons.org/python/3776AB",
  Solidity: "https://cdn.simpleicons.org/solidity/A8A8A8",
  "React.js": "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  FastAPI: "https://cdn.simpleicons.org/fastapi/009688",
  Express: "https://cdn.simpleicons.org/express/FFFFFF",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  "Ethers.js": "https://cdn.simpleicons.org/ethereum/A8A8FF",
  Polygon: "https://cdn.simpleicons.org/polygon/7B3FE4",
  Git: "https://cdn.simpleicons.org/git/F05032",
  GitHub: "https://cdn.simpleicons.org/github/FFFFFF",
};

/* ─── Fallback icons for concepts without brand logos ─── */
const conceptIcons: Record<string, { icon: LucideIcon; color: string }> = {
  "LLM Integration": { icon: Brain, color: "#a78bfa" },
  OCR: { icon: Eye, color: "#60a5fa" },
  "Multi-Agent Architecture": { icon: Bot, color: "#34d399" },
  "Retrieval-based Systems": { icon: Search, color: "#f59e0b" },
  Ganache: { icon: Box, color: "#E4A663" },
  Thirdweb: { icon: Globe, color: "#F213A4" },
  Antigravity: { icon: Sparkles, color: "#c084fc" },
  MetaMask: { icon: Shield, color: "#F6851B" },
  "VS Code": { icon: Code2, color: "#007ACC" },
};

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
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Antigravity"] },
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

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
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
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* ─── Thin Top Divider ─── */}
      <div
        className="mx-6 md:mx-16 border-t"
        style={{ borderColor: "var(--divider-color)" }}
      />

      <div className="relative py-28 px-6 md:px-16 lg:py-36">
        {/* ─── Giant Watermark — pure CSS, no scroll listener ─── */}
        <div className="pointer-events-none absolute -top-4 left-0 right-0 flex justify-center overflow-hidden select-none">
          <span
            className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black tracking-tighter leading-none"
            style={{ color: "var(--text-heading)", opacity: "var(--watermark-opacity)" }}
          >
            ABOUT
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px]">

          {/* ════════════════════════════════════════════════════
              ROW 1 — Portrait Image + Editorial Narrative
              ════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 md:gap-20 items-start">

            {/* ─── LEFT: Portrait Photo Card ─── */}
            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative mx-auto lg:mx-0 w-full max-w-[380px] lg:max-w-none"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-[2px] rounded-[24px] bg-gradient-to-br from-white/15 via-transparent to-white/5 pointer-events-none" />

              {/* Image container */}
              <div
                className="relative aspect-[3/4] w-full rounded-[22px] overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderWidth: "1px",
                  borderColor: "var(--border-main)",
                  boxShadow: `0 25px 50px -12px var(--shadow-color)`,
                }}
              >
                <Image
                  src="/Pic1.jpeg"
                  alt="Austin Sharma — Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 380px, 420px"
                  priority
                />
                {/* Subtle bottom gradient for blending */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)`,
                    opacity: 0.6,
                  }}
                />
              </div>

              {/* Floating location badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 -right-4 md:-right-6 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--bg-badge)",
                  borderWidth: "1px",
                  borderColor: "var(--border-main)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span
                  className="text-[13px] font-semibold tracking-wide"
                  style={{ color: "var(--text-body)" }}
                >
                  Mumbai, India
                </span>
              </motion.div>
            </motion.div>

            {/* ─── RIGHT: Editorial Narrative ─── */}
            <motion.div
              className="flex flex-col justify-start pt-2 lg:pt-4"
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
                <div className="h-[1px] w-12" style={{ backgroundColor: "var(--text-dim)" }} />
                <span
                  className="text-[17px] font-medium uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Who I Am
                </span>
              </motion.div>

              {/* Paragraph 1 — Technical Focus */}
              <motion.p
                custom={1}
                variants={lineReveal}
                className="mb-8 text-[21px] leading-[1.75] md:text-[24px] lg:text-[28px]"
                style={{ color: "var(--text-body)" }}
              >
                I architect{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  multi-agent LLM systems
                </span>
                , build production-grade{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  RAG pipelines
                </span>
                , and engineer{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  decentralized blockchain supply chains
                </span>{" "}
                — bridging intelligence with on-chain transparency.
              </motion.p>

              {/* Paragraph 2 — Personal */}
              <motion.p
                custom={2}
                variants={lineReveal}
                className="mb-8 text-[21px] leading-[1.75] md:text-[24px] lg:text-[28px]"
                style={{ color: "var(--text-body)" }}
              >
                Off-screen, I compete in{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>Football</span> &{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>Sprinting</span>{" "}
                and draw discipline from the competitive spirit of{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  Sports
                </span>
                .
              </motion.p>

              {/* Paragraph 3 — Academic Status */}
              <motion.p
                custom={3}
                variants={lineReveal}
                className="text-[21px] leading-[1.75] md:text-[24px] lg:text-[28px]"
                style={{ color: "var(--text-body)" }}
              >
                Engineering student at{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  TSEC, Mumbai
                </span>
                , actively pursuing{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  research fellowships
                </span>{" "}
                and{" "}
                <span className="font-semibold" style={{ color: "var(--text-heading)" }}>
                  high-impact technical roles
                </span>
                .
              </motion.p>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════════════════
              ROW 2 — Full-Width Skill Cluster
              ════════════════════════════════════════════════════ */}
          <motion.div
            className="mt-24 md:mt-32"
            variants={skillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Section Label */}
            <motion.div
              variants={skillGroupReveal}
              className="mb-12 flex items-center gap-4"
            >
              <div className="h-[1px] w-12" style={{ backgroundColor: "var(--text-dim)" }} />
              <span
                className="text-[17px] font-medium uppercase tracking-[0.3em]"
                style={{ color: "var(--text-muted)" }}
              >
                Stack
              </span>
            </motion.div>

            {/* Skill Domains — responsive multi-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
              {skillDomains.map((domain) => (
                <motion.div
                  key={domain.category}
                  variants={skillGroupReveal}
                >
                  <h3
                    className="mb-3 text-[18px] font-bold uppercase tracking-[0.2em] md:text-[20px]"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {domain.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item) => {
                      const brandUrl = brandIcons[item];
                      const concept = conceptIcons[item];
                      const ConceptIcon = concept?.icon;
                      return (
                        <motion.span
                          key={item}
                          variants={pillReveal}
                          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[15px] font-medium transition-colors duration-300 md:text-[16px]"
                          style={{
                            borderColor: "var(--border-subtle)",
                            backgroundColor: "var(--bg-pill)",
                            color: "var(--text-body)",
                          }}
                        >
                          {brandUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={brandUrl} alt="" className="w-4 h-4 flex-shrink-0" loading="lazy" />
                          ) : ConceptIcon ? (
                            <ConceptIcon className="w-4 h-4 flex-shrink-0" style={{ color: concept.color }} strokeWidth={2} />
                          ) : null}
                          {item}
                        </motion.span>
                      );
                    })}
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
