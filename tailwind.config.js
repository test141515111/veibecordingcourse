/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        secondary: "#00C3FF",
        accent: "#FF44E0",
        "neutral-900": "#1A1A1A",
        "neutral-700": "#444444",
        bg: "#FFFFFF",
        cyber: {
          dark: "#0A1017",
          green: "#00E676",
          glow: "#00FF9C"
        }
      },
      fontFamily: {
        sans: ["Noto Sans JP", "Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      margin: {
        section: "120px",
      }
    },
  },
  plugins: [],
}; 