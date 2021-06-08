import OwnsRecord from "./middleware/OwnsRecord.js";
import axios from "axios";

const handler = async (req, res) => {
  const { lon, lng } = req.body;

  try {
    const swell = await axios.post;
    res.statusCode = 200;
    res.json(swell);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};

export default auth0.requireAuthentication(OwnsRecord(handler));
