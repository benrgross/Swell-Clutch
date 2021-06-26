import axios from "axios";
const cheerio = require("cheerio");

export default async function handler(req, res) {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    try {
      const results = [];
      const { data } = await axios.get(
        `https://www.surfline.com/surf-report/lincoln-blvd-/5842041f4e65fad6a7708850`
      );

      const $ = cheerio.load(data);

      console.log("div", $("div.quiver-conditions-stats__title").text());

      $(
        "tr.quiver-spot-forecast-summary__stat-container--swells,  .quiver-swell-measurements--1"
      ).each((i, element) => {
        const primarySwell = $(element)
          .find(".quiver-swell-measurements--1")
          .html();

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
