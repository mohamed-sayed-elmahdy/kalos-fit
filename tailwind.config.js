/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.1) -10px 0px 10px',
      },
      backdropBlur: {
        'custom-blur': '16px',
        'lowCustom-blur': '28px'
      },
      screens: {
        '895px': '895px',
      },
      colors: {
        'custom-green': '#30B43C',
      },
      translate: {
        '68': '68%',
        '71': '71%',
        '75': '75%',
      },
    },
  },
  plugins: [],
};
