/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      code: ["Courier New"],
      button: ["cursive"],
      content: ["Arial", "sans-serif"],
      header: ["Times New Roman", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
  /* prefix: 'h-', */
};
