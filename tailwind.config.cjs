/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        surface: {
          DEFAULT: "#020617",
          softer: "#020819",
          elevated: "#020617"
        },
        accent: {
          soft: "#4b5563",
          normal: "#60a5fa",
          strong: "#22c55e"
        },
        cyber: {
          bg: "#020617",
          panel: "#020617",
          border: "#1f2933",
          green: "#22c55e",
          cyan: "#22d3ee"
        }
      },
      boxShadow: {
        "soft-xl": "0 24px 70px rgba(15,23,42,0.9)",
        "cyber-glow": "0 0 32px rgba(34,197,94,0.65)"
      }
    }
  },
  plugins: []
};

