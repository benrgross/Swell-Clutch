import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function SearchResults() {
  const [state, dispatch] = useStoreContext();
  return (
    <div>
      {state.searchSpots.length > 0 ? (
        state.searchSpots.map((spot) => {
          return (
            <div>
              <p data-id={spot.spotId}>{spot.name}</p>{" "}
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
