"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "OCI 2025 AI Foundations Associate",
    org: "Oracle Cloud Infrastructure",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Award,
    title: "API Fundamentals Student Expert",
    org: "Postman",
    accent: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Sparkles,
    title: "Career Essentials in Generative AI",
    org: "Microsoft / LinkedIn",
    accent: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Trophy,
    title: "1× Hackathon Winner",
    org: "Atharva University,Malad",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CertsStrip() {
  return (
    <section className="relative w-full bg-[#020813] py-16 px-6 md:px-16">
      {/* ─── Grid Strip ─── */}
      <motion.div
        className="mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: "1200px" }}
      >
        {credentials.map((cred) => {
          const Icon = cred.icon;
          return (
            <motion.div
              key={cred.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
              }}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md px-8 py-16 md:py-20 text-center transition-all duration-500 hover:border-white/10 hover:bg-white/[0.08]"
            >
              {/* Ambient glow on hover */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${cred.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />

              {/* Icon */}
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-700/40 bg-neutral-800/50 transition-all duration-500 group-hover:border-neutral-500/60 group-hover:bg-neutral-700/40 group-hover:shadow-lg group-hover:shadow-white/5">
                <Icon
                  className="h-7 w-7 text-neutral-500 transition-colors duration-500 group-hover:text-white"
                  strokeWidth={1.5}
                />
              </div>

              {/* Credential Title */}
              <h3 className="relative z-10 mb-3 text-[19px] font-semibold leading-snug text-[#e8e2d5] transition-colors duration-500 group-hover:text-white md:text-[21px]">
                {cred.title}
              </h3>

              {/* Issuing Org */}
              <p className="relative z-10 text-[14px] font-medium uppercase tracking-[0.15em] text-neutral-600 transition-colors duration-500 group-hover:text-neutral-400 md:text-[15px]">
                {cred.org}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ─── Bottom Structural Typography ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="pt-14 pb-4 text-center"
      >
        <span className="text-[19px] font-medium uppercase tracking-[0.3em] text-neutral-300 md:text-[21px]">
          Credentials and Recognition
        </span>
      </motion.div>
    </section>
  );
}
