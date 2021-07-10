import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function SearchResults() {
  const [state, dispatch] = useStoreContext();
  const getSwell = (e) => {
    const spotId = e.target.getAttribute("data-id");
    console.log(spotId);
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
