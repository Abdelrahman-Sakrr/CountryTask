/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "hsl(209, 23%, 22%)",
        secondryBlue: "hsl(207, 26%, 17%)",
        primaryGray: "hsl(200, 15%, 8%)",
        secondaryGray: "hsl(0, 0%, 50%)",
        lightGray: "hsl(0, 0%, 99%)",
        white: "hsl(0, 100%, 100%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        body: "14px",
        detail: "16px",
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        bold: 800,
      },
    },
  },
  plugins: [],
};
