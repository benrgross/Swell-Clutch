import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function CurrentSwell() {
  const [state, dispatch] = useStoreContext();

  const {
    current_swell: [{ swell_current }, { tides_today }],
  } = state;

  console.log("state", swell_current, tides_today);

  return (
    <div>
      <p>{swell_current.wind}</p>
    </div>
  );
}

export default CurrentSwell;
