module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
  plugins: [require('daisyui')],
};
