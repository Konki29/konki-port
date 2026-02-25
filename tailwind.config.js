/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Crimson Pro'", "Georgia", "'Times New Roman'", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "'Cascadia Code'", "monospace"],
      },
    },
  },
  plugins: [],
}