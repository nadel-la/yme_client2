/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      letterSpacing: ['hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
    }
  },
  plugins: [require('tailwindcss-blend-mode')(), require('flowbite/plugin')]
}
