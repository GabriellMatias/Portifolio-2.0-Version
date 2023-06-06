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
        'blue-200': '#1E90FF',
        'blue-900': '#0c0919',
        'green-500': '#7fff00',
      },
      keyframes: {
        slideBottom: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(15px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'ease-in': 'slideBottom 2s ease-in-out infinite alternate 0.5s both',
        'ease-in-fast':
          'slideBottom 0.7s ease-in-out infinite alternate 0.1s both',
      },
      screens: {
        mobile: { max: '1024px' },
        tablet: { max: '1279px', min: '1024px' },
      },
    },
  },
  plugins: [],
}
