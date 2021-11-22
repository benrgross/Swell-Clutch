import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { server } from "../../../config";

import { PrismaClient } from "@prisma/client";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
      scope: "openid profile",
      redirectUri: `${server}/api/auth/callback/auth0`,
      postLogoutRedirectUri: server,
      session: {
        // The secret used to encrypt the cookie.
        cookieSecret: process.env.COOKIE_SECRET,
        // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
        cookieLifetime: 0,
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
    type: "postgres",
    database: "surfclutch",
    synchronize: true,
  },

  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    async signOut(message) {
      /* on signout */
    },
    async createUser(message) {
      /* user created */
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
    },
    async session(message) {
      /* session is active */
    },
    async error(message) {
      /* error in authentication flow */
    },
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
