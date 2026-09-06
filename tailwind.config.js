/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#fcfaf6',
          muted: '#f4f0e6',
          card: '#ffffff',
          dark: '#141311',
          darkcard: '#1e1c18'
        },
        ink: {
          DEFAULT: '#1d1b16',
          muted: '#666053',
          light: '#9e9789',
          border: '#1d1b16'
        },
        posthog: {
          yellow: '#ffd000',
          amber: '#f5a623',
          cream: '#fcfaf6',
          dark: '#1d1b16',
          lime: '#38a169',
          red: '#e53e3e',
          badge: '#fff3b0'
        }
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #1d1b16',
        'brutal': '3px 3px 0px #1d1b16',
        'brutal-lg': '5px 5px 0px #1d1b16',
        'brutal-xl': '8px 8px 0px #1d1b16',
        'brutal-yellow': '4px 4px 0px #ffd000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [],
}
