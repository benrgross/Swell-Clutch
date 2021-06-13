import axios from "axios";
const cheerio = require("cheerio");

export default async function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    try {
      const results = [];
      const { data } = await axios.get(
        `https://www.swellinfo.com/surf-forecast/${req.body.location}`
      );

      const $ = cheerio.load(data);

      $("div.graph-surf-data-point").each((i, element) => {
        const wind = $(element).find(".surf-data-wind-data").text();

        const primarySwell = $(element).find(".surf-data-swell1").text();

        //   .children(".swell-data-swell1")
        //   .children("swell1")
        //   .text();

        const secondarySwell = $(element).find(".surf-data-swell2").text();

        const tertiarySwell = $(element).find(".surf-data-swell3").text();

        const swell = { wind, primarySwell, secondarySwell, tertiarySwell };
        results.push(swell);
      });
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  }
}
