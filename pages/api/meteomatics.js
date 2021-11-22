// import OwnsRecord from "./middleware/OwnsRecord.js";
import axios from "axios";

export default async function handler(req, res) {
  const { lat, lon, timeStamp } = req.body;
  const username = process.env.METEO_USERNAME;
  const password = process.env.METEO_PASSWORD;
  console.log(req.body);
  if (req.method === "POST") {
    try {
      const { data } = await axios.get(
        `https://${username}:${password}@api.meteomatics.com/${timeStamp}/t_2m:C,max_individual_wave_height:m,mean_direction_total_swell:d,mean_wave_period:s,significant_wave_height:m/40.369,73.703/html`
      );

      console.log(data.data);
      res.statusCode = 200;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong" });
    }
  } else {
    console.log("ohman");
  }
}

// export default auth0.requireAuthentication(OwnsRecord(handler));
