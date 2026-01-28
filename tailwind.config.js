/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors
        dark: {
          bg: '#0f172a', // slate-900
          primary: '#3b82f6', // blue-500
          text: '#e2e8f0', // gray-200
        },
        // Light Mode Colors
        light: {
          bg: '#fafaf9', // stone-50
          primary: '#7c3aed', // violet-600
          text: '#1f2937', // gray-800
        }
      },
      borderRadius: {
        DEFAULT: '0.75rem', // rounded-xl
        'lg': '0.5rem',
        'xl': '1rem', // rounded-2xl
      },
      borderWidth: {
        DEFAULT: '2px', // Enforce 2px border width
        '2': '2px',
      }
    },
  },
  plugins: [],
}
