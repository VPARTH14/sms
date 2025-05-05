// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(86, 120, 233, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6, p, span, a, li, td, th': {
          textTransform: 'capitalize',
        },
      });
    }),
  ],
}
