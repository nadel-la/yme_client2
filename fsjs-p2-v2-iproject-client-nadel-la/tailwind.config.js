/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        overlay: "#03a9fa",
        textColor: "#111",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {
      letterSpacing: ["hover", "focus"],
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [require("tailwindcss-blend-mode")(), require("flowbite/plugin")],
};
