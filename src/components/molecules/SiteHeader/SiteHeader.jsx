import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaGithub, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "sites", label: "Sites" },
  { id: "projects", label: "Open source" },
  { id: "systems", label: "Systems" },
];

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="border-b border-hairline bg-canvas/95 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/85"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="page-gutter relative flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="font-display min-h-[44px] shrink-0 rounded-hc-md px-1 py-2 text-left text-body-sm font-semibold text-ink transition-opacity hover:text-ink-muted sm:px-0"
          >
            Preetham B
          </button>

          <nav
            className="hide-scrollbar mx-auto hidden max-w-xl flex-1 items-center justify-center gap-4 overflow-x-auto md:flex md:gap-6"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="shrink-0 rounded-hc-md px-2 py-2 font-display text-body-sm font-medium text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-hc-md border border-hairline bg-surface-1 text-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
            >
              {theme === "dark" ? (
                <FaSun className="text-[16px]" aria-hidden />
              ) : (
                <FaMoon className="text-[16px]" aria-hidden />
              )}
            </button>
            <a
              href="https://github.com/preethamb97"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] items-center rounded-hc-md px-3 py-2 font-display text-button text-accent-blue hover:underline md:inline-flex"
            >
              GitHub
            </a>
            <a
              href="mailto:preethamb97@gmail.com"
              className="hidden min-h-[44px] items-center justify-center rounded-hc-md bg-inverse-canvas px-4 py-2 font-display text-button text-inverse-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:inline-flex sm:px-[18px]"
            >
              Contact
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-primary-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-hc-md border border-hairline bg-surface-1 text-ink md:hidden"
            >
              {menuOpen ? (
                <FaTimes className="text-[18px]" aria-hidden />
              ) : (
                <FaBars className="text-[18px]" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.div
              id="mobile-primary-nav"
              key="nav-sheet"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-b border-hairline bg-canvas md:hidden"
            >
              <nav
                className="page-gutter flex flex-col gap-1 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
                aria-label="Mobile primary"
              >
                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.22 }}
                    onClick={() => scrollTo(item.id)}
                    className="min-h-[48px] rounded-hc-md px-3 py-3 text-left font-display text-body font-medium text-ink transition-colors hover:bg-surface-1 active:bg-surface-2"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href="https://github.com/preethamb97"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * NAV.length, duration: 0.22 }}
                  className="inline-flex min-h-[48px] items-center rounded-hc-md px-3 py-3 font-display text-body font-semibold text-accent-blue hover:bg-surface-1"
                >
                  <FaGithub className="mr-2 text-[18px]" aria-hidden />
                  GitHub
                </motion.a>
                <motion.a
                  href="mailto:preethamb97@gmail.com"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * (NAV.length + 1), duration: 0.22 }}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-hc-md bg-inverse-canvas px-4 py-3 font-display text-button text-inverse-ink"
                >
                  Contact
                </motion.a>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
