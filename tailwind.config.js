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
      colors: {
        card_background: "#101010",
        border: "#191919",
        gray_text: "#999999",
        icon: "#A291FD",
        active_nav_button_bg: "#A290FC",
        inactive_nav_button_bg: "#191919",
        nav_border: "#1F1F1F",
        active_button_bg: "#1F1F1F",
        list_bg: "#191919",
        list_border: "#212121",
        icon_bg: "#282828",
        inactive_icon: "#9A9A9A",
        hovered_icon: "#DADADA",
        tooltip_bg: "#191919",
        list_header: "#CCCCCC",
        list_content: "#757575",
        contact_bg: "#141414",
        resume_hover_bg: "#212121",
        resume_bg: "#1F1F1F",
        creds_bg: "#191919",
        creds_border: "#212121",
        projects_border: "#212121",
        profile_name: "#E6E6E6",

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
