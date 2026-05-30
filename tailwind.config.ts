import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identité Artémys
        orange: {
          DEFAULT: "#FF4D00",
          light: "#FF7A33",
          dark: "#E63F00",
        },
        ink: "#0A0A0C",
        "ink-soft": "#16161A",
        cream: "#FBF2E6",
        "cream-dark": "#F2E6D4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        marquee: "marquee 38s linear infinite",
        "marquee-rev": "marqueeRev 42s linear infinite",
        float: "float 7s ease-in-out infinite",
        "glow-pulse": "glowPulse 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRev: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
