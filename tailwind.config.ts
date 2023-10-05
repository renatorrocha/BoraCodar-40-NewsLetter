import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#09090A',
        'gray-light': '#C4C4CC',
        'gradient-purple-start': '#996DFF',
        'gradient-purple-end': '#C7AFFF'
      }
    }
  },
  plugins: []
}
export default config
