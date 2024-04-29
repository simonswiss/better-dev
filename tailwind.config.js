const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./{app,components}/**/*.{ts,js,tsx,jsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '96rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
