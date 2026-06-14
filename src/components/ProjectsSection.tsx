"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const projects = [
  {
    title: "PaperTrail",
    copy: "Multi-agent LLM pipeline that automates research literature review. Reduced analysis time from 3–7 days to ~10 minutes using RAG and knowledge graph visualization.",
    stack: ["PYTHON", "FASTAPI", "LLM", "RAG", "REACT FLOW"],
    image: "/papertrail.png",
    liveUrl: "https://paper-trail-frontend-jet.vercel.app/",
    githubUrl: "https://github.com/alphaaa10/Paper_trail_frontend",
  },
  {
    title: "FarmTrace",
    copy: "Blockchain-based farm-to-fork supply chain traceability. Reduced verification time from ~7 days to ~2 seconds using QR codes and smart contract audit trails.",
    stack: ["SOLIDITY", "ETHERS.JS", "POLYGON", "REACT", "NODE.JS"],
    image: "/farmtrace.png",
    liveUrl: "https://2-dayslater-agritrace-fyv6.vercel.app/",
    githubUrl: "https://github.com/austin676/2dayslater",
  },
  {
    title: "DevYard",
    copy: "Marketplace for dormant GitHub projects. AI-driven repo analysis using CodeLlama, automated roadmap generation, reducing manual effort by ~70%.",
    stack: ["REACT", "CODELLAMA", "NODE.JS", "GITHUB API"],
    image: "/devyard.png",
    liveUrl: "https://github.com/alphaaa10/devYard",
    githubUrl: "https://github.com/alphaaa10/devYard",
  },
  {
    title: "HardReset",
    copy: "Real-time multiplayer social deduction coding game with role-based gameplay. AI problem generation, live leaderboard, and voting mechanics.",
    stack: ["REACT", "NODE.JS", "SOCKET.IO", "AI"],
    image: "/hardreset.png",
    liveUrl: "https://www.youtube.com/watch?v=-2X_HP8omZo",
    githubUrl: "https://github.com/austin676/hardReset",
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section
      className="relative w-full py-12 md:py-24 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-[1400px] space-y-12 md:space-y-16">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            data-cursor-text="View Live"
            className="relative w-full rounded-[20px] p-8 md:p-12 shadow-2xl overflow-visible group"
            style={{ boxShadow: `0 25px 50px -12px var(--shadow-color)` }}
          >
            {/* Animated Border Background */}
            <div
              className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              {/* Single Synchronized Spinning Wrapper — paused by default, plays on hover */}
              <div className="absolute top-1/2 left-1/2 aspect-square w-[200%] origin-center -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] [animation-play-state:paused] group-hover:[animation-play-state:running] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Blurred Glow Beam */}
                <div
                  className="absolute inset-0 blur-md"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0 240deg, var(--text-heading) 360deg)",
                    opacity: 0.8,
                  }}
                />
                {/* Core Sharp Beam */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0 300deg, var(--text-heading) 360deg)",
                  }}
                />
              </div>
              {/* Inner Mask */}
              <div
                className="absolute inset-[2px] rounded-[18px]"
                style={{ backgroundColor: "var(--bg-card)" }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
              
              {/* ─── Left Column: Architecture ─── */}
              <div className="flex flex-col justify-between h-full z-10 relative">
                
                {/* Top Anchor Cluster */}
                <div className="flex items-center gap-4 mb-16 md:mb-24">
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-20 w-20 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "var(--text-heading)",
                      color: "var(--bg-card)",
                    }}
                  >
                    <GithubIcon className="h-9 w-9" />
                  </a>
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-20 w-20 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "var(--text-heading)",
                      color: "var(--bg-card)",
                    }}
                  >
                    <ExternalLink className="h-9 w-9" strokeWidth={2} />
                  </a>
                </div>

                {/* Bottom Content Area */}
                <div>
                  <h3
                    className="text-3xl md:text-[3rem] font-black tracking-tight leading-none mb-4 md:mb-6"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[18px] md:text-[20px] leading-[1.75] max-w-lg mb-8"
                    style={{ color: "var(--text-body)" }}
                  >
                    {project.copy}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {project.stack.map((tech, i) => (
                      <div key={tech} className="flex items-center">
                        <span
                          className="text-[13px] md:text-[14px] font-mono font-semibold tracking-widest uppercase"
                          style={{ color: "var(--text-body)" }}
                        >
                          {tech}
                        </span>
                        {i !== project.stack.length - 1 && (
                          <span className="ml-3" style={{ color: "var(--text-dim)" }}>·</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ─── Right Column: Visual Mockup Overflow ─── */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full lg:translate-y-8 translate-y-4">
                {/* Simulated MacBook/Window Frame */}
                <div
                  className="absolute top-0 right-0 w-full h-full 2xl:w-[120%] 2xl:h-[110%] rounded-xl overflow-hidden border shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                  style={{
                    backgroundColor: "var(--project-frame-bg)",
                    borderColor: "var(--border-main)",
                    boxShadow: `0 25px 50px -12px var(--shadow-color)`,
                  }}
                >
                  {/* Top Bar */}
                  <div
                    className="h-8 w-full flex items-center px-4 gap-2 border-b"
                    style={{
                      backgroundColor: "var(--project-topbar)",
                      borderColor: "var(--border-card)",
                    }}
                  >
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  {/* Mockup Display */}
                  <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "var(--project-frame-bg)" }}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} Interface`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <span
                        className="font-mono text-[15px] uppercase tracking-widest z-10"
                        style={{ color: "var(--text-dim)" }}
                      >
                        {project.title} Preview
                      </span>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
