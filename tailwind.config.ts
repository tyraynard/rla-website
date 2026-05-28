import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm:  "480px",
      md:  "768px",
      lg:  "1024px",
      xl:  "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        rla: {
          black:       "#090806",
          obsidian:    "#0F0E0C",
          charcoal:    "#1A1916",
          iron:        "#232119",
          border:      "#2E2C26",
          smoke:       "#524F48",
          stone:       "#8A8680",
          parchment:   "#C4BEB4",
          cream:       "#EAE4DA",
          white:       "#F5F2EC",
          "sage-deep":  "#2E3D2C",
          "sage-muted": "#4A6148",
          "sage":       "#6E8C6C",
          "sage-light": "#8FAD8D",
          "sage-pale":  "#B8CCB7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,6vw,5.5rem)",  { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(2.5rem,5vw,4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg":  ["clamp(2rem,4vw,3.5rem)",   { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "heading-xl":  ["clamp(1.75rem,3vw,2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "heading-lg":  ["clamp(1.375rem,2.5vw,2rem)", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        "heading-md":  ["1.375rem",  { lineHeight: "1.3",  letterSpacing: "-0.01em" }],
        "heading-sm":  ["1.125rem",  { lineHeight: "1.4",  letterSpacing: "0" }],
        "body-xl":     ["1.25rem",   { lineHeight: "1.8",  letterSpacing: "0" }],
        "body-lg":     ["1.125rem",  { lineHeight: "1.75", letterSpacing: "0" }],
        "body-md":     ["1rem",      { lineHeight: "1.75", letterSpacing: "0" }],
        "body-sm":     ["0.9375rem", { lineHeight: "1.65", letterSpacing: "0" }],
        "body-xs":     ["0.875rem",  { lineHeight: "1.6",  letterSpacing: "0" }],
        "ui-md":       ["0.9375rem", { lineHeight: "1.4",  letterSpacing: "0.01em" }],
        "ui-sm":       ["0.875rem",  { lineHeight: "1.4",  letterSpacing: "0.01em" }],
        "ui-xs":       ["0.8125rem", { lineHeight: "1.4",  letterSpacing: "0.02em" }],
        "eyebrow":     ["0.6875rem", { lineHeight: "1.4",  letterSpacing: "0.18em" }],
        "caption":     ["0.75rem",   { lineHeight: "1.5",  letterSpacing: "0.02em" }],
      },
      spacing: {
        "section":    "96px",
        "section-sm": "64px",
        "section-lg": "128px",
        "18": "72px",
        "22": "88px",
        "26": "104px",
        "30": "120px",
      },
      maxWidth: {
        "content":  "1280px",
        "wide":     "1440px",
        "reading":  "68ch",
        "narrow":   "48ch",
      },
      borderRadius: {
        "sm":  "2px",
        "md":  "4px",
        "lg":  "6px",
      },
      boxShadow: {
        "card":      "0 1px 2px rgba(9,8,6,0.5), 0 4px 16px rgba(9,8,6,0.4)",
        "card-hover":"0 4px 8px rgba(9,8,6,0.6), 0 16px 40px rgba(9,8,6,0.5)",
        "inset":     "inset 0 1px 0 rgba(245,242,236,0.04)",
      },
      transitionTimingFunction: {
        "out-expo":  "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      transitionDuration: {
        "350": "350ms",
        "450": "450ms",
        "600": "600ms",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-right": {
          from: { transform: "scaleX(0)" },
          to:   { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up":     "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":     "fade-in 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "slide-right": "slide-right 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
      zIndex: {
        "nav":     "40",
        "overlay": "20",
        "modal":   "50",
      },
    },
  },
  plugins: [],
};

export default config;
