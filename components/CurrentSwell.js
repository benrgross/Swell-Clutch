import React, { useEffect, useRef } from "react";
import { TIDE } from "../utils/Actions";
import { useStoreContext } from "../utils/GlobalState";
import { session, useSession } from "next-auth/client";
import SaveSwellBtn from "./SaveSwellBtn";

function CurrentSwell() {
  const [session, loading] = useSession();
  const [state, dispatch] = useStoreContext();
  const conditionRef = useRef();
  const noteRef = useRef();
  const { swell_current } = state.swell;

  const { tides } = state;
  const swells = [];
  const saveSwell = () => {};
  const direction = (swell) => {
    console.log(Math.round(swell.direction));
    let x = Number(Math.round(swell.direction) / 22.5 + 0.5);
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

    let swellString =
      swell.height.toFixed(1) +
      "ft" +
      " " +
      genDirrection +
      " " +
      "@" +
      " " +
      swell.period +
      "s";

    swells.push(swellString);
    console.log(swells);

    return swellString;
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

  return (
    <div className="card">
      <h5 className="card-header">Surf Report</h5>
      <div className="card-body">
        <form>
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
                <span>{direction(swell)}</span>
              </p>
            );
          })}
          <p>
            <span>wind: {getWind(state.currentWind)}</span>
          </p>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Conditions</option>
            <option value="Poor">Poor</option>
            <option value="Fair">Fair</option>
            <option value="Good">Good</option>
            <option value="Epic">Epic</option>
          </select>
          <a className="btn btn-primary" onClick={saveSwell()}>
            Save Swell
          </a>
        </form>
      </div>
    </div>
  );
}

export default CurrentSwell;
