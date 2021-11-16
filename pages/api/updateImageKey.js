import prisma from "../../lib/prisma";
import { getSession } from "next-auth/client";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    try {
      const session = await getSession({ req });
      const result = await prisma.swell.update({
        where: {
          email: session?.user?.email,
        },
        data: {
          imageKey: req.body,
        },
      });
      res.json(result);
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
}
