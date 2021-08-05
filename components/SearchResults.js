import React from "react";
import { server } from "../config";
import { useStoreContext } from "../utils/GlobalState";
import axios from "axios";
import { SimpleConsoleLogger, UsingJoinColumnIsNotAllowedError } from "typeorm";

function SearchResults() {
  const [state, dispatch] = useStoreContext();
  const getSwell = async (e) => {
    const id = {
      spotId: e.target.getAttribute("data-id"),
    };

    //make request for surfline
    const swell = await axios.post(`${server}/api/swells`, id);

    const tide = await axios.post(`${server}/api/tides`, id);

    // slice data for only today
    const tides = tide.data.data.tides.slice(0, 17).map(function (tides) {
      let date = new Date(tides.timestamp * 1000);
      tides.timestamp = date.getHours();
      return tides;
    });
    const swells = swell.data.data.wave.slice(0, 17).map(function (wave) {
      let date = new Date(wave.timestamp * 1000);
      wave.timestamp = date.getHours();
      return wave;
    });

    // map unix time to hours
    // let newSwells = swells.map(function (wave) {
    //   let date = new Date(wave.timestamp * 1000);
    //   wave.timestamp = date.getHours();
    //   return wave;

    console.log("swells", swells);
    console.log("tides", tides);

    let date = new Date().getTime();
    let timeStamp = Math.round(date / 1000 / 60 / 30) * 30 * 60 * 1000;

    // for (let i = 0; i < swells.data.wave.length; i++) {
    //   for (let j = i + 1; j < swells.data.wave.length; j++) {
    //     // console.log("time1", swells.data.wave[i].timestamp);
    //     // // console.log("timestamp", timeStamp);
    //     // // console.log("time2", swells.data.wave[j].timestamp);
    //     if (
    //       timeStamp >= swells.data.wave[i].timestamp &&
    //       timeStamp <= swells.data.wave[j].timestamp
    //     ) {
    //       console.log(
    //         "test",
    //         swells.data.wave[i].timestamp,
    //         swells.data.wave[j].timestamp,
    //         timeStamp
    //       );
    //     }
    //   }
    // }
    console.log(timeStamp);

    // match tide via time stamp
    // match swell via time stamp
    //send object to backend and store in db
  };
  return (
    <div>
      {state.searchSpots.length > 0 ? (
        state.searchSpots.map((spot) => {
          return (
            <div>
              <p className="spot-results">
                {" "}
                <span
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={(e) => getSwell(e)}
                  data-id={spot.spotId}
                >
                  {" "}
                  {spot.name}
                </span>
              </p>{" "}
            </div>
          );
        })
      ) : (
        <div>
          <br />
          <p>no results </p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
