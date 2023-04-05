module.exports = {
    content: ["*.html"],
    plugins: [
        require('tailwind-scrollbar')
    ],
    theme: {
      extend: {
        fontFamily: {
          'quicksand': "'Quicksand', sans-serif",
          'inconsolata': "'Inconsolata', monospace"
        },
        colors: {
          'light-purple': "#be70fa",
          'dark-purple': "#221733",
          'black': "#0d0e0f",
          'white': "#fefeff"
        }
      }
    }
  }