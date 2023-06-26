/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"]
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)"
      },
      colors: {
        bodyColor: "#0a192f",
        textGreen: "#6affda",
        textLight: "ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)"
      },
    },
  },
  plugins: [],
};
