"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Jellish spring physics: high mass for momentum, low damping for that wobbly bounce
  const springConfig = { damping: 14, stiffness: 250, mass: 0.6 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide native cursor
    document.body.style.cursor = "none";
    
    const moveCursor = (e: MouseEvent) => {
      // Offset by 20px to center the 40px wide jelly circle
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* The Jelly Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 w-[60px] h-[60px] bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* The Instant Tracking Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-[11px] h-[11px] bg-white rounded-full pointer-events-none z-[101] mix-blend-difference"
        style={{
          // Offset by 17px relative to the 20px mouse offset to perfectly center the 6x6 dot
          x: useTransform(mouseX, (v) => v + 17),
          y: useTransform(mouseY, (v) => v + 17),
        }}
      />
    </>
  );
}
