import React, { useRef } from "react";
import { server } from "../config";
import { useStoreContext } from "../utils/GlobalState";
import axios from "axios";
import { SEARCHSPOT } from "../utils/Actions";

function SearchForm() {
  const [state, dispatch] = useStoreContext();
  const spotRef = useRef();

  const searchSpot = async (e) => {
    e.preventDefault();
    const search = {
      spot: spotRef.current.value,
    };

    const { data } = await axios.post(`${server}/api/searchSpot`, search);

    dispatch({
      type: SEARCHSPOT,
      spots: data,
    });

    console.log(data);
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
