import mongoose from "mongoose";

const Schema = mongoose.Schema;

const swellSchema = new Schema({
  swell: [
    {
      directions: String,
      period: Number,
      height: Number,
    },
  ],
  wind: {
    direction: String,
    mph: Number,
    knots: Number,
  },
  weather: {
    temperature_f: Number,
    water_temp_f: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

const Swell = mongoose.model("Swell", swellSchema);

export default Swell;
