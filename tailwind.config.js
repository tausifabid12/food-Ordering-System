/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea3f30",

          secondary: "#26e134",

          accent: "#f5e0de",

          neutral: "#232131",

          "base-100": "#F5F5FA",

          info: "#7EBDF1",

          success: "#58E997",

          warning: "#975107",

          error: "#F76B69",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
