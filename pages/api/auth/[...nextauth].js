import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
      scope: "openid profile",
      redirectUri:
        process.env.NEXT_PUBLIC_REDIRECT_URI ||
        "http://localhost:3000/api/auth/callback",
      postLogoutRedirectUri:
        process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI ||
        "http://localhost:3000/",
      session: {
        // The secret used to encrypt the cookie.
        cookieSecret: process.env.COOKIE_SECRET,
        // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
        cookieLifetime: 60 * 60 * 8,
        // (Optional) Store the id_token in the session. Defaults to false.
        storeIdToken: false,
        // (Optional) Store the access_token in the session. Defaults to false.
        storeAccessToken: false,
        // (Optional) Store the refresh_token in the session. Defaults to false.
        storeRefreshToken: false,
      },
    }),
  ],

  database: {
    type: "mongodb",
    database: "swell-clutch",
    synchronize: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
