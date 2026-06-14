"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface IntroContextValue {
  /** Whether the full-screen loading intro should play (only on the first visit of a session). */
  playIntro: boolean;
}

const IntroContext = createContext<IntroContextValue>({ playIntro: true });

export function useIntro() {
  return useContext(IntroContext);
}

// Resolve synchronously so returning visitors skip the intro from the very first
// client render — no post-mount flip that would leave the hero waiting on a stale delay.
function readPlayIntro(): boolean {
  if (typeof window === "undefined") return true; // SSR assumes a first visit
  try {
    return !sessionStorage.getItem("hasLoaded");
  } catch {
    return true; // sessionStorage unavailable (e.g. privacy mode) — play the intro
  }
}

export default function IntroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playIntro] = useState(readPlayIntro);

  useEffect(() => {
    if (playIntro) {
      try {
        sessionStorage.setItem("hasLoaded", "true");
      } catch {
        /* ignore */
      }
    }
  }, [playIntro]);

  return (
    <IntroContext.Provider value={{ playIntro }}>
      {children}
    </IntroContext.Provider>
  );
}
