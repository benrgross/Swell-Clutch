import React, { useEffect } from "react";
import { TIDE } from "../utils/Actions";
import { useStoreContext } from "../utils/GlobalState";
import { useSession } from "next-auth/client";

function CurrentSwell() {
  const [state, dispatch] = useStoreContext();
  const [session, loading] = useSession();

  console.log(session);

  const { swell_current } = state.swell;

  const { tides } = state;

  const direction = (direction) => {
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

    return genDirrection;
  };

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

    return Math.round(wind.speed) + "kts" + " " + genDirrection;
  };

  const saveSwell = async () => {
    console.log("click");
    // algo get data object for storage, send to pisma to for save
  };

  return (
    <div className="card">
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
              <span>{swell.height.toFixed(1)}ft </span>{" "}
              <span>{direction(swell.direction)}</span>
              <span>@{swell.period}s</span>
            </p>
          );
        })}
        <p>
          <span>wind: {getWind(state.currentWind)}</span>
        </p>
        <a onClick={saveSwell()} href="#" className="btn btn-primary">
          Save Swell
        </a>
      </div>
    </div>
  );
}

export default CurrentSwell;
