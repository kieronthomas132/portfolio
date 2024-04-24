/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      screens: {
        xxs: "200px",

        xs: "300px",

        sm: "480px",

        md: "900px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [nextui()],
};
