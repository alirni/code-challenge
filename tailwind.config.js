/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      display: ['Consolas', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#fb923c',
          dark: '#f97316',
        },
        secondary: {
          default: '#3b82f6',
          dark: '#2563eb',
        },
        important: {
          default: '#16a34a',
          dark: '#15803d',
        },
      },
    },
  },
  plugins: [],
};
