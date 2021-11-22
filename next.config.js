const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = {
  images: {
    domains: ["swell-clutch.s3.us-east-2.amazonaws.com"],
  },
};

require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      REDIRECT_URI: isDev
        ? "http://localhost:3000/api/callback/auth0"
        : "https://swell-clutch.vercel.app/api/callback/auth0",
      POST_LOGOUT_REDIRECT_URI: isDev
        ? "http://localhost:3000/secret"
        : "https://swell-clutch.vercel.app/secret",
      AUTH0_SCOPE: "openid profile",
      SERVER_URL: isDev ? "http://localhost:3000" : "https://swell-clutch.vercel.app/,
    },
  };
};

// module.exports = {
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Important: return the modified config
//     return config;
//   },
// };
