import React from "react";
import { SELECTED_SPOT } from "../utils/Actions";
import { StoreProvider, useStoreContext } from "../utils/GlobalState";
import spotStyles from "../styles/savedSpot.module.css";

function DisplaySpot({ surfSpots }) {
  const [state, dispatch] = useStoreContext();

  const selectSpot = (spot) => {
    console.log(spot);

    dispatch({
      type: SELECTED_SPOT,
      spot: spot,
    });
  };
  console.log(surfSpots);
  return (
    <div>
      <ul>
        {surfSpots.map((spot, i) => (
          <li
            className={spotStyles.spot}
            key={i}
            onClick={() => selectSpot(spot)}
          >
            {spot}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplaySpot;
