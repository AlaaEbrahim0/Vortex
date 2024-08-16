module.exports = {
  content: [
    './Views/**/*.cshtml',
    './wwwroot/**/*.html',
    './wwwroot/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: 'white',
        accent: 'gray',
        neutral: 'skyblue',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#your-primary-color",
          "secondary": "#your-secondary-color",
          "accent": "#your-accent-color",
          "neutral": "#your-neutral-color",
          "base-100": "#your-background-color",
        },
      },
    ],
  }
}
