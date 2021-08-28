import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { data } = await axios.get(
        `https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=${req.body.spotId}`
      );

      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
