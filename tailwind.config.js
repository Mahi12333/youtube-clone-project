/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing:{
        '14':'3.5rem'
      },
      scale:{
        '101':'1.01'
      }
    },
  },
  corePlugins: {
    preflight: false, // Disable preflight to prevent conflicts
  },
  plugins: [],
}

