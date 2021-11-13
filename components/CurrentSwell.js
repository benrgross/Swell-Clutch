import React, { useEffect } from "react";
import { server } from "../config";
import { useStoreContext } from "../utils/GlobalState";
import { useSession } from "next-auth/client";
import axios from "axios";
import styles from "../styles/currentSwell.module.css";
import { UsingJoinColumnIsNotAllowedError } from "typeorm";
import ImageUploader from "./ImageUploader";

function CurrentSwell() {
  // NOTES: add function to input notes and pictures.

  const [state, dispatch] = useStoreContext();
  const [session, loading] = useSession();

  console.log(session);

  const swellArr = [];
  console.log("swellArr", swellArr);
  let windDir;

  const { swell_current } = state.swell;

  const { tides } = state;

  const direction = (direction, height, period) => {
    console.log(Math.round(direction));
    let x = Number(Math.round(direction) / 22.5 + 0.5);
    console.log(x);
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    let genDirrection = arr[Math.round(x % 16)];

    swellArr.push(
      height + "ft," + " " + direction + "deg" + "," + " " + "@" + period + "s"
    );

    return genDirrection;
  };

  // console.log(swellArr);

  const surfHeight = (min, max) => {
    if (max === min) {
      return Math.round(min);
    } else return min.toFixed(1) + "-" + max.toFixed(1);
  };

  const getWind = (wind) => {
    let x = Math.round(wind.direction) / 22.5 + 0.5;
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];

    let genDirrection = arr[Math.round(x % 16)];
    windDir = Math.round(wind.speed) + "kts" + " " + genDirrection;
    return windDir;
  };

  const saveSwell = async () => {
    let swellBody = {
      spotName: state.spotName,
      dateStr: new Date().toString(),
      spotId: state.spotId,
      wind: windDir,
      tide: state.currentTide.height + "," + " " + state.currentTide.status,
      report: `${state.surf.min} - ${state.surf.max}`,
    };
    swellArr.map((swell, i) => {
      swellBody["swell" + (i + 1)] = swell;
    });

    console.log("swellBody", swellBody);

    const saveSwell = await axios.post(`${server}/api/saveSwell`, swellBody);
    console.log("saveSwell");

    // algo get data object for storage, send to pisma to for save
  };

  return (
    <div className="card ">
      <h5 className="card-header">Surf Report</h5>
      <div className="card-body">
        <h5 className="card-title">{state.spotName}</h5>
        <p>
          <span>
            surf report: {surfHeight(state.surf.min, state.surf.max)}ft
          </span>
          <span></span>
        </p>
        {state.swells.map((swell, index) => {
          return (
            <p key={index + 1} className="card-text">
              {" "}
              <span>swell {(index += 1)}: </span>{" "}
              <span>{swell.height.toFixed(1)}ft </span>
              <span>
                {direction(swell.direction, swell.height, swell.period)}
              </span>
              <span> @{swell.period}s</span>
            </p>
          );
        })}
        <p>
          <span>wind: {getWind(state.currentWind)}</span>
        </p>
        <p>
          <span>
            tide: {state.currentTide.height}ft and {state.currentTide.status}
          </span>
        </p>
        <ImageUploader />
        <button
          onClick={() => saveSwell()}
          href="#"
          className="btn btn-primary"
        >
          Save Swell
        </button>
      </div>
    </div>
  );
}

export default CurrentSwell;
