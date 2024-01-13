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
        montserrat: "Montserrat",
        inter: "Inter",
        "tech-mono": "Share Tech Mono",
        "bagel-fat-one": "Bagel Fat One",
      },
      screens: {
        xs: "300px",

        sm: "440px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            main_background: "#161513",
            navbar_background: "#1E1E1E"
          }
        },
      },
    }),
  ],
};
