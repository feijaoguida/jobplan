/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        
        'azul-00': '#00BFA6',
        'azul-01': '#A1F2E6',
        'azul-02': '#7FE4D7',
        'azul-03': '#61D3C4',
        'azul-04': '#45C7B6',
        'azul-05': '#2FC0AD',
        'azul-06': '#1DC1AB',
        'azul-07': '#00C0A7',
        'azul-08': '#009783',
        'azul-09': '#00806F',
        'azul-10': '#00675A',
        'azul-11': '#004C42',
        'azul-12': '#003B33',
        'azul-13': '#00201C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'Montserrat': 'Montserrat'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
