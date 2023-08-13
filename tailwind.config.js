/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffffff',
          200: '#eff6fe',
          300: '#ecedff',
          400: '#ccd6e4',
          500: '#ced0f4',
          600: '#95b1fc',
          700: '#788ed2',
          800: '#909dbb',
          900: '#9099a8',
        },
      },
    },
  },
  plugins: [],
};
