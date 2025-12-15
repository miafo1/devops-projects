/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5200", // Vibrant Orange
        secondary: "#1a1a1a", // Dark Gray
        accent: "#f5f5f5", // Light Gray
      },
      borderRadius: {
        'xl': '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
