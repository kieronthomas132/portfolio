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
        roboto: "Roboto, sans-serif",
        montserrat: "Montserrat, sans-serif",
        inter: "Inter, sans-serif",
      },
      boxShadow: {
        'small_nav': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      borderColor: {
        'small_nav': '#3a383880',
        'modal': '#171717e0'
      },
      backgroundColor: {
        "main-bg": "#0D0D0D",
        "small_nav": "rgba(23,22,22,0.55)",
        "modal": "#171717c4"
      },
      screens: {
        xxs: "270px",

        xs: "380px",

        sm: "640px",
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
  plugins: [nextui()],
};
