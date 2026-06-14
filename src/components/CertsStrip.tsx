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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CertsStrip() {
  return (
    <section
      className="relative w-full py-16 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* ─── Top Structural Typography ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        className="pb-14 text-center"
      >
        <span
          className="text-[19px] font-medium uppercase tracking-[0.3em] md:text-[21px]"
          style={{ color: "var(--text-body)" }}
        >
          Credentials and Recognition
        </span>
      </motion.div>

      {/* ─── Grid Strip ─── */}
      <motion.div
        className="mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border px-8 py-16 md:py-20 text-center transition-all duration-500"
              style={{
                borderColor: "var(--border-card)",
                backgroundColor: "var(--bg-cert)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-main)";
                e.currentTarget.style.backgroundColor = "var(--bg-cert-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.backgroundColor = "var(--bg-cert)";
              }}
            >
              {/* Ambient glow on hover */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${cred.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:shadow-lg"
                style={{
                  borderColor: "var(--border-subtle)",
                  backgroundColor: "var(--bg-icon-box)",
                }}
              >
                <Icon
                  className="h-7 w-7 transition-colors duration-500"
                  style={{ color: "var(--text-muted)" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Credential Title */}
              <h3
                className="relative z-10 mb-3 text-[19px] font-semibold leading-snug transition-colors duration-500 md:text-[21px]"
                style={{ color: "var(--text-heading)" }}
              >
                {cred.title}
              </h3>

              {/* Issuing Org */}
              <p
                className="relative z-10 text-[14px] font-medium uppercase tracking-[0.15em] transition-colors duration-500 md:text-[15px]"
                style={{ color: "var(--text-dim)" }}
              >
                {cred.org}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
