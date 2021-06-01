import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Github({
      clintId: process.env.GITHUB_ID,
      clientSectret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
