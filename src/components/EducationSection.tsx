"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar, GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="relative w-full bg-[#020813] py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* ─── Typography Anchor ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-black tracking-tighter text-4xl md:text-6xl text-[#e8e2d5] mb-12 md:mb-16 uppercase">
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
            className="group relative flex flex-col justify-between w-full rounded-[20px] bg-[#1a1f2e] p-8 md:p-12 shadow-2xl shadow-black/50 border border-white/5 transition-all duration-500 hover:border-white/10 hover:bg-[#1d2335]"
          >
            <div>
              {/* Category & Icon Anchor */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="text-[11px] md:text-[16px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  Education
                </span>
              </div>
              
              {/* Main Copy */}
              <h3 className="text-xl md:text-2xl font-bold text-[#e8e2d5] tracking-tight leading-snug mb-3">
                Thadomal Shahani Engineering College (TSEC)
              </h3>
              <p className="text-[15px] md:text-[17px] font-medium text-neutral-400 leading-relaxed mb-10">
                B.E. in Computer Engineering <span className="text-neutral-600 mx-2">·</span> <span className="text-blue-400/90">7.8/10 CGPA</span>
              </p>
            </div>

            {/* Badge Array */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <div className="flex items-center gap-2 rounded-full bg-black/40 border border-white/5 px-4 py-2">
                <Calendar className="h-4 w-4 text-neutral-500" strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide text-neutral-300">2023 – Present</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-black/40 border border-white/5 px-4 py-2">
                <MapPin className="h-4 w-4 text-neutral-500" strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide text-neutral-300">Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* ─── Card 2: Competitive Milestone ─── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between w-full rounded-[20px] bg-[#1a1f2e] p-8 md:p-12 shadow-2xl shadow-black/50 border border-white/5 transition-all duration-500 hover:border-white/10 hover:bg-[#1d2335]"
          >
            <div>
              {/* Category & Icon Anchor */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <Trophy className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="text-[11px] md:text-[16px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  Codestorm
                </span>
              </div>
              
              {/* Main Copy */}
              <h3 className="text-xl md:text-2xl font-bold text-[#e8e2d5] tracking-tight leading-snug mb-3">
                LEADERSHIP & COMMUNITY
              </h3>
              <p className="text-[15px] md:text-[19px] font-medium text-neutral-400 leading-relaxed mb-10">
                Technical Committee Member
              </p>
            </div>

            {/* Badge Array */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <div className="flex items-center gap-2 rounded-full bg-black/40 border border-white/5 px-4 py-2">
                <Calendar className="h-4 w-4 text-neutral-500" strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide text-neutral-300">2024-2026</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-black/40 border border-white/5 px-4 py-2">
                <MapPin className="h-4 w-4 text-neutral-500" strokeWidth={2} />
                <span className="text-sm font-mono font-semibold tracking-wide text-neutral-300">Mumbai, India</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
