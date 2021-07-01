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

      $("div.graph-surf-data-point,  #fcst-days > li:nth-child(1)").each(
        (i, element) => {
          const wind = $(element).find(".surf-data-wind-data").text();

          const primarySwell = $(element).find(".surf-data-swell1").text();

          const secondarySwell = $(element).find(".surf-data-swell2").text();

          const lowTide = $(element)
            .find(".fcst-day-tide-low")
            .children(".fcst-tide-lowhigh-data")
            .text();
          console.log(lowTide);
          const am_pmLow = lowTide.split("ft");
          const am_low = am_pmLow[0];
          const pm_low = am_pmLow[1];

          const highTide = $(element)
            .find(".fcst-day-tide-high")
            .children(".fcst-tide-lowhigh-data")
            .text();
          const am_pmHigh = highTide.split("ft");
          const am_high = am_pmHigh[0];
          const pm_high = am_pmHigh[1];

          // const tertiarySwell = $(element).find(".surf-data-swell3").text();

          const swell = {
            swell_current: { wind, primarySwell, secondarySwell },
          };
          const tide = {
            tides_today: {
              low: {
                am_low,
                pm_low,
              },
              high: {
                am_high,
                pm_high,
              },
            },
          };

          if (swell.swell_current.wind != "") results.push(swell);
          else results.push(tide);
        }
      );

      res.json(results);
    } catch (error) {
      console.log(error);
    }
  }
}
