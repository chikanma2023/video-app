/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");
// const scrollbar = require("tailwind-scrollbar");
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-gray-100": "#9CA3A2",
        "deep-gray-50": "#2C2C2C",
        "deep-grey-100": "#202020",
        "deep-grey-200": "#111111",
        "deep-yellow-100": "#FEAB00",
        "deep-red-100": "#F75368",
        pinkgradient: "rgb(247,114,91)",
      },
    },
  },
  // plugins: [scrollbar({ nocompatible: true })],
  plugins: [
    // scrollbar({ nocompatible: true }),
  ],
};
