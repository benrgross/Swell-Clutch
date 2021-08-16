import axios from "axios";
const cheerio = require("cheerio");

export default async function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    try {
      const results = [];
      const { data } = await axios.get(
        `https://www.surfline.com/search/${req.body.spot}`
      );

      const $ = cheerio.load(data);

      $("#surf-spots > div > div").each((i, element) => {
        let href = $(element).children("a").attr("href");
        let spotId = href.split("/")[5];
        let name = $(element).find(".result__name").text();

        const spot = {
          name: name,
          spotId: spotId,
          href: href,
        };
        results.push(spot);
      });
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  }
}
