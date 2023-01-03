/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#ea3f30",
          primary: '#84cc16',

          secondary: '#26e134',

          accent: '#f5e0de',

          neutral: '#232131',

          'base-100': '#f1f1f1',

          info: '#7EBDF1',

          success: '#58E997',

          warning: '#975107',

          error: '#F76B69',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
});
