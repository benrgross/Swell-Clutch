import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function SaveSwellBtn() {
  const [state, dispatch] = useStoreContext();

  const saveSwell = async () => {
    const swell = {
      location: state.region3,
      wind: state.current_swell.wind,
      primarySwell: state.current_swell.primarySwell,
      secondarySwell: state.current_swell.secondarySwell,
      tide,
    };
  };

  return (
    <div>
      <button onClick={saveSwell} className="btn btn-success save-btn">
        Save Swell
      </button>
    </div>
  );
}

export default SaveSwellBtn;
