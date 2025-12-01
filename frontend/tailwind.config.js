/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cosmic: {
          deep: '#0f0f23',
          purple: '#6366f1',
          cyan: '#22d3ee',
          pink: '#f472b6',
        }
      }
    },
  },
  plugins: [],
}