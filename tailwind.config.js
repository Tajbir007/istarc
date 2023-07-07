/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      custom: "rgba(149, 157, 165, 0.1) 0px 8px 24px",
      custom2: "rgba(149, 157, 165, 0.3) 0px 10px 30px",
    },
  },
  plugins: [],
};
