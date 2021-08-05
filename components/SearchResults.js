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
    // map unix time to hours
    const tides = tide.data.data.tides.slice(0, 25).map(function (tides) {
      let date = new Date(tides.timestamp * 1000);
      tides.timestamp = date.getHours();
      return tides;
    });
    const swells = swell.data.data.wave.slice(0, 17).map(function (wave) {
      let date = new Date(wave.timestamp * 1000);
      wave.timestamp = date.getHours();
      return wave;
    });

    console.log("swells", swells);
    console.log("tides", tides);

    // get the users time
    let userTime = new Date().getHours();
    // let userTime = 13;
    console.log(userTime);

    let swellObject = {
      swells: [],
      surf: {},
      currentTide: {
        height: 0,
        status: "null",
      },
    };

    for (let i = 0; i < swells.length; i++) {
      if (userTime === swells[i].timestamp) {
        swellObject.swells = swells[i].swells.filter(
          (swell) => swell.height !== 0
        );
      } else if (userTime > 16) {
        swellObject.swells = swells[16].swells.filter(
          (swell) => swell.height !== 0
        );

        swellObject.surf = swells[16].surf;
      } else if (userTime < 3) {
        swellObject.swells = swells[0].swells.filter(
          (swell) => swell.height !== 0
        );

        swellObject.surf = swells[0].surf;
      }

      swellObject.swells.sort((a, b) => b.height - a.height);
    }

    let { currentTide } = swellObject;

    // FIX TIDE BUG TO REFLECT HIGH OR LOW TIDE WHEN TIMESTAMPS MATCH
    for (let i = 0; i < tides.length; i++) {
      if (userTime === tides[i].timestamp) {
        currentTide.height = tides[i].height;
      } else if (userTime < 3) {
        currentTide.height = tides[0].height;
      } else if (userTime > 3) {
        currentTide.height = tides[23].height;
      }

      if (
        tides[i].timestamp != 23 &&
        tides[i].type == "NORMAL" &&
        tides[i].height > tides[i + 1]
      ) {
        currentTide.status = "droping";
      }
      if (
        tides[i].timestamp != 23 &&
        tides[i].type == "NORMAL" &&
        tides[i].height < tides[i + 1]
      ) {
        currentTide.status = "rising";
      }
      if (
        tides[i].timestamp === 17 &&
        tides[i].type == "NORMAL" &&
        tides[i].height < tides[i - 1].height
      ) {
        currentTide.status = "dropping";
      }
      if (
        tides[i].timestamp === 17 &&
        tides[i].type == "NORMAL" &&
        tides[i].height > tides[i - 1].height
      ) {
        currentTide.status = "rising";
      } else if (tides[i].type === "HIGH") currentTide.status === "high";
      else if (tides[i].type === "LOW") currentTide.status === "low";
    }

    console.log(swellObject);

    // Add wind to swell object, then it is ready to send to backend
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
