import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

// Initialize crisp sans-serif font with CSS variable for reliable production rendering
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Austin Sharma — Frontend Engineer",
  description: "Premium dark portfolio workspace showcasing interfaces, experiences, and engineering craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        {/* Mounts instantly, handles its own sessionStorage logic */}
        <LoadingScreen />
        
        {/* Fixed navbar — floats above all pages */}
        <Navbar />
        
        {/* Client-rendered fluid cursor */}
        <CustomCursor />
        
        {/* Server-rendered children */}
        <main>{children}</main>
      </body>
    </html>
  );
}
