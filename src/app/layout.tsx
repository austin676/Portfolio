import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import IntroProvider from "@/components/IntroProvider";

// Initialize crisp sans-serif font with CSS variable for reliable production rendering
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  adjustFontFallback: true,
});

const description =
  "Premium portfolio of Austin Sharma — engineering student building multi-agent LLM systems, RAG pipelines, and decentralized blockchain applications.";

export const metadata: Metadata = {
  title: {
    default: "Austin Sharma",
    template: "%s · Austin Sharma",
  },
  description,
  keywords: [
    "Austin Sharma",
    "Portfolio",
    "Software Engineer",
    "LLM",
    "RAG",
    "Blockchain",
    "Full Stack Developer",
    "Mumbai",
  ],
  authors: [{ name: "Austin Sharma" }],
  creator: "Austin Sharma",
  openGraph: {
    type: "website",
    title: "Austin Sharma",
    description,
    siteName: "Austin Sharma",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Sharma",
    description,
    creator: "@Austin_Sharma22",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020813" },
    { media: "(prefers-color-scheme: light)", color: "#EFE8D8" },
  ],
  colorScheme: "dark light",
};

// Runs before first paint to set the persisted theme on <html>, preventing a
// flash of the wrong theme for returning/light-mode visitors.
const themeInitScript = `(function(){try{document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <IntroProvider>
            {/* Plays the intro once per session, then skips on repeat visits */}
            <LoadingScreen />

            {/* Fixed navbar — floats above all pages */}
            <Navbar />

            {/* Client-rendered fluid cursor */}
            <CustomCursor />

            {/* Server-rendered children */}
            <main>{children}</main>
          </IntroProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

