"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useIntro } from "./IntroProvider";

/* ─── Inline SVG Icons (compact, no external deps) ─── */
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ─── Section nav links ─── */
const navSections = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ─── Social links ─── */
const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/austin676",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/austin-sharma-029297300",
    label: "LinkedIn",
  },
  {
    icon: XIcon,
    href: "https://x.com/Austin_Sharma22",
    label: "X",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/austin.sharma_",
    label: "Instagram",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { playIntro } = useIntro();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: playIntro ? 1.7 : 0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed top-0 left-0 w-full z-50 bg-transparent"
    >
      <div className="flex w-full items-center justify-between p-5 md:px-8 md:py-6">
        {/* ─── Left: Resume Capsule ─── */}
        <a
          href="/Austin_Sharma_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-2xl border px-3 py-1.5 text-[13px] md:text-[16px] font-medium uppercase tracking-widest transition-all duration-300"
          style={{
            borderColor: "var(--nav-border)",
            color: "var(--nav-text)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
            e.currentTarget.style.color = "var(--nav-hover-text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--nav-text)";
          }}
        >
          Resume
        </a>

        {/* ─── Mobile Hamburger ─── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl border transition-all duration-300"
          style={{ borderColor: "var(--nav-border)", opacity: 0.6 }}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-[2px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            style={{ backgroundColor: "var(--nav-text)" }}
          />
          <span
            className={`block w-5 h-[2px] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--nav-text)" }}
          />
          <span
            className={`block w-5 h-[2px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            style={{ backgroundColor: "var(--nav-text)" }}
          />
        </button>

        {/* ─── Desktop: Section Links + Social Icons + Theme Toggle ─── */}
        <div className="hidden md:flex items-center gap-1">
          {/* Section navigation links (text) */}
          {navSections.map((section) => (
            <a
              key={section.label}
              href={section.href}
              onClick={(e) => handleNavClick(e, section.href)}
              className="pointer-events-auto rounded-2xl border px-4 py-1.5 text-[14px] font-medium uppercase tracking-widest transition-all duration-300"
              style={{
                borderColor: "var(--nav-border)",
                color: "var(--nav-text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
                e.currentTarget.style.color = "var(--nav-hover-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--nav-text)";
              }}
            >
              {section.label}
            </a>
          ))}

          {/* Separator */}
          <div className="mx-2 h-5 w-[1px]" style={{ backgroundColor: "var(--border-main)" }} />

          {/* Social icon buttons */}
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300"
              style={{
                borderColor: "var(--nav-border)",
                color: "var(--nav-text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
                e.currentTarget.style.color = "var(--nav-hover-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--nav-text)";
              }}
            >
              <social.icon className="w-[18px] h-[18px]" />
            </a>
          ))}

          {/* Separator */}
          <div className="mx-2 h-5 w-[1px]" style={{ backgroundColor: "var(--border-main)" }} />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300"
            style={{
              borderColor: "var(--nav-border)",
              color: "var(--nav-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
              e.currentTarget.style.color = "var(--nav-hover-text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--nav-text)";
            }}
          >
            {theme === "dark" ? (
              <Sun className="w-[18px] h-[18px]" strokeWidth={2} />
            ) : (
              <Moon className="w-[18px] h-[18px]" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* ─── Mobile Dropdown Menu ─── */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto md:hidden overflow-hidden mx-4"
      >
        <div
          className="flex flex-col gap-2 rounded-2xl border backdrop-blur-lg p-4"
          style={{
            borderColor: "var(--border-main)",
            backgroundColor: "var(--bg-mobile-menu)",
          }}
        >
          {/* Section Links */}
          {navSections.map((section) => (
            <a
              key={section.label}
              href={section.href}
              onClick={(e) => handleNavClick(e, section.href)}
              className="rounded-xl border px-4 py-3 text-[14px] font-medium uppercase tracking-widest text-center transition-all duration-300"
              style={{
                borderColor: "var(--border-main)",
                color: "var(--nav-text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
                e.currentTarget.style.color = "var(--nav-hover-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--nav-text)";
              }}
            >
              {section.label}
            </a>
          ))}

          {/* Divider */}
          <div className="my-1 border-t" style={{ borderColor: "var(--border-main)" }} />

          {/* Social Icons Row + Theme Toggle */}
          <div className="flex items-center justify-center gap-4 py-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300"
                style={{
                  borderColor: "var(--border-main)",
                  color: "var(--nav-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
                  e.currentTarget.style.color = "var(--nav-hover-text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--nav-text)";
                }}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300"
              style={{
                borderColor: "var(--border-main)",
                color: "var(--nav-text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--nav-hover-bg)";
                e.currentTarget.style.color = "var(--nav-hover-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--nav-text)";
              }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Moon className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
