/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: "#BE123C",
      },
      fontFamily: {
        "DM-Sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
