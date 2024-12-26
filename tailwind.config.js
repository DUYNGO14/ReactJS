/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2.5s ease-in-out infinite',
        'fade-in-delay': 'fadeIn 3s ease-in-out infinite',
        'fade-in-slow': 'fadeIn 3s ease-in-out infinite',
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 2s infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
