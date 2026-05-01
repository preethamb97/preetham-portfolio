/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        "surface-1": "var(--color-surface-1)",
        "surface-2": "var(--color-surface-2)",
        "surface-3": "var(--color-surface-3)",
        hairline: "var(--color-hairline)",
        "hairline-soft": "var(--color-hairline-soft)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        "ink-subtle": "var(--color-ink-subtle)",
        "ink-eyebrow": "var(--color-ink-eyebrow)",
        "accent-blue": "var(--color-accent-blue)",
        "semantic-visited": "var(--color-semantic-visited)",
        "inverse-canvas": "var(--color-inverse-canvas)",
        "inverse-ink": "var(--color-inverse-ink)",
        "product-terraform": "#5c4ee5",
        "product-terraform-bright": "#7c66ff",
        "product-vault": "#fddd04",
        "product-consul": "#e52328",
        "product-waypoint": "#00c9ca",
        "product-waypoint-deep": "#00989d",
        "product-vagrant": "#1868f2",
        "product-nomad": "#25ad62",
        "product-boundary": "#fb827c",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.25rem, 8vw, 5rem)",
          { lineHeight: "1.17", letterSpacing: "-0.08em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2rem, 5vw, 3.5rem)",
          { lineHeight: "1.18", letterSpacing: "-0.06em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.5rem, 4vw + 0.65rem, 2.5rem)",
          { lineHeight: "1.19", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        headline: [
          "clamp(1.25rem, 2.5vw + 0.6rem, 1.75rem)",
          { lineHeight: "1.21", letterSpacing: "-0.025em", fontWeight: "600" },
        ],
        "card-title": [
          "clamp(1.1875rem, 2vw + 0.5rem, 1.375rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        subhead: [
          "1.25rem",
          { lineHeight: "1.35", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.69", letterSpacing: "0", fontWeight: "500" },
        ],
        body: [
          "1rem",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" },
        ],
        "body-sm": [
          "0.875rem",
          { lineHeight: "1.71", letterSpacing: "0", fontWeight: "500" },
        ],
        caption: [
          "0.8125rem",
          { lineHeight: "1.38", letterSpacing: "0.012em", fontWeight: "500" },
        ],
        button: [
          "0.875rem",
          { lineHeight: "1.29", letterSpacing: "0", fontWeight: "600" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.23", letterSpacing: "0.6px", fontWeight: "600" },
        ],
      },
      spacing: {
        section: "96px",
      },
      borderRadius: {
        "hc-xs": "4px",
        "hc-sm": "6px",
        "hc-md": "8px",
        "hc-lg": "12px",
        "hc-xl": "16px",
        "hc-xxl": "24px",
        pill: "9999px",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
