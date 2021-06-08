import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import axios from "axios";

function GetSwellBtn() {
  const [state, dispatch] = useStoreContext();

  const getSwell = async () => {
    let date = new Date();
    let timeStamp = date.toISOString();

    const location = {
      lat: state.location.lat,
      lon: state.location.lon,
      timeStamp: timeStamp,
    };
    const { data } = await axios.post("/api/meteomatics", location);
    const swell = await data.json();

    return {
      swell: swell,
    };
  };
  return (
    <div>
      <button onClick={getSwell} className="btn btn-success">
        get swell
      </button>
    </div>
  );
}

export default GetSwellBtn;
