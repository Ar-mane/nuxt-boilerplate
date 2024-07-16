/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0 0 10px 2px rgb(203 203 203 / 25%)',
        'dark-lg': '0 10px 15px -3px rgb(0 0 0 / 50%), 0 4px 6px -2px rgb(0 0 0 / 5%)'
      },
      colors: {
        black: '#202020',
        primary: '#27797d',
        'primary-light': '#388d8e',
        'primary-lightest': '#e9f2f2'
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px'
      },
      fontSize: {
        sm: '14px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
