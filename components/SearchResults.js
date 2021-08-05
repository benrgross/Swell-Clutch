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

    // let userTime = new Date().getHours();
    let userTime = 13;
    console.log(userTime);

    for (let i = 0; i < swells.length; i++) {
      if (userTime === swells[i].timestamp) {
        console.log("test", swells[i]);
      }
    }

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
