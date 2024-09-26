/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Nu uita să păstrezi și autoprefixer dacă ai nevoie de el
  },
};

export default config;
