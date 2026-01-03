/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff9d',
        secondary: '#00d4ff',
        accent: '#ff006e',
        dark: '#0a0a0a',
        'dark-lighter': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
