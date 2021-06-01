const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = {
  env: {
    mongodburl: "Your MongoDB connection String",
  },
};
