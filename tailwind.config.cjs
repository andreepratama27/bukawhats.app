/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'skew': '4px 4px rgb(31,41,55)'
      }
    },
  },
  plugins: [],
}
