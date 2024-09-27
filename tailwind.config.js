/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titan: ["Titan One"],
      },
      colors: {
        arena: "#eed6a0",
        "marron-500": "#c29952",
        "marron-900": "#593e1f",
      },
    },
  },
  plugins: [],
};
