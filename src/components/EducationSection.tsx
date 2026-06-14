"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar, GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* ─── Typography Anchor ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            className="font-black tracking-tighter text-4xl md:text-6xl mb-12 md:mb-16 uppercase"
            style={{ color: "var(--text-heading)" }}
          >
            Building Since 2023.
          </h2>
        </motion.div>

        {/* ─── Grid Canvas ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* ─── Card 1: Academic Matrix ─── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between w-full rounded-[20px] p-8 md:p-12 shadow-2xl border transition-all duration-500"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-card)",
              boxShadow: `0 25px 50px -12px var(--shadow-color)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-main)";
              e.currentTarget.style.backgroundColor = "var(--bg-card-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-card)";
              e.currentTarget.style.backgroundColor = "var(--bg-card)";
            }}
          >
            <div>
              {/* Category & Icon Anchor */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="h-6 w-6" strokeWidth={2} />
                </div>
                <span
                  className="text-[11px] md:text-[16px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Education
                </span>
              </div>
              
              {/* Main Copy */}
              <h3
                className="text-xl md:text-2xl font-bold tracking-tight leading-snug mb-3"
                style={{ color: "var(--text-heading)" }}
              >
                Thadomal Shahani Engineering College (TSEC)
              </h3>
              <p
                className="text-[15px] md:text-[17px] font-medium leading-relaxed mb-10"
                style={{ color: "var(--text-body)" }}
              >
                B.E. in Computer Engineering <span style={{ color: "var(--text-dim)" }} className="mx-2">·</span> <span className="text-blue-400/90">7.8/10 CGPA</span>
              </p>
            </div>

            {/* Badge Array */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  backgroundColor: "var(--bg-badge)",
                  borderColor: "var(--border-card)",
                }}
              >
                <Calendar className="h-4 w-4" style={{ color: "var(--text-muted)" }} strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide" style={{ color: "var(--text-body)" }}>2023 – Present</span>
              </div>
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  backgroundColor: "var(--bg-badge)",
                  borderColor: "var(--border-card)",
                }}
              >
                <MapPin className="h-4 w-4" style={{ color: "var(--text-muted)" }} strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide" style={{ color: "var(--text-body)" }}>Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* ─── Card 2: Competitive Milestone ─── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between w-full rounded-[20px] p-8 md:p-12 shadow-2xl border transition-all duration-500"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-card)",
              boxShadow: `0 25px 50px -12px var(--shadow-color)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-main)";
              e.currentTarget.style.backgroundColor = "var(--bg-card-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-card)";
              e.currentTarget.style.backgroundColor = "var(--bg-card)";
            }}
          >
            <div>
              {/* Category & Icon Anchor */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <Trophy className="h-6 w-6" strokeWidth={2} />
                </div>
                <span
                  className="text-[11px] md:text-[16px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Codestorm
                </span>
              </div>
              
              {/* Main Copy */}
              <h3
                className="text-xl md:text-2xl font-bold tracking-tight leading-snug mb-3"
                style={{ color: "var(--text-heading)" }}
              >
                LEADERSHIP & COMMUNITY
              </h3>
              <p
                className="text-[15px] md:text-[19px] font-medium leading-relaxed mb-10"
                style={{ color: "var(--text-body)" }}
              >
                Technical Committee Member
              </p>
            </div>

            {/* Badge Array */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  backgroundColor: "var(--bg-badge)",
                  borderColor: "var(--border-card)",
                }}
              >
                <Calendar className="h-4 w-4" style={{ color: "var(--text-muted)" }} strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide" style={{ color: "var(--text-body)" }}>2024-2026</span>
              </div>
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  backgroundColor: "var(--bg-badge)",
                  borderColor: "var(--border-card)",
                }}
              >
                <MapPin className="h-4 w-4" style={{ color: "var(--text-muted)" }} strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide" style={{ color: "var(--text-body)" }}>Mumbai, India</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
