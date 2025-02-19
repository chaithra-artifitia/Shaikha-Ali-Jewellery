/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        marquee: "marquee 95s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(60%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        yellow: "#C09B41",
        mid_yellow: "#CDA84D",
        dark_green: "#0E2529",
        red: "#CB212C",
        light_red: "#DB5C5B",
        dark_sky: "#336067",
        dark: "#0A1C1F",
        blue:"#1982CF",
        light_blue:"#3DA1EA"
      },
    },
  },
  plugins: [],
};
