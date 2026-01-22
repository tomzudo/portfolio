/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        portfolio: {
          background: "#ecece0ff",
          surface: "#203d4f",
          accent: "#7a8484",
          textLight: "#FFFFFF",
          textDark: "#353535",
          grayish: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
};
