/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "rubik": ["Rubik", "sans-serif"],
      },

      colors: {
        navbar: "#2a6f9a",
        background: "#181919",
        boxColor: "#1e293b",
        secondBoxColor: "#53565a",
        header: "#16abae",
        regularText: "#e4f4f5",
      },
    },
  },
  plugins: [],
};