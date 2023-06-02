/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["--font-poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FFF",
        accent: "#6ED1BF",
        second: "#FFEBE4",
        lighttext: "#A0A0A0",
        darktext: "#404040",
      },
      letterSpacing: {
        def: "0.03em",
      },
      backgroundImage: {
        home: "url('/bg_home.png')",
        landing:
          "linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 90%), url('/bg_landing-page.png')",
        signin:
          "radial-gradient(circle at 32%, rgba(255,255,255,0)30%, rgb(255, 255, 255)45%),url('/bg_sign-in.png')",
        map: "url('/bg_cartography.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

