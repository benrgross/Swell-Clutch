import OwnsRecord from "./middleware/OwnsRecord.js";
import axios from "axios";

const handler = async (req, res) => {
  const key = process.env.GOOGLE_KEY;

  try {
    const location = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`
    );
    res.statusCode = 200;
    res.json(location);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};

export default auth0.requireAuthentication(OwnsRecord(handler));
