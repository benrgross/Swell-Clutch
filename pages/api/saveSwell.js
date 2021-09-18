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
      const result = await prisma.swell.create({
        data: {
          spotId: req.body.spotId,
          spotName: req.body.spotName,
          swell1: req.body.swell1 || " ",
          swell2: req.body.swell2 || " ",
          swell3: req.body.swell3 || " ",
          swell4: req.body.swell4 || " ",
          swell5: req.body.swell5 || " ",
          swell6: req.body.swell6 || " ",
          wind: req.body.wind,
          tide: req.body.tide,
          notes: req.body.notes || " ",
          account: { connect: { email: session?.user?.email } },
        },
      });
      res.json(result);
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  }
}
