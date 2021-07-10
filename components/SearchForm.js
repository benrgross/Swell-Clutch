import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";

function SearchForm() {
  const spotRef = useRef();

  const searchSpot = (e) => {
    e.preventDefault();
    console.log(spotRef.current.value);
  };
  return (
    <div>
      {" "}
      <form>
        <div className="mb-3">
          <label for="exampleSpot" className="form-label">
            Surf Spot
          </label>
          <input
            ref={spotRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="searchHelp" className="form-text">
            Search for your surf spot by name.
          </div>
        </div>
        <button
          onClick={(e) => searchSpot(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
