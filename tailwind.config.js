/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}",'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      fontFamily: {
        breeserif: ['Bree Serif', 'serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['22px', '28px'],
        xl: ['20px', '28px'],
      },
      colors: {
        'custom-black': '#2c3e50',
        'mild-teal': '#0CABA8',
        'black' : '#1a1a1a',
        'grey':'#262626',
        'mild-sandalone': '#b7ada1',
        'dark-blue': '#06142e',
      },
    },
  },
  plugins: [
    require('daisyui','preline/plugin'),
  ],
}

