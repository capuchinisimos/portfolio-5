/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
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
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
    borderRadius: {
        'custom': '50px 50px 0 50px',
    },
    rotate: {
     '6': '6deg',
        '-6': '-6deg',
      },

maxHeight: {
        '(accordion)': '20rem', // Exemple de valeur, ajustez selon vos besoins
      },
      backgroundColor: {
        'accordion-header': '#f0f0f0', // Utilisez la couleur désirée ici
      }
     

  },
  plugins: [],
};
