"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020813] py-16 md:py-24">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="w-full text-center"
      >
        <h2 className="font-black tracking-tighter text-[#e8e2d5] text-7xl sm:text-8xl md:text-[15vw] lg:text-[16vw] leading-none select-none">
          MY PROJECTS
        </h2>
      </motion.div>
    </section>
  );
}
