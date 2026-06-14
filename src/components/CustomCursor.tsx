"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Jellish spring physics: high mass for momentum, low damping for that wobbly bounce
  const springConfig = { damping: 14, stiffness: 250, mass: 0.6 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  // Hoisted transforms — stable references, no re-creation per render
  const dotX = useTransform(mouseX, (v) => v + 17);
  const dotY = useTransform(mouseY, (v) => v + 17);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only run the custom cursor on devices with a precise pointer (mouse).
    // Touch devices keep their native behavior and skip the listener entirely.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
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

  if (!enabled) return null;

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
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
