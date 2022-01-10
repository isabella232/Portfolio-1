// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: [
    // A plugin that does not require configuration:
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
  ],
};
