/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bgDark: "#050505",
        cardBg: "rgba(255, 255, 255, 0.03)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".preserve-3d": { "transform-style": "preserve-3d" },
        ".backface-hidden": { "backface-visibility": "hidden" },
        ".perspective-1000": { perspective: "1000px" },
        ".perspective-2000": { perspective: "2000px" },
        ".rotate-x-90": { transform: "rotateX(90deg)" },
        ".rotate-x-110": { transform: "rotateX(110deg)" },
        ".-rotate-x-90": { transform: "rotateX(-90deg)" },
        ".rotate-y-180": { transform: "rotateY(180deg)" },
        ".-rotate-y-140": { transform: "rotateY(-140deg)" },
      };
      addUtilities(newUtilities);
    },
  ],
};
