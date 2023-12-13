/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shrikhand: ["Shrikhand", "serif"],
        "ubuntu-300": ["Ubuntu-300", "sans-serif"],
        "ubuntu-400": ["Ubuntu-400", "sans-serif"],
        "ubuntu-500": ["Ubuntu-500", "sans-serif"],
        "ubuntu-700": ["Ubuntu-700", "sans-serif"],
      },
      backgroundColor: {
        main: "#211830",
        terminal: "#433674",
      },
      textColor: {
        main: "#e60efe",
        terminal: "#22eae0",
        menu: "#9d0ffd",
      },
      boxShadowColor: {
        main: "#9d0ffd",
      },
      animation: {
        "typing-text": "typing 4s steps(55) forwards, blink 1s infinite",
      },
      keyframes: {
        typing: {
          to: { width: 0 },
        },

        blink: {
          "50%": { color: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
