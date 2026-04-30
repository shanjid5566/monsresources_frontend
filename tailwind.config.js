/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F2EFE9',
          100: '#FBF9F3',
          dark: '#1A1B1C',
        },
        accent: {
          green: '#2B6A0A',
        },
      },
    },
  },
  plugins: [],
};
