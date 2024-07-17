/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','country.html', './src/**/*.js', './node_modules/flowbite/**/*.js'],
  darkMode: 'selector',
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        'dark-mode-elements': 'hsl(209, 23%, 22%)',
        'dark-mode-background': 'hsl(207, 26%, 17%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-input': 'hsl(0, 0%, 52%)',
        'light-mode-background': 'hsl(0, 0%, 98%)',
      },
    },
  },
};
