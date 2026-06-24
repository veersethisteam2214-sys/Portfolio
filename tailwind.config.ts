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
        // custom warm-graphite ramp — deliberately not Tailwind slate/zinc
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
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 0.75rem))" },
        },
        "marquee-rev": {
          from: { transform: "translateX(calc(-50% - 0.75rem))" },
          to: { transform: "translateX(0)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "60%, 100%": { transform: "translateX(220%)" },
        },
        ticker: {
          "0%, 45%": { transform: "translateY(0)" },
          "55%, 100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 38s) linear infinite",
        "marquee-rev": "marquee-rev var(--duration, 38s) linear infinite",
        sheen: "sheen 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
