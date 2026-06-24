import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        carbon: {
          950: "#0c0b0a",
          900: "#121110",
          800: "#1a1817",
          700: "#23211f",
          600: "#2e2b28",
          500: "#3b3733",
        },
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        raised: "hsl(var(--raised))",
        line: "hsl(var(--line))",
        ink: "hsl(var(--ink))",
        faint: "hsl(var(--faint))",
        ember: {
          DEFAULT: "hsl(var(--ember))",
          soft: "hsl(var(--ember-soft))",
        },
        ion: {
          DEFAULT: "hsl(var(--ion))",
          soft: "hsl(var(--ion-soft))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "22px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 0.75rem))" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "60%, 100%": { transform: "translateX(220%)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%, -3%, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-3%, 4%, 0) scale(0.96)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.7)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "radar-sweep": {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "80%, 100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 38s) linear infinite",
        sheen: "sheen 5s ease-in-out infinite",
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        "radar-sweep": "radar-sweep 4s linear infinite",
        float: "float 7s ease-in-out infinite",
        twinkle: "twinkle var(--tw-dur, 4s) ease-in-out infinite",
        "scroll-cue": "scroll-cue 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
