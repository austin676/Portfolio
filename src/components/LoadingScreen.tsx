"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Innovating.", "Empowering.", "Delivering."];

export default function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [stage, setStage] = useState<"words" | "dot" | "blast" | "done">("words");

  // 1. Hydration & Storage Safe
  useEffect(() => {
    setIsMounted(true);
    // TEMPORARILY DISABLED FOR DEVELOPMENT: 
    // Uncomment this block before deploying to production to prevent repetition!
    /*
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setShouldShow(false);
    } else {
      sessionStorage.setItem("hasLoaded", "true");
    }
    */
  }, []);

  // Timeline Orchestration
  useEffect(() => {
    if (!shouldShow || !isMounted) return;

    if (stage === "words") {
      // Words enter sequentially (staggered by 0.4s). Total enter time ~1.5s.
      // We hold for another 1s to let the user read them. Total 2.5s.
      const timer = setTimeout(() => {
        setStage("dot");
      }, 2100); 
      return () => clearTimeout(timer);
    }

    if (stage === "dot") {
      const blastTimer = setTimeout(() => {
        setStage("blast");
      }, 300); // Wait 600ms before blast
      return () => clearTimeout(blastTimer);
    }

    if (stage === "blast") {
      const finishTimer = setTimeout(() => {
        setStage("done");
      }, 600); // blast duration is 1s, then cleanup
      return () => clearTimeout(finishTimer);
    }
  }, [stage, shouldShow, isMounted]);

  // If already loaded or not mounted, return null with zero visual delay
  if (!isMounted || !shouldShow || stage === "done") return null;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const }
    }
  };
  
  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] as const } 
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#020813] overflow-hidden">
      
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
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-[#e8e2d5]"
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
          className="absolute bg-[#e8e2d5]"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{
            clipPath: stage === "blast" ? "circle(150% at 50% 50%)" : "circle(0.4% at 50% 50%)",
            opacity: stage === "blast" ? [1, 1, 0] : 1, // Fade out the white blast at the very end to expose portfolio smoothly
          }}
          transition={{
            duration: stage === "blast" ? 1 : 0.4,
            ease: [0.76, 0, 0.24, 1] as const,
            opacity: { duration: 1, times: [0, 0.8, 1], ease: "linear" }
          }}
          style={{ width: "100vw", height: "100vh" }}
        />
      )}
    </div>
  );
}
