const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*.vue',
    'content/**/**.md',
    'layouts/**/*.vue',
    'components/**/**.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
      fontFamily: {
        'title': [`Zen Maru Gothic`, 'system-ui', `Arial`, `Helvetica`, `sans-serif`, 'sans-serif', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas'],
        'main': [`Noto Sans TC`, 'system-ui', `Arial`, `Helvetica`, `sans-serif`, 'sans-serif', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas'],
      }
    },
    
  },
  plugins: [
  ]
}
