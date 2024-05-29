
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
    '../../libs/core/src/**/*.{jsx,tsx}'
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
};
