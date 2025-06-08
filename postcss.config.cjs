// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // tailwind plugin actualizado
    require('autoprefixer')          // autoprefixer para compatibilidad CSS
  ]
}