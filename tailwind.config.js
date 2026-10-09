/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#f6f6f3',
          dark: '#0e0e0d',
          subtle: '#f0f0eb',
          'subtle-dark': '#1a1a18',
        },
        ink: {
          DEFAULT: '#161616',
          soft: '#3d3d39',
          mute: '#76766f',
          light: '#f4f4f0',
        },
        line: {
          DEFAULT: '#dcdcd5',
          soft: '#e5e5df',
          dark: '#2c2c29',
        },
        sovereign: {
          green: '#34c759',
          'green-dk': '#1f8f3d',
          'green-lt': '#eaf9ed',
          amber: '#f59e0b',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'card': '0 12px 32px -12px rgba(0, 0, 0, 0.18)',
        'float': '0 20px 48px -16px rgba(0, 0, 0, 0.22)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
