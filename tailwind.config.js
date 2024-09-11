/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'Sans-serif']
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-primeui'),
  ],
}

