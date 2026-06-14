"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "./IntroProvider";

const words = ["Sleep.", "Optional.", "Apparently."];


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] as const }
  }
};

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
  }
};

export default function LoadingScreen() {
  const { playIntro } = useIntro();
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<"words" | "dot" | "blast" | "done">("words");

  // The server always renders null (it can't know it's a repeat visit), so gate on
  // mount to avoid a hydration mismatch. playIntro is already resolved synchronously.
  useEffect(() => setMounted(true), []);
  const shouldShow = mounted && playIntro;

  // Timeline Orchestration
  useEffect(() => {
    if (!shouldShow) return;

    if (stage === "words") {
      // Words enter staggered (~1.2s). Brief hold, then collapse into the dot.
      const timer = setTimeout(() => {
        setStage("dot");
      }, 1200);
      return () => clearTimeout(timer);
    }

    if (stage === "dot") {
      const blastTimer = setTimeout(() => {
        setStage("blast");
      }, 250);
      return () => clearTimeout(blastTimer);
    }

    if (stage === "blast") {
      const finishTimer = setTimeout(() => {
        setStage("done");
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [stage, shouldShow]);

  // Skip entirely for repeat visitors / once the intro has finished.
  if (!shouldShow || stage === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--loading-bg)" }}
    >
      
      {/* Stage 1: The Words */}
      <AnimatePresence>
        {stage === "words" && (
          <motion.div 
            className="relative flex items-center justify-center gap-2 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {words.map((word, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h2
                  variants={wordVariants}
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter"
                  style={{ color: "var(--text-heading)" }}
                >
                  {word}
                </motion.h2>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 2 & 3: The Transition and Blast Reveal */}
      {(stage === "dot" || stage === "blast") && (
        <motion.div
          className="absolute"
          style={{
            backgroundColor: "var(--loading-blast)",
            width: "100vw",
            height: "100vh",
          }}
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{
            clipPath: stage === "blast" ? "circle(100% at 50% 50%)" : "circle(0.4% at 50% 50%)",
            opacity: stage === "blast" ? [1, 1, 0] : 1,
          }}
          transition={{
            duration: stage === "blast" ? 1 : 0.4,
            ease: [0.76, 0, 0.24, 1] as const,
            opacity: { duration: 1, times: [0, 0.8, 1], ease: "linear" }
          }}
        />
      )}
    </div>
  );
}
